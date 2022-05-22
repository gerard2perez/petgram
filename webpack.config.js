// webpack.config.js
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  devtool : 'inline-source-map',
  entry: './src/index.jsx',
  output: {
    filename: 'app.bundle.js'
  },
  resolve:{
    extensions:['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      'React': 'react'
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: 'index.html'
    })
  ],
  devServer : {
    historyApiFallback: true,
    compress: true
  }

}
