/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // ✅ Local backend (development)
      {
        protocol: "http",
        hostname: "localhost",
        port: "5000",
        pathname: "/uploads/**",
      },

      // ✅ Current Heroku backend (uploads)
      {
        protocol: "https",
        hostname: "shoesstop-126c33a9fb43.herokuapp.com",
        pathname: "/uploads/**",
      },

      // ✅ Cloudinary (all images)
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
