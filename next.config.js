/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.externals.push('pino-pretty', 'lokijs', 'encoding');

    config.module = config.module || {};
    config.module.rules = config.module.rules || [];

    // Ignore test files and other problematic files
    config.module.rules.push({
      test: /\.test\.(js|ts|mjs)$/,
      loader: 'ignore-loader'
    });

    return config;
  },
  // Ignore test directories during build
  excludePaths: [
    '**/node_modules/**/test/**',
    '**/node_modules/**/*.test.js',
    '**/node_modules/**/*.test.ts'
  ]
};

module.exports = nextConfig;
