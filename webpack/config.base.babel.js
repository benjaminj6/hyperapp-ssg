import path from 'path'

const root = path.resolve(__dirname, '..')
const src = path.resolve(root, 'src')
const dist = path.resolve(root, 'dist')

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
      }
    ]
  }
}
