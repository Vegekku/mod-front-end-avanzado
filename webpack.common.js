const Path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const srcDir = 'src';

module.exports = {
  entry: Path.join(__dirname, srcDir, 'index.js'),
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
      {
        test: /assets\/.*/,
        use: 'file-loader?name=[name].[ext]&useRelativePath=true',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: Path.join(__dirname, srcDir, 'index.html'),
      title: 'Production',
      minify: true,
    }),
  ],
};
