/* eslint-disable @typescript-eslint/no-var-requires */
const { withSentryConfig } = require('@sentry/nextjs');
const bundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  experimental: {
    appDir: true,
  },
  async rewrites() {
    return {
      fallback: [
        {
          source: '/:path*',
          destination: `https://${process.env.LEGACY_SHOPIFY_DOMAIN}/:path*`,
        },
      ],
    };
  },
};

module.exports = bundleAnalyzer(nextConfig);


