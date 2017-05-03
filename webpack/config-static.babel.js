import path from 'path'
import StaticSiteGeneratorPlugin from 'static-site-generator-webpack-plugin'

import baseConfig from './config-base.babel'
import {root, statics} from './file-paths'

import document from 'min-document'

export default {
  ...baseConfig,
  entry: path.resolve(statics, './render.js'),
  output: {
    ...baseConfig.output,
    path: path.join(root, 'build'),
    libraryTarget: 'umd'
  },
  target: 'node',
  plugins: [
    new StaticSiteGeneratorPlugin({
      paths: ['/'],
      globals: {document}
    })
  ]
}
