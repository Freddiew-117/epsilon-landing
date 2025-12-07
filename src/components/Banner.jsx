import { motion } from 'framer-motion'

export function Banner({ title, message, ctaText, ctaLink, variant = 'orange' }) {
  const variantStyles = {
    orange: 'from-accent-orange/20 to-accent-amber/20 border-accent-orange/50',
    amber: 'from-accent-amber/20 to-accent-red-orange/20 border-accent-amber/50',
    'red-orange': 'from-accent-red-orange/20 to-accent-orange/20 border-accent-red-orange/50',
  }

  const variantGlow = {
    orange: 'glow-orange',
    amber: 'glow-amber',
    'red-orange': 'glow-red-orange',
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
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            {title}
          </h3>
        )}
        {message && (
          <div className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            {typeof message === 'string' ? (
              <p>{message}</p>
            ) : (
              message
            )}
          </div>
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

