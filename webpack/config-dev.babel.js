import webpack from 'webpack'

import baseConfig from './config-base.babel'
import { dist } from './file-paths'

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
