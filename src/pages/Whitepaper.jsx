import { Section } from '../components/Section'

export function Whitepaper() {
  return (
    <div className="min-h-screen pt-20">
      <Section className="relative">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gray-100 dark:bg-space-light rounded-xl p-8 border border-gray-200 dark:border dark:border-gray-800">
            <div className="prose dark:prose-invert max-w-none">
              
              {/* Header */}
              <div className="mb-8 pb-6 border-b border-gray-300 dark:border-gray-700">
                <h1 className="text-4xl font-bold mb-2 text-gray-900 dark:text-white">Whitepaper</h1>
                <p className="text-xl text-gray-600 dark:text-gray-400">Epsilon Perpetual DEX - Technical Documentation</p>
              </div>

              {/* Executive Summary */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Accessible DeFi on Base Blockchain</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 text-lg leading-relaxed">
                  Epsilon Perp Dex is an integrated DeFi ecosystem designed to deliver seamless, secure, and user-centric financial services on the Base blockchain. Starting with a decentralized perpetual order book DEX featuring revenue sharing and staking mechanisms, the platform expands to include lending and borrowing protocols, advanced investment management tools, and AI-powered agents for automated trading and portfolio optimization.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 text-lg leading-relaxed">
                  Initially launched as a web-based application, Epsilon will evolve into a mobile app, placing the most secure and friendly DeFi experience at users&apos; fingertips. By leveraging Base&apos;s scalable infrastructure, Epsilon addresses key pain points in DeFi, such as high fees, complexity, and security risks, while tapping into the rapidly growing <span className="font-semibold text-accent-orange">$50-80 billion DeFi market</span> projected for 2025.
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm italic">
                  Source: mordorintelligence.com
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-6 text-lg leading-relaxed">
                  This white paper outlines the project&apos;s vision, architecture, market context, and roadmap.
                </p>
              </div>

              {/* Introduction */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Introduction</h2>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">The Rise of Decentralized Finance</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Decentralized Finance (DeFi) has transformed traditional financial systems by enabling permissionless, intermediary-free access to services like trading, lending, and yield generation through blockchain technology. As of 2025, the DeFi market has achieved significant scale, with estimates placing its total value at between <span className="font-semibold text-accent-orange">$51.22 billion and $86.53 billion</span>, growing at compound annual rates (CAGRs) ranging from 8.96% to 53.7% through 2030.
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm italic mb-6">
                  Source: mordorintelligence.com
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  This growth is driven by increasing adoption of blockchain-native assets, rising demand for yield in volatile markets, and the integration of advanced technologies like AI for smarter decision-making.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Key segments within DeFi are experiencing explosive expansion. Perpetual futures trading on decentralized exchanges (DEXs) has surged, with monthly volumes exceeding <span className="font-semibold text-accent-orange">$1.5 trillion in 2025</span>, capturing 26% of the global perpetual futures market—up from just 2.7% at the end of 2023.
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm italic mb-6">
                  Source: quillaudits.com
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Lending and borrowing protocols have also matured, with crypto-collateralized lending reaching a record <span className="font-semibold text-accent-orange">$73.59 billion</span> in total value by Q3 2025, where DeFi platforms now dominate two-thirds of the market.
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm italic mb-6">
                  Source: galaxy.com
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Meanwhile, AI agents are reshaping cryptocurrency trading, with autonomous programs executing trades, managing portfolios, and analyzing data in real-time, leading to a burgeoning market for AI-integrated DeFi tools valued in the billions.
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm italic mb-6">
                  Source: reddit.com
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Base blockchain, as an Ethereum Layer-2 solution, has emerged as a powerhouse in this landscape. By mid-2025, Base&apos;s total value locked (TVL) has climbed to around <span className="font-semibold text-accent-orange">$5-9 billion</span>, with daily users exceeding 880,000 and ecosystem growth positioning it as one of the fastest-scaling chains.
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm italic mb-6">
                  Source: ambcrypto.com
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Its low fees, high throughput, and integration with Coinbase&apos;s user base make it ideal for DeFi innovation, as evidenced by recent discussions on platforms like X highlighting Base&apos;s role in cross-chain lending and yield strategies.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed font-semibold">
                  Epsilon enters this dynamic market to create a unified ecosystem that combines these high-growth segments, prioritizing security, usability, and accessibility.
                </p>
              </div>

              {/* Market Opportunities */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Market Opportunities</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  The DeFi sector&apos;s projections underscore immense potential. Perpetual DEXs like Hyperliquid have dominated with <span className="font-semibold text-accent-orange">70-80% market share</span> in decentralized perps, handling over <span className="font-semibold text-accent-orange">$350 billion</span> in volume by August 2025, while overall perp DEX trading doubled in days during market surges.
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm italic mb-6">
                  Source: bingx.com
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Lending markets are consolidating around leaders like Aave, which holds <span className="font-semibold text-accent-orange">$25 billion</span> in outstanding loans on Ethereum alone.
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm italic mb-6">
                  Source: theblock.co
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  AI agents in crypto are gaining traction, with tools enabling risk-adjusted profits superior to traditional strategies, and top AI coins achieving significant market caps.
                </p>
              </div>

              {/* Epsilon Perpetual DEX Section */}
              <div className="mb-12 p-6 bg-gray-200 dark:bg-space-darker rounded-lg border border-gray-300 dark:border-gray-800">
                <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Epsilon Perpetual DEX</h2>
                <h3 className="text-2xl font-semibold mb-4 text-accent-orange">The Most Secure, User-Friendly, and Intelligent DeFi Ecosystem on Base</h3>
                
                <div className="mb-6">
                  <h4 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Abstract</h4>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Epsilon Perpetual DEX is a next-generation integrated DeFi platform built natively on Base (Ethereum L2). Launching with a fully on-chain central limit order book (CLOB) perpetual futures exchange, Epsilon will progressively roll out lending & borrowing, advanced investment management suites, and autonomous AI trading agents — all within a single, beautifully designed interface.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mt-4 leading-relaxed">
                    Revenue-sharing fees, deep staking rewards, and a mobile-first roadmap place professional-grade perpetual trading and wealth management literally at users&apos; fingertips. By combining CEX-level execution with true decentralization and Base&apos;s ultra-low costs, Epsilon aims to become the default gateway for the next 100 million DeFi users.
                  </p>
                </div>
              </div>

              {/* Introduction & Market Opportunity */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">1. Introduction & Market Opportunity</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Decentralized perpetual futures have become DeFi&apos;s highest-volume use case:
                </p>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 mb-6 ml-4">
                  <li>2025 monthly perp volume consistently <span className="font-semibold text-accent-orange">&gt; $1.3–1.8 trillion</span></li>
                  <li>Perp DEXs captured <span className="font-semibold text-accent-orange">26–30%</span> of the entire global perpetual futures market (up from &lt;3% in 2023)</li>
                  <li>Year-to-date 2025 cumulative volume already exceeds <span className="font-semibold text-accent-orange">$12 trillion</span></li>
                  <li>Daily peaks reached <span className="font-semibold text-accent-orange">$97 billion</span> (Sep 2025)</li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Order-book-based perpetual DEXs dominate this segment, consistently holding <span className="font-semibold text-accent-orange">75–85%</span> of all decentralized perp volume because they deliver:
                </p>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 mb-6 ml-4">
                  <li>Sub-basis-point spreads</li>
                  <li>Near-zero slippage on large orders</li>
                  <li>Advanced order types (limit, post-only, trailing stop, OCO, iceberg)</li>
                  <li>Transparent price discovery without impermanent loss</li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Base is the ideal home for the next leader:
                </p>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 mb-6 ml-4">
                  <li>TVL: <span className="font-semibold text-accent-orange">$8.2 billion+</span> (Dec 2025)</li>
                  <li>Daily active users: <span className="font-semibold text-accent-orange">900k–1.2M</span></li>
                  <li>Gas fees <span className="font-semibold text-accent-orange">&lt; $0.01</span> even during congestion</li>
                  <li>Full EVM equivalence and Coinbase on-ramp integration</li>
                </ul>
              </div>

              {/* Why Order Books Win */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">2. Why Order Books Win in Perpetual Trading</h2>
                <p className="text-gray-600 dark:text-gray-400 text-sm italic mb-4">(Comparison vs AMM/JIT models)</p>
                
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300 dark:border-gray-700 mb-6">
                    <thead>
                      <tr className="bg-gray-200 dark:bg-space-darker">
                        <th className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-left text-gray-900 dark:text-white font-semibold">Feature</th>
                        <th className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-left text-gray-900 dark:text-white font-semibold">CLOB (Order Book)</th>
                        <th className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-left text-gray-900 dark:text-white font-semibold">AMM / JIT Liquidity</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-gray-100 dark:bg-space-light">
                        <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-gray-900 dark:text-white">Spreads (BTC-PERP)</td>
                        <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-gray-700 dark:text-gray-300">0.5–2 bps</td>
                        <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-gray-700 dark:text-gray-300">5–30 bps</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-gray-900 dark:text-white">Slippage on $5M trade</td>
                        <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-gray-700 dark:text-gray-300">&lt; 0.03%</td>
                        <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-gray-700 dark:text-gray-300">0.3–2%+</td>
                      </tr>
                      <tr className="bg-gray-100 dark:bg-space-light">
                        <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-gray-900 dark:text-white">Price impact predictability</td>
                        <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-gray-700 dark:text-gray-300">Extremely high</td>
                        <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-gray-700 dark:text-gray-300">Curve-dependent</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-gray-900 dark:text-white">Maker rebates</td>
                        <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-gray-700 dark:text-gray-300">Yes (up to –0.01%)</td>
                        <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-gray-700 dark:text-gray-300">Rare</td>
                      </tr>
                      <tr className="bg-gray-100 dark:bg-space-light">
                        <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-gray-900 dark:text-white">Advanced order types</td>
                        <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-gray-700 dark:text-gray-300">Full suite</td>
                        <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-gray-700 dark:text-gray-300">Very limited</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-gray-900 dark:text-white">Front-running protection</td>
                        <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-gray-700 dark:text-gray-300">Matching engine + MEV shield</td>
                        <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-gray-700 dark:text-gray-300">Higher JIT sandwich risk</td>
                      </tr>
                      <tr className="bg-gray-100 dark:bg-space-light">
                        <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-gray-900 dark:text-white">Capital efficiency for LPs</td>
                        <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-gray-700 dark:text-gray-300">100% utilization</td>
                        <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-gray-700 dark:text-gray-300">Idle capital + IL risk</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm italic">
                  Source: TokenTerminal, DeFiLlama, Dune Analytics – Dec 2025
                </p>
              </div>

              {/* Competitive Landscape */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">3. Competitive Landscape – Order-Book Perpetual DEXs (Dec 2025)</h2>
                
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300 dark:border-gray-700 mb-6 text-sm">
                    <thead>
                      <tr className="bg-gray-200 dark:bg-space-darker">
                        <th className="border border-gray-300 dark:border-gray-700 px-3 py-2 text-left text-gray-900 dark:text-white font-semibold">Platform</th>
                        <th className="border border-gray-300 dark:border-gray-700 px-3 py-2 text-left text-gray-900 dark:text-white font-semibold">Chain</th>
                        <th className="border border-gray-300 dark:border-gray-700 px-3 py-2 text-left text-gray-900 dark:text-white font-semibold">24h Volume</th>
                        <th className="border border-gray-300 dark:border-gray-700 px-3 py-2 text-left text-gray-900 dark:text-white font-semibold">Open Interest</th>
                        <th className="border border-gray-300 dark:border-gray-700 px-3 py-2 text-left text-gray-900 dark:text-white font-semibold">Market Share</th>
                        <th className="border border-gray-300 dark:border-gray-700 px-3 py-2 text-left text-gray-900 dark:text-white font-semibold">Taker Fee</th>
                        <th className="border border-gray-300 dark:border-gray-700 px-3 py-2 text-left text-gray-900 dark:text-white font-semibold">Strengths</th>
                        <th className="border border-gray-300 dark:border-gray-700 px-3 py-2 text-left text-gray-900 dark:text-white font-semibold">Weaknesses</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-gray-100 dark:bg-space-light">
                        <td className="border border-gray-300 dark:border-gray-700 px-3 py-2 text-gray-900 dark:text-white font-medium">Hyperliquid</td>
                        <td className="border border-gray-300 dark:border-gray-700 px-3 py-2 text-gray-700 dark:text-gray-300">Own L1</td>
                        <td className="border border-gray-300 dark:border-gray-700 px-3 py-2 text-gray-700 dark:text-gray-300">$11–15 B</td>
                        <td className="border border-gray-300 dark:border-gray-700 px-3 py-2 text-gray-700 dark:text-gray-300">$2.8 B</td>
                        <td className="border border-gray-300 dark:border-gray-700 px-3 py-2 text-gray-700 dark:text-gray-300">73%</td>
                        <td className="border border-gray-300 dark:border-gray-700 px-3 py-2 text-gray-700 dark:text-gray-300">4.5 bps</td>
                        <td className="border border-gray-300 dark:border-gray-700 px-3 py-2 text-gray-700 dark:text-gray-300">Insane volume, deep liquidity</td>
                        <td className="border border-gray-300 dark:border-gray-700 px-3 py-2 text-gray-700 dark:text-gray-300">Centralized sequencer risk</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-700 px-3 py-2 text-gray-900 dark:text-white font-medium">edgeX</td>
                        <td className="border border-gray-300 dark:border-gray-700 px-3 py-2 text-gray-700 dark:text-gray-300">Arbitrum Nova</td>
                        <td className="border border-gray-300 dark:border-gray-700 px-3 py-2 text-gray-700 dark:text-gray-300">$2.1 B</td>
                        <td className="border border-gray-300 dark:border-gray-700 px-3 py-2 text-gray-700 dark:text-gray-300">$950 M</td>
                        <td className="border border-gray-300 dark:border-gray-700 px-3 py-2 text-gray-700 dark:text-gray-300">9%</td>
                        <td className="border border-gray-300 dark:border-gray-700 px-3 py-2 text-gray-700 dark:text-gray-300">3.8 bps</td>
                        <td className="border border-gray-300 dark:border-gray-700 px-3 py-2 text-gray-700 dark:text-gray-300">Strong Asia community</td>
                        <td className="border border-gray-300 dark:border-gray-700 px-3 py-2 text-gray-700 dark:text-gray-300">No governance token yet</td>
                      </tr>
                      <tr className="bg-gray-100 dark:bg-space-light">
                        <td className="border border-gray-300 dark:border-gray-700 px-3 py-2 text-gray-900 dark:text-white font-medium">Lighter</td>
                        <td className="border border-gray-300 dark:border-gray-700 px-3 py-2 text-gray-700 dark:text-gray-300">Scroll / zkSync</td>
                        <td className="border border-gray-300 dark:border-gray-700 px-3 py-2 text-gray-700 dark:text-gray-300">$1.4 B</td>
                        <td className="border border-gray-300 dark:border-gray-700 px-3 py-2 text-gray-700 dark:text-gray-300">$420 M</td>
                        <td className="border border-gray-300 dark:border-gray-700 px-3 py-2 text-gray-700 dark:text-gray-300">6%</td>
                        <td className="border border-gray-300 dark:border-gray-700 px-3 py-2 text-gray-700 dark:text-gray-300">4.0 bps</td>
                        <td className="border border-gray-300 dark:border-gray-700 px-3 py-2 text-gray-700 dark:text-gray-300">ZK proofs, verifiable</td>
                        <td className="border border-gray-300 dark:border-gray-700 px-3 py-2 text-gray-700 dark:text-gray-300">Smaller OI, newer</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-700 px-3 py-2 text-gray-900 dark:text-white font-medium">dYdX v4</td>
                        <td className="border border-gray-300 dark:border-gray-700 px-3 py-2 text-gray-700 dark:text-gray-300">Cosmos SDK</td>
                        <td className="border border-gray-300 dark:border-gray-700 px-3 py-2 text-gray-700 dark:text-gray-300">$550 M</td>
                        <td className="border border-gray-300 dark:border-gray-700 px-3 py-2 text-gray-700 dark:text-gray-300">$320 M</td>
                        <td className="border border-gray-300 dark:border-gray-700 px-3 py-2 text-gray-700 dark:text-gray-300">3%</td>
                        <td className="border border-gray-300 dark:border-gray-700 px-3 py-2 text-gray-700 dark:text-gray-300">5.0 bps</td>
                        <td className="border border-gray-300 dark:border-gray-700 px-3 py-2 text-gray-700 dark:text-gray-300">Most decentralized</td>
                        <td className="border border-gray-300 dark:border-gray-700 px-3 py-2 text-gray-700 dark:text-gray-300">Lost significant share</td>
                      </tr>
                      <tr className="bg-gray-100 dark:bg-space-light">
                        <td className="border border-gray-300 dark:border-gray-700 px-3 py-2 text-gray-900 dark:text-white font-medium">Aster</td>
                        <td className="border border-gray-300 dark:border-gray-700 px-3 py-2 text-gray-700 dark:text-gray-300">Own L1</td>
                        <td className="border border-gray-300 dark:border-gray-700 px-3 py-2 text-gray-700 dark:text-gray-300">$900 M</td>
                        <td className="border border-gray-300 dark:border-gray-700 px-3 py-2 text-gray-700 dark:text-gray-300">$510 M</td>
                        <td className="border border-gray-300 dark:border-gray-700 px-3 py-2 text-gray-700 dark:text-gray-300">4%</td>
                        <td className="border border-gray-300 dark:border-gray-700 px-3 py-2 text-gray-700 dark:text-gray-300">5.0 bps</td>
                        <td className="border border-gray-300 dark:border-gray-700 px-3 py-2 text-gray-700 dark:text-gray-300">Growing ecosystem</td>
                        <td className="border border-gray-300 dark:border-gray-700 px-3 py-2 text-gray-700 dark:text-gray-300">Still maturing</td>
                      </tr>
                      <tr className="bg-accent-orange/10 border-2 border-accent-orange">
                        <td className="border border-gray-300 dark:border-gray-700 px-3 py-2 text-gray-900 dark:text-white font-bold">Epsilon</td>
                        <td className="border border-gray-300 dark:border-gray-700 px-3 py-2 text-gray-700 dark:text-gray-300 font-medium">Base L2</td>
                        <td className="border border-gray-300 dark:border-gray-700 px-3 py-2 text-gray-700 dark:text-gray-300">Launching Q1 2026</td>
                        <td className="border border-gray-300 dark:border-gray-700 px-3 py-2 text-gray-700 dark:text-gray-300">Target $500 M OI in 12 mo</td>
                        <td className="border border-gray-300 dark:border-gray-700 px-3 py-2 text-gray-700 dark:text-gray-300">—</td>
                        <td className="border border-gray-300 dark:border-gray-700 px-3 py-2 text-gray-700 dark:text-gray-300">Planned 4.0–4.5 bps</td>
                        <td className="border border-gray-300 dark:border-gray-700 px-3 py-2 text-gray-700 dark:text-gray-300">Base-native, full ecosystem, AI agents, revenue share</td>
                        <td className="border border-gray-300 dark:border-gray-700 px-3 py-2 text-gray-700 dark:text-gray-300">Pre-launch</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Epsilon is uniquely positioned to capture the &quot;Ethereum-aligned + retail-friendly&quot; segment that Hyperliquid cannot serve due to its isolated L1.
                </p>
              </div>

              {/* Core Features */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">4. Epsilon Perpetual DEX – Core Features</h2>
                
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">4.1 Central Limit Order Book Engine</h3>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 mb-4 ml-4">
                    <li>Fully on-chain matching with <span className="font-semibold text-accent-orange">sub-100 ms latency</span> using Base&apos;s 200 ms block times</li>
                    <li>Supports up to <span className="font-semibold text-accent-orange">50x leverage</span> (initially 20x on majors)</li>
                    <li>Order types: Market, Limit, Post-Only, Stop-Market/Limit, Trailing Stop, Take-Profit, OCO, Iceberg</li>
                    <li><span className="font-semibold text-accent-orange">2–10 bps depth</span> within 1% of mid-price on BTC & ETH at launch goal</li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">4.2 Fee Structure &amp; Revenue Sharing</h3>
                  
                  <div className="overflow-x-auto mb-6">
                    <table className="w-full border-collapse border border-gray-300 dark:border-gray-700">
                      <thead>
                        <tr className="bg-gray-200 dark:bg-space-darker">
                          <th className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-left text-gray-900 dark:text-white font-semibold">Maker Fee</th>
                          <th className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-left text-gray-900 dark:text-white font-semibold">Taker Fee</th>
                          <th className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-left text-gray-900 dark:text-white font-semibold">Revenue Allocation</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-gray-100 dark:bg-space-light">
                          <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-gray-700 dark:text-gray-300">0.00–0.02%</td>
                          <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-gray-700 dark:text-gray-300">0.04–0.045%</td>
                          <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-gray-700 dark:text-gray-300">
                            <span className="font-semibold text-accent-orange">50%</span> → Revenue share to staked <span className="font-semibold text-accent-orange">EPS</span> holders<br />
                            <span className="font-semibold text-accent-orange">25%</span> → Liquidity<br />
                            <span className="font-semibold text-accent-orange">25%</span> → Buybacks
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">4.3 Multi-Collateral Support &amp; Cross-Margining</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    Epsilon Perpetual DEX supports multiple collateral types, enabling traders to utilize various assets as margin for their positions. This flexibility allows users to leverage their preferred assets while maintaining efficient capital utilization.
                  </p>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 mb-4 ml-4">
                    <li><span className="font-semibold text-accent-orange">Supported Collateral:</span> ETH, BTC, USDC, and other major Base-native assets</li>
                    <li><span className="font-semibold text-accent-orange">Cross-Margining:</span> Single margin account across multiple positions and markets, enhancing capital efficiency by up to <span className="font-semibold text-accent-orange">40%</span></li>
                    <li><span className="font-semibold text-accent-orange">Dynamic Collateral Ratios:</span> Risk-adjusted haircuts based on asset volatility and liquidity depth</li>
                    <li><span className="font-semibold text-accent-orange">Unified Portfolio View:</span> Real-time PnL and margin calculations across all positions</li>
                  </ul>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    Cross-margining eliminates the need to allocate separate margin for each position, allowing traders to maximize their capital efficiency while maintaining robust risk management protocols.
                  </p>
                </div>

                <div className="mb-8">
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">4.4 Asymmetric Funding Rate Mechanism</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    To incentivize balanced market participation and discourage the monopolization of open interest, Epsilon implements an asymmetric funding rate mechanism. This system introduces a net cost to traders who dominate open interest, promoting a healthier trading environment and preventing market manipulation.
                  </p>
                  <div className="bg-gray-200 dark:bg-space-darker rounded-lg p-6 mb-4 border border-gray-300 dark:border-gray-800">
                    <h4 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">How It Works:</h4>
                    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-4">
                      <li>Funding rates are calculated based on the <span className="font-semibold text-accent-orange">imbalance ratio</span> between long and short positions</li>
                      <li>When one side dominates (e.g., 70%+ long), that side pays an <span className="font-semibold text-accent-orange">asymmetric premium</span> to the minority side</li>
                      <li>Premium scales with imbalance severity, creating natural incentives for market rebalancing</li>
                      <li>Funding payments occur every <span className="font-semibold text-accent-orange">8 hours</span>, synchronized with major perpetual DEXs</li>
                    </ul>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    This mechanism ensures that markets remain balanced, reducing systemic risk while providing fair compensation to counter-party traders.
                  </p>
                </div>

                <div className="mb-8">
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">4.5 Oracle Architecture &amp; Price Feeds</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    Accurate and reliable price feeds are critical for perpetual futures trading. Epsilon employs a robust multi-oracle system to ensure price accuracy and prevent manipulation.
                  </p>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 mb-4 ml-4">
                    <li><span className="font-semibold text-accent-orange">Primary Oracles:</span> Chainlink Price Feeds for BTC, ETH, and major assets</li>
                    <li><span className="font-semibold text-accent-orange">Secondary Sources:</span> Pyth Network, Band Protocol, and on-chain DEX aggregators</li>
                    <li><span className="font-semibold text-accent-orange">Price Aggregation:</span> Weighted median of multiple sources with outlier detection</li>
                    <li><span className="font-semibold text-accent-orange">Update Frequency:</span> Sub-second updates during high volatility, <span className="font-semibold text-accent-orange">2-5 second</span> intervals during normal conditions</li>
                    <li><span className="font-semibold text-accent-orange">Circuit Breakers:</span> Automatic position freezing if price deviates &gt;5% from median within 1 minute</li>
                  </ul>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    The oracle system includes redundancy mechanisms and automatic failover to ensure continuous operation even if individual oracle sources experience downtime.
                  </p>
                </div>

                <div className="mb-8">
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">4.6 Risk Management &amp; Liquidation</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    Epsilon implements a comprehensive risk management system designed to protect both traders and the protocol from excessive losses.
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Margin Requirements</h4>
                    <div className="overflow-x-auto mb-4">
                      <table className="w-full border-collapse border border-gray-300 dark:border-gray-700">
                        <thead>
                          <tr className="bg-gray-200 dark:bg-space-darker">
                            <th className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-left text-gray-900 dark:text-white font-semibold">Leverage</th>
                            <th className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-left text-gray-900 dark:text-white font-semibold">Initial Margin</th>
                            <th className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-left text-gray-900 dark:text-white font-semibold">Maintenance Margin</th>
                            <th className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-left text-gray-900 dark:text-white font-semibold">Liquidation Threshold</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="bg-gray-100 dark:bg-space-light">
                            <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-gray-700 dark:text-gray-300">1x–5x</td>
                            <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-gray-700 dark:text-gray-300">20%</td>
                            <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-gray-700 dark:text-gray-300">10%</td>
                            <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-gray-700 dark:text-gray-300">8%</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-gray-700 dark:text-gray-300">5x–10x</td>
                            <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-gray-700 dark:text-gray-300">10%</td>
                            <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-gray-700 dark:text-gray-300">5%</td>
                            <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-gray-700 dark:text-gray-300">4%</td>
                          </tr>
                          <tr className="bg-gray-100 dark:bg-space-light">
                            <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-gray-700 dark:text-gray-300">10x–20x</td>
                            <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-gray-700 dark:text-gray-300">5%</td>
                            <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-gray-700 dark:text-gray-300">2.5%</td>
                            <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-gray-700 dark:text-gray-300">2%</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-gray-700 dark:text-gray-300">20x–50x</td>
                            <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-gray-700 dark:text-gray-300">2%</td>
                            <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-gray-700 dark:text-gray-300">1%</td>
                            <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-gray-700 dark:text-gray-300">0.8%</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Liquidation Mechanism</h4>
                    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 mb-4 ml-4">
                      <li><span className="font-semibold text-accent-orange">Automated Liquidations:</span> Positions are automatically liquidated when margin ratio falls below maintenance threshold</li>
                      <li><span className="font-semibold text-accent-orange">Liquidation Penalty:</span> 2.5% of position size, with 1.25% going to liquidators and 1.25% to insurance fund</li>
                      <li><span className="font-semibold text-accent-orange">Partial Liquidations:</span> System attempts to partially close positions to restore margin health before full liquidation</li>
                      <li><span className="font-semibold text-accent-orange">Insurance Fund:</span> Protocol-maintained fund to cover liquidation shortfalls, funded by liquidation penalties and protocol fees</li>
                      <li><span className="font-semibold text-accent-orange">Socialized Losses:</span> As last resort, losses are socialized proportionally across all profitable positions if insurance fund is depleted</li>
                    </ul>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">4.7 Smart Contract Architecture</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    Epsilon&apos;s smart contract system is built on Base&apos;s EVM-compatible infrastructure, ensuring full composability with the Ethereum ecosystem while benefiting from L2 scalability.
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Core Contracts</h4>
                    <div className="space-y-4">
                      <div className="bg-gray-200 dark:bg-space-darker rounded-lg p-4 border border-gray-300 dark:border-gray-800">
                        <h5 className="font-semibold text-gray-900 dark:text-white mb-2">PerpetualMarket.sol</h5>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                          Main trading contract handling order matching, position management, and PnL calculations. Implements the central limit order book matching engine with price-time priority.
                        </p>
                      </div>
                      <div className="bg-gray-200 dark:bg-space-darker rounded-lg p-4 border border-gray-300 dark:border-gray-800">
                        <h5 className="font-semibold text-gray-900 dark:text-white mb-2">MarginManager.sol</h5>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                          Manages collateral deposits, withdrawals, and cross-margin calculations. Handles multi-collateral support with dynamic haircuts and margin requirements.
                        </p>
                      </div>
                      <div className="bg-gray-200 dark:bg-space-darker rounded-lg p-4 border border-gray-300 dark:border-gray-800">
                        <h5 className="font-semibold text-gray-900 dark:text-white mb-2">OracleAggregator.sol</h5>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                          Aggregates prices from multiple oracle sources, implements outlier detection, and provides validated price feeds to the trading system.
                        </p>
                      </div>
                      <div className="bg-gray-200 dark:bg-space-darker rounded-lg p-4 border border-gray-300 dark:border-gray-800">
                        <h5 className="font-semibold text-gray-900 dark:text-white mb-2">LiquidationEngine.sol</h5>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                          Monitors positions for liquidation triggers, executes liquidations, and manages the insurance fund. Implements partial liquidation logic and socialized loss mechanisms.
                        </p>
                      </div>
                      <div className="bg-gray-200 dark:bg-space-darker rounded-lg p-4 border border-gray-300 dark:border-gray-800">
                        <h5 className="font-semibold text-gray-900 dark:text-white mb-2">FundingRateCalculator.sol</h5>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                          Calculates asymmetric funding rates based on open interest imbalance, updates rates every 8 hours, and distributes funding payments.
                        </p>
                      </div>
                      <div className="bg-gray-200 dark:bg-space-darker rounded-lg p-4 border border-gray-300 dark:border-gray-800">
                        <h5 className="font-semibold text-gray-900 dark:text-white mb-2">FeeDistributor.sol</h5>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                          Collects trading fees, allocates 50% to revenue share for stakers, 25% to liquidity, 25% to buybacks, and manages protocol treasury.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Security Features</h4>
                    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 mb-4 ml-4">
                      <li><span className="font-semibold text-accent-orange">Upgradeable Contracts:</span> Proxy pattern with timelock governance for controlled upgrades</li>
                      <li><span className="font-semibold text-accent-orange">Access Controls:</span> Role-based permissions with multi-sig governance for critical functions</li>
                      <li><span className="font-semibold text-accent-orange">Circuit Breakers:</span> Automatic pause mechanisms for extreme market conditions</li>
                      <li><span className="font-semibold text-accent-orange">Reentrancy Guards:</span> Protection against reentrancy attacks on all state-changing functions</li>
                      <li><span className="font-semibold text-accent-orange">Audit Requirements:</span> All contracts undergo third-party security audits before deployment</li>
                    </ul>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">4.8 Matching Engine Architecture</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    The matching engine is the heart of Epsilon&apos;s trading system, executing orders with sub-100ms latency while maintaining full on-chain transparency.
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Order Matching Algorithm</h4>
                    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 mb-4 ml-4">
                      <li><span className="font-semibold text-accent-orange">Price-Time Priority:</span> Orders are matched first by price (best first), then by time (earliest first)</li>
                      <li><span className="font-semibold text-accent-orange">Order Types Supported:</span> Market, Limit, Post-Only, Stop-Market, Stop-Limit, Trailing Stop, Take-Profit, OCO, Iceberg</li>
                      <li><span className="font-semibold text-accent-orange">Partial Fills:</span> Large orders are automatically split and filled incrementally against multiple counterparties</li>
                      <li><span className="font-semibold text-accent-orange">MEV Protection:</span> Order batching and commit-reveal schemes prevent front-running</li>
                      <li><span className="font-semibold text-accent-orange">Gas Optimization:</span> Batch processing of multiple orders per transaction reduces per-order gas costs by up to 60%</li>
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Performance Metrics</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gray-200 dark:bg-space-darker rounded-lg p-4 border border-gray-300 dark:border-gray-800">
                        <div className="text-2xl font-bold text-accent-orange mb-1">&lt;100ms</div>
                        <div className="text-sm text-gray-700 dark:text-gray-300">Order Matching Latency</div>
                      </div>
                      <div className="bg-gray-200 dark:bg-space-darker rounded-lg p-4 border border-gray-300 dark:border-gray-800">
                        <div className="text-2xl font-bold text-accent-orange mb-1">10,000+</div>
                        <div className="text-sm text-gray-700 dark:text-gray-300">Orders Per Second Capacity</div>
                      </div>
                      <div className="bg-gray-200 dark:bg-space-darker rounded-lg p-4 border border-gray-300 dark:border-gray-800">
                        <div className="text-2xl font-bold text-accent-orange mb-1">99.9%</div>
                        <div className="text-sm text-gray-700 dark:text-gray-300">Uptime Target</div>
                      </div>
                      <div className="bg-gray-200 dark:bg-space-darker rounded-lg p-4 border border-gray-300 dark:border-gray-800">
                        <div className="text-2xl font-bold text-accent-orange mb-1">&lt;$0.01</div>
                        <div className="text-sm text-gray-700 dark:text-gray-300">Average Gas Per Trade</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tokenomics & Governance */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">5. Tokenomics &amp; Governance</h2>
                
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">5.1 EPS Token Distribution</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    The EPS token serves as the governance and utility token for the Epsilon ecosystem, with a total supply of <span className="font-semibold text-accent-orange">100,000,000 tokens</span>.
                  </p>
                  
                  <div className="overflow-x-auto mb-6">
                    <table className="w-full border-collapse border border-gray-300 dark:border-gray-700">
                      <thead>
                        <tr className="bg-gray-200 dark:bg-space-darker">
                          <th className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-left text-gray-900 dark:text-white font-semibold">Allocation</th>
                          <th className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-left text-gray-900 dark:text-white font-semibold">Percentage</th>
                          <th className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-left text-gray-900 dark:text-white font-semibold">Tokens</th>
                          <th className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-left text-gray-900 dark:text-white font-semibold">Vesting Schedule</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-gray-100 dark:bg-space-light">
                          <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-gray-900 dark:text-white">Staking Rewards Wallet</td>
                          <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-gray-700 dark:text-gray-300">20%</td>
                          <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-gray-700 dark:text-gray-300">20,000,000</td>
                          <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-gray-700 dark:text-gray-300">No vesting</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-gray-900 dark:text-white">Ecosystem &amp; Development</td>
                          <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-gray-700 dark:text-gray-300">10%</td>
                          <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-gray-700 dark:text-gray-300">10,000,000</td>
                          <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-gray-700 dark:text-gray-300">2 year cliff, then 2% yearly</td>
                        </tr>
                        <tr className="bg-gray-100 dark:bg-space-light">
                          <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-gray-900 dark:text-white">Marketing</td>
                          <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-gray-700 dark:text-gray-300">10%</td>
                          <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-gray-700 dark:text-gray-300">10,000,000</td>
                          <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-gray-700 dark:text-gray-300">1% yearly</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-gray-900 dark:text-white">Reserve</td>
                          <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-gray-700 dark:text-gray-300">15%</td>
                          <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-gray-700 dark:text-gray-300">15,000,000</td>
                          <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-gray-700 dark:text-gray-300">5 year lock, then 1% yearly</td>
                        </tr>
                        <tr className="bg-gray-100 dark:bg-space-light">
                          <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-gray-900 dark:text-white">Initial Airdrop</td>
                          <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-gray-700 dark:text-gray-300">15%</td>
                          <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-gray-700 dark:text-gray-300">15,000,000</td>
                          <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-gray-700 dark:text-gray-300">No vesting</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-gray-900 dark:text-white">Contributors</td>
                          <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-gray-700 dark:text-gray-300">15%</td>
                          <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-gray-700 dark:text-gray-300">15,000,000</td>
                          <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-gray-700 dark:text-gray-300">1% yearly</td>
                        </tr>
                        <tr className="bg-gray-100 dark:bg-space-light">
                          <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-gray-900 dark:text-white">Team</td>
                          <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-gray-700 dark:text-gray-300">10%</td>
                          <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-gray-700 dark:text-gray-300">10,000,000</td>
                          <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-gray-700 dark:text-gray-300">Locked 2 years</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-gray-900 dark:text-white">Initial Liquidity</td>
                          <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-gray-700 dark:text-gray-300">5%</td>
                          <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-gray-700 dark:text-gray-300">5,000,000</td>
                          <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-gray-700 dark:text-gray-300">No vesting</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">5.2 Token Utility</h3>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 mb-4 ml-4">
                    <li><span className="font-semibold text-accent-orange">Revenue Sharing:</span> 50% of trading fees are distributed to stakers, 25% allocated to liquidity, and 25% used for buybacks</li>
                    <li><span className="font-semibold text-accent-orange">Governance:</span> EPS holders can vote on protocol parameters, fee structures, and feature additions</li>
                    <li><span className="font-semibold text-accent-orange">Staking Rewards:</span> Stake EPS to earn a share of protocol revenue and receive voting power</li>
                    <li><span className="font-semibold text-accent-orange">Fee Discounts:</span> Holders of staked EPS receive reduced trading fees (up to 25% discount)</li>
                    <li><span className="font-semibold text-accent-orange">Liquidity Mining:</span> Additional EPS rewards for providing liquidity to EPS trading pairs</li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">5.3 Governance Model</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    Epsilon implements a decentralized governance system where EPS token holders can propose and vote on protocol changes.
                  </p>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 mb-4 ml-4">
                    <li><span className="font-semibold text-accent-orange">Proposal Threshold:</span> 100,000 EPS tokens required to create a governance proposal</li>
                    <li><span className="font-semibold text-accent-orange">Voting Period:</span> 7 days for standard proposals, 14 days for critical parameter changes</li>
                    <li><span className="font-semibold text-accent-orange">Quorum:</span> Minimum 5% of total supply must vote for proposal to be valid</li>
                    <li><span className="font-semibold text-accent-orange">Execution Delay:</span> 48-hour timelock for all proposals to allow for review and emergency cancellation</li>
                    <li><span className="font-semibold text-accent-orange">Governance Parameters:</span> Fee rates, margin requirements, supported markets, oracle configurations</li>
                  </ul>
                </div>
              </div>

              {/* Roadmap */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">6. Roadmap</h2>
                
                <div className="space-y-6">
                  <div className="bg-gray-200 dark:bg-space-darker rounded-lg p-6 border border-gray-300 dark:border-gray-800">
                    <h3 className="text-xl font-semibold mb-3 text-accent-orange">Q1 2026 – Launch Phase</h3>
                    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-4">
                      <li>Mainnet launch on Base</li>
                      <li>Core trading features: Market, Limit, Stop orders</li>
                      <li>EPS token launch and initial distribution</li>
                      <li>Security audit completion and publication</li>
                    </ul>
                  </div>

                  <div className="bg-gray-200 dark:bg-space-darker rounded-lg p-6 border border-gray-300 dark:border-gray-800">
                    <h3 className="text-xl font-semibold mb-3 text-accent-orange">Q2 2026 – Expansion Phase</h3>
                    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-4">
                      <li>Advanced order types: Trailing Stop, OCO, Iceberg</li>
                      <li>Lending &amp; borrowing protocol integration</li>
                    </ul>
                  </div>

                  <div className="bg-gray-200 dark:bg-space-darker rounded-lg p-6 border border-gray-300 dark:border-gray-800">
                    <h3 className="text-xl font-semibold mb-3 text-accent-orange">Q3 2026 – Advanced Features</h3>
                    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-4">
                      <li>AI-powered trading agents and portfolio optimization</li>
                      <li>Advanced investment management suite</li>
                      <li>Institutional trading features and API access</li>
                      <li>Yield farming and liquidity mining programs</li>
                    </ul>
                  </div>

                  <div className="bg-gray-200 dark:bg-space-darker rounded-lg p-6 border border-gray-300 dark:border-gray-800">
                    <h3 className="text-xl font-semibold mb-3 text-accent-orange">Q4 2026 &amp; Beyond – Ecosystem Growth</h3>
                    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-4">
                      <li>Multi-chain expansion (Arbitrum, Optimism, Polygon)</li>
                      <li>Institutional custody solutions</li>
                      <li>Advanced analytics and trading tools</li>
                      <li>Community-driven market additions via governance</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Security & Audits */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">7. Security &amp; Audits</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Security is paramount for a DeFi protocol handling billions in trading volume. Epsilon employs multiple layers of security measures and undergoes rigorous auditing processes.
                </p>
                
                <div className="mb-6">
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">7.1 Security Measures</h3>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 mb-4 ml-4">
                    <li><span className="font-semibold text-accent-orange">Timelock Contracts:</span> 48-hour delay on all governance-executed changes</li>
                    <li><span className="font-semibold text-accent-orange">Bug Bounty Program:</span> Up to $500,000 rewards for critical vulnerability discoveries</li>
                    <li><span className="font-semibold text-accent-orange">Circuit Breakers:</span> Automatic protocol pause in extreme market conditions</li>
                    <li><span className="font-semibold text-accent-orange">Insurance Fund:</span> Protocol-maintained fund to cover liquidation shortfalls</li>
                    <li><span className="font-semibold text-accent-orange">Rate Limiting:</span> Maximum position sizes and leverage limits to prevent excessive risk</li>
            </ul>
                </div>

                <div className="mb-6">
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">7.2 Audit Process</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    All smart contracts undergo comprehensive security audits from multiple reputable firms before mainnet deployment. Audit reports are published publicly for transparency.
                  </p>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 mb-4 ml-4">
                    <li>Audits from <span className="font-semibold text-accent-orange">2+</span> independent security firms</li>
                    <li>Continuous monitoring and periodic re-audits for major upgrades</li>
                    <li>Formal verification for critical mathematical functions</li>
                    <li>Public disclosure of all audit findings and remediation steps</li>
                  </ul>
                </div>
            </div>

              {/* Conclusion */}
              <div className="mb-12 p-6 bg-gradient-to-r from-accent-orange/10 to-accent-amber/10 rounded-lg border border-accent-orange/20">
                <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Conclusion</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed text-lg">
                  Epsilon Perpetual DEX represents the next evolution of decentralized perpetual futures trading, combining the best aspects of centralized exchange execution with true on-chain decentralization. By leveraging Base&apos;s scalable infrastructure, implementing advanced risk management, and prioritizing user experience, Epsilon is positioned to become the leading perpetual DEX for the next generation of DeFi users.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed text-lg">
                  With a comprehensive feature set including multi-collateral support, asymmetric funding rates, advanced order types, and a robust governance system, Epsilon addresses the key pain points that have limited DeFi adoption while maintaining the security and transparency that make decentralized finance revolutionary.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg font-semibold">
                  Join us in building the future of decentralized trading on Base.
                </p>
              </div>

            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}
