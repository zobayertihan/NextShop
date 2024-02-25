/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["petraimages.com.s3.amazonaws.com"],
    unoptimized: true,
  },
  swcMinfy: false,
  //   distDir: "build",
  // output: "export",
};

module.exports = nextConfig;
