const api = {
    request ({url,source},mock) {
        let _data =  {}
        // _data.city = _data.city || this.config.city
        return $.ajax({
            // url: 'http://m.maoyan.com/ajax/movieOnInfoList?token=',
            url: (mock ? '' : (source || '/maoyan') ) + url,
            data: _data,
            methods: 'get',
            success: (res) => {
                return res
            },
            error: (error) => {
                console.log('请求出错了', error)
            }
        }) 
    },
}

module.exports = api