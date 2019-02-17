const Path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const srcDir = 'src';

module.exports = {
  entry: {
    app: Path.join(__dirname, srcDir, 'index.js'),
    detail: Path.join(__dirname, srcDir, 'detail.js'),
  },
  output: {
    filename: '[name].bundle.js',
    path: Path.join(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: Path.join(__dirname, srcDir, 'index.html'),
      // title: 'Production',
      minify: true,
      chunks: ['app'],
    }),
    new HtmlWebpackPlugin({
      filename: 'detail.html',
      template: Path.join(__dirname, srcDir, 'detail.html'),
      chunks: ['detail'],
    }),
  ],
};
