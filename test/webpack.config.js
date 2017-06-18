const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: './entry.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.ejs$/,
      loader : require.resolve("../"),
      options:{
        a:1
      }
    }]
  },
  plugins : [ new HtmlWebpackPlugin({
    template : 'index.ejs',
    findname : 'index.html'
  })]
}