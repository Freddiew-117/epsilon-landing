import { motion } from 'framer-motion'

export function Banner({ title, message, ctaText, ctaLink, variant = 'purple' }) {
  const variantStyles = {
    purple: 'from-accent-purple/20 to-accent-blue/20 border-accent-purple/50',
    blue: 'from-accent-blue/20 to-accent-turquoise/20 border-accent-blue/50',
    turquoise: 'from-accent-turquoise/20 to-accent-purple/20 border-accent-turquoise/50',
  }

  const variantGlow = {
    purple: 'glow-purple',
    blue: 'glow-blue',
    turquoise: 'glow-turquoise',
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`relative my-16 sm:my-20 lg:my-24 mx-auto max-w-5xl rounded-2xl border-2 bg-gradient-to-r ${variantStyles[variant]} ${variantGlow[variant]} backdrop-blur-sm overflow-hidden`}
    >
      <div className="relative z-10 p-8 sm:p-10 lg:p-12 text-center">
        {title && (
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-white">
            {title}
          </h3>
        )}
        {message && (
          <p className="text-lg sm:text-xl text-gray-300 mb-6 max-w-2xl mx-auto">
            {message}
          </p>
        )}
        {ctaText && ctaLink && (
          <a
            href={ctaLink}
            className="inline-block px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/30 rounded-lg font-semibold text-white transition-all duration-300 backdrop-blur-sm"
          >
            {ctaText}
          </a>
        )}
      </div>
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
      </div>
    </motion.div>
  )
}

