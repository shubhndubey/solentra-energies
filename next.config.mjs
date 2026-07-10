/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/rooftop-solar-in-:city",
        destination: "/city/:city",
      },
    ];
  },
};

export default nextConfig;
