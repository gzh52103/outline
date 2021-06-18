
const { createProxyMiddleware } = require('http-proxy-middleware')
// 请求地址：http://localhost:2103/proxy/api/iq?sort=hot&total=false
// 1. https://offer.qfh5.cn/proxy/api/iq?sort=hot&total=false
// 2. https://offer.qfh5.cn/api/iq?sort=hot&total=false
// 目标服务器地址：https://offer.qfh5.cn/api/iq?sort=hot&total=false
const proxyMiddleware = createProxyMiddleware({ 
    // 代理目标服务器地址
    target: 'https://offer.qfh5.cn', 
    changeOrigin: true,
    // 重写路径
    pathRewrite: {
        '^/proxy': '', // rewrite path
    },
})

module.exports = proxyMiddleware