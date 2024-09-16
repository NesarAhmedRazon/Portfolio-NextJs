/** @type {import('next').NextConfig} */
const nextConfig = {
  logging: {
    fetches: {
      fullUrl: true
    }
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "nesarahmed.dev",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "smdpicker.com",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**"
      },
      {
        protocol: "http",
        hostname: "localhost",
        pathname: "/**"
      }
    ]
  }
};

export default nextConfig;
