/*
 * @Author: Stevie
 * @Date: 2021-07-09 17:27:05
 * @LastEditTime: 2021-07-29 17:57:50
 * @LastEditors: Stevie
 * @Description:
 */
const baseConfig = require('./webpack.base')
const { merge } = require('webpack-merge')

const devConfig = {
  mode: 'development',
  devServer: {
    port: 7090,
    hot: true,
    compress: true,
    stats: 'errors-only',
  },
  devtool: 'eval-cheap-module-source-map',
  cache: {
    type: 'memory',
  },
}

module.exports = merge(baseConfig, devConfig)
