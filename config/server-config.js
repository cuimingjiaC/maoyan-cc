

const serverConfig = {
    livereload: {
        enable: true   // 浏览器可以自动更新
    },
    directoryListing: false,
    open: false,
    port: 3001,
    proxies: [ // 让开发服务器去请求猫眼数据
        {
            source: '/maoyan', // 暗号
            target: 'http://m.maoyan.com/', // 真正的目标
        }
    ]
}

module.exports = serverConfig