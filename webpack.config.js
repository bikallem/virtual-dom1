const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const {
  CleanWebpackPlugin,
} = require("clean-webpack-plugin")

module.exports = {
  devtool: "source-map",
  mode: "development",
  entry: {
    virtualDom: "./src/virtualDom.js",
    vdom: "./src/vdom/app.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    alias: {
      Vdom: path.resolve(__dirname, "src/vdom/"),
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "virtual-dom - 2.2.1",
      filename: "virtualDom.html",
      chunks: ["virtualDom"],
    }),
    new HtmlWebpackPlugin({
      title: "simple vDOM",
      filename: "vdom.html",
      chunks: ["vdom"],
    }),
  ],
}
