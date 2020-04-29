// const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    virtualDom: './src/virtualDom.js',
    vdom1: './src/vdom1.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "virtual-dom - 2.2.1",
      filename: "virtualDom.html",
      chunks: ['virtualDom']
    }),
    new HtmlWebpackPlugin({
      title: "vdom1",
      filename: "vdom1.html",
      chunks: ['vdom1']
    }),
  ]
};