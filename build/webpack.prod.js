/*
 * @Author: Stevie
 * @Date: 2021-07-09 17:27:13
 * @LastEditTime: 2021-07-29 17:58:18
 * @LastEditors: Stevie
 * @Description:
 */
const baseConfig = require('./webpack.base')
const { merge } = require('webpack-merge')

const prodConfig = {
  mode: 'production',
  devtool: 'hidden-source-map',
  cache: {
    type: 'filesystem',
    buildDependencies: {
      config: [__filename],
    },
  },
}

module.exports = merge(baseConfig, prodConfig)
