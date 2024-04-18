/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mrudul-bucket1-s3.s3.us-east-2.amazonaws.com",
      },
    ],
  },
};

export default nextConfig;
