const api = require('../api')

const getFilmsList = () => {
    
    return api.request({ url: '/ajax/movieOnInfoList?token=' })
}

module.exports = {getFilmsList}

