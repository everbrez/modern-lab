const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const prod = {
    devtool: 'source-map',
    plugins:[
        new UglifyJSPlugin({
            //sourceMap: true
        }),
        new ExtractTextPlugin('[name].css')
    ],
    mode: "production",
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 
                    {
                        loader: 'sass-loader',
                        options: {
                           // sourceMap: true
                        }
                    }
                ]
                  })
            }
        ]
    }
};
module.exports = merge(common,prod);