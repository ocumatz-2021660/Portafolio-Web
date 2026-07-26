import TracedFrame from "./TracedFrame"
import { INSET_SURFACE, SUNKEN } from "../styles/neumorphism"

/* Contenedor de información hundido: superficie interior más clara que el
   fondo, relieve hacia dentro y contorno suave encima. */
export default function Panel({
  children,
  className = "",
  radius = 18,
  style,
  ...rest
}) {
  return (
    <div
      className={`relative border-chase ${className}`}
      style={{
        backgroundColor: INSET_SURFACE,
        boxShadow: SUNKEN,
        borderRadius: radius,
        ...style,
      }}
      {...rest}
    >
      <TracedFrame radius={radius} />
      {children}
    </div>
  )
}
