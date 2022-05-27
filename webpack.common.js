/*
Gerardo Pérez Pérez
<gerard2perez@outlook.com>
Learning Resource from platzi

File: webpack.common.js
Created:  2022-05-27T22:02:49.725Z
Modified: 2022-05-27T22:58:43.122Z
*/

const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const WebpackPWAManifest = require('webpack-pwa-manifest')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const path = require('path')
module.exports = {
  entry: './src/index.jsx',
  output: {
    filename: '[name].bundle.js',
    publicPath: '/',
    clean: true
  },
  resolve: {
    extensions: ['.js', '.jsx']
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
      React: 'react'
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: 'index.html'
    }),
    new FaviconsWebpackPlugin('src/assets/favicon.png'),
    new WebpackPWAManifest({
      name: 'Petgram - You pet photo app',
      inject: true,
      short_name: 'Petgram 🐶',
      description: 'With petgram you can find your favorite pets photos',
      background_color: '#fff',
      orientation: 'portrait',
      display: 'standalone',
      start_url: '/',
      scope: '/',
      theme_color: '#b1a',
      icons: [
        {
          src: path.resolve('src/assets/favicon.png'),
          sizes: [96, 128, 192, 256, 384, 512],
          destination: path.join('icons'),
          ios: true
        },
        {
          src: path.resolve('src/assets/favicon.png'),
          destination: path.join('icons'),
          size: '512x512',
          purpose: 'maskable'
        }
      ]
    })
  ]
}
