/*
 * @Author: Stevie
 * @Date: 2021-07-09 15:14:31
 * @LastEditTime: 2021-07-09 17:24:47
 * @LastEditors: Stevie
 * @Description:
 */
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.[contenthash:8].js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './public/index.html'),
      inject: 'body',
      scriptLoading: 'blocking',
    }),
  ],
  devServer:{
    port: 7090,
    hot:true,
    compress: true,
    stats: true,
    proxy: {
      '/api': {
        target: 'http://0.0.0.0:80',
        pathRewrite: {
          '/api': '',
        },
      },
    }
  },
  devtool: 'eval-cheap-module-source-map',
}
