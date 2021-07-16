const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
    mode:'development',
    entry:'./src/index.js',
    output:{
        path:path.join(__dirname,'./dist'),
        filename:`js/[name]-[hash:5].js`
    },
    devServer:{

    },
    resolve:{
        extensions:['.js','.jsx'],
        alias:{
            '@':path.join(__dirname,'src'),
            '@@':path.join(__dirname,'src/components'),
        }
    },
    module:{
        rules:[
            {
                test:/\.jsx?$/,
                // use:'babel-loader',
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:["@babel/preset-react"],
                        plugins:[]
                    }
                }
            }
        ]
    },
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template:path.join(__dirname,'./public/index.html'),
            title:'首页'
        })
    ]
}