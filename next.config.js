// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    remotePatterns: [{
       hostname: 'ap-south-1.graphassets.com',
    }]
  },
}
 
module.exports = nextConfig

