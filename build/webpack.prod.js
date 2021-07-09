/*
 * @Author: Stevie
 * @Date: 2021-07-09 17:27:13
 * @LastEditTime: 2021-07-09 17:35:30
 * @LastEditors: Stevie
 * @Description:
 */
const baseConfig = require('./webpack.base')
const { merge } = require('webpack-merge')

const prodConfig = {
  mode: 'production',
  devtool: 'hidden-source-map',
}

module.exports = merge(baseConfig, prodConfig)
