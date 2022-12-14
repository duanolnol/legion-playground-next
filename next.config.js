/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["legion-dev.vercel.app", "i.kym-cdn.com"]
 }
}

module.exports = nextConfig
