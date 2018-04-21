const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const SpritesmithPlugin = require('webpack-spritesmith');//sprites plugin

module.exports = {
    entry: {
        app: './src/index.js'
    },
    plugins: [
        new CleanWebpackPlugin(['dist']), //clean dist
        new HtmlWebpackPlugin({ //根据模板插入css/js等生成最终HTML
            favicon: './src/images/favicon.ico', //favicon路径，通过webpack引入同时可以生成hash值
            filename: 'index.html', //生成的html存放路径，相对于path
            template: './src/view/index.html', //html模板路径
            inject: 'body', //js插入的位置，true/'head'/'body'/false
            hash: true, //为静态资源生成hash值
            // chunks: ['vendors', 'index'],//需要引入的chunk，不配置就会引入所有页面的资源
          }),
        new HtmlWebpackPlugin({
            favicon: './src/images/favicon.ico', 
            filename: 'content.html', 
            template: './src/view/content.html', 
            inject: 'body', 
            hash: true
            // chunks: ['vendors', 'content']
          }),
          new HtmlWebpackPlugin({ 
            favicon: './src/images/favicon.ico', 
            filename: 'column.html', 
            template: './src/view/column.html', 
            inject: 'body', 
            hash: true
            // chunks: ['vendors', 'content']
          }),
        new SpritesmithPlugin({
            src: {
                cwd: path.resolve(__dirname, 'src/icon'),
                glob: '*.png'
            }, //source's path
            target: {
                image: path.resolve(__dirname, 'src/images/icons.png'),
                css: path.resolve(__dirname, 'src/style/sprites.scss')
            },// generated files's path
            apiOptions: {
                cssImageRef: "../images/icons.png" //relative to the sprites.scss file
            }
        }) //sprites
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|gif|bmp)$/,
                use: [{loader: 'file-loader',
                options: {
                    outputPath: 'images/'
                }
            }]
            },
            {
                test: /\.(html|htm)$/,
                use: ['html-loader']
            }
        ]
    },
    resolve: {
        modules: ["web_modules", "node_modules", "generated"]
    }
};