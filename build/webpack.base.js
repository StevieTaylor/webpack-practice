/*
 * @Author: Stevie
 * @Date: 2021-07-09 17:27:20
 * @LastEditTime: 2021-07-09 17:51:42
 * @LastEditors: Stevie
 * @Description: 
 */
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// - process.cwd() 可以获取Node.js进程的当前工作目录
const rootPath = process.cwd();

module.exports = {
  entry: path.resolve(rootPath, 'src/index.js'),
  output: {
    path: path.resolve(rootPath, 'dist'),
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
      template: path.resolve(rootPath, 'public/index.html'),
      inject: 'body',
      scriptLoading: 'blocking',
    }),
  ]
}