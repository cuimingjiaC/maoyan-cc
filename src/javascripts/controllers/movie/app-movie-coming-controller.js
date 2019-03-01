const appMovieComingView=require('../../views/movie/app-movie-coming.html')

const comingRender = () => {
    console.log(appMovieComingView)
    $('.app-index-view').html(appMovieComingView)
}

module.exports={comingRender}