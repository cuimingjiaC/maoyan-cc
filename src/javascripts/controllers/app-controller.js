const appMovieController=require('./movie/app-movie-controller')

const render = () => {
    // 1. 获取视图
    let appFooterView = require('../views/app-footer.html')
    

    $('#app #footer').html(appFooterView)    
    console.log("aabb")
    appMovieController.render(); 

    
}

module.exports = { render }