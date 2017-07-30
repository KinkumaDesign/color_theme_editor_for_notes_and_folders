/**
 * 開発用 dev
 */
var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.common.js');

module.exports = webpackMerge(commonConfig, {
    output:{
        publicPath: '/js/',
    }
});
