/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {},
  experimental: {
    serverComponentsExternalPackages: ['pino', 'pino-pretty']
  }
};

module.exports = nextConfig;
