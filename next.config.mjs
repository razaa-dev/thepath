/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Warning: This allows all errors to be ignored
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: "portfolio-image-store.s3.ap-south-1.amazonaws.com",
      },
      {
        hostname: "res.cloudinary.com",
      },
    ],
  },
};

export default nextConfig;
