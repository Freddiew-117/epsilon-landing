import { useState, useEffect } from 'react'

export function useTheme() {
  const [theme, setTheme] = useState(() => {
    // Check localStorage first, default to 'dark'
    const savedTheme = localStorage.getItem('theme')
    return savedTheme || 'dark'
  })

  useEffect(() => {
    const root = window.document.documentElement
    const body = window.document.body
    // Remove both classes first
    root.classList.remove('dark', 'light')
    body.classList.remove('dark', 'light')
    
    if (theme === 'dark') {
      root.classList.add('dark')
      body.classList.add('dark')
    } else {
      root.classList.add('light')
      body.classList.add('light')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark')
  }

  return { theme, toggleTheme, setTheme }
}

