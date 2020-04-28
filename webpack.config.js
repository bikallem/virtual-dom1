// const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    virtualDom: './src/virtualDom.js',
    // virtualDom2: './src/virtualDom2.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "virtual-dom - 2.2.1",
      filename: "virtualDom.html",
      chunks: ['virtualDom']
    }),
    // new HtmlWebpackPlugin({
    //   title: "virtual-dom - 2.2.1",
    //   filename: "virtualDom2.html",
    //   chunks : ['virtualDom2']
    // }),
  ]
};