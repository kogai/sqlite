const path = require("path");

module.exports = {
  loaders: [
    {
      test: /\.wasm$/,
      loaders: ['wasm-loader']
    }
  ],
  entry: "./bootstrap.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bootstrap.js",
  },
  mode: "development"
};
