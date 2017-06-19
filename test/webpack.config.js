const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const id = require.resolve('../')
console.log(`id:${id}`)
module.exports = {
  entry: './entry.js',
  output: {
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [{
      test: /\.ejs$/,
      loader: id,
      options: {
      }
    }]
  },
  plugins: [new HtmlWebpackPlugin({
    template: './template/index.ejs',
    finename: 'index.html'
  })]
}