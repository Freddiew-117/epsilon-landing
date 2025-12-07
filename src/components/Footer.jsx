import { Link } from 'react-router-dom'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

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

  const socialLinks = [
    { 
      name: 'Twitter', 
      url: 'https://twitter.com/EpsilonPerpDex', 
      label: '@EpsilonPerpDex',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      )
    },
    { 
      name: 'Telegram', 
      url: 'https://t.me/EpsilonPerpDex', 
      label: 'Telegram',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
        </svg>
      )
    },
    { 
      name: 'Email', 
      url: 'mailto:info@epsilonperp.xyz', 
      label: 'info@epsilonperp.xyz',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
  ]

  return (
    <footer className="bg-gray-50 dark:bg-space-darker border-t border-gray-200 dark:border-t dark:border-gray-800 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-4">
              <img
                src="/logo.png"
                alt="Epsilon Logo"
                className="h-8 w-8"
              />
              <span className="text-xl font-bold" style={{ color: '#e03f00' }}>
                Epsilon
              </span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 text-sm max-w-md mb-4">
              Advanced decentralized perpetual futures trading platform with real-time orderbook,
              leverage trading, and cross-market support.
            </p>
            {/* Social Links */}
            <div className="space-y-2">
              <h3 className="text-gray-900 dark:text-white font-semibold mb-3">Connect</h3>
              <ul className="space-y-2">
                {socialLinks.map(social => (
                  <li key={social.name}>
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-accent-orange dark:hover:text-accent-orange text-sm transition-colors"
                    >
                      <span className="text-accent-orange">{social.icon}</span>
                      <span>{social.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-gray-900 dark:text-white font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map(link => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      onClick={handleLinkClick}
                      className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-t dark:border-gray-800 text-center text-sm text-gray-500">
          <p>&copy; {currentYear} Epsilon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

