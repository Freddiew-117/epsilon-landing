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
    root.classList.remove('light', 'dark')
    body.classList.remove('light', 'dark')
    root.classList.add(theme)
    body.classList.add(theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark')
  }

  return { theme, toggleTheme, setTheme }
}

