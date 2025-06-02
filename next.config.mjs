/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
}

<<<<<<< HEAD
export default nextConfig
=======
export default nextConfig;
>>>>>>> 9c818926bb331136c15fb39bc9143ffc74cbd1f3
