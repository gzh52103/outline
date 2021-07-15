const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// webpack.config.js是一个commonjs规范的模块
// 核心配置
module.exports = {
    mode: 'development',
    // 入口
    entry: './src/main.js',
    // entry:{
    //     home:'./src/main.js'
    // }

    // 出口：编译文件的输出目录
    output: {
        path: path.join(__dirname, './dist'),
        //定义输入js文件名
        filename: "js/[name]-[hash:5]-bundle.js"
    },

    // 测试服务器
    devServer:{
        // 设置网站根目录
        // contentBase:'./public', // webpack-dev-server@4不支持
        public:'./public',
    },

    // 加载器：loader
    // 每一类文件都需要配置一个加载器
    module: {
        rules: [
            // js加载器
            {
                // 匹配文件
                test: /\.js$/,
                // loader:'babel-loader', // 简写
                // loader:['babel-loader'], // 多个加载器时使用数组
                use: [{
                    // 加载器名称
                    loader: 'babel-loader',
                    // 加载器配置
                    options: {
                        presets: [
                            '@babel/preset-react',
                            // '@babel/preset-env'
                        ], // babel预设（插件集合）
                        // plugins:[], // babel插件
                    }
                }]
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
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            // 以什么作为模板声明html文件
            template: './public/index.html',
            // filename:'login.html',// index.html
        }),
        // new HtmlWebpackPlugin({
        //     // 以什么作为模板声明html文件
        //     template:'./public/index.html',
        //     filename:'login.html',// index.html
        // })
    ]
}