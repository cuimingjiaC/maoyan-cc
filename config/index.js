const path=require('path');
const webpackConfig = require('./webpack-config')
const serverConfig = require('./server-config')

const config={
    path:{
        dirname:path.join(__dirname),
        filename:path.join(__filename),
        src:path.join(__dirname,'../src'),
        dist:path.join(__dirname,'../dist'),
        static:path.join(__dirname,'../src/static'),
        
    },
    webpackConfig,
    serverConfig
    
}

module.exports=config;