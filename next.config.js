/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")]
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**images.unsplash.com"
      },
      {
        protocol: "https",
        hostname: "**.notion.so"
      },
      {
        protocol: "https",
        hostname: "**.amazonaws.com"
      }
    ]
  }
};

module.exports = nextConfig;
