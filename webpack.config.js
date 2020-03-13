const path = require("path");


module.exports = {
  mode: "dev",
  entry: path.join(__dirname, "./client/src/index.jsx"),
  output: {
    path: path.join(__dirname, "./client/dist"),
    filename: "main.js",
    libraryTarget: "umd",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            "presets": [
              "@babel/preset-react"
            ]
          }
        }
      }
    ]
  },
  target: "node",
  node: {global: true}
};
