/*
 * @Author: Stevie
 * @Date: 2021-07-09 15:14:31
 * @LastEditTime: 2021-07-09 15:32:59
 * @LastEditors: Stevie
 * @Description: 
 */
const path = require('path')

module.exports={
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: 'bundle.[contenthash:8].js'
  },
  module:{
    rules:[
      {
        test:/\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
}