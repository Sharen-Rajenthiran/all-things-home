import type { NextConfig } from "next";
const repoName = "all-things-home";

const nextConfig: NextConfig = {
  output: "export",
  
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,
  
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
