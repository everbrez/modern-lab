const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

const dev = {
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        hot: true
    },
    mode: "development",
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ],
    module: {
        rules: [{
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', {
                loader: 'sass-loader',
                options: {
                    sourceMap: true
                }
            }]

        }]
    }
};
module.exports = merge(common, dev);