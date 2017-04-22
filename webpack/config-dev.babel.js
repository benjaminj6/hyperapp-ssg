import baseConfig from './config.base.babel'

import { dist } from './file-paths'

const config = {
  ...baseConfig,
  devServer: {
    contentBase: dist
  }
}

export default config
