import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ThemeToggle } from '../ThemeToggle'

// Mock the useTheme hook
vi.mock('../../hooks/useTheme', () => ({
  useTheme: vi.fn(),
}))

import { useTheme } from '../../hooks/useTheme'

describe('ThemeToggle', () => {
  const mockToggleTheme = vi.fn()

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders dark mode icon when theme is dark', () => {
    useTheme.mockReturnValue({
      theme: 'dark',
      toggleTheme: mockToggleTheme,
    })

    render(<ThemeToggle />)
    
    const button = screen.getByRole('button', { name: /switch to light mode/i })
    expect(button).toBeInTheDocument()
  })

  it('renders light mode icon when theme is light', () => {
    useTheme.mockReturnValue({
      theme: 'light',
      toggleTheme: mockToggleTheme,
    })

    render(<ThemeToggle />)
    
    const button = screen.getByRole('button', { name: /switch to dark mode/i })
    expect(button).toBeInTheDocument()
  })

  it('calls toggleTheme when clicked', async () => {
    const user = userEvent.setup()
    useTheme.mockReturnValue({
      theme: 'dark',
      toggleTheme: mockToggleTheme,
    })

    render(<ThemeToggle />)
    
    const button = screen.getByRole('button')
    await user.click(button)
    
    expect(mockToggleTheme).toHaveBeenCalledTimes(1)
  })

  it('has proper accessibility attributes', () => {
    useTheme.mockReturnValue({
      theme: 'dark',
      toggleTheme: mockToggleTheme,
    })

    render(<ThemeToggle />)
    
    const button = screen.getByRole('button')
    expect(button).toHaveAttribute('aria-label')
  })
})

