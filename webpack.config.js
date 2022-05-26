// webpack.config.js
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const WebpackPWAManifest = require('webpack-pwa-manifest')
const path = require('path')
const WorkboxWebpackPlugin = require('workbox-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  mode: 'development',
  optimization: {
    usedExports: true,
    sideEffects: false
  },
  devtool: 'inline-source-map',
  entry: './src/index.jsx',
  output: {
    filename: 'app.bundle.js',
    publicPath: '/'
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
    new BundleAnalyzerPlugin(),
    new webpack.ProvidePlugin({
      React: 'react'
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: 'index.html'
    }),
    new WebpackPWAManifest({
      name: 'Petgram - You pet photo app',
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
          src: path.resolve('src/assets/icon.png'),
          sizes: [96, 128, 192, 256, 384, 512],
          destination: path.join('icons'),
          ios: true
        }
      ]
    }),
    new WorkboxWebpackPlugin.GenerateSW({
      clientsClaim: true,
      maximumFileSizeToCacheInBytes: 17000000,
      runtimeCaching: [
        {
          urlPattern: /https:\/\/(res.cloudinary.com|images.unsplash.com)/,
          handler: 'CacheFirst',
          options: {
            cacheName: 'images'
          }
        },
        {
          urlPattern: /https:\/\/petgram-server-g2p.vercel.app/,
          handler: 'NetworkFirst',
          options: {
            cacheName: 'api'
          }
        }
      ]
    })
  ],
  devServer: {
    historyApiFallback: true,
    compress: true
  }

}
