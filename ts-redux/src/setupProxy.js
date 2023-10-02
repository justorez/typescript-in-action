const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
    if (process.env.proxy === 'mock') { // 静态数据
        app.use(
            createProxyMiddleware('/api', {
                target: 'http://localhost:4000',
                pathRewrite(path) {
                    return path.replace(/^\/api([^?]+)/, '$1.json')
                }
            })
        )
    } else { // 代理到 ts-express 服务
        app.use(
            createProxyMiddleware('/api', {
                target: 'http://localhost:4001'
            })
        )
    }
}
