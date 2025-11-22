/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {},
  serverExternalPackages: [
    'pino',
    'pino-pretty',
    '@solana/wallet-adapter-wallets',
    '@walletconnect/ethereum-provider'
  ]
};

module.exports = nextConfig;
