import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-2 sm:px-4 lg:px-6 pt-4">
      <div className="max-w-7xl mx-auto text-center">
        {/* Animated Logo */}
        <div className="relative flex justify-center items-start mb-20 h-48 sm:h-64 md:h-80 w-full pt-8 sm:pt-12 md:pt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative flex items-center justify-center"
            style={{ height: '100%', width: '100%', position: 'relative' }}
          >
            {/* Logo Bottom - bottom layer */}
            <motion.img
              src="/logo-bottom.png"
              alt=""
              className="absolute z-10"
              style={{ 
                height: '100%', 
                width: 'auto',
                top: '50%',
                left: 'auto',
                transform: 'translateX(-50%)',
              }}
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }}
            />
            {/* Logo Middle - middle layer */}
            <motion.img
              src="/logo-middle.png"
              alt=""
              className="absolute z-20"
              style={{ 
                height: '100%', 
                width: 'auto',
                top: 'calc(50% - 8px)',
                left: 'auto',
                transform: 'translateX(-50%)',
              }}
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            />
            {/* Logo Top - top layer */}
            <motion.img
              src="/logo-top.png"
              alt=""
              className="absolute z-30"
              style={{ 
                height: '100%', 
                width: 'auto',
                top: 'calc(50% - 5px)',
                left: 'auto',
                transform: 'translateX(-50%)',
              }}
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0,
              }}
            />
          </motion.div>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6"
        >
         
          <br />
          <span className="text-accent-orange">Epsilon Perpetual DEX</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8"
        >
          Trade perpetual futures with advanced order types, real-time orderbook,
          and cross-market support. Built for traders who demand speed and precision.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#features"
            className="px-8 py-3 bg-gradient-to-r from-accent-orange to-accent-amber rounded-lg font-semibold text-white hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-accent-orange focus:ring-offset-2 focus:ring-offset-gray-50 dark:focus:ring-offset-space-darker"
          >
            Explore Features
          </a>
          <a
            href="/litepaper"
            className="px-8 py-3 border-2 border-accent-orange rounded-lg font-semibold text-accent-orange hover:bg-accent-orange hover:bg-opacity-10 transition-colors focus:outline-none focus:ring-2 focus:ring-accent-orange focus:ring-offset-2 focus:ring-offset-gray-50 dark:focus:ring-offset-space-darker"
          >
            Read Litepaper
          </a>
        </motion.div>
      </div>
    </section>
  )
}

