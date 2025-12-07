import { Section } from '../components/Section'

export function Privacy() {
  return (
    <div className="min-h-screen pt-20">
      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-100 dark:bg-space-light rounded-xl p-8 border border-gray-200 dark:border dark:border-gray-800">
            <div className="prose dark:prose-invert max-w-none">
              
              {/* Header */}
              <div className="mb-8 pb-6 border-b border-gray-300 dark:border-gray-700">
                <h1 className="text-4xl font-bold mb-2 text-gray-900 dark:text-white">Privacy Policy</h1>
                <p className="text-xl text-gray-600 dark:text-gray-400">How we handle your information</p>
              </div>

              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">1. Information We Collect</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Epsilon is a decentralized platform. We collect minimal information necessary to provide
                our services:
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 mb-6 ml-4">
                <li>Wallet addresses (public blockchain data)</li>
                <li>Transaction history (public blockchain data)</li>
                <li>Usage analytics (anonymized)</li>
                <li>Technical information (browser type, device information)</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white mt-8">2. How We Use Information</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 mb-6 ml-4">
                <li>Provide and improve our services</li>
                <li>Ensure platform security</li>
                <li>Comply with legal obligations</li>
                <li>Analyze usage patterns (anonymized)</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white mt-8">3. Blockchain Transparency</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                As a decentralized platform, transactions on Epsilon are recorded on the blockchain,
                which is public and immutable. Wallet addresses and transaction data are publicly
                visible on the blockchain. We do not control or have the ability to modify blockchain data.
              </p>

              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white mt-8">4. Data Storage</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                We store minimal data on our servers. Most data is stored on the blockchain or in your
                browser&apos;s local storage. We implement industry-standard security measures to protect
                any data we do store.
              </p>

              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white mt-8">5. Cookies and Tracking</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                We use essential cookies for platform functionality. We may use analytics cookies to
                understand how users interact with our platform. You can control cookies through your
                browser settings.
              </p>

              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white mt-8">6. Third-Party Services</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Epsilon may integrate with third-party services such as oracle networks, blockchain
                infrastructure providers, and analytics services. These services have their own privacy
                policies.
              </p>

              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white mt-8">7. Your Rights</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 mb-6 ml-4">
                <li>Access your personal data</li>
                <li>Request deletion of your data (where applicable)</li>
                <li>Opt-out of non-essential tracking</li>
                <li>Withdraw consent for data processing</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white mt-8">8. Changes to This Policy</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                We may update this Privacy Policy from time to time. We will notify users of any
                material changes by posting the new Privacy Policy on this page and updating the
                &quot;Last Updated&quot; date.
              </p>

              <div className="mt-8 p-6 bg-gray-200 dark:bg-space-darker rounded-lg border border-gray-300 dark:border dark:border-gray-800">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
                </p>
                <div className="bg-gradient-to-r from-accent-orange/10 to-accent-amber/10 rounded-lg p-4 border border-accent-orange/20 mt-4">
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                    <strong>Contact:</strong> If you have any questions about this Privacy Policy, please contact us at:
                  </p>
                  <p className="text-sm">
                    <a href="mailto:info@epsilonperp.xyz" className="text-accent-orange hover:underline font-semibold">
                      info@epsilonperp.xyz
                    </a>
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

