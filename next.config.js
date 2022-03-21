// module.exports = {
//   assetPrefix: './',
// //   trailingSlash: true,
//   // reactStrictMode: true
// }

const withImages = require("next-images");
module.exports = withImages({
  assetPrefix: "./",
  dynamicAssetPrefix: true,
  webpack(config, options) {
    return config;
  },
});