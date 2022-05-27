// webpack.config.js
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'development',
  optimization: {
    usedExports: true,
    sideEffects: false
  },
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    compress: true
  }
})
