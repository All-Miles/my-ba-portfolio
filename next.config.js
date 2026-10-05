/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: '/my-ba-portfolio',
  assetPrefix: '/my-ba-portfolio/',
}
module.exports = nextConfig
