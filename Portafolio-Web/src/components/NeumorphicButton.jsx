import { motion } from "framer-motion"

export default function NeumorphicButton({
  children,
  href = "#",
  variant = "primary",
  onClick,
  className = "",
  ...props
}) {
  const baseClasses =
    "px-6 py-3 rounded-full font-medium transition-all text-center inline-block"

  const primaryClasses =
    "bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-400 text-stone-950 hover:shadow-lg"

  const secondaryClasses =
    "bg-stone-900 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300 border border-stone-700 hover:border-orange-600/50"

  const variantClasses = variant === "primary" ? primaryClasses : secondaryClasses

  const Component = href ? "a" : "button"

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className="inline-block"
    >
      <Component
        href={href}
        onClick={onClick}
        className={`${baseClasses} ${variantClasses} ${className}`}
        {...props}
      >
        {children}
      </Component>
    </motion.div>
  )
}
