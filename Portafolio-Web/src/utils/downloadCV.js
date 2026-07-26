import personal from "../data/personal"

export default async function downloadCV(e) {
  e.preventDefault()
  try {
    const res = await fetch(personal.cvUrl)
    if (!res.ok) throw new Error("No se pudo descargar el archivo")
    const blob = await res.blob()
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = personal.cvFileName
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  } catch (err) {
    window.open(personal.cvUrl, "_blank")
  }
}
