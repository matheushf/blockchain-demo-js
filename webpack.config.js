const path = require('path'),
  webpack = require('webpack'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  ENV = process.env.ENV = process.env.NODE_ENV = 'development',
  autoprefixer = require('autoprefixer'),
  ProvidePlugin = require('webpack/lib/ProvidePlugin');

const include = path.resolve(__dirname, 'src');

module.exports = {
  entry: './src/index.js',
  devtool: 'source-map',
  watch: true,
  output: {
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: 'demoBlockchain'
  },
  module: {
    loaders: [
      {
        test: /\.js$/, loader: 'babel-loader', include
      },
      {
        test: /\.scss$/,
        use: ['raw-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'ENV': JSON.stringify(ENV),
        'NODE_ENV': JSON.stringify(ENV)
      }
    })
  ],
  devServer: {
    port: 3000,
    host: 'localhost',
    historyApiFallback: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    },
    contentBase: './src'
  }
}
