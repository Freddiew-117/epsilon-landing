import { Section } from '../components/Section'

export function Whitepaper() {
  return (
    <div className="min-h-screen pt-20">
      <Section title="Whitepaper" subtitle="Technical documentation and architecture">
        <div className="max-w-4xl mx-auto">
          <div className="bg-space-light rounded-xl p-8 border border-gray-800">
            <h2 className="text-2xl font-bold mb-4 text-white">Whitepaper</h2>
            <p className="text-gray-300 mb-6">
              The full technical whitepaper for epsilon is currently in development. This document will
              provide comprehensive details about:
            </p>

            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
              <li>System architecture and design</li>
              <li>Smart contract specifications</li>
              <li>Matching engine implementation</li>
              <li>Oracle integration and price feed mechanisms</li>
              <li>Risk management and liquidation protocols</li>
              <li>Tokenomics and governance</li>
              <li>Security audits and considerations</li>
              <li>Performance benchmarks</li>
            </ul>

            <div className="mt-8 p-6 bg-space-darker rounded-lg border border-gray-800">
              <h3 className="text-xl font-semibold mb-3 text-white">Coming Soon</h3>
              <p className="text-gray-300 mb-4">
                We are working diligently to complete the whitepaper. In the meantime, please refer to
                our litepaper for an overview of the platform.
              </p>
              <a
                href="/litepaper"
                className="inline-block px-6 py-2 bg-gradient-to-r from-accent-purple to-accent-blue rounded-lg text-white font-semibold hover:opacity-90 transition-opacity"
              >
                Read Litepaper
              </a>
            </div>

            <div className="mt-6 p-4 bg-yellow-900/20 border border-yellow-700/50 rounded-lg">
              <p className="text-sm text-yellow-200">
                <strong>Note:</strong> The whitepaper will be available as a downloadable PDF and may also
                be embedded directly on this page for easy access.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}

