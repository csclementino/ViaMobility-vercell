const isGithubPages = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: 'export',
  basePath: isGithubPages ? '/ViaMobility' : '',
  assetPrefix: isGithubPages ? '/ViaMobility/' : '',
};

export default nextConfig;
