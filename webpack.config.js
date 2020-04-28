const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    virtualDom: './src/virtualDom.js',
    
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
  }
};