/** @type {import('next').NextConfig} */
const isPages = process.env.GITHUB_ACTIONS === "true";
const nextConfig = {
  output: "export",
  ...(isPages ? { basePath: "/mascote-site", assetPrefix: "/mascote-site/" } : {}),
};
export default nextConfig;
