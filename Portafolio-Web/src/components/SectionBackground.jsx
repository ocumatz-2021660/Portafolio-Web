const POSITIONS = {
  "top-left": "28% 28%",
  "top-right": "72% 28%",
  "center-top": "50% 30%",
  "center-left": "28% 50%",
  center: "50% 50%",
  "center-right": "72% 50%",
  "bottom-left": "28% 72%",
  "bottom-right": "72% 72%",
  "bottom-center": "50% 70%",
}

export default function SectionBackground({
  position = "center",
  color = "rgba(192,56,10,0.10)",
  size = "55% 55%",
}) {
  const origin = POSITIONS[position] || POSITIONS.center

  return (
    <div
      className="absolute inset-0 -z-10 pointer-events-none"
      style={{
        background: `radial-gradient(ellipse ${size} at ${origin}, ${color}, transparent 70%)`,
      }}
    />
  )
}
