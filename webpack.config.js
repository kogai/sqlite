const path = require("path");

module.exports = {
  module: {
    rules: [{
      // test: /\.wasm$/,
      test: /^a.+\.wasm$/,
      use: [{
        loader: "wasm-loader",
      }],
    }],
    // loaders: [{
    // }],
  },
  // entry: "./bootstrap.js",
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  mode: "development"
};
