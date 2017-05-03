import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import WebpackLoggerPlugin from 'webpack-logger-plugin'

import { src, dist, statics } from './file-paths'

export default {
  entry: path.join(src, 'index.js'),
  output: {
    filename: 'bundle.js',
    path: path.join(dist, 'assets')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.html$/,
        use: 'template-string-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: process.env.TITLE || 'My App',
      filename: path.join(dist, 'index.html'),
      template: path.join(statics, 'template.html')
    }),
    new WebpackLoggerPlugin()
  ]
}
