import { Section } from '../components/Section'

export function Terms() {
  return (
    <div className="min-h-screen pt-20">
      <Section title="Terms & Conditions" subtitle="Please read these terms carefully">
        <div className="max-w-4xl mx-auto">
          <div className="bg-space-light rounded-xl p-8 border border-gray-800">
            <div className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-bold mb-4 text-white">1. Acceptance of Terms</h2>
              <p className="text-gray-300 mb-6">
                By accessing and using epsilon, you accept and agree to be bound by the terms and provision
                of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>

              <h2 className="text-2xl font-bold mb-4 text-white mt-8">2. Use License</h2>
              <p className="text-gray-300 mb-6">
                Permission is granted to temporarily use epsilon for personal, non-commercial transitory
                viewing only. This is the grant of a license, not a transfer of title, and under this
                license you may not:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6 ml-4">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to reverse engineer any software contained on epsilon</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4 text-white mt-8">3. Trading Risks</h2>
              <p className="text-gray-300 mb-6">
                Trading perpetual futures involves substantial risk of loss. You should carefully consider
                whether such trading is suitable for you in light of your circumstances, knowledge, and
                financial resources. You may lose all or more than your initial investment.
              </p>

              <h2 className="text-2xl font-bold mb-4 text-white mt-8">4. Disclaimer</h2>
              <p className="text-gray-300 mb-6">
                The materials on epsilon are provided on an 'as is' basis. epsilon makes no warranties,
                expressed or implied, and hereby disclaims and negates all other warranties including,
                without limitation, implied warranties or conditions of merchantability, fitness for a
                particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>

              <h2 className="text-2xl font-bold mb-4 text-white mt-8">5. Limitations</h2>
              <p className="text-gray-300 mb-6">
                In no event shall epsilon or its suppliers be liable for any damages (including, without
                limitation, damages for loss of data or profit, or due to business interruption) arising
                out of the use or inability to use the materials on epsilon, even if epsilon or an authorized
                representative has been notified orally or in writing of the possibility of such damage.
              </p>

              <h2 className="text-2xl font-bold mb-4 text-white mt-8">6. Revisions</h2>
              <p className="text-gray-300 mb-6">
                epsilon may revise these terms of service at any time without notice. By using this website
                you are agreeing to be bound by the then current version of these terms of service.
              </p>

              <div className="mt-8 p-4 bg-space-darker rounded-lg border border-gray-800">
                <p className="text-sm text-gray-400">
                  <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
                </p>
                <p className="text-sm text-gray-400 mt-2">
                  If you have any questions about these Terms & Conditions, please contact us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}

