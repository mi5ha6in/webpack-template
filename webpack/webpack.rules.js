const { inDev } = require("./webpack.helpers");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const stylesHandler = inDev() ? "style-loader" : MiniCssExtractPlugin.loader;

module.exports = [
  {
    // Typescript loader
    test: /\.tsx?$/,
    exclude: ["/node_modules/"],
    use: {
      loader: "ts-loader",
      options: {
        transpileOnly: true,
      },
    },
  },
  {
    // CSS Loader
    test: /\.css$/,
    use: [stylesHandler, "css-loader", "postcss-loader"],
  },
  {
    // SCSS (SASS) Loader
    test: /\.s[ac]ss$/i,
    use: [stylesHandler, "css-loader", "postcss-loader", "sass-loader"],
  },
  {
    // Assets loader
    // More information here https://webpack.js.org/guides/asset-modules/
    test: /\.(gif|jpe?g|tiff|png|webp|bmp|svg|eot|ttf|woff|woff2)$/i,
    type: "asset",
  },
];
