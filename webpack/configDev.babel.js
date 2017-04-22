import webpack from 'webpack'

import baseConfig from './configBase.babel'
import { dist } from './filePaths'

export default {
  ...baseConfig,
  devServer: {
    contentBase: dist,
    publicPath: '/assets',
    quiet: true,
    hot: true,
    port: process.env.PORT || 3000
  },
  plugins: [
    ...baseConfig.plugins,
    new webpack.HotModuleReplacementPlugin()
  ]
}
