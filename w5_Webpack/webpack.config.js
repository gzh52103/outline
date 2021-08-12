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
    //     home:'./src/main.js',
    //     login:'./src/login.js'
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
        host:'0.0.0.0',
        // hot:true,
        // port:2103,
        // open:true,
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
            },
            // 图片加载器
            {
                test:/\.(png|jpe?g|gif|webp|svg)$/i,
                use:{
                    loader:'url-loader',
                    options:{
                        limit: 8192,// 如果图片小于等于8k，则转成base64
                        // 大于8K的图片，修改名字并保存到输出目录中的img目录
                        name: 'img/[name]_[hash:5].[ext]'
                    }
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            // 以什么作为模板声明html文件
            template: './public/index.html',
            // filename:'login.html',// index.html,
            hash:true, // <img src="img/xx.jpg?dfalsdfkjasl"
        }),
        // new HtmlWebpackPlugin({
        //     // 以什么作为模板声明html文件
        //     template:'./public/index.html',
        //     filename:'login.html',// index.html
        // }),

        // new copyWebpackPlugin({
        //     from:'./src/assets',
        //     to:'./dist/img'
        // })
    ]
}