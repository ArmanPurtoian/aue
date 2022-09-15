const path = require("path");
module.exports = {
  entry: './core/index.js',
  output: {
    path: path.resolve(__dirname, 'testing'),
    filename: "bundle.js"
  },

  stats: {
    colors: true,
    hash: false,
    version: false,
    timings: false,
    assets: false,
    chunks: false,
    modules: false,
    reasons: false,
    children: false,
    source: false,
    errors: false,
    errorDetails: false,
    warnings: false,
    publicPath: false
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'testing'),
    },
    hot: false,
    port: 9000,
  },
}