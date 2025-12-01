import { Link } from 'react-router-dom'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Product: [
      { path: '/litepaper', label: 'Litepaper' },
      { path: '/whitepaper', label: 'Whitepaper' },
    ],
    Legal: [
      { path: '/terms', label: 'Terms & Conditions' },
      { path: '/privacy', label: 'Privacy Policy' },
    ],
  }

  return (
    <footer className="bg-space-darker border-t border-gray-800 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-4">
              <img
                src="/logo.png"
                alt="epsilon Logo"
                className="h-8 w-8"
              />
              <span className="text-xl font-bold bg-gradient-to-r from-accent-purple to-accent-blue bg-clip-text text-transparent">
                epsilon
              </span>
            </Link>
            <p className="text-gray-400 text-sm max-w-md">
              Advanced decentralized perpetual futures trading platform with real-time orderbook,
              leverage trading, and cross-market support.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map(link => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>&copy; {currentYear} epsilon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

