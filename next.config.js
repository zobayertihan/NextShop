/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // domains: ["cdn.imagin.studio"],
    unoptimized: true,
  },
  //   distDir: "build",
  // output: "export",
};

module.exports = nextConfig;
