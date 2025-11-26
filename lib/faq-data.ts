export interface FAQQuestion {
  question: string;
  answer: string;
}

export interface FAQCategory {
  id: string;
  title: string;
  questions: FAQQuestion[];
}

export const faqCategories: FAQCategory[] = [
  {
    id: "getting-started",
    title: "Getting Started",
    questions: [
      {
        question: "What is Solbase",
        answer:
          "Solbase is a multi-chain token launcher that lets you create tokens on Solana and Base blockchains in about 60 seconds. No coding knowledge is required. You connect your wallet, fill out a simple form, and deploy your token directly to the blockchain.",
      },
      {
        question: "Who is Solbase for",
        answer:
          "Solbase is designed for creators, communities, entrepreneurs, and anyone who wants to launch a token without hiring developers or learning to code. Whether you are building a meme coin, a community token, or a project utility token, Solbase makes the process accessible.",
      },
      {
        question: "Do I need coding knowledge to use Solbase",
        answer:
          "No. Solbase handles all technical aspects automatically. You fill out a form with your token details and click deploy. The platform manages smart contract deployment, metadata storage, and token account creation behind the scenes.",
      },
      {
        question: "Do I need to create an account to use Solbase",
        answer:
          "No. Solbase does not require account creation. Your crypto wallet serves as your identity. Connect your wallet and you are ready to create tokens immediately.",
      },
      {
        question: "What blockchains does Solbase support",
        answer:
          "Solbase currently supports two blockchains: Solana and Base. Solana is a high-speed Layer 1 blockchain. Base is an Ethereum Layer 2 built by Coinbase. You can create tokens on either chain or both.",
      },
      {
        question: "Is Solbase available worldwide",
        answer:
          "Solbase is available in most countries. However, users in certain jurisdictions including Cuba, Iran, North Korea, Syria, and the Crimea, Donetsk, and Luhansk regions cannot use the platform due to regulatory restrictions.",
      },
    ],
  },
  {
    id: "token-creation",
    title: "Token Creation",
    questions: [
      {
        question: "How long does it take to create a token on Solbase",
        answer:
          "The entire process takes approximately 60 seconds. This includes connecting your wallet, filling out the token details form, and waiting for blockchain confirmation. Solana confirmations typically take 5 to 10 seconds. Base confirmations take 10 to 30 seconds.",
      },
      {
        question: "What information do I need to create a token",
        answer:
          "You need a token name, a token symbol (typically 3 to 6 characters), and a total supply amount. Optionally, you can add a token image, description, and social media links. Having these details ready before you start makes the process faster.",
      },
      {
        question: "Can I create a token with the same name as an existing token",
        answer:
          "Yes, technically you can use any name. However, using names of established tokens may confuse users and could create legal issues. We recommend choosing a unique name that represents your project.",
      },
      {
        question: "What is the maximum token supply I can set",
        answer:
          "You can set a total supply up to 1 trillion tokens. The minimum supply is 1 token. Choose a supply that makes sense for your project and community size.",
      },
      {
        question: "Can I change my token details after creation",
        answer:
          "No. Token details cannot be changed after deployment. Blockchain transactions are permanent and immutable. Always double check your token name, symbol, and supply before confirming the transaction.",
      },
      {
        question: "Can I add a token image or logo",
        answer:
          "Yes. You can upload a square image in PNG or JPG format during the creation process. A logo helps your token stand out and look professional in wallets and on block explorers.",
      },
      {
        question: "What happens to my token after I create it",
        answer:
          "After creation, your token exists on the blockchain permanently. You receive the full supply in your connected wallet. You own the token and can transfer, distribute, or add liquidity as you choose.",
      },
      {
        question: "Can I create multiple tokens",
        answer:
          "Yes. You can create as many tokens as you want on either blockchain. Each token deployment is a separate transaction with its own fee.",
      },
      {
        question: "Can I create the same token on both Solana and Base",
        answer:
          "Yes. You can create tokens with the same name and symbol on both chains. They will be completely separate tokens with different contract addresses, allowing you to have presence in both ecosystems.",
      },
    ],
  },
  {
    id: "fees-and-costs",
    title: "Fees and Costs",
    questions: [
      {
        question: "How much does it cost to create a token on Solbase",
        answer:
          "Solbase charges a 1% platform fee with minimums of 0.01 SOL for Solana or 0.001 ETH for Base. You also pay standard blockchain network fees. Total cost is typically $2 to $5 on Solana and $3 to $8 on Base depending on network conditions.",
      },
      {
        question: "What payment methods does Solbase accept",
        answer:
          "Solbase accepts cryptocurrency only. Pay with SOL for Solana token creation or ETH for Base token creation. The fee is deducted automatically during the deployment transaction.",
      },
      {
        question: "Are there any hidden fees",
        answer:
          "No. Solbase has transparent pricing with no hidden costs. You see the exact platform fee and estimated network fee before confirming any transaction. There are no monthly subscriptions or premium tiers required for basic features.",
      },
      {
        question: "Why do fees vary between Solana and Base",
        answer:
          "Solana and Base have different network architectures and fee structures. Solana fees are generally lower and more stable. Base fees can vary based on Ethereum mainnet congestion since Base is a Layer 2 that settles transactions on Ethereum.",
      },
      {
        question: "Do I pay fees if my transaction fails",
        answer:
          "Network fees may still apply for failed transactions as the blockchain processed the attempt. However, the Solbase platform fee is only charged on successful token deployments.",
      },
      {
        question: "Can I get a refund after creating a token",
        answer:
          "No. Blockchain transactions are irreversible and fees cannot be refunded. This is why we encourage you to review all details carefully before confirming deployment.",
      },
    ],
  },
  {
    id: "wallets-and-security",
    title: "Wallets and Security",
    questions: [
      {
        question: "What wallets work with Solbase for Solana",
        answer:
          "For Solana token creation, Solbase supports Phantom, Solflare, and Backpack wallets. Phantom is the most popular choice among Solana users.",
      },
      {
        question: "What wallets work with Solbase for Base",
        answer:
          "For Base token creation, Solbase supports MetaMask, Coinbase Wallet, Rainbow, and other WalletConnect compatible wallets. MetaMask has the largest user base among EVM wallets.",
      },
      {
        question: "Is Solbase safe to use",
        answer:
          "Yes. Solbase is non-custodial, meaning we never have access to your funds or private keys. All transactions are signed in your own wallet. We do not store sensitive information. Your tokens go directly to your wallet upon creation.",
      },
      {
        question: "Does Solbase have access to my private keys",
        answer:
          "No. Solbase never requests or has access to your private keys or seed phrase. All wallet interactions happen through standard wallet connection protocols. Never share your private keys with anyone.",
      },
      {
        question: "What data does Solbase collect",
        answer:
          "Solbase collects minimal data. We use privacy-friendly analytics without tracking cookies. Token metadata you provide is stored on IPFS. Blockchain transactions are public by nature. We do not collect personal information or require email addresses.",
      },
      {
        question: "Can someone steal my tokens after I create them",
        answer:
          "Your tokens are secured by your wallet. As long as you keep your private keys and seed phrase safe, only you can access your tokens. Use strong security practices including hardware wallets for significant holdings.",
      },
      {
        question: "What happens if I lose access to my wallet",
        answer:
          "If you lose access to your wallet, you lose access to your tokens. Solbase cannot recover tokens or wallet access. Always backup your seed phrase securely and consider using a hardware wallet.",
      },
    ],
  },
  {
    id: "solana-vs-base",
    title: "Solana vs Base",
    questions: [
      {
        question: "Which blockchain should I choose for my token",
        answer:
          "Choose Solana for maximum speed, lowest fees, and access to the established meme coin community. Choose Base for Ethereum ecosystem access, existing MetaMask users, and institutional credibility. Neither is universally better. The right choice depends on your project goals.",
      },
      {
        question: "Which blockchain is faster for token creation",
        answer:
          "Solana is faster with approximately 400 millisecond block times. Base has block times of approximately 2 seconds. Both feel nearly instant to users, but Solana has the edge for raw speed.",
      },
      {
        question: "Which blockchain has lower fees",
        answer:
          "Solana typically has lower and more predictable fees. Transaction fees are usually under $0.01 on Solana compared to $0.01 to $0.10 on Base. Token creation costs $2 to $5 on Solana versus $3 to $8 on Base.",
      },
      {
        question: "Which blockchain is better for meme coins",
        answer:
          "Solana has the most established meme coin culture with deep liquidity on decentralized exchanges like Raydium and Jupiter. The community tends to be highly engaged traders who move quickly on new projects, making it the popular choice for meme coins.",
      },
      {
        question: "Can my token work on both Solana and Base",
        answer:
          "Tokens created on Solana and Base are separate and independent. They do not automatically bridge between chains. You can create tokens on both chains with the same branding, but they will have different contract addresses and exist in separate ecosystems.",
      },
      {
        question: "What is Base and how is it different from Ethereum",
        answer:
          "Base is a Layer 2 blockchain built on top of Ethereum by Coinbase. It inherits Ethereum security while offering significantly lower fees and faster transactions. Base uses ETH for gas fees and connects to the broader Ethereum DeFi ecosystem.",
      },
    ],
  },
  {
    id: "after-launch",
    title: "After Launch",
    questions: [
      {
        question: "Where can I see my token after creation",
        answer:
          "Your token appears in your connected wallet immediately after creation. You can also view it on blockchain explorers. Use Solscan for Solana tokens and Basescan for Base tokens. The success screen provides direct links to your token.",
      },
      {
        question: "How do I share my token with others",
        answer:
          "Share your token contract address so others can find and add it to their wallets. You can also share the block explorer link. The Solbase success screen includes share buttons for social media.",
      },
      {
        question: "Is my token tradeable immediately after creation",
        answer:
          "Your token exists on the blockchain immediately but trading requires liquidity. Without liquidity on a decentralized exchange, people can hold and transfer your token but cannot buy or sell it through trading.",
      },
      {
        question: "How do I add liquidity so people can trade my token",
        answer:
          "Adding liquidity requires pairing your token with another asset on a decentralized exchange. For Solana, popular options include Raydium and Orca. For Base, most creators use Uniswap. Liquidity provision has its own risks and considerations.",
      },
      {
        question: "What is liquidity and why does my token need it",
        answer:
          "Liquidity refers to assets deposited in a trading pool that allow buying and selling. Without liquidity, there are no tokens available for others to purchase. You as the creator typically provide initial liquidity by pairing your token with SOL or ETH.",
      },
      {
        question: "Can I burn or destroy tokens after creation",
        answer:
          "Yes, you can burn tokens by sending them to a burn address. This permanently removes them from circulation. However, this is an advanced action done outside of Solbase through direct blockchain transactions.",
      },
      {
        question: "How do I promote my new token",
        answer:
          "Announce your token on social media platforms like X, Discord, and Telegram. Share the contract address and block explorer link. Build community around your project. Consider the purpose and utility of your token beyond just trading.",
      },
    ],
  },
  {
    id: "troubleshooting",
    title: "Troubleshooting",
    questions: [
      {
        question: "My wallet is not connecting. What should I do",
        answer:
          "First, make sure your wallet extension is installed and unlocked. Try refreshing the page. Check that you are on the correct network in your wallet. For Base tokens, ensure you are connected to Base network, not Ethereum mainnet. If problems persist, try a different browser.",
      },
      {
        question: "My transaction failed. What happened",
        answer:
          "Transactions can fail for several reasons including insufficient funds for fees, network congestion, or wallet connection issues. Check your wallet balance and try again. If the problem continues, wait a few minutes as the network may be congested.",
      },
      {
        question: "I do not see my token in my wallet",
        answer:
          "Some wallets require you to manually add custom tokens. Copy your token contract address from the success screen or block explorer. In your wallet, look for an option to import or add a custom token and paste the address.",
      },
      {
        question: "The fee shown is higher than expected",
        answer:
          "Network fees fluctuate based on blockchain congestion. During high activity periods, fees may be higher than typical. You can wait for lower congestion or proceed with the current fee. Solbase shows real-time fee estimates before you confirm.",
      },
      {
        question: "My token shows zero value in my wallet",
        answer:
          "This is normal for new tokens. Wallet value displays are based on market price data. New tokens without trading activity or exchange listings will not have a tracked value. This does not affect your actual token holdings.",
      },
      {
        question: "Can I cancel a transaction after submitting",
        answer:
          "No. Once a blockchain transaction is submitted, it cannot be cancelled. Transactions are either confirmed or fail based on network processing. This is why reviewing all details before confirming is important.",
      },
      {
        question: "Who do I contact for support",
        answer:
          "For questions and support, reach out on our official X account or join our Discord community. We respond to inquiries as quickly as possible. For technical issues, provide your transaction hash or wallet address to help us assist you.",
      },
      {
        question: "I think I found a bug. How do I report it",
        answer:
          "We appreciate bug reports. Contact us through X or Discord with details about what happened, what you expected, and any error messages you saw. Screenshots help us identify and fix issues faster.",
      },
    ],
  },
];
