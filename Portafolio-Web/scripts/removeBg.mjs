import { Jimp } from "jimp"

const SRC = "src/assets/cumatz.png"
const OUT = "src/assets/cumatz-cut.png"

const img = await Jimp.read(SRC)
const { width: w, height: h, data } = img.bitmap

const idx = (x, y) => (y * w + x) * 4
const isWhite = (i, t) => data[i] > t && data[i + 1] > t && data[i + 2] > t

// 1) Flood fill from every border pixel; near-white connected region = background.
const T = 232
const visited = new Uint8Array(w * h)
const stack = []
const push = (x, y) => {
  if (x < 0 || y < 0 || x >= w || y >= h) return
  const p = y * w + x
  if (visited[p]) return
  if (!isWhite(p * 4, T)) return
  visited[p] = 1
  stack.push(x, y)
}
for (let x = 0; x < w; x++) {
  push(x, 0)
  push(x, h - 1)
}
for (let y = 0; y < h; y++) {
  push(0, y)
  push(w - 1, y)
}
while (stack.length) {
  const y = stack.pop()
  const x = stack.pop()
  data[idx(x, y) + 3] = 0 // transparent
  push(x + 1, y)
  push(x - 1, y)
  push(x, y + 1)
  push(x, y - 1)
}

// 2) Feather: near-white opaque pixels touching a transparent one get partial alpha
//    scaled by how white they are — removes the hard jaggy fringe.
const FT = 208
const orig = Uint8ClampedArray.from(data)
const wasTransparent = (x, y) => {
  if (x < 0 || y < 0 || x >= w || y >= h) return false
  return orig[idx(x, y) + 3] === 0
}
for (let y = 0; y < h; y++) {
  for (let x = 0; x < w; x++) {
    const i = idx(x, y)
    if (orig[i + 3] === 0) continue
    const nearEdge =
      wasTransparent(x + 1, y) ||
      wasTransparent(x - 1, y) ||
      wasTransparent(x, y + 1) ||
      wasTransparent(x, y - 1)
    if (!nearEdge) continue
    const lum = (orig[i] + orig[i + 1] + orig[i + 2]) / 3
    if (lum > FT) {
      // ramp: 208 -> full alpha, 250 -> nearly gone
      const a = Math.max(0, Math.min(255, Math.round(((250 - lum) / (250 - FT)) * 255)))
      data[i + 3] = a
    }
  }
}

await img.write(OUT)
console.log(`Done -> ${OUT} (${w}x${h})`)
