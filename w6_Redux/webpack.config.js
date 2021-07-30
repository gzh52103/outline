const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
    mode: process.env.NODE_ENV === 'development' ? 'development' : 'production',
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, './dist'),
        filename: `js/[name]-[hash:5].js`
    },
    devServer: {
        // 服务器压缩
        compress:true
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            '@': path.join(__dirname, 'src'),
            '@@': path.join(__dirname, 'src/components'),
        }
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                // use:'babel-loader',
                exclude:path.join(__dirname,'node_modules'),
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-react"],
                        plugins: [
                            ['@babel/plugin-proposal-decorators', { legacy: true }],
                            ['@babel/plugin-proposal-class-properties', {
                                loose: true
                            }],
                        ]
                    }
                }
            },
            // css加载器
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            },

            // sass加载器
            {
                test:/\.s[ac]ss$/,
                use:[
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },

            
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, './public/index.html'),
            title: '首页'
        })
    ]
}