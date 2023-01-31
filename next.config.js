/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['tsx', 'ts'],
  // unstable_runtimeJS: false,

  compiler: {
    // removeConsole: false,
  },
};

module.exports = nextConfig;
