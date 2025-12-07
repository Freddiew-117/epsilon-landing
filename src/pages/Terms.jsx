import { Section } from '../components/Section'

export function Terms() {
  return (
    <div className="min-h-screen pt-20">
      <Section>
        <div className="max-w-5xl mx-auto">
          <div className="bg-gray-100 dark:bg-space-light rounded-xl p-8 border border-gray-200 dark:border dark:border-gray-800">
            <div className="prose dark:prose-invert max-w-none">
              
              {/* Header */}
              <div className="mb-8 pb-6 border-b border-gray-300 dark:border-gray-700">
                <h1 className="text-4xl font-bold mb-2 text-gray-900 dark:text-white">Terms & Conditions</h1>
                <p className="text-xl text-gray-600 dark:text-gray-400 mb-2">EPSILON PERPETUAL DEX – TERMS AND CONDITIONS</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
                  <span className="font-semibold">Last Updated:</span> December 7, 2025
                </p>
              </div>

              {/* Section 1 */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
                  <span className="w-12 h-12 rounded-full bg-accent-orange/20 flex items-center justify-center text-accent-orange font-bold text-lg">1</span>
                  Acceptance of Terms
                </h2>
                <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 dark:border-blue-400 p-4 rounded-r-lg mb-4">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    By accessing or using <span className="font-semibold text-accent-orange">https://epsilonperp.xyz</span>, the Epsilon mobile applications, or any services provided by <span className="font-semibold">Epsilon Labs LLC</span> (&quot;Epsilon,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), you agree to be bound by these Terms and Conditions, our Privacy Policy, and all applicable laws and regulations. If you do not agree, you must immediately cease using the Services.
                  </p>
                </div>
              </div>

              {/* Section 2 */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
                  <span className="w-12 h-12 rounded-full bg-accent-orange/20 flex items-center justify-center text-accent-orange font-bold text-lg">2</span>
                  Nature of the Services
                </h2>
                <div className="bg-gray-200 dark:bg-space-darker rounded-lg p-6 border border-gray-300 dark:border-gray-800 mb-4">
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    Epsilon Perpetual DEX is a <span className="font-semibold text-accent-orange">non-custodial, decentralized finance (DeFi) interface</span> that interacts with smart contracts deployed on the Base blockchain (an Ethereum Layer-2 network).
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent-orange mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700 dark:text-gray-300">
                        We do <span className="font-semibold">not custody, control, or take possession</span> of your cryptocurrency or private keys at any time.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent-orange mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700 dark:text-gray-300">
                        All transactions are executed directly on-chain by your wallet (e.g., MetaMask, Coinbase Wallet, WalletConnect-compatible wallets).
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent-orange mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700 dark:text-gray-300">
                        Epsilon merely provides a web-based and mobile graphical user interface (the &quot;Interface&quot;) to facilitate your interaction with those decentralized protocols.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 3 */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
                  <span className="w-12 h-12 rounded-full bg-accent-orange/20 flex items-center justify-center text-accent-orange font-bold text-lg">3</span>
                  Eligibility
                </h2>
                <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 dark:border-yellow-400 p-4 rounded-r-lg mb-4">
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    You must be at least <span className="font-semibold text-accent-orange">18 years old</span> and not be a resident in any jurisdiction where the use of decentralized perpetual futures or leveraged trading is prohibited.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-2 leading-relaxed font-semibold">
                    By using the Services you represent and warrant that:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-4">
                    <li>You are not located in, under the control of, or a national or resident of any U.S. sanctioned country or any jurisdiction in which the Services are prohibited.</li>
                    <li>You are not identified on any U.S. government restricted-party list (OFAC SDN, etc.).</li>
                  </ul>
                </div>
              </div>

              {/* Section 4 */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
                  <span className="w-12 h-12 rounded-full bg-accent-orange/20 flex items-center justify-center text-accent-orange font-bold text-lg">4</span>
                  Prohibited Jurisdictions &amp; Restricted Persons
                </h2>
                <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 dark:border-red-400 p-4 rounded-r-lg mb-4">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    The Services are not offered to persons or entities who reside in, are citizens of, are located in, or are incorporated in the United States of America states or territories where leveraged crypto derivatives are considered securities or otherwise restricted (including, without limitation, New York and certain other U.S. states that require money-transmitter or derivatives licensing).
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mt-3 leading-relaxed">
                    We reserve the right to block access from any prohibited jurisdiction using IP detection and other technical measures.
                  </p>
                </div>
              </div>

              {/* Section 5 */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
                  <span className="w-12 h-12 rounded-full bg-accent-orange/20 flex items-center justify-center text-accent-orange font-bold text-lg">5</span>
                  Risks Disclosure
                </h2>
                <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 dark:border-red-400 p-4 rounded-r-lg mb-4">
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed font-semibold">
                    Trading cryptocurrencies and perpetual futures involves <span className="text-red-600 dark:text-red-400">substantial risk of loss</span> and is not suitable for every investor. You acknowledge and agree that:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-4">
                    <li>Prices can fluctuate dramatically and you may lose all or substantially all of your investment.</li>
                    <li><span className="font-semibold">Leverage magnifies both gains and losses.</span></li>
                    <li>Liquidations can occur automatically and without notice.</li>
                    <li>Smart contract bugs, oracle failures, blockchain reorganizations, or network congestion may result in loss of funds.</li>
                    <li>DeFi protocols are experimental and may be subject to hacks or exploits.</li>
                  </ul>
                  <p className="text-gray-700 dark:text-gray-300 mt-4 leading-relaxed font-semibold">
                    You are solely responsible for evaluating these risks.
                  </p>
                </div>
              </div>

              {/* Section 6 */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
                  <span className="w-12 h-12 rounded-full bg-accent-orange/20 flex items-center justify-center text-accent-orange font-bold text-lg">6</span>
                  No Investment, Brokerage, or Fiduciary Relationship
                </h2>
                <div className="bg-gray-200 dark:bg-space-darker rounded-lg p-6 border border-gray-300 dark:border-gray-800 mb-4">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Epsilon is not a broker-dealer, exchange, investment adviser, or money transmitter under U.S. federal or state law. Nothing on the Site constitutes investment advice, financial advice, trading advice, or any other type of advice. You alone are responsible for determining whether any trading strategy or transaction is appropriate for you.
                  </p>
                </div>
              </div>

              {/* Section 7 */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
                  <span className="w-12 h-12 rounded-full bg-accent-orange/20 flex items-center justify-center text-accent-orange font-bold text-lg">7</span>
                  No Warranties
                </h2>
                <div className="bg-gray-200 dark:bg-space-darker rounded-lg p-6 border border-gray-300 dark:border-gray-800 mb-4">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    The Services are provided <span className="font-semibold">&quot;AS IS&quot; and &quot;AS AVAILABLE&quot;</span> without warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, or non-infringement. We do not guarantee that the Services will be uninterrupted, error-free, or free of viruses.
                  </p>
                </div>
              </div>

              {/* Section 8 */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
                  <span className="w-12 h-12 rounded-full bg-accent-orange/20 flex items-center justify-center text-accent-orange font-bold text-lg">8</span>
                  Limitation of Liability
                </h2>
                <div className="bg-gray-200 dark:bg-space-darker rounded-lg p-6 border border-gray-300 dark:border-gray-800 mb-4">
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    To the fullest extent permitted by law, Epsilon Labs LLC, its officers, directors, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-4 mb-4">
                    <li>(a) your use or inability to use the Services;</li>
                    <li>(b) any unauthorized access to or alteration of your transmissions or data;</li>
                    <li>(c) any on-chain transaction failures or smart-contract exploits; or</li>
                    <li>(d) any other matter relating to the Services.</li>
                  </ul>
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-300 dark:border-yellow-700 rounded-lg p-4 mt-4">
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      <span className="font-semibold">In no event shall our aggregate liability exceed $100 USD.</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 9 */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
                  <span className="w-12 h-12 rounded-full bg-accent-orange/20 flex items-center justify-center text-accent-orange font-bold text-lg">9</span>
                  Indemnification
                </h2>
                <div className="bg-gray-200 dark:bg-space-darker rounded-lg p-6 border border-gray-300 dark:border-gray-800 mb-4">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    You agree to indemnify, defend, and hold harmless Epsilon Labs LLC and its affiliates from any claim, demand, loss, or damages (including reasonable attorneys&apos; fees) arising out of or relating to your violation of these Terms or your use of the Services.
                  </p>
                </div>
              </div>

              {/* Section 10 */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
                  <span className="w-12 h-12 rounded-full bg-accent-orange/20 flex items-center justify-center text-accent-orange font-bold text-lg">10</span>
                  Third-Party Protocols &amp; Open-Source Software
                </h2>
                <div className="bg-gray-200 dark:bg-space-darker rounded-lg p-6 border border-gray-300 dark:border-gray-800 mb-4">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    The Interface interacts with third-party smart contracts and protocols that are not developed, audited, or controlled by Epsilon. We make no representations or warranties about the security or performance of such third-party code.
                  </p>
                </div>
              </div>

              {/* Section 11 */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
                  <span className="w-12 h-12 rounded-full bg-accent-orange/20 flex items-center justify-center text-accent-orange font-bold text-lg">11</span>
                  Intellectual Property
                </h2>
                <div className="bg-gray-200 dark:bg-space-darker rounded-lg p-6 border border-gray-300 dark:border-gray-800 mb-4">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    The Epsilon name, logo, and all related graphics, trademarks, and trade dress are owned by or licensed to Epsilon Labs LLC. You are granted a limited, non-transferable license to use the Interface solely for its intended purpose.
                  </p>
                </div>
              </div>

              {/* Section 12 */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
                  <span className="w-12 h-12 rounded-full bg-accent-orange/20 flex items-center justify-center text-accent-orange font-bold text-lg">12</span>
                  Termination
                </h2>
                <div className="bg-gray-200 dark:bg-space-darker rounded-lg p-6 border border-gray-300 dark:border-gray-800 mb-4">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    We may terminate or suspend your access to the Services immediately, without prior notice, for any reason, including if you breach these Terms.
                  </p>
                </div>
              </div>

              {/* Section 13 */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
                  <span className="w-12 h-12 rounded-full bg-accent-orange/20 flex items-center justify-center text-accent-orange font-bold text-lg">13</span>
                  Governing Law &amp; Dispute Resolution
                </h2>
                <div className="bg-gray-200 dark:bg-space-darker rounded-lg p-6 border border-gray-300 dark:border-gray-800 mb-4">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    These Terms shall be governed by the laws of the State of New Mexico, without regard to conflict of law principles. Any dispute arising under these Terms shall be resolved exclusively in the state or federal courts located in Santa Fe, New Mexico. You waive any objection to venue or inconvenience of forum.
                  </p>
                </div>
              </div>

              {/* Section 14 */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
                  <span className="w-12 h-12 rounded-full bg-accent-orange/20 flex items-center justify-center text-accent-orange font-bold text-lg">14</span>
                  Class Action Waiver
                </h2>
                <div className="bg-gray-200 dark:bg-space-darker rounded-lg p-6 border border-gray-300 dark:border-gray-800 mb-4">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    You agree that any dispute will be resolved on an individual basis and you waive any right to participate in a class action lawsuit or class-wide arbitration.
                  </p>
                </div>
              </div>

              {/* Section 15 */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
                  <span className="w-12 h-12 rounded-full bg-accent-orange/20 flex items-center justify-center text-accent-orange font-bold text-lg">15</span>
                  Amendments
                </h2>
                <div className="bg-gray-200 dark:bg-space-darker rounded-lg p-6 border border-gray-300 dark:border-gray-800 mb-4">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    We reserve the right to modify these Terms at any time. Continued use of the Services after changes constitutes acceptance of the new Terms.
                  </p>
                </div>
              </div>

              {/* Section 16 */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
                  <span className="w-12 h-12 rounded-full bg-accent-orange/20 flex items-center justify-center text-accent-orange font-bold text-lg">16</span>
                  Contact
                </h2>
                <div className="bg-gradient-to-r from-accent-orange/10 to-accent-amber/10 rounded-lg p-6 border border-accent-orange/20 mb-4">
                  <p className="text-gray-900 dark:text-white font-semibold mb-2">Epsilon Labs LLC</p>
                 
                  <p className="text-gray-700 dark:text-gray-300">
                    <a href="mailto:legal@epsilonperp.xyz" className="text-accent-orange hover:underline font-semibold">
                      legal@epsilonperp.xyz
                    </a>
                  </p>
                </div>
              </div>

              {/* Footer Agreement */}
              <div className="mt-12 pt-8 border-t border-gray-300 dark:border-gray-700">
                <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 dark:border-blue-400 p-6 rounded-r-lg">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg font-semibold">
                    By using Epsilon Perpetual DEX, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}
