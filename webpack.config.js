const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")

module.exports = {
  devtool: "source-map",
  mode: "development",
  entry: {
    virtualDom: "./src/virtual-dom/virtualDom.js",
    myVdom: "./src/myVdom/app.js",
    sdHelloWorld: "./src/snabbdom/sdHelloWorld.js"
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    alias: {
      MyVdom: path.resolve(__dirname, "src/myVdom/"),
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
      title: "My vDOM",
      filename: "myVdom.html",
      chunks: ["myVdom"],
    }),
    new HtmlWebpackPlugin ({
      title: "Snabbdom HelloWorld",
      filename: "sdHelloWorld.html",
      chunks: ["sdHelloWorld"]
    }),
  ],
}
