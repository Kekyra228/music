/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/songsList",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
