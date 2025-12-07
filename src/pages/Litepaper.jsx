import { Section } from '../components/Section'

export function Litepaper() {
  return (
    <div className="min-h-screen pt-20">
      <Section>
        <div className="max-w-5xl mx-auto">
          <div className="bg-gray-100 dark:bg-space-light rounded-xl p-8 border border-gray-200 dark:border dark:border-gray-800">
            <div className="prose dark:prose-invert max-w-none">
              
              {/* Header */}
              <div className="mb-8 pb-6 border-b border-gray-300 dark:border-gray-700">
                <h1 className="text-4xl font-bold mb-2 text-gray-900 dark:text-white">Litepaper</h1>
                <p className="text-xl text-gray-600 dark:text-gray-400">A concise overview of Epsilon Perpetual DEX</p>
              </div>

              {/* Executive Summary */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Executive Summary</h2>
                <div className="bg-gradient-to-r from-accent-orange/10 to-accent-amber/10 rounded-lg p-6 border border-accent-orange/20 mb-6">
                  <p className="text-gray-700 dark:text-gray-300 mb-4 text-lg leading-relaxed">
                    <span className="font-semibold text-accent-orange">Epsilon Perpetual DEX</span> is a next-generation integrated DeFi platform built natively on Base (Ethereum L2). Launching with a fully on-chain central limit order book (CLOB) perpetual futures exchange, Epsilon will progressively roll out lending &amp; borrowing, advanced investment management suites, and autonomous AI trading agents — all within a single, beautifully designed interface.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                    Revenue-sharing fees, deep staking rewards, and a mobile-first roadmap place professional-grade perpetual trading and wealth management at users&apos; fingertips. By combining CEX-level execution with true decentralization and Base&apos;s ultra-low costs, Epsilon aims to become the default gateway for the next 100 million DeFi users.
                  </p>
                </div>
              </div>

              {/* Market Opportunity */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Market Opportunity</h2>
                <div className="bg-gray-200 dark:bg-space-darker rounded-lg p-6 border border-gray-300 dark:border-gray-800 mb-6">
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    Decentralized perpetual futures have become DeFi&apos;s highest-volume use case:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 mb-4 ml-4">
                    <li>2025 monthly perp volume consistently <span className="font-semibold text-accent-orange">&gt; $1.3–1.8 trillion</span></li>
                    <li>Perp DEXs captured <span className="font-semibold text-accent-orange">26–30%</span> of the entire global perpetual futures market (up from &lt;3% in 2023)</li>
                    <li>Year-to-date 2025 cumulative volume already exceeds <span className="font-semibold text-accent-orange">$12 trillion</span></li>
                    <li>Daily peaks reached <span className="font-semibold text-accent-orange">$97 billion</span></li>
                  </ul>
                  <p className="text-gray-700 dark:text-gray-300 mt-4 leading-relaxed">
                    The DeFi market is projected to reach <span className="font-semibold text-accent-orange">$50-80 billion</span> by 2025, with Base blockchain emerging as a powerhouse with <span className="font-semibold text-accent-orange">$8.2 billion+ TVL</span> and <span className="font-semibold text-accent-orange">900k–1.2M daily active users</span>.
                  </p>
                </div>
              </div>

              {/* Core Features */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Core Features</h2>
                
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Central Limit Order Book (CLOB)</h3>
                  <div className="bg-gray-200 dark:bg-space-darker rounded-lg p-6 border border-gray-300 dark:border-gray-800">
                    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 mb-4 ml-4">
                      <li>Fully on-chain matching with <span className="font-semibold text-accent-orange">sub-100 ms latency</span> using Base&apos;s 200 ms block times</li>
                      <li>Supports up to <span className="font-semibold text-accent-orange">50x leverage</span> (initially 20x on majors)</li>
                      <li>Advanced order types: Market, Limit, Post-Only, Stop-Market/Limit, Trailing Stop, Take-Profit, OCO, Iceberg</li>
                      <li><span className="font-semibold text-accent-orange">2–10 bps depth</span> within 1% of mid-price on BTC &amp; ETH at launch goal</li>
                      <li>Sub-basis-point spreads and near-zero slippage on large orders</li>
                    </ul>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Multi-Collateral &amp; Cross-Margining</h3>
                  <div className="bg-gray-200 dark:bg-space-darker rounded-lg p-6 border border-gray-300 dark:border-gray-800">
                    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 mb-4 ml-4">
                      <li>Supported collateral: ETH, BTC, USDC, and other major Base-native assets</li>
                      <li>Single margin account across multiple positions and markets</li>
                      <li>Enhances capital efficiency by up to <span className="font-semibold text-accent-orange">40%</span></li>
                      <li>Unified portfolio view with real-time PnL and margin calculations</li>
                    </ul>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Asymmetric Funding Rates</h3>
                  <div className="bg-gray-200 dark:bg-space-darker rounded-lg p-6 border border-gray-300 dark:border-gray-800">
                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                      Epsilon implements an asymmetric funding rate mechanism that incentivizes balanced market participation. When one side dominates open interest, that side pays a premium to the minority side, creating natural incentives for market rebalancing and preventing manipulation.
                    </p>
                    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-4">
                      <li>Funding rates calculated based on imbalance ratio between long and short positions</li>
                      <li>Premium scales with imbalance severity</li>
                      <li>Funding payments occur every <span className="font-semibold text-accent-orange">8 hours</span></li>
            </ul>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Fee Structure &amp; Revenue Sharing</h3>
                  <div className="bg-gradient-to-r from-accent-orange/10 to-accent-amber/10 rounded-lg p-6 border border-accent-orange/20">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div className="bg-gray-200 dark:bg-space-darker rounded-lg p-4 border border-gray-300 dark:border-gray-800">
                        <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Maker Fee</div>
                        <div className="text-2xl font-bold text-accent-orange">0.00–0.02%</div>
                      </div>
                      <div className="bg-gray-200 dark:bg-space-darker rounded-lg p-4 border border-gray-300 dark:border-gray-800">
                        <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Taker Fee</div>
                        <div className="text-2xl font-bold text-accent-orange">0.04–0.045%</div>
                      </div>
                      <div className="bg-gray-200 dark:bg-space-darker rounded-lg p-4 border border-gray-300 dark:border-gray-800">
                        <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Revenue Allocation</div>
                        <div className="text-lg font-bold text-accent-orange">100%</div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div className="bg-gray-200 dark:bg-space-darker rounded-lg p-4 border border-gray-300 dark:border-gray-800">
                        <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Revenue Share</div>
                        <div className="text-2xl font-bold text-accent-orange">50%</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">to EPS stakers</div>
                      </div>
                      <div className="bg-gray-200 dark:bg-space-darker rounded-lg p-4 border border-gray-300 dark:border-gray-800">
                        <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Liquidity</div>
                        <div className="text-2xl font-bold text-accent-orange">25%</div>
                      </div>
                      <div className="bg-gray-200 dark:bg-space-darker rounded-lg p-4 border border-gray-300 dark:border-gray-800">
                        <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Buybacks</div>
                        <div className="text-2xl font-bold text-accent-orange">25%</div>
                      </div>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      Trading fees are allocated as follows: <span className="font-semibold">50% revenue share to stakers</span>, <span className="font-semibold">25% to liquidity</span>, and <span className="font-semibold">25% for buybacks</span>.
                    </p>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Risk Management</h3>
                  <div className="bg-gray-200 dark:bg-space-darker rounded-lg p-6 border border-gray-300 dark:border-gray-800">
                    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 mb-4 ml-4">
                      <li>Multi-oracle price feeds (Chainlink, Pyth Network, Band Protocol) with weighted median aggregation</li>
                      <li>Automated liquidation system with partial liquidation support</li>
                      <li>Insurance fund to cover liquidation shortfalls</li>
                      <li>Circuit breakers for extreme market conditions</li>
                      <li>Dynamic margin requirements based on leverage (1x–50x)</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Tokenomics */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Tokenomics</h2>
                
                <div className="bg-gradient-to-r from-accent-orange/10 to-accent-amber/10 rounded-lg p-6 border border-accent-orange/20 mb-6">
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">EPS Token</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 text-xl leading-relaxed">
                    <span className="font-semibold text-accent-orange">Total Supply: 100,000,000 EPS</span>
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-200 dark:bg-space-darker rounded-lg p-4 border border-gray-300 dark:border-gray-800">
                      <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Staking Rewards</div>
                      <div className="text-2xl font-bold text-accent-orange">20%</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">No vesting</div>
                    </div>
                    <div className="bg-gray-200 dark:bg-space-darker rounded-lg p-4 border border-gray-300 dark:border-gray-800">
                      <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Initial Airdrop</div>
                      <div className="text-2xl font-bold text-accent-orange">15%</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">No vesting</div>
                    </div>
                    <div className="bg-gray-200 dark:bg-space-darker rounded-lg p-4 border border-gray-300 dark:border-gray-800">
                      <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Reserve</div>
                      <div className="text-2xl font-bold text-accent-orange">15%</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">5 year lock, then 1% yearly</div>
                    </div>
                    <div className="bg-gray-200 dark:bg-space-darker rounded-lg p-4 border border-gray-300 dark:border-gray-800">
                      <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Contributors</div>
                      <div className="text-2xl font-bold text-accent-orange">15%</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">1% yearly</div>
                    </div>
                    <div className="bg-gray-200 dark:bg-space-darker rounded-lg p-4 border border-gray-300 dark:border-gray-800">
                      <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Ecosystem &amp; Development</div>
                      <div className="text-2xl font-bold text-accent-orange">10%</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">2 year cliff, then 2% yearly</div>
                    </div>
                    <div className="bg-gray-200 dark:bg-space-darker rounded-lg p-4 border border-gray-300 dark:border-gray-800">
                      <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Marketing</div>
                      <div className="text-2xl font-bold text-accent-orange">10%</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">1% yearly</div>
                    </div>
                    <div className="bg-gray-200 dark:bg-space-darker rounded-lg p-4 border border-gray-300 dark:border-gray-800">
                      <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Team</div>
                      <div className="text-2xl font-bold text-accent-orange">10%</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">Locked 2 years</div>
                    </div>
                    <div className="bg-gray-200 dark:bg-space-darker rounded-lg p-4 border border-gray-300 dark:border-gray-800">
                      <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Initial Liquidity</div>
                      <div className="text-2xl font-bold text-accent-orange">5%</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">No vesting</div>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Token Utility</h3>
                  <div className="bg-gray-200 dark:bg-space-darker rounded-lg p-6 border border-gray-300 dark:border-gray-800">
                    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 mb-4 ml-4">
                      <li><span className="font-semibold text-accent-orange">Revenue Sharing:</span> 50% of trading fees distributed to stakers, 25% allocated to liquidity, and 25% used for buybacks</li>
                      <li><span className="font-semibold text-accent-orange">Governance:</span> EPS holders vote on protocol parameters, fee structures, and features</li>
                      <li><span className="font-semibold text-accent-orange">Staking Rewards:</span> Earn a share of protocol revenue and receive voting power</li>
                      <li><span className="font-semibold text-accent-orange">Fee Discounts:</span> Up to 25% discount on trading fees for staked EPS holders</li>
                      <li><span className="font-semibold text-accent-orange">Liquidity Mining:</span> Additional EPS rewards for providing liquidity</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Why Base */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Why Base Blockchain?</h2>
                <div className="bg-gray-200 dark:bg-space-darker rounded-lg p-6 border border-gray-300 dark:border-gray-800">
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 mb-4 ml-4">
                    <li><span className="font-semibold text-accent-orange">Ultra-Low Fees:</span> Gas fees &lt; $0.01 even during congestion</li>
                    <li><span className="font-semibold text-accent-orange">High Throughput:</span> 200 ms block times enable sub-100 ms order matching</li>
                    <li><span className="font-semibold text-accent-orange">EVM Compatibility:</span> Full compatibility with Ethereum ecosystem</li>
                    <li><span className="font-semibold text-accent-orange">Coinbase Integration:</span> Seamless on-ramp through Coinbase</li>
                    <li><span className="font-semibold text-accent-orange">Growing Ecosystem:</span> $8.2 billion+ TVL and 900k–1.2M daily active users</li>
                  </ul>
                </div>
              </div>

              {/* Roadmap Highlights */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Roadmap Highlights</h2>
                <div className="space-y-4">
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
                    <h3 className="text-xl font-semibold mb-3 text-accent-orange">Q4 2026 &amp; Beyond</h3>
                    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-4">
                      <li>Multi-chain expansion (Arbitrum, Optimism, Polygon)</li>
                      <li>Institutional custody solutions</li>
                      <li>Advanced analytics and trading tools</li>
                      <li>Community-driven market additions via governance</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Conclusion */}
              <div className="mb-12 p-6 bg-gradient-to-r from-accent-orange/10 to-accent-amber/10 rounded-lg border border-accent-orange/20">
                <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Conclusion</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed text-lg">
                  Epsilon Perpetual DEX represents the next evolution of decentralized perpetual futures trading, combining the best aspects of centralized exchange execution with true on-chain decentralization. By leveraging Base&apos;s scalable infrastructure, implementing advanced risk management, and prioritizing user experience, Epsilon is positioned to become the leading perpetual DEX for the next generation of DeFi users.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                  For detailed technical documentation, architecture, and comprehensive information, please refer to our <a href="/whitepaper" className="text-accent-orange hover:underline font-semibold">full Whitepaper</a>.
                </p>
              </div>

            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}
