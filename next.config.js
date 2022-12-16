const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // assetPrefix: isProd ? "/personal/" : "",
  // images: {
  //   unoptimized: true
  // },
  reactStrictMode: true
};

module.exports = nextConfig;
