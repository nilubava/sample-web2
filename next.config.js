/**
 * @type {import('next').NextConfig}
 */
 const nextConfig = {
    /* config options here */
    trailingSlash: undefined,
    async rewrites() {
        return [
          {
            source: "/web1-test/:any*",
            destination: "https://sample-web-pi.vercel.app/:any*",
          },
        ]
      },
  }
  
  module.exports = nextConfig