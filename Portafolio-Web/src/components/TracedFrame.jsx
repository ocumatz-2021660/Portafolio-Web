/* Contorno suave sobre el panel: una línea gris oscuro siguiendo el borde y
   dos escuadras marcando esquinas opuestas. Sin movimiento.

   Todo son cajas con borde en vez de un SVG medido: al no haber trazo animado
   ya no hace falta conocer el perímetro, así que tampoco hace falta medir. */

const LINE = "#3a3330" // línea base, gris oscuro
const BRACKET = "#4d4642" // escuadras de esquina, un punto más claras
const ARM = 34 // largo del brazo de cada escuadra

export default function TracedFrame({ radius = 18, arm = ARM }) {
  const corner = radius + arm

  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      <div
        className="absolute inset-0"
        style={{ border: `1.5px solid ${LINE}`, borderRadius: radius }}
      />

      <div
        className="absolute top-0 left-0"
        style={{
          width: corner,
          height: corner,
          borderTop: `2.5px solid ${BRACKET}`,
          borderLeft: `2.5px solid ${BRACKET}`,
          borderTopLeftRadius: radius,
        }}
      />

      <div
        className="absolute bottom-0 right-0"
        style={{
          width: corner,
          height: corner,
          borderBottom: `2.5px solid ${BRACKET}`,
          borderRight: `2.5px solid ${BRACKET}`,
          borderBottomRightRadius: radius,
        }}
      />
    </div>
  )
}
