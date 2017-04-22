import webpack from 'webpack'

import baseConfig from './configBase.babel'
import { dist } from './filePaths'

export default {
  ...baseConfig,
  devServer: {
    clientLogLevel: 'warning',
    contentBase: dist,
    hot: true,
    port: process.env.PORT || 3000,
    publicPath: '/assets',
    quiet: true
  },
  plugins: [
    ...baseConfig.plugins,
    new webpack.HotModuleReplacementPlugin()
  ]
}
