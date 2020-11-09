const path = require("path");
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');


module.exports = {
  mode: "dev",
  entry: path.join(__dirname, "./client/src/index.tsx"),
  output: {
    path: path.join(__dirname, "./client/dist"),
    filename: "main.js",
    libraryTarget: "umd",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            "presets": [
              "@babel/preset-react"
            ]
          }
        }
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ]
  },
  plugins: [
    new MonacoWebpackPlugin()
  ],
   resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
};
