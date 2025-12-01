import { Section } from '../components/Section'

export function Privacy() {
  return (
    <div className="min-h-screen pt-20">
      <Section title="Privacy Policy" subtitle="How we handle your information">
        <div className="max-w-4xl mx-auto">
          <div className="bg-space-light rounded-xl p-8 border border-gray-800">
            <div className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-bold mb-4 text-white">1. Information We Collect</h2>
              <p className="text-gray-300 mb-6">
                epsilon is a decentralized platform. We collect minimal information necessary to provide
                our services:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6 ml-4">
                <li>Wallet addresses (public blockchain data)</li>
                <li>Transaction history (public blockchain data)</li>
                <li>Usage analytics (anonymized)</li>
                <li>Technical information (browser type, device information)</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4 text-white mt-8">2. How We Use Information</h2>
              <p className="text-gray-300 mb-6">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6 ml-4">
                <li>Provide and improve our services</li>
                <li>Ensure platform security</li>
                <li>Comply with legal obligations</li>
                <li>Analyze usage patterns (anonymized)</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4 text-white mt-8">3. Blockchain Transparency</h2>
              <p className="text-gray-300 mb-6">
                As a decentralized platform, transactions on epsilon are recorded on the blockchain,
                which is public and immutable. Wallet addresses and transaction data are publicly
                visible on the blockchain. We do not control or have the ability to modify blockchain data.
              </p>

              <h2 className="text-2xl font-bold mb-4 text-white mt-8">4. Data Storage</h2>
              <p className="text-gray-300 mb-6">
                We store minimal data on our servers. Most data is stored on the blockchain or in your
                browser's local storage. We implement industry-standard security measures to protect
                any data we do store.
              </p>

              <h2 className="text-2xl font-bold mb-4 text-white mt-8">5. Cookies and Tracking</h2>
              <p className="text-gray-300 mb-6">
                We use essential cookies for platform functionality. We may use analytics cookies to
                understand how users interact with our platform. You can control cookies through your
                browser settings.
              </p>

              <h2 className="text-2xl font-bold mb-4 text-white mt-8">6. Third-Party Services</h2>
              <p className="text-gray-300 mb-6">
                epsilon may integrate with third-party services such as oracle networks, blockchain
                infrastructure providers, and analytics services. These services have their own privacy
                policies.
              </p>

              <h2 className="text-2xl font-bold mb-4 text-white mt-8">7. Your Rights</h2>
              <p className="text-gray-300 mb-6">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6 ml-4">
                <li>Access your personal data</li>
                <li>Request deletion of your data (where applicable)</li>
                <li>Opt-out of non-essential tracking</li>
                <li>Withdraw consent for data processing</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4 text-white mt-8">8. Changes to This Policy</h2>
              <p className="text-gray-300 mb-6">
                We may update this Privacy Policy from time to time. We will notify users of any
                material changes by posting the new Privacy Policy on this page and updating the
                "Last Updated" date.
              </p>

              <div className="mt-8 p-4 bg-space-darker rounded-lg border border-gray-800">
                <p className="text-sm text-gray-400">
                  <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
                </p>
                <p className="text-sm text-gray-400 mt-2">
                  If you have any questions about this Privacy Policy, please contact us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}

