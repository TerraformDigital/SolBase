"use client";

import { Suspense } from "react";

function PrivacyContent() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-2">Privacy Policy</h1>
        <p className="text-gray-400 mb-8">Last Updated: November 25, 2024</p>

        <div className="prose prose-invert prose-lg max-w-none space-y-8">
          {/* 1. Introduction */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
            <p className="text-gray-300 mb-4">
              Welcome to Solbase ("we," "us," or "our"), accessible at{" "}
              <a href="https://solbase.app" className="text-[#9945FF] hover:underline">
                solbase.app
              </a>
              . We are committed to protecting your privacy and being transparent about how we handle
              your information. This Privacy Policy explains our practices regarding data collection
              when you use our multi-chain token creation platform.
            </p>
            <p className="text-gray-300">
              Solbase is designed with privacy in mind. As a Web3 application, we operate on
              principles of minimal data collection and non-custodial interaction. We do not require
              account registration, store private keys, or collect personally identifiable information
              beyond what is necessary to provide our services.
            </p>
          </section>

          {/* 2. Information We Collect */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>

            <h3 className="text-xl font-semibold text-white mb-3">
              2.1 Blockchain Data (Public by Design)
            </h3>
            <p className="text-gray-300 mb-4">
              When you create a token using Solbase, certain information is recorded on the Solana or
              Base blockchain. This data is inherently public and includes: your wallet address, token
              contract address, token metadata (name, symbol, supply), and transaction timestamps. This
              information is publicly visible on the blockchain and{" "}
              <strong className="text-white">cannot be deleted or modified</strong> due to the
              immutable nature of blockchain technology.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3">2.2 Token Metadata</h3>
            <p className="text-gray-300 mb-4">
              Token images and metadata you upload are stored on IPFS (InterPlanetary File System)
              through NFT.Storage. This is a decentralized storage solution, and content uploaded to
              IPFS is content-addressed and may be replicated across multiple nodes. You should{" "}
              <strong className="text-white">not upload any personal or sensitive information</strong>{" "}
              in token metadata or images.
            </p>
            <p className="text-gray-300 mb-4">
              <strong className="text-white">Social Links:</strong> If you provide optional social
              links (website, X/Twitter, Discord, Telegram) during token creation, these are stored
              with your token metadata and displayed publicly on our platform. Do not provide social
              links if you wish to remain pseudonymous.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3">2.3 Analytics Data</h3>
            <p className="text-gray-300 mb-4">
              We use Plausible Analytics, a privacy-focused analytics service that{" "}
              <strong className="text-white">does not use cookies</strong> and does not collect
              personal data. Plausible collects aggregated, anonymous data including: page views and
              referral sources, browser and device type (aggregated), country-level location (no
              precise location), and session duration. This data cannot be used to identify individual
              users and is GDPR-compliant by design.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3">2.4 Information We Do NOT Collect</h3>
            <p className="text-gray-300 mb-2">We want to be clear about what we do not collect:</p>
            <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
              <li>Private keys or seed phrases</li>
              <li>Email addresses (unless you contact us)</li>
              <li>Names or government identifiers</li>
              <li>IP addresses (Plausible does not log IPs)</li>
              <li>Precise location data</li>
              <li>Financial information beyond on-chain transactions</li>
            </ul>
          </section>

          {/* 3. How We Use Information */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Information</h2>
            <p className="text-gray-300 mb-4">The limited information we process is used to:</p>
            <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4 mb-4">
              <li>Deploy tokens to the blockchain on your behalf</li>
              <li>Display token information on our platform</li>
              <li>Improve our services based on aggregate usage patterns</li>
              <li>Respond to support inquiries (if you contact us)</li>
            </ul>
            <p className="text-gray-300 mb-4">
              We <strong className="text-white">do not sell, rent, or share</strong> your information
              with third parties for marketing purposes.
            </p>
            <p className="text-gray-300">
              <strong className="text-white">Platform Fees:</strong> When you pay platform fees for
              token creation, these transactions are processed entirely on-chain. We receive funds to a
              publicly visible platform wallet address. No payment card or banking information is ever
              collected.
            </p>
          </section>

          {/* 4. Wallet Connections */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Wallet Connections</h2>
            <p className="text-gray-300 mb-4">
              When you connect your cryptocurrency wallet (Phantom, MetaMask, Coinbase Wallet, etc.),
              we interact with your wallet only to:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4 mb-4">
              <li>Read your public wallet address</li>
              <li>Request transaction signatures for token creation</li>
              <li>Verify you have sufficient funds for fees</li>
            </ul>
            <p className="text-gray-300">
              We <strong className="text-white">never request access to your private keys</strong>, and
              all transactions must be explicitly approved by you through your wallet interface.
            </p>
          </section>

          {/* 5. Third-Party Services */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Third-Party Services</h2>
            <p className="text-gray-300 mb-4">
              Our platform integrates with the following third-party services:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>
                <strong className="text-white">Blockchain Networks:</strong> Solana and Base networks
                process and record your token transactions. These are public, decentralized networks.
              </li>
              <li>
                <strong className="text-white">RPC Providers:</strong> We use blockchain RPC providers
                (such as Helius for Solana) to communicate with the networks. These providers may have
                their own privacy policies.
              </li>
              <li>
                <strong className="text-white">IPFS/NFT.Storage:</strong> Token images and metadata are
                stored on the decentralized IPFS network.
              </li>
              <li>
                <strong className="text-white">Plausible Analytics:</strong> Privacy-focused analytics
                that does not track individual users.
              </li>
              <li>
                <strong className="text-white">Wallet Providers:</strong> The wallet you use (Phantom,
                MetaMask, etc.) has its own privacy policy that governs how it handles your data.
              </li>
              <li>
                <strong className="text-white">WalletConnect:</strong> If you connect via
                WalletConnect, your connection is facilitated through WalletConnect's infrastructure.
                WalletConnect may collect connection metadata according to their privacy policy at{" "}
                <a
                  href="https://walletconnect.com/privacy"
                  className="text-[#9945FF] hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  walletconnect.com/privacy
                </a>
                .
              </li>
            </ul>
          </section>

          {/* 6. Cookies and Local Storage */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Cookies and Local Storage</h2>
            <p className="text-gray-300 mb-4">
              Solbase <strong className="text-white">does not use tracking cookies</strong>. We do not
              use Google Analytics or any cookie-based tracking. Our analytics provider (Plausible) is
              cookieless and privacy-focused. Your browser's local storage may be used to save form
              drafts for your convenience — this data never leaves your device and is not transmitted
              to our servers.
            </p>
          </section>

          {/* 7. Data Security */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Data Security</h2>
            <p className="text-gray-300 mb-4">
              We implement appropriate security measures to protect the information we process,
              including:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4 mb-4">
              <li>HTTPS encryption for all connections</li>
              <li>Secure infrastructure hosted on Vercel</li>
              <li>No storage of sensitive credentials</li>
              <li>Regular security reviews</li>
            </ul>
            <p className="text-gray-300 mb-4">
              However, no method of transmission over the Internet or electronic storage is 100%
              secure. While we strive to protect your information, we cannot guarantee absolute
              security.
            </p>
            <p className="text-gray-300">
              <strong className="text-white">Data Breach Notification:</strong> In the unlikely event
              of a data breach affecting user information, we will notify affected users and relevant
              authorities as required by applicable law within 72 hours of discovery.
            </p>
          </section>

          {/* 8. Your Rights */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. Your Rights</h2>

            <h3 className="text-xl font-semibold text-white mb-3">8.1 General Rights</h3>
            <p className="text-gray-300 mb-4">
              You maintain control over your wallet and blockchain interactions. You can disconnect
              your wallet at any time, use different wallets for different activities, and review all
              transactions before signing.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3">8.2 GDPR Rights (For EEA/UK Users)</h3>
            <p className="text-gray-300 mb-4">
              If you are located in the European Economic Area or United Kingdom, you have the right
              to:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4 mb-4">
              <li>Access information we hold about you</li>
              <li>Rectify inaccurate information</li>
              <li>Request deletion of your information (where applicable)</li>
              <li>Object to processing of your information</li>
              <li>Data portability</li>
            </ul>
            <p className="text-gray-300 mb-4">
              <strong className="text-white">Right to Withdraw Consent:</strong> You have the right to
              withdraw consent at any time for any processing based on consent. Withdrawal does not
              affect the lawfulness of processing before withdrawal.
            </p>
            <p className="text-gray-300 mb-4">
              Please note that blockchain data cannot be modified or deleted due to the immutable
              nature of blockchain technology. This is a fundamental characteristic of decentralized
              systems and not a limitation we can overcome.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3">
              8.3 California Privacy Rights (CCPA)
            </h3>
            <p className="text-gray-300 mb-4">California residents have the right to:</p>
            <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4 mb-4">
              <li>Know what personal information is collected</li>
              <li>Request deletion of personal information</li>
              <li>Opt out of the sale of personal information</li>
            </ul>
            <p className="text-gray-300">
              We <strong className="text-white">do not sell</strong> personal information.
            </p>
          </section>

          {/* 9. Data Retention */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">9. Data Retention</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
              <li>
                <strong className="text-white">Blockchain data</strong> is permanent and cannot be
                deleted
              </li>
              <li>
                Our database records (token listings, metadata references) are retained as long as our
                platform operates
              </li>
              <li>Analytics data is retained according to Plausible's data retention policies</li>
              <li>Support correspondence is retained for reasonable periods to improve our service</li>
            </ul>
          </section>

          {/* 10. Children's Privacy */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">10. Children's Privacy</h2>
            <p className="text-gray-300">
              Solbase is not intended for users under the age of 18. We do not knowingly collect
              information from children. If you believe a child has provided us with information, please
              contact us so we can take appropriate action.
            </p>
          </section>

          {/* 11. International Data Transfers */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">11. International Data Transfers</h2>
            <p className="text-gray-300">
              Our services are hosted on infrastructure that may process data in multiple countries.
              Blockchain networks are inherently global and decentralized. By using our platform, you
              acknowledge that your information may be processed in countries with different data
              protection laws than your country of residence.
            </p>
          </section>

          {/* 12. Changes to This Policy */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">12. Changes to This Policy</h2>
            <p className="text-gray-300">
              We may update this Privacy Policy from time to time. We will notify users of material
              changes by posting the updated policy on our website with a new "Last Updated" date. Your
              continued use of Solbase after changes constitutes acceptance of the updated policy.
            </p>
          </section>

          {/* 13. Regulatory Compliance Disclaimer */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              13. Regulatory Compliance Disclaimer
            </h2>
            <p className="text-gray-300 mb-4">
              Users are solely responsible for ensuring their token creation activities comply with
              applicable laws in their jurisdiction. Solbase is a technology platform and does not
              provide legal, financial, or tax advice. Token creation may be subject to securities laws,
              tax obligations, or other regulations depending on your location and the nature of your
              token.
            </p>
            <p className="text-gray-300">
              We encourage all users to consult with qualified legal and financial professionals before
              creating tokens or engaging in any cryptocurrency-related activities.
            </p>
          </section>

          {/* 14. Governing Law */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">14. Governing Law</h2>
            <p className="text-gray-300 mb-4">
              This Privacy Policy is governed by the laws of the State of Delaware, United States,
              without regard to its conflict of law provisions. Any disputes arising from this Privacy
              Policy will be resolved in the state or federal courts located in Delaware.
            </p>
            <p className="text-gray-300">
              <strong className="text-white">Note:</strong> This choice of governing law does not limit
              any privacy rights you may have under the mandatory laws of your jurisdiction, including
              GDPR for EEA/UK residents.
            </p>
          </section>

          {/* 15. Contact Us */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">15. Contact Us</h2>
            <p className="text-gray-300 mb-4">
              If you have questions about this Privacy Policy or our privacy practices, you can reach us
              through our official social media channels on{" "}
              <a
                href="https://x.com/solaboratory"
                className="text-[#9945FF] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                X (Twitter)
              </a>{" "}
              and Discord, or by visiting our website at{" "}
              <a href="https://solbase.app" className="text-[#9945FF] hover:underline">
                solbase.app
              </a>
              .
            </p>
            <p className="text-gray-300">
              For privacy-related inquiries, please include "Privacy" in your message subject.
            </p>
          </section>

          {/* 16. Acknowledgment */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">16. Acknowledgment</h2>
            <p className="text-gray-300">
              By using Solbase, you acknowledge that you have read and understood this Privacy Policy.
              You understand that blockchain transactions are public and permanent, and that creating
              tokens on Solana or Base will result in publicly visible on-chain data associated with
              your wallet address.
            </p>
          </section>

          {/* Footer */}
          <div className="mt-12 pt-8 border-t border-white/10 text-center">
            <p className="text-gray-400 mb-2">
              Solbase — Launch tokens on Solana and Base. One platform.
            </p>
            <a href="https://solbase.app" className="text-[#9945FF] hover:underline">
              solbase.app
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PrivacyPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#0A0A0A]" />}>
      <PrivacyContent />
    </Suspense>
  );
}
