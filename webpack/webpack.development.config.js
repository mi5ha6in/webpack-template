const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    filename: "[name].js",
    chunkFilename: "[name].chunk.js",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", "..."],
  },
  devtool: "eval-cheap-module-source-map",
  devServer: {
    hot: true,
    open: true,
  },
  module: {
    rules: require("./webpack.rules"),
  },
  plugins: require("./webpack.plugins"),
  stats: "summary",
};
