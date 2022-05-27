/*
Gerardo Pérez Pérez
<gerard2perez@outlook.com>
Learning Resource from platzi

File: webpack.prod.js
Created:  2022-05-27T22:03:10.977Z
Modified: 2022-05-27T22:21:51.420Z
*/

const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const WorkboxWebpackPlugin = require('workbox-webpack-plugin')
module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new WorkboxWebpackPlugin.GenerateSW({
      mode: process.env.NODE_ENV,
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
  ]
})
