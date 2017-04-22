import baseConfig from './configBase.babel'

import { dist } from './filePaths'

const config = {
  ...baseConfig,
  devServer: {
    contentBase: dist
  }
}

export default config
