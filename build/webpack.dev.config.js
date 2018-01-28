const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const rootPath = path.resolve(__dirname, '../');
const baseConfig = require('./webpack.base.config');
module.exports = merge(baseConfig, {
  devServer: {
    proxy: {
      // proxy URLs to backend development server
      '/api': 'http://localhost:3000'
    },
    contentBase: path.join(rootPath, 'src'), // boolean | string | array, static file location
    compress: true, // enable gzip compression
    historyApiFallback: true, // true for index.html upon 404, object for multiple paths
    hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
    https: false, // true for self-signed, object for cert authority
    noInfo: true // only errors & warns on hot reload
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
});
