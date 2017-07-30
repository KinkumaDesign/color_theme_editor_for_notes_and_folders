/**
 * dev, prod 共通ファイル
 */

var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        main:'./src/main.js',
        // vendor:[
        //     'vue',
        //     'jquery'
        // ]
    },
    output: {
        path: path.resolve(__dirname, '../htdocs/js'),

        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders:{
                        css:"style-loader!css-loader?-url!sass-loader",
                        sass:"style-loader!css-loader?-url!sass-loader"
                    }
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            // {
            //   test: /\.css$/,
            //   loader: 'css-loader?root=.',
            //   options:{
            //     root:'.'
            //   }
            // },
            // {
            {
                test: /\.scss$/,
                loaders:["style-loader", "css-loader?-url", "sass-loader"]
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            }
        ]
    },
    plugins: [
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'vendor'
        // })
    ],
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.common.js'
        }
    },
    devServer: {
        contentBase: "./htdocs",
        historyApiFallback: true,
        noInfo: true
    },
    devtool: '#eval-source-map',
    performance: { hints: false }
};
