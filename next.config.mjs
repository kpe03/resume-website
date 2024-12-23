/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/resume-website',
    trailingSlash: true,
    images: {
        unoptimized: true, // Disable image optimization
      },
  };
  
export default nextConfig;