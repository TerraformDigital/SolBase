export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  publishDate: string;
  readTime: string;
  heroImage: string;
  category: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "why-we-built-solbase",
    title: "Why We Built Solbase and What It Means for Token Creators Everywhere",
    description: "Discover why we built Solbase, the multi-chain token launcher that makes creating tokens on Solana and Base simple. No coding required. Launch in 60 seconds.",
    publishDate: "2025-11-25",
    readTime: "5 min read",
    heroImage: "/images/blog/why-we-built-solbase.jpg",
    category: "Company",
    content: `# Why We Built Solbase and What It Means for Token Creators Everywhere

Picture this. You have a great idea for a community token. Maybe it is for your Discord server, your creative project, or a new venture you are launching. You are ready to bring it to life on the blockchain. Then reality hits.

You find yourself buried in documentation. Tutorials assume you already know Rust or Solidity. Developer quotes come back in the thousands. Hours turn into days, and your excitement slowly fades into frustration.

We kept asking ourselves a simple question. Why is creating a token still so hard? This question led us to build Solbase, a token creation platform designed for real people with real ideas.

## The Problem Nobody Was Solving

### A Fragmented Landscape

The crypto space has grown incredibly fast. But that growth came with fragmentation. If you want to launch on Solana, you need one set of tools. If you prefer Base, you need something completely different.

Each ecosystem has its own wallets, its own interfaces, and its own learning curves. For someone who just wants to create a token, this fragmentation creates unnecessary confusion. There was no unified experience that let you choose your chain and simply launch.

### Complexity as a Barrier

Here is the irony of Web3. It promises decentralization and accessibility for everyone. Yet creating a token requires you to understand smart contracts, command line tools, and blockchain-specific programming languages.

We watched talented creators give up before they even started. Not because their ideas were bad. But because the technical barriers were too high. The space desperately needed a multi-chain token launcher that removed these obstacles entirely.

## What Inspired the Solbase App

### Seeing the Gap Firsthand

Working in the digital space, we saw this problem constantly. Clients and community members would come to us excited about launching tokens. They had solid concepts, engaged audiences, and clear visions for what they wanted to build.

Then they would hit the wall. Some hired developers and spent thousands of dollars. Others tried to learn everything themselves and burned out after weeks of struggle. Many simply walked away from projects that could have been great.

### The Question That Started Everything

One day, we asked ourselves a different question. What if creating a token was as simple as filling out a form? What if you could go from idea to deployed token in under a minute?

That question became the foundation of the Solbase app. We committed to building something that would remove every unnecessary barrier. And we decided from day one that it would support multiple chains. Creators should be able to choose between Solana and Base without learning two completely different systems.

## Building a Multi-Chain Token Launcher That Actually Works

### One Platform for Two Powerful Chains

We chose Solana and Base for specific reasons. Solana offers incredible speed and low transaction costs. Base brings the security of Ethereum with significantly reduced fees. Both chains have thriving ecosystems and passionate communities.

With Solbase, you get access to both through a single interface. The experience stays the same regardless of which chain you choose. Pick your network, configure your token, and deploy. That is it.

### Zero Coding Required

We designed the entire process around simplicity. You connect your wallet. You fill out a form with your token name, symbol, and supply. You upload an image if you want one. Then you click deploy.

The whole process takes about 60 seconds. Behind the scenes, our platform handles all the technical complexity. Smart contract deployment, metadata storage, token account creation. You never have to touch a single line of code.

### Transparent and Simple Pricing

We believe in straightforward pricing with no surprises. Solbase charges a simple 1% platform fee on token creation. There are no hidden costs, no monthly subscriptions, and no premium tiers required to access basic features.

Compare that to hiring a developer or spending weeks learning to code. Our token creation platform makes launching accessible to solo creators, small teams, and anyone with a vision but limited technical resources.

## Our Vision for Token Creation

### Democratizing Access to Web3

Think about what website builders did for the internet. Before platforms like Squarespace and Wix, creating a website required hiring a developer or learning HTML and CSS. Those tools opened the door for millions of people to build their online presence.

We believe token creation deserves the same transformation. Technical knowledge should not be a gatekeeper. Every creator, every community, and every project deserves access to blockchain technology.

### More Than Just a Tool

Solbase is not just about deployment. We care about the people using our platform and the projects they are building. That means focusing on education, support, and community.

The tokens created through Solbase matter to us. We want to enable legitimate projects that bring value to their communities. Our goal is to be a launchpad for ideas that might never have existed without accessible tools.

## What Comes Next for Solbase

We are just getting started. Our roadmap includes liquidity pool integrations, advanced token features, and expanded support for creators at every stage of their journey.

Most importantly, we are building this with our community. Your feedback shapes what we prioritize. Your needs drive our development. This is not a product built in isolation. It is a platform growing alongside the people who use it.

Token creation should be simple. That belief drove us to build Solbase, and it continues to guide every decision we make. Whether you are launching your first token or your tenth, we built this platform for you.

**Ready to bring your idea to life?** Launch your first token on Solbase today. Connect your wallet, configure your token, and deploy in 60 seconds. No coding required. No complexity. Just your idea, live on the blockchain.`,
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => {
    return new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime();
  });
}
