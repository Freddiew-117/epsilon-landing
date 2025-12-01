import { motion } from 'framer-motion'

export function FeatureCard({ title, description, bullets, illustration, reverse = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-8 lg:gap-12 mb-16`}
    >
      <div className="flex-1">
        <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-white">
          {title}
        </h3>
        <p className="text-gray-400 mb-6 text-lg">
          {description}
        </p>
        {bullets && (
          <ul className="space-y-3">
            {bullets.map((bullet, index) => (
              <li key={index} className="flex items-start">
                <span className="text-accent-turquoise mr-3 mt-1">▸</span>
                <span className="text-gray-300">{bullet}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="flex-1 w-full">
        {illustration || (
          <div className="bg-space-light rounded-xl p-8 border border-gray-800 glow-purple">
            <div className="aspect-video bg-gradient-to-br from-accent-purple/20 to-accent-blue/20 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Illustration</span>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  )
}

