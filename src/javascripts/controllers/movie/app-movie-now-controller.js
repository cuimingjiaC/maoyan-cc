const movieNowHtml = require('../../views/movie/app-movie-now.html')

const {getFilmsList} = require('../../models/app-index.model')  
// const { getFilmsList, getTestMock } = require('../models/app-index-model')

const render = async () => {
    let filmsList = await getFilmsList()
    let template = Handlebars.compile(movieNowHtml)

    $('.app-index-view').html(
        template({ films: handleListFormat(filmsList.movieList) })
    )

    // $('.app-index-view').html(movieNowHtml);

}

function handleListFormat (items) {
    items.forEach(item => {
        if ( item.sc ) {
            item.situation = `观众评 <span>${item.sc.toFixed(1)}</span>`
        } else {
            if ( item.preShow ) {
                item.situation = `<span>${item.wish}</span>人想看`
            } else {
                item.situation = `暂无评分`
            }
        }
        item.img = item.img.replace(/\/w.h\//g, '/128.180/')  
    })
    return items
}


module.exports = {render}