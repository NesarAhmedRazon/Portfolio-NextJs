/** @type {import('next').NextConfig} */
const nextConfig = {
  logging: {
    fetches: {
      fullUrl: true
    }
  },
  rewrites: async () => [
    {
      source: "/gql", // Matched parameters can be used in the destination
      destination: `${process.env.WP_URL}/graphql` // Matched parameters can be used in the destination
    },
    {
      source: "/assets/:path*", // Matched parameters can be used in the destination
      destination: `${process.env.WP_URL}/wp-content/uploads/:path*` // Matched parameters can be used in the destination
    }
  ],
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
