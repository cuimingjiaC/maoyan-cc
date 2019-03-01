let appCinemaView = require('../../views/cinema/app-cinema.html')
const render = () => {
    
      // 渲染头部
    // $('#app #header').html(
    //     Handlebars.compile(appHeaderView)({ title: '猫眼电影' })
    // )

    // 1. 渲染内容
    $('#app #main').html(appCinemaView) 
}

module.exports = { render }