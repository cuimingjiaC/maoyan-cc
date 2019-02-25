// const render = ()=>{
//     let a= require('../views/app-footer.html')
//     // $('#app #footer').html(a)

// }

// module.exports={ render };

const render = () => {
    // 1. 获取视图
    let appFooterView = require('../views/app-footer.html')
    

    
    
    $('#app #footer').html(appFooterView)     
}

module.exports = { render }