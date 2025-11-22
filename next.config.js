/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {},
  experimental: {
    serverComponentsExternalPackages: [
      'pino',
      'pino-pretty',
      '@solana/wallet-adapter-wallets',
      '@walletconnect/ethereum-provider'
    ]
  }
};

module.exports = nextConfig;
