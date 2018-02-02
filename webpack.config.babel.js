const path = require('path'),
  webpack = require('webpack');

const include = path.resolve(__dirname, 'src');

module.exports = {
  entry: './src/index.js',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: 'demoBlockchain',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/, loader: 'babel-loader', include
      },
    ]
  },
}
