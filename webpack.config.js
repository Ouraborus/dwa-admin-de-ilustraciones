const ExtractTextPlugin = require('extract-text-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin') // installed via npm
const StyleLintPlugin = require('stylelint-webpack-plugin')
const path = require('path')

const config = {
  entry: {'main': './src/main.js',
    'dashboard': './src/dashboard.js'},
  devtool: 'inline-sourceMap',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './[name]'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [
            'css-loader',
            'sass-loader?sourceMap'
          ]
        })
      },
      {
          // set up standard-loader as a preloader
        enforce: 'pre',
        test: /\.jsx?$/,
        loader: 'standard-loader',
        exclude: /(node_modules|bower_components)/,
        options: {
            // Emit errors instead of warnings (default = false)
          error: false,
            // enable snazzy output (default = true)
          snazzy: true
        }
      },
      {
        test: /\.pug$/,
        use: [
          {
            loader: 'pug-loader'}
        ]}
    ]},
  plugins: [
    new StyleLintPlugin(),
    new ExtractTextPlugin('styles.css'),
    new HtmlWebpackPlugin({template: './src/index.html', chunks: ['main']}),
    new HtmlWebpackPlugin({filename: 'dashboard.html', template: './src/dashboard.html', chunks: ['dashboard']}),
    new UglifyJsPlugin({
      uglifyOptions: {
        beautify: false,
        ecma: 6,
        compress: true,
        comments: false
      }
    })
  ]
}

module.exports = config
