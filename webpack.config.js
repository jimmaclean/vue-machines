const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')
const glob = require('glob')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const PurgecssPlugin = require('purgecss-webpack-plugin')


module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'app.js'
  },
  mode: 'production',
  module: {
      rules: [{
              test: /\.scss$/,
              use: [
                { loader: MiniCssExtractPlugin.loader},
                { loader:'css-loader' },
                { loader:'sass-loader' }
            ]},
          
      ]},
  plugins: [new HtmlWebpackPlugin({
    template: 'src/index.html',
    title: 'Vue Machines',
  }),
  new MiniCssExtractPlugin({
    filename: 'main.css'
  }),
  new PurgecssPlugin({
    paths: glob.sync(`${path.join(__dirname, 'src')}/**/*`,  { nodir: true }),
  })]
};
