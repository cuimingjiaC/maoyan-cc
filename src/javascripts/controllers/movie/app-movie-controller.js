
let appMainView = require('../../views/movie/app-movie.html')
let appHeaderView = require('../../views/app-header.html')
const movieNowController = require('./app-movie-now-controller')
const movieComingController = require('./app-movie-coming-controller')

let targetType = 'now' // 当前的显示类型

const render = () => {
    
      // 渲染头部
    $('#app #header').html(
        Handlebars.compile(appHeaderView)({ title: '猫眼电影' })
    )

    // 1. 渲染内容
    $('#app #main').html(appMainView) 
    movieNowController.render();
    
    // 绑定切换按钮
    controlTypes()
    
    // 渲染对应的内容
    contentRenderHandler()

    function controlTypes () {
        $('.film-controls__type-item').click(function () {
            if ( $(this).data('type') === targetType ) {
                return false
            }
            targetType = $(this).data('type')  
            $(this).addClass('active').siblings().removeClass('active')    
            contentRenderHandler()
        })
    }

    function contentRenderHandler () {
        if ( targetType === 'now' ) {
            movieNowController.render();
            return false;
        }
        movieComingController.comingRender()
    }
}

module.exports = { render }