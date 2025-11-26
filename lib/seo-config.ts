/**
 * SOLBASE SEO CONFIGURATION
 * Complete metadata for all pages
 */

export const SITE_URL = 'https://www.solbase.app';

export const SOCIAL_LINKS = {
  twitter: 'https://x.com/SolBaseApp',
  discord: 'https://discord.gg/UWRT83TE',
} as const;

export const TWITTER_HANDLE = '@SolBaseApp';

export const DEFAULT_OG_IMAGE = `${SITE_URL}/images/solbase-og.jpg`;

interface PageSEO {
  title: string;
  description: string;
  h1: string;
  canonical: string;
  ogImage?: string;
  keywords?: string;
}

export const PAGE_SEO: Record<string, PageSEO> = {
  '/': {
    title: 'Solbase | Launch Tokens on Solana and Base in 60 Seconds',
    description: 'Create and launch tokens on Solana and Base blockchains in under 60 seconds. No coding required. Simple 1% fee. The easiest multi-chain token launcher.',
    h1: 'Launch Tokens on Solana and Base',
    canonical: SITE_URL,
    ogImage: `${SITE_URL}/images/solbase-home-og.jpg`,
    keywords: 'token launcher, solana token creator, base token creator, create crypto token, meme coin creator',
  },
  '/launch': {
    title: 'Create Token | Launch on Solana or Base in 60 Seconds | Solbase',
    description: 'Create your own token on Solana or Base blockchain in 60 seconds. No coding needed. Connect wallet, enter details, deploy. Simple 1% platform fee.',
    h1: 'Create Your Token',
    canonical: `${SITE_URL}/launch`,
    ogImage: `${SITE_URL}/images/solbase-launch-og.jpg`,
    keywords: 'create token, launch token, solana token, base token, deploy crypto',
  },
  '/tokens': {
    title: 'Browse Tokens | Tokens Launched on Solbase | Solana & Base',
    description: 'Explore tokens created on Solbase. Browse tokens launched on Solana and Base blockchains. View token details, contract addresses, and creators.',
    h1: 'Explore Tokens',
    canonical: `${SITE_URL}/tokens`,
    ogImage: `${SITE_URL}/images/solbase-tokens-og.jpg`,
    keywords: 'browse tokens, solana tokens, base tokens, crypto tokens, meme coins',
  },
  '/swap': {
    title: 'Swap Tokens | Trade on Solana & Base | Solbase',
    description: 'Swap tokens instantly on Solana and Base. Low fees, best rates powered by Jupiter and 0x aggregators. Trade crypto seamlessly.',
    h1: 'Swap Tokens',
    canonical: `${SITE_URL}/swap`,
    ogImage: `${SITE_URL}/images/solbase-swap-og.jpg`,
    keywords: 'swap tokens, token swap, solana swap, base swap, jupiter, 0x',
  },
  '/faq': {
    title: 'FAQ | Token Creation Questions Answered | Solbase',
    description: 'Get answers about creating tokens on Solana and Base. Learn about fees, wallets, security, and how to launch your token in 60 seconds with Solbase.',
    h1: 'Frequently Asked Questions',
    canonical: `${SITE_URL}/faq`,
    keywords: 'solbase faq, token creation questions, solana token help, base token help',
  },
  '/docs': {
    title: 'Documentation | How to Use Solbase | Developer Guides',
    description: 'Complete documentation for Solbase token launcher. Step-by-step guides for creating tokens on Solana and Base. API docs and integration guides.',
    h1: 'Documentation',
    canonical: `${SITE_URL}/docs`,
    keywords: 'solbase docs, token launcher documentation, api docs, developer guides',
  },
  '/blog': {
    title: 'Blog | Token Creation Guides & Blockchain Insights | Solbase',
    description: 'Learn about token creation, blockchain technology, and crypto trends. Tutorials, comparisons, and insights for launching tokens on Solana and Base.',
    h1: 'Solbase Blog',
    canonical: `${SITE_URL}/blog`,
    keywords: 'crypto blog, token creation guides, blockchain tutorials',
  },
  '/blog/why-we-built-solbase': {
    title: 'Why We Built Solbase | Our Story & Mission | Solbase',
    description: 'Discover why we built Solbase, the multi-chain token launcher that makes creating tokens on Solana and Base simple. No coding required. Launch in 60 seconds.',
    h1: 'Why We Built Solbase and What It Means for Token Creators Everywhere',
    canonical: `${SITE_URL}/blog/why-we-built-solbase`,
    ogImage: `${SITE_URL}/images/blog/why-we-built-solbase-og.jpg`,
  },
  '/blog/how-to-create-token-solana-base': {
    title: 'How to Create a Token on Solana or Base in 60 Seconds | Tutorial',
    description: 'Learn how to create a token on Solana or Base in 60 seconds with no coding. Step-by-step tutorial using Solbase, the easiest crypto token creator.',
    h1: 'How to Create a Token on Solana or Base in 60 Seconds Without Coding',
    canonical: `${SITE_URL}/blog/how-to-create-token-solana-base`,
    ogImage: `${SITE_URL}/images/blog/how-to-create-token-og.jpg`,
  },
  '/blog/solana-vs-base-token-launch': {
    title: 'Solana vs Base: Which Blockchain for Your Token? | Comparison',
    description: 'Solana vs Base: Compare speed, fees, and ecosystem to decide which blockchain is best for your token. Honest comparison for meme coins and projects.',
    h1: 'Solana vs Base: Which Blockchain Should You Launch Your Token On',
    canonical: `${SITE_URL}/blog/solana-vs-base-token-launch`,
    ogImage: `${SITE_URL}/images/blog/solana-vs-base-og.jpg`,
  },
  '/privacy': {
    title: 'Privacy Policy | Solbase',
    description: 'Solbase privacy policy. Learn how we collect, use, and protect your data when using our token launcher platform.',
    h1: 'Privacy Policy',
    canonical: `${SITE_URL}/privacy`,
  },
  '/terms': {
    title: 'Terms and Conditions | Solbase',
    description: 'Terms and conditions for using Solbase token launcher. Read our terms of service for creating tokens on Solana and Base.',
    h1: 'Terms and Conditions',
    canonical: `${SITE_URL}/terms`,
  },
};

// Helper function to generate Next.js Metadata
export function generatePageMetadata(path: string) {
  const seo = PAGE_SEO[path];
  if (!seo) return {};

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    alternates: {
      canonical: seo.canonical,
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: seo.canonical,
      siteName: 'Solbase',
      images: [{ url: seo.ogImage || DEFAULT_OG_IMAGE, width: 1200, height: 630 }],
      locale: 'en_US',
      type: path.startsWith('/blog/') && path !== '/blog' ? 'article' : 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.title,
      description: seo.description,
      site: TWITTER_HANDLE,
      creator: TWITTER_HANDLE,
      images: [seo.ogImage || DEFAULT_OG_IMAGE],
    },
    robots: {
      index: true,
      follow: true,
      'max-image-preview': 'large' as const,
    },
  };
}

export function getH1(path: string): string {
  return PAGE_SEO[path]?.h1 || 'Solbase';
}
