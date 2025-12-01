import { Section } from '../components/Section'

export function Litepaper() {
  return (
    <div className="min-h-screen pt-20">
      <Section title="Litepaper" subtitle="A concise overview of epsilon">
        <div className="max-w-4xl mx-auto prose prose-invert prose-lg">
          <div className="bg-space-light rounded-xl p-8 border border-gray-800">
            <h2 className="text-2xl font-bold mb-4 text-white">Introduction</h2>
            <p className="text-gray-300 mb-6">
              epsilon is a decentralized perpetual futures trading platform designed for professional traders
              who demand speed, precision, and advanced trading features. Built on blockchain technology,
              epsilon combines the best of traditional finance with the innovation of decentralized systems.
            </p>

            <h2 className="text-2xl font-bold mb-4 text-white mt-8">Key Features</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
              <li>Real-time orderbook with millisecond updates</li>
              <li>Advanced order types (limit, market, stop-loss, take-profit)</li>
              <li>Leverage trading up to 20x</li>
              <li>Cross-market support (BTC, ETH, and more)</li>
              <li>Oracle-backed pricing with anti-manipulation</li>
              <li>Fast deposits and withdrawals</li>
              <li>Full position management UI</li>
              <li>WebSocket-based real-time data streaming</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4 text-white mt-8">Technology</h2>
            <p className="text-gray-300 mb-6">
              epsilon leverages an off-chain matching engine for ultra-fast order processing, with on-chain
              settlement for security and transparency. The platform uses oracle networks for reliable price
              feeds and implements sophisticated risk management systems to protect traders.
            </p>

            <h2 className="text-2xl font-bold mb-4 text-white mt-8">Roadmap</h2>
            <p className="text-gray-300 mb-6">
              Our roadmap includes expanding market coverage, introducing new order types, enhancing the
              user interface, and implementing additional risk management features. We are committed to
              continuous improvement based on community feedback.
            </p>

            <div className="mt-8 p-4 bg-space-darker rounded-lg border border-gray-800">
              <p className="text-sm text-gray-400">
                <strong>Note:</strong> This is a placeholder litepaper. The full litepaper will be available
                in the near future with detailed technical specifications, tokenomics, and governance information.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}

