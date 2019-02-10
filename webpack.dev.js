const Path = require('path');
const WebpackMerge = require('webpack-merge');
const common = require('./webpack.common.js');
const Webpack = require('webpack');

const srcDir = 'src';

module.exports = WebpackMerge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
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
    }
});