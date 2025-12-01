import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Starfield } from './components/Starfield'
import { Footer } from './components/Footer'
import { Landing } from './pages/Landing'
import { Litepaper } from './pages/Litepaper'
import { Whitepaper } from './pages/Whitepaper'
import { Terms } from './pages/Terms'
import { Privacy } from './pages/Privacy'
import { useTheme } from './hooks/useTheme'

function App() {
  useTheme() // Initialize theme

  return (
    <Router>
      <div className="min-h-screen relative">
        <Starfield />
        <Navbar />
        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/litepaper" element={<Litepaper />} />
            <Route path="/whitepaper" element={<Whitepaper />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

