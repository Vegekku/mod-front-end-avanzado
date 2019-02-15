const Path = require('path');
const WebpackMerge = require('webpack-merge');
const Webpack = require('webpack');
const common = require('./webpack.common.js');

const srcDir = 'src';

module.exports = WebpackMerge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new Webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    open: true,
    overlay: true,
    port: 3000,
    hot: true,
    contentBase: [
      Path.join(__dirname, srcDir),
      Path.join(__dirname, srcDir, 'templates'),
    ],
    watchContentBase: true,
    https: true,
  },
});
