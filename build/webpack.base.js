/*
 * @Author: Stevie
 * @Date: 2021-07-09 17:27:20
 * @LastEditTime: 2021-07-29 16:52:10
 * @LastEditors: Stevie
 * @Description:
 */
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssPlugin = require('optimize-css-assets-webpack-plugin')

// - process.cwd() 可以获取Node.js进程的当前工作目录
const rootPath = process.cwd()

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
      {
        test: /\.(le|c)ss$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          // 'style-loader', 因为 style-loader 和 mini-css-extract-plugin 冲突
          'css-loader',
          'less-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: ['autoprefixer'],
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(rootPath, 'public/index.html'),
      inject: 'body',
      scriptLoading: 'blocking',
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),
    new OptimizeCssPlugin(),
  ],
}
