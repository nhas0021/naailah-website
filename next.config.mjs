/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/naailah-website",
  assetPrefix: "/naailah-website/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;