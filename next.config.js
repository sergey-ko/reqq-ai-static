// module.exports = {
//   trailingSlash: true,
//   modularizeImports: {
//     '@mui/material': {
//       transform: '@mui/material/{{member}}',
//     },
//     '@mui/lab': {
//       transform: '@mui/lab/{{member}}',
//     },
//   },
//   webpack(config) {
//     config.module.rules.push({
//       test: /\.svg$/,
//       use: ['@svgr/webpack'],
//     });
//     return config;
//   },
//   output:"standalone"
// };




/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: '/',
  basePath: "",
  /**
   * Enable static exports for the App Router.
   *
   * @see https://nextjs.org/docs/app/building-your-application/deploying/static-exports
   */
  output: "export",

  /**
   * Disable server-based image optimization. Next.js does not support
   * dynamic features with static exports.
   *
   * @see https://nextjs.org/docs/app/api-reference/components/image#unoptimized
   */
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
