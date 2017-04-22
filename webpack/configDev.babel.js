import webpack from 'webpack'

import baseConfig from './configBase.babel'
import { dist } from './filePaths'

const config = {
  ...baseConfig,
  devServer: {
    contentBase: dist,
    publicPath: '/assets',
    port: process.env.PORT || 3000
  },
  plugins: [
    ...baseConfig.plugins,
    new webpack.HotModuleReplacementPlugin()
  ]
}

console.log(config)

export default config
