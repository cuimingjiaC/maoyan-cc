const path = require('path')

const webpackConfig = {
    mode: 'development', // 配置打包模式
    entry: { // 入口   这是webpack-stream的配置里的
        index: path.join(__dirname, '../src/javascripts/index.js')
    },
    output: { // 出口 这是webpack-stream的配置里的
        filename: '[name].js' // 如果配置的什么名字，就输出什么名字
    },
    module: { // 配置各个loader      这是string-loader 的配置里的
        rules: [ // 放入一个一个的规则
            {
                test: /\.html$/, // 寻找引入进行来的后缀名伪html的模块
                use: 'string-loader'// 对这些模块使用什么loader
            }
        ] 
    }
}

module.exports = webpackConfig