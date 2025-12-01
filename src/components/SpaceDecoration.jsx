import { motion } from 'framer-motion'

export function SpaceDecoration({ type = 'planet', position = 'left', size = 'medium' }) {
  const sizeClasses = {
    small: 'w-24 h-24 sm:w-32 sm:h-32',
    medium: 'w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64',
    large: 'w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80',
  }

  const positionClasses = {
    left: 'left-0 -translate-x-1/3',
    right: 'right-0 translate-x-1/3',
    center: 'left-1/2 -translate-x-1/2',
  }

  // Determine image path based on type
  const imagePath = type === 'spaceship' 
    ? '/spaceship.png' 
    : type === 'planet-large'
    ? '/planet-large.png'
    : type === 'planet-small'
    ? '/planet-small.png'
    : '/planet.png' // default planet

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 0.3, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeOut" }}
      className={`absolute top-1/2 -translate-y-1/2 ${positionClasses[position]} ${sizeClasses[size]} pointer-events-none z-0`}
    >
      <motion.img
        src={imagePath}
        alt={type}
        className="w-full h-full object-contain opacity-30"
        animate={
          type === 'spaceship'
            ? {
                y: [0, -20, 0],
                rotate: [0, 5, -5, 0],
              }
            : {
                rotate: [0, 360],
              }
        }
        transition={
          type === 'spaceship'
            ? {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }
            : {
                duration: 60,
                repeat: Infinity,
                ease: "linear",
              }
        }
      />
    </motion.div>
  )
}

