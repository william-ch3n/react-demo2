const proxy = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        proxy.createProxyMiddleware(
            '/api1',
            {
                target: 'http://localhost:8081',
                changeOrigin: true,
                pathRewrite:{'^/api1':''}
            }
        )
    )
};