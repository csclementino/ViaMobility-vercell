const isGithubPages = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: 'export',
  basePath: isGithubPages ? '/ViaMobility-vercell' : '',
  assetPrefix: isGithubPages ? '/ViaMobility-vercell/' : '',
};

export default nextConfig;
