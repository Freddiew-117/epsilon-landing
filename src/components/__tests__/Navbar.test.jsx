import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Navbar } from '../Navbar'

// Mock the useTheme hook
vi.mock('../../hooks/useTheme', () => ({
  useTheme: vi.fn(() => ({
    theme: 'dark',
    toggleTheme: vi.fn(),
  })),
}))

const renderWithRouter = (component) => {
  return render(<BrowserRouter>{component}</BrowserRouter>)
}

describe('Navbar', () => {
  it('renders logo and brand name', () => {
    renderWithRouter(<Navbar />)
    
    const logo = screen.getByAltText('Epsilon Logo')
    expect(logo).toBeInTheDocument()
    
    const brandName = screen.getByText('Epsilon')
    expect(brandName).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    renderWithRouter(<Navbar />)
    
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Litepaper')).toBeInTheDocument()
    expect(screen.getByText('Whitepaper')).toBeInTheDocument()
    expect(screen.getByText('Terms')).toBeInTheDocument()
    expect(screen.getByText('Privacy')).toBeInTheDocument()
  })

  it('renders theme toggle', () => {
    renderWithRouter(<Navbar />)
    
    const themeToggle = screen.getByRole('button', { name: /switch to/i })
    expect(themeToggle).toBeInTheDocument()
  })

  it('has mobile menu button', () => {
    renderWithRouter(<Navbar />)
    
    const menuButton = screen.getByRole('button', { name: /toggle menu/i })
    expect(menuButton).toBeInTheDocument()
  })
})

