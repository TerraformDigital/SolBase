"use client";

import { Suspense } from "react";

function TermsContent() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-2">Terms and Conditions</h1>
        <p className="text-gray-400 mb-8">Last Updated: November 25, 2024</p>

        {/* Important Notice */}
        <div className="mb-8 rounded-lg border-2 border-yellow-500/50 bg-yellow-500/10 p-6">
          <p className="text-yellow-200 font-semibold">
            <strong className="text-yellow-100">IMPORTANT:</strong> PLEASE READ THESE TERMS CAREFULLY
            BEFORE USING SOLBASE. BY ACCESSING OR USING OUR PLATFORM, YOU AGREE TO BE BOUND BY THESE
            TERMS AND CONDITIONS. IF YOU DO NOT AGREE TO ALL OF THESE TERMS, DO NOT USE THIS PLATFORM.
          </p>
        </div>

        <div className="space-y-8">
          {/* 1. Acceptance of Terms */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-300 mb-4">
              These Terms and Conditions ("Terms") constitute a legally binding agreement between you
              ("User," "you," or "your") and Solbase ("we," "us," or "our") governing your access to and
              use of the Solbase platform, including our website at{" "}
              <a href="https://solbase.app" className="text-[#9945FF] hover:underline">
                solbase.app
              </a>{" "}
              and all related services (collectively, the "Platform").
            </p>
            <p className="text-gray-300">
              By connecting your cryptocurrency wallet, creating a token, or otherwise using the
              Platform, you acknowledge that you have read, understood, and agree to be bound by these
              Terms, as well as our Privacy Policy. If you are using the Platform on behalf of an
              organization, you represent and warrant that you have the authority to bind that
              organization to these Terms.
            </p>
          </section>

          {/* 2. Eligibility */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Eligibility</h2>
            <p className="text-gray-300 mb-4">To use Solbase, you must:</p>
            <div className="ml-6 space-y-2 text-gray-300 mb-4">
              <p>(a) be at least 18 years of age or the age of legal majority in your jurisdiction, whichever is greater;</p>
              <p>(b) have the legal capacity to enter into a binding agreement;</p>
              <p>(c) not be a resident of, or accessing the Platform from, any jurisdiction where the use of blockchain technology or token creation is prohibited or restricted; and</p>
              <p>(d) not be subject to any sanctions administered or enforced by any government authority.</p>
            </div>
            <p className="text-gray-300 mb-4">
              <strong className="text-white">Sanctioned Jurisdictions:</strong> Specifically, you may
              not use the Platform if you are located in, or a citizen or resident of: Cuba, Iran, North
              Korea, Syria, the Crimea, Donetsk, or Luhansk regions, or any other jurisdiction subject to
              comprehensive U.S. sanctions. This list may be updated as sanctions regimes change.
            </p>
            <p className="text-gray-300">
              You are solely responsible for ensuring that your use of the Platform complies with all
              laws, rules, and regulations applicable to you. We reserve the right to restrict access to
              the Platform from certain jurisdictions at our discretion.
            </p>
          </section>

          {/* 3. Export Compliance */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Export Compliance</h2>
            <p className="text-gray-300">
              The Platform may be subject to U.S. export control laws and regulations. You agree not to
              export, re-export, or transfer the Platform or any technical data received from us to any
              prohibited destination, entity, or person without required government authorization. You
              represent and warrant that you are not located in, under the control of, or a national or
              resident of any sanctioned country or on any prohibited party list.
            </p>
          </section>

          {/* 4. Description of Services */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Description of Services</h2>
            <p className="text-gray-300 mb-4">
              Solbase is a multi-chain token creation platform that enables users to deploy
              cryptocurrency tokens on the Solana and Base blockchain networks. Our Platform provides:
            </p>
            <div className="ml-6 space-y-2 text-gray-300 mb-4">
              <p>(a) a user interface for configuring token parameters such as name, symbol, and total supply;</p>
              <p>(b) smart contract deployment services that execute token creation on the blockchain;</p>
              <p>(c) IPFS storage for token metadata and images; and</p>
              <p>(d) a directory of tokens created through our Platform.</p>
            </div>
            <p className="text-gray-300 mb-4">
              <strong className="text-white">Multi-Chain Deployment:</strong> If you choose to deploy
              tokens on both Solana and Base, these are separate, independent tokens on different
              blockchain networks. They are not bridged, wrapped, or connected in any way. Each
              deployment is a distinct token with its own contract address, requiring separate
              transactions and fees.
            </p>
            <p className="text-gray-300">
              Solbase is a tool that facilitates token creation. We do not provide custody services,
              trading services, investment advice, or any form of financial services. The Platform is
              provided "as is" and "as available."
            </p>
          </section>

          {/* 5. Non-Custodial Nature */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Non-Custodial Nature of the Platform</h2>
            <p className="text-gray-300 mb-4">Solbase is a non-custodial platform. This means:</p>
            <div className="ml-6 space-y-2 text-gray-300 mb-4">
              <p>(a) we never have access to, control over, or custody of your cryptocurrency, private keys, seed phrases, or tokens;</p>
              <p>(b) all transactions are executed directly on the blockchain through your connected wallet;</p>
              <p>(c) you are solely responsible for the security of your wallet and credentials; and</p>
              <p>(d) we cannot reverse, cancel, or modify any blockchain transactions.</p>
            </div>
            <p className="text-gray-300 mb-4">
              You acknowledge and understand that losing access to your wallet (including loss of private
              keys or seed phrases) may result in permanent loss of access to your tokens. Solbase cannot
              recover lost wallets or tokens under any circumstances.
            </p>
            <p className="text-gray-300 mb-2">
              <strong className="text-white">Wallet Security:</strong> You are solely responsible for:
            </p>
            <ul className="list-disc list-inside text-gray-300 ml-4 space-y-1">
              <li>maintaining the confidentiality of your private keys and seed phrases</li>
              <li>ensuring your wallet software is from legitimate sources and up to date</li>
              <li>verifying transaction details before signing</li>
              <li>protecting your devices from malware and unauthorized access</li>
            </ul>
            <p className="text-gray-300 mt-4">
              We strongly recommend using hardware wallets for significant holdings.
            </p>
          </section>

          {/* 6. Fees and Payments */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Fees and Payments</h2>
            <p className="text-gray-300 mb-4">
              Solbase charges a platform fee for token creation services. The current fee structure is:
            </p>
            <div className="ml-6 space-y-2 text-gray-300 mb-4">
              <p>(a) a 1% platform fee on token creation, with a minimum fee of 0.01 SOL for Solana deployments or 0.001 ETH for Base deployments (or as displayed at the time of transaction);</p>
              <p>(b) additional blockchain network fees (gas fees) required by the Solana or Base networks, which are paid directly to the network and not to Solbase.</p>
            </div>
            <p className="text-gray-300">
              All fees are clearly displayed before you confirm any transaction. By confirming a
              transaction, you agree to pay the displayed fees. All fees are{" "}
              <strong className="text-white">non-refundable</strong> once a transaction has been
              submitted to the blockchain, regardless of whether the transaction succeeds or fails. We
              reserve the right to modify our fee structure at any time, with changes taking effect for
              future transactions.
            </p>
          </section>

          {/* 7. User Responsibilities */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. User Responsibilities and Representations</h2>
            <p className="text-gray-300 mb-4">By using Solbase, you represent, warrant, and agree that:</p>
            <div className="space-y-3 text-gray-300">
              <p>
                <strong className="text-white">Legal Compliance:</strong> You will comply with all
                applicable laws, regulations, and rules in your jurisdiction, including but not limited
                to securities laws, anti-money laundering (AML) laws, and tax obligations.
              </p>
              <p>
                <strong className="text-white">Token Responsibility:</strong> You are solely responsible
                for the tokens you create, including their legal status, any representations made about
                them, and their use by others.
              </p>
              <p>
                <strong className="text-white">No Securities:</strong> You will not use Solbase to create
                tokens that constitute securities under applicable law unless you comply with all
                registration and disclosure requirements.
              </p>
              <p>
                <strong className="text-white">Accurate Information:</strong> All information you provide,
                including token metadata, is accurate and not misleading.
              </p>
              <p>
                <strong className="text-white">Intellectual Property:</strong> You have all necessary
                rights to any content you upload, including token names, symbols, and images, and such
                content does not infringe upon the intellectual property rights of any third party.
              </p>
              <p>
                <strong className="text-white">Own Research:</strong> You have conducted your own research
                and understand the risks associated with cryptocurrency, blockchain technology, and token
                creation.
              </p>
            </div>
          </section>

          {/* 8. Prohibited Uses */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. Prohibited Uses</h2>
            <p className="text-gray-300 mb-4">You agree not to use the Platform to:</p>
            <div className="ml-6 space-y-2 text-gray-300 mb-4">
              <p>(a) Create tokens for fraudulent schemes, scams, "rug pulls," pump-and-dump schemes, or any other form of market manipulation;</p>
              <p>(b) Violate any applicable laws, regulations, or third-party rights;</p>
              <p>(c) Engage in money laundering, terrorist financing, or other illegal financial activities;</p>
              <p>(d) Create tokens that impersonate other projects, brands, or individuals without authorization;</p>
              <p>(e) Upload content that is illegal, harmful, threatening, abusive, harassing, defamatory, or otherwise objectionable;</p>
              <p>(f) Interfere with or disrupt the Platform's infrastructure or other users' access;</p>
              <p>(g) Attempt to gain unauthorized access to the Platform or its systems;</p>
              <p>(h) Use automated systems, bots, or scripts to interact with the Platform without our express written permission.</p>
            </div>
            <p className="text-gray-300 mb-4">
              <strong className="text-white">Automated Access:</strong> Use of automated systems, bots,
              scripts, or APIs to interact with the Platform requires our express written permission.
              Unauthorized automated access may result in immediate termination of your access. Future API
              access, if offered, will be subject to separate API Terms of Service.
            </p>
            <p className="text-gray-300">
              <strong className="text-white">Token Removal:</strong> We may remove tokens from the
              Solbase directory (not the blockchain) if they: impersonate established projects or brands,
              are reported for fraudulent activity, contain illegal or harmful content, or violate any
              provision of these Terms. Removal from our directory does not affect the token's existence
              on the blockchain, as we have no control over blockchain data.
            </p>
          </section>

          {/* 9. Intellectual Property */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">9. Intellectual Property</h2>

            <h3 className="text-xl font-semibold text-white mb-3">9.1 Our Intellectual Property</h3>
            <p className="text-gray-300 mb-4">
              The Platform, including its design, features, functionality, and content (excluding
              user-generated content), is owned by Solbase and is protected by copyright, trademark, and
              other intellectual property laws. You may not copy, modify, distribute, sell, or lease any
              part of our Platform without our express written permission.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3">9.2 Your Content</h3>
            <p className="text-gray-300 mb-4">
              You retain ownership of content you create and upload to the Platform (such as token images
              and metadata). By uploading content, you grant Solbase a worldwide, non-exclusive,
              royalty-free license to use, display, reproduce, and distribute such content in connection
              with operating and promoting the Platform.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3">9.3 Token Ownership</h3>
            <p className="text-gray-300">
              Tokens created through Solbase are deployed to your wallet address. Upon successful
              deployment, ownership and control of the token contract transfers to you. Solbase retains
              no ownership interest in tokens you create.
            </p>
          </section>

          {/* 10. Disclaimers */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">10. Disclaimers</h2>

            <h3 className="text-xl font-semibold text-white mb-3">10.1 No Financial Advice</h3>
            <p className="text-yellow-200 font-semibold mb-4">
              SOLBASE DOES NOT PROVIDE FINANCIAL, INVESTMENT, LEGAL, OR TAX ADVICE. Nothing on the
              Platform constitutes a recommendation to buy, sell, or hold any cryptocurrency or token.
              You should consult with qualified professionals before making any financial decisions. Any
              decisions you make based on information from the Platform are made at your own risk.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3">10.2 No Guarantees</h3>
            <p className="text-gray-300 mb-4">We make no guarantees regarding:</p>
            <div className="ml-6 space-y-2 text-gray-300 mb-4">
              <p>(a) the success, value, or performance of any token created through the Platform;</p>
              <p>(b) the functionality or availability of the Solana or Base blockchain networks;</p>
              <p>(c) the accuracy or completeness of information displayed on the Platform;</p>
              <p>(d) the security of smart contracts or blockchain technology; or</p>
              <p>(e) the regulatory status of any token in any jurisdiction.</p>
            </div>

            <h3 className="text-xl font-semibold text-white mb-3">10.3 "As Is" Basis</h3>
            <p className="text-yellow-200 font-semibold mb-4">
              THE PLATFORM IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT WARRANTIES OF ANY
              KIND, WHETHER EXPRESS, IMPLIED, OR STATUTORY. To the fullest extent permitted by law, we
              disclaim all warranties, including but not limited to warranties of merchantability, fitness
              for a particular purpose, non-infringement, and any warranties arising from course of
              dealing or usage of trade.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3">10.4 DYOR - Do Your Own Research</h3>
            <p className="text-gray-300 mb-4">
              The cryptocurrency and blockchain space involves significant risks. You acknowledge that you
              have done your own research and understand these risks before using the Platform. Past
              performance of any token or cryptocurrency is not indicative of future results.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3">10.5 Service Availability</h3>
            <p className="text-gray-300 mb-4">
              We do not guarantee uninterrupted access to the Platform. The Platform may be unavailable
              due to: scheduled or unscheduled maintenance, blockchain network congestion or outages,
              third-party service disruptions, or circumstances beyond our control. We will make
              reasonable efforts to restore service but are not liable for any downtime.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3">10.6 Beta Features</h3>
            <p className="text-gray-300">
              Certain features of the Platform may be labeled as "beta," "experimental," or "preview."
              Such features are provided for testing purposes and may be modified, suspended, or
              discontinued at any time without notice. Beta features are provided "as is" with no
              warranties of any kind, and your use of beta features is at your sole risk.
            </p>
          </section>

          {/* 11. Risk Disclosures */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">11. Risk Disclosures</h2>
            <p className="text-gray-300 mb-4">
              By using Solbase, you acknowledge and accept the following risks:
            </p>
            <div className="space-y-2 text-gray-300">
              <p>
                <strong className="text-white">Market Risk:</strong> Cryptocurrency markets are highly
                volatile. Tokens may lose all of their value.
              </p>
              <p>
                <strong className="text-white">Technical Risk:</strong> Smart contracts may contain bugs
                or vulnerabilities. Blockchain networks may experience downtime, congestion, or failures.
              </p>
              <p>
                <strong className="text-white">Regulatory Risk:</strong> Laws and regulations regarding
                cryptocurrency are evolving and may change. Your tokens may become subject to new
                regulations.
              </p>
              <p>
                <strong className="text-white">Security Risk:</strong> Wallets and private keys can be
                compromised through hacking, phishing, or user error.
              </p>
              <p>
                <strong className="text-white">Irreversibility:</strong> Blockchain transactions are
                irreversible. Errors cannot be undone.
              </p>
              <p>
                <strong className="text-white">Third-Party Risk:</strong> The Platform relies on
                third-party services (blockchain networks, wallet providers, RPC providers) that are
                beyond our control.
              </p>
            </div>
          </section>

          {/* 12. Limitation of Liability */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">12. Limitation of Liability</h2>
            <p className="text-yellow-200 font-semibold mb-4">
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, SOLBASE AND ITS OFFICERS, DIRECTORS,
              EMPLOYEES, AGENTS, AND AFFILIATES SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
              CONSEQUENTIAL, OR PUNITIVE DAMAGES, including but not limited to loss of profits, data, use,
              goodwill, or other intangible losses, resulting from:
            </p>
            <div className="ml-6 space-y-2 text-gray-300 mb-4">
              <p>(a) your access to or use of (or inability to access or use) the Platform;</p>
              <p>(b) any conduct or content of any third party on the Platform;</p>
              <p>(c) any content obtained from the Platform;</p>
              <p>(d) unauthorized access, use, or alteration of your transmissions or content;</p>
              <p>(e) the value or lack thereof of any tokens created through the Platform; or</p>
              <p>(f) any bugs, viruses, or other harmful code that may be transmitted through the Platform.</p>
            </div>
            <p className="text-yellow-200 font-semibold mb-4">
              IN NO EVENT SHALL OUR TOTAL LIABILITY TO YOU FOR ALL CLAIMS EXCEED THE AMOUNT YOU PAID TO US
              IN PLATFORM FEES DURING THE TWELVE (12) MONTHS PRECEDING THE CLAIM, OR ONE HUNDRED DOLLARS
              ($100), WHICHEVER IS GREATER.
            </p>
            <p className="text-gray-300">
              Some jurisdictions do not allow the exclusion or limitation of certain damages, so some of
              the above limitations may not apply to you.
            </p>
          </section>

          {/* 13. Indemnification */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">13. Indemnification</h2>
            <p className="text-gray-300">
              You agree to indemnify, defend, and hold harmless Solbase and its officers, directors,
              employees, agents, and affiliates from and against any and all claims, damages, obligations,
              losses, liabilities, costs, and expenses (including attorney's fees) arising from: (a) your
              use of the Platform; (b) your violation of these Terms; (c) your violation of any
              third-party rights, including intellectual property rights; (d) any tokens you create
              through the Platform; (e) any claims by purchasers or holders of tokens you created; or (f)
              your violation of any applicable laws or regulations.
            </p>
          </section>

          {/* 14. Dispute Resolution */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">14. Dispute Resolution</h2>

            <h3 className="text-xl font-semibold text-white mb-3">14.1 Informal Resolution</h3>
            <p className="text-gray-300 mb-4">
              Before initiating any formal dispute resolution proceeding, you agree to first contact us
              and attempt to resolve any dispute informally. Most concerns can be quickly resolved this
              way.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3">14.2 Arbitration Agreement</h3>
            <p className="text-gray-300 mb-4">
              If informal resolution is unsuccessful, any dispute, controversy, or claim arising out of or
              relating to these Terms or the Platform shall be resolved by binding arbitration, rather
              than in court. There is no judge or jury in arbitration, and court review of an arbitration
              award is limited.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3">14.3 Class Action Waiver</h3>
            <p className="text-yellow-200 font-semibold">
              YOU AND SOLBASE AGREE THAT EACH MAY BRING CLAIMS AGAINST THE OTHER ONLY IN YOUR OR ITS
              INDIVIDUAL CAPACITY AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS OR
              REPRESENTATIVE PROCEEDING.
            </p>
          </section>

          {/* 15. Governing Law */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">15. Governing Law and Jurisdiction</h2>
            <p className="text-gray-300 mb-4">
              These Terms shall be governed by and construed in accordance with the laws of the State of
              Delaware, United States, without regard to its conflict of law provisions. Any legal
              proceedings shall be brought exclusively in the state or federal courts located in
              Wilmington, Delaware, and you consent to personal jurisdiction in such courts.
            </p>
            <p className="text-gray-300">
              This choice of law and jurisdiction does not limit any consumer protection rights you may
              have under the mandatory laws of your jurisdiction.
            </p>
          </section>

          {/* 16. Force Majeure */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">16. Force Majeure</h2>
            <p className="text-gray-300">
              Solbase shall not be liable for any failure or delay in performing our obligations where
              such failure or delay results from causes beyond our reasonable control, including but not
              limited to: natural disasters, war, terrorism, riots, government actions, blockchain network
              failures, internet service disruptions, cyberattacks, or pandemic-related restrictions. In
              such events, our obligations will be suspended for the duration of the force majeure event.
            </p>
          </section>

          {/* 17. Modifications to Terms */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">17. Modifications to Terms</h2>
            <p className="text-gray-300">
              We reserve the right to modify these Terms at any time. If we make material changes, we will
              notify users by posting the updated Terms on our website with a new "Last Updated" date.
              Changes are effective immediately upon posting. Your continued use of the Platform after any
              changes constitutes acceptance of the modified Terms. We encourage you to review these Terms
              periodically.
            </p>
          </section>

          {/* 18. Modifications to Platform */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">18. Modifications to Platform</h2>
            <p className="text-gray-300">
              We reserve the right to modify, suspend, or discontinue the Platform (or any part thereof)
              at any time, with or without notice. We shall not be liable to you or any third party for
              any modification, suspension, or discontinuation of the Platform.
            </p>
          </section>

          {/* 19. Termination */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">19. Termination</h2>
            <p className="text-gray-300">
              We may terminate or suspend your access to the Platform immediately, without prior notice or
              liability, for any reason, including if you breach these Terms. Upon termination, your right
              to use the Platform will immediately cease. Tokens already deployed to the blockchain will
              remain on the blockchain, as we have no control over blockchain data. All provisions of
              these Terms which by their nature should survive termination shall survive, including
              ownership provisions, warranty disclaimers, indemnification, and limitations of liability.
            </p>
          </section>

          {/* 20. Severability */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">20. Severability</h2>
            <p className="text-gray-300">
              If any provision of these Terms is held to be invalid, illegal, or unenforceable, such
              provision shall be modified to the minimum extent necessary to make it valid, legal, and
              enforceable. If such modification is not possible, the provision shall be severed from these
              Terms. The invalidity of any provision shall not affect the validity of any other provision
              of these Terms.
            </p>
          </section>

          {/* 21. Entire Agreement */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">21. Entire Agreement</h2>
            <p className="text-gray-300">
              These Terms, together with our Privacy Policy and any other legal notices published by us on
              the Platform, constitute the entire agreement between you and Solbase regarding your use of
              the Platform and supersede all prior and contemporaneous understandings, agreements,
              representations, and warranties.
            </p>
          </section>

          {/* 22. Waiver */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">22. Waiver</h2>
            <p className="text-gray-300">
              Our failure to enforce any right or provision of these Terms shall not constitute a waiver
              of such right or provision. Any waiver of any provision of these Terms will be effective
              only if in writing and signed by us.
            </p>
          </section>

          {/* 23. Contact Information */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">23. Contact Information</h2>
            <p className="text-gray-300">
              If you have any questions about these Terms, please contact us through our official social
              media channels on{" "}
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
              . For legal inquiries, please include "Legal" in your message subject.
            </p>
          </section>

          {/* 24. Acknowledgment */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">24. Acknowledgment</h2>
            <p className="text-yellow-200 font-semibold mb-4">
              BY USING SOLBASE, YOU ACKNOWLEDGE THAT YOU HAVE READ THESE TERMS AND CONDITIONS, UNDERSTAND
              THEM, AND AGREE TO BE BOUND BY THEM. YOU FURTHER ACKNOWLEDGE THAT THESE TERMS CONSTITUTE THE
              COMPLETE AND EXCLUSIVE STATEMENT OF THE AGREEMENT BETWEEN YOU AND SOLBASE, AND THAT THEY
              SUPERSEDE ANY PRIOR OR CONTEMPORANEOUS PROPOSALS, COMMUNICATIONS, OR AGREEMENTS, WHETHER
              ORAL OR WRITTEN.
            </p>
            <p className="text-gray-300">
              You acknowledge the inherent risks of cryptocurrency and blockchain technology, including
              market volatility, technical vulnerabilities, and regulatory uncertainty. You agree that
              Solbase is a tool for token creation and not a provider of financial services or advice.
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

export default function TermsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#0A0A0A]" />}>
      <TermsContent />
    </Suspense>
  );
}
