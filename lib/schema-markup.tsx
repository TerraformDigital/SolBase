import { SITE_URL, SOCIAL_LINKS } from './seo-config';

// Organization Schema (use in root layout)
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: 'Solbase',
  url: SITE_URL,
  logo: `${SITE_URL}/images/SolBase-logo-final.png`,
  description: 'Multi-chain token launcher for Solana and Base blockchains.',
  sameAs: [SOCIAL_LINKS.twitter, SOCIAL_LINKS.discord],
};

// Website Schema (use in root layout)
export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: SITE_URL,
  name: 'Solbase',
  description: 'Launch tokens on Solana and Base in 60 seconds',
  publisher: { '@id': `${SITE_URL}/#organization` },
};

// FAQ Schema (use on /faq page)
export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is Solbase?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Solbase is a multi-chain token launcher that allows you to create tokens on Solana and Base blockchains in under 60 seconds. No coding knowledge is required.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does it cost to create a token?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Solbase charges a 1% platform fee on token creation with a minimum of $5. Plus blockchain network fees (typically $3-10 total).',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need coding knowledge?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No! Simply connect your wallet, fill in token details, and click deploy. The platform handles all technical blockchain interactions.',
      },
    },
    {
      '@type': 'Question',
      name: 'What blockchains are supported?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Solbase currently supports Solana and Base blockchains.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does token creation take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Approximately 60 seconds from start to finish.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which wallets are supported?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For Solana: Phantom, Solflare, Backpack. For Base: MetaMask, Coinbase Wallet, WalletConnect.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Solbase safe?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Solbase is non-custodial - we never have access to your private keys. All transactions are signed in your wallet.',
      },
    },
  ],
};

// HowTo Schema (use on /launch page)
export const launchHowToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Create a Token on Solana or Base',
  description: 'Step-by-step guide to creating your own cryptocurrency token.',
  totalTime: 'PT1M',
  estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '5-10' },
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Connect Wallet', text: 'Connect your crypto wallet (Phantom, MetaMask, etc.)' },
    { '@type': 'HowToStep', position: 2, name: 'Choose Blockchain', text: 'Select Solana or Base for your token' },
    { '@type': 'HowToStep', position: 3, name: 'Enter Details', text: 'Fill in token name, symbol, supply, and logo' },
    { '@type': 'HowToStep', position: 4, name: 'Deploy', text: 'Review and approve the transaction in your wallet' },
    { '@type': 'HowToStep', position: 5, name: 'Done!', text: 'Your token is live! Get contract address and share.' },
  ],
};

// Schema component for Next.js
export function SchemaMarkup({ schemas }: { schemas: object | object[] }) {
  const schemaArray = Array.isArray(schemas) ? schemas : [schemas];
  return (
    <>
      {schemaArray.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
