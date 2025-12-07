import { useEffect, useRef } from 'react'
import { useTheme } from '../hooks/useTheme'

export function Starfield() {
  const canvasRef = useRef(null)
  const { theme } = useTheme()
  const animationFrameRef = useRef(null)
  const starsRef = useRef([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let isAnimating = true

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      // Recreate stars on resize
      starsRef.current = []
      const numStars = 200
      for (let i = 0; i < numStars; i++) {
        starsRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.5,
          opacity: Math.random(),
          speed: Math.random() * 0.5 + 0.1,
        })
      }
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Initialize stars if empty
    if (starsRef.current.length === 0) {
      const numStars = 200
      for (let i = 0; i < numStars; i++) {
        starsRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.5,
          opacity: Math.random(),
          speed: Math.random() * 0.5 + 0.1,
        })
      }
    }

    // Animation loop
    const animate = () => {
      if (!isAnimating) return

      if (theme === 'dark') {
        // Draw dark background
        ctx.fillStyle = '#050508'
        ctx.fillRect(0, 0, canvas.width, canvas.height)

        // Draw and animate stars
        starsRef.current.forEach(star => {
          star.y += star.speed
          if (star.y > canvas.height) {
            star.y = 0
            star.x = Math.random() * canvas.width
          }

          ctx.beginPath()
          ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`
          ctx.fill()
        })

        animationFrameRef.current = requestAnimationFrame(animate)
      } else {
        // Clear canvas with white in light mode
        ctx.fillStyle = '#ffffff'
        ctx.fillRect(0, 0, canvas.width, canvas.height)
        // Continue checking for theme changes
        animationFrameRef.current = requestAnimationFrame(animate)
      }
    }

    // Start animation
    animate()

    return () => {
      isAnimating = false
      window.removeEventListener('resize', resizeCanvas)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [theme])

  // Hide starfield in light mode
  if (theme === 'light') {
    return null
  }

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10"
      style={{ background: '#050508' }}
      aria-hidden="true"
    />
  )
}

