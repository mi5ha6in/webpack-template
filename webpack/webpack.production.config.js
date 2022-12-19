module.exports = {
  mode: 'production',
  entry: ['./src/index.tsx'],
  output: {
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].chunk.js',
    clean: true,
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", "..."],
  },
  module: {
    rules: require('./webpack.rules'),
  },
  plugins: [...require('./webpack.plugins')],
};
