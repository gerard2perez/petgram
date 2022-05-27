/*
Gerardo Pérez Pérez
<gerard2perez@outlook.com>
Learning Resource from platzi

File: webpack.analyze.js
Created:  2022-05-27T22:13:37.427Z
Modified: 2022-05-27T22:23:35.691Z
*/

const { merge } = require('webpack-merge')
const common = require('./webpack.prod.js')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
module.exports = merge(common, {
  plugins: [
    new BundleAnalyzerPlugin()
  ]
})
