let routes = require('./router')

class Router {
    constructor({initial}){
        this.routes = routes 
        this.initial = initial // 默认路由
    }

    init(){
        this.initialAction()
        this.listenHashChange()
    }

    initialAction() {  // 初始时判断有无hash等动作
        let path = location.hash.replace('#', '')
        if ( !path ) { // 当前没有hash值
            location.hash = this.initial
        } else {
            this.refreshRouter(path)      
        }  
    }

    refreshRouter (path) {
        
        this.routes[path]()
        this.handlerNavLink(path)
    }

    handlerNavLink (path) { // 当路由跳转匹配成功后给a标签加上active类名
        console.log(path);
        
        $('.nav-link').removeClass('active')
        $('.nav-link').each((i, item) => {
            if ( $(item).data('path') === path ) $(item).addClass('active')
        })
    }

    listenHashChange () { // 监听hash值变化后执行对应操作
        window.addEventListener('hashchange', () => {
            console.log("change 0001")
            let path = location.hash.replace('#', '')
            let handler = this.routes[path]
            if ( handler ) {
                this.refreshRouter(path) 
            } else {
                // 如果路由表中没有这个路由，跳转到默认路由
                // location.hash = '/404'
                location.hash = this.initial
            }
        })
    }
}

module.exports = Router