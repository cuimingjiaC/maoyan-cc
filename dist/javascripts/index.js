/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/javascripts/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/javascripts/api/index.js":
/*!**************************************!*\
  !*** ./src/javascripts/api/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const api = {\r\n    request ({url,source},mock) {\r\n        let _data =  {}\r\n        // _data.city = _data.city || this.config.city\r\n        return $.ajax({\r\n            // url: 'http://m.maoyan.com/ajax/movieOnInfoList?token=',\r\n            url: (mock ? '' : (source || '/maoyan') ) + url,\r\n            data: _data,\r\n            methods: 'get',\r\n            success: (res) => {\r\n                return res\r\n            },\r\n            error: (error) => {\r\n                console.log('请求出错了', error)\r\n            }\r\n        }) \r\n    },\r\n}\r\n\r\nmodule.exports = api\n\n//# sourceURL=webpack:///./src/javascripts/api/index.js?");

/***/ }),

/***/ "./src/javascripts/controllers/app-controller.js":
/*!*******************************************************!*\
  !*** ./src/javascripts/controllers/app-controller.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const appMovieController=__webpack_require__(/*! ./movie/app-movie-controller */ \"./src/javascripts/controllers/movie/app-movie-controller.js\")\r\n\r\nconst render = () => {\r\n    // 1. 获取视图\r\n    let appFooterView = __webpack_require__(/*! ../views/app-footer.html */ \"./src/javascripts/views/app-footer.html\")\r\n    \r\n\r\n    $('#app #footer').html(appFooterView)    \r\n    console.log(\"aabb\")\r\n    appMovieController.render(); \r\n\r\n    \r\n}\r\n\r\nmodule.exports = { render }\n\n//# sourceURL=webpack:///./src/javascripts/controllers/app-controller.js?");

/***/ }),

/***/ "./src/javascripts/controllers/cinema/app-cinema-controller.js":
/*!*********************************************************************!*\
  !*** ./src/javascripts/controllers/cinema/app-cinema-controller.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("let appCinemaView = __webpack_require__(/*! ../../views/cinema/app-cinema.html */ \"./src/javascripts/views/cinema/app-cinema.html\")\r\nconst render = () => {\r\n    \r\n      // 渲染头部\r\n    // $('#app #header').html(\r\n    //     Handlebars.compile(appHeaderView)({ title: '猫眼电影' })\r\n    // )\r\n\r\n    // 1. 渲染内容\r\n    $('#app #main').html(appCinemaView) \r\n}\r\n\r\nmodule.exports = { render }\n\n//# sourceURL=webpack:///./src/javascripts/controllers/cinema/app-cinema-controller.js?");

/***/ }),

/***/ "./src/javascripts/controllers/movie/app-movie-coming-controller.js":
/*!**************************************************************************!*\
  !*** ./src/javascripts/controllers/movie/app-movie-coming-controller.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const appMovieComingView=__webpack_require__(/*! ../../views/movie/app-movie-coming.html */ \"./src/javascripts/views/movie/app-movie-coming.html\")\r\n\r\nconst comingRender = () => {\r\n    console.log(appMovieComingView)\r\n    $('.app-index-view').html(appMovieComingView)\r\n}\r\n\r\nmodule.exports={comingRender}\n\n//# sourceURL=webpack:///./src/javascripts/controllers/movie/app-movie-coming-controller.js?");

/***/ }),

/***/ "./src/javascripts/controllers/movie/app-movie-controller.js":
/*!*******************************************************************!*\
  !*** ./src/javascripts/controllers/movie/app-movie-controller.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\r\nlet appMainView = __webpack_require__(/*! ../../views/movie/app-movie.html */ \"./src/javascripts/views/movie/app-movie.html\")\r\nlet appHeaderView = __webpack_require__(/*! ../../views/app-header.html */ \"./src/javascripts/views/app-header.html\")\r\nconst movieNowController = __webpack_require__(/*! ./app-movie-now-controller */ \"./src/javascripts/controllers/movie/app-movie-now-controller.js\")\r\nconst movieComingController = __webpack_require__(/*! ./app-movie-coming-controller */ \"./src/javascripts/controllers/movie/app-movie-coming-controller.js\")\r\n\r\nlet targetType = 'now' // 当前的显示类型\r\n\r\nconst render = () => {\r\n    \r\n      // 渲染头部\r\n    $('#app #header').html(\r\n        Handlebars.compile(appHeaderView)({ title: '猫眼电影' })\r\n    )\r\n\r\n    // 1. 渲染内容\r\n    $('#app #main').html(appMainView) \r\n    movieNowController.render();\r\n    \r\n    // 绑定切换按钮\r\n    controlTypes()\r\n    \r\n    // 渲染对应的内容\r\n    contentRenderHandler()\r\n\r\n    function controlTypes () {\r\n        $('.film-controls__type-item').click(function () {\r\n            if ( $(this).data('type') === targetType ) {\r\n                return false\r\n            }\r\n            targetType = $(this).data('type')  \r\n            $(this).addClass('active').siblings().removeClass('active')    \r\n            contentRenderHandler()\r\n        })\r\n    }\r\n\r\n    function contentRenderHandler () {\r\n        if ( targetType === 'now' ) {\r\n            movieNowController.render();\r\n            return false;\r\n        }\r\n        movieComingController.comingRender()\r\n    }\r\n}\r\n\r\nmodule.exports = { render }\n\n//# sourceURL=webpack:///./src/javascripts/controllers/movie/app-movie-controller.js?");

/***/ }),

/***/ "./src/javascripts/controllers/movie/app-movie-now-controller.js":
/*!***********************************************************************!*\
  !*** ./src/javascripts/controllers/movie/app-movie-now-controller.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const movieNowHtml = __webpack_require__(/*! ../../views/movie/app-movie-now.html */ \"./src/javascripts/views/movie/app-movie-now.html\")\r\n\r\nconst {getFilmsList} = __webpack_require__(/*! ../../models/app-index.model */ \"./src/javascripts/models/app-index.model.js\")  \r\n// const { getFilmsList, getTestMock } = require('../models/app-index-model')\r\n\r\nconst render = async () => {\r\n    let filmsList = await getFilmsList()\r\n    let template = Handlebars.compile(movieNowHtml)\r\n\r\n    $('.app-index-view').html(\r\n        template({ films: handleListFormat(filmsList.movieList) })\r\n    )\r\n\r\n    // $('.app-index-view').html(movieNowHtml);\r\n\r\n}\r\n\r\nfunction handleListFormat (items) {\r\n    items.forEach(item => {\r\n        if ( item.sc ) {\r\n            item.situation = `观众评 <span>${item.sc.toFixed(1)}</span>`\r\n        } else {\r\n            if ( item.preShow ) {\r\n                item.situation = `<span>${item.wish}</span>人想看`\r\n            } else {\r\n                item.situation = `暂无评分`\r\n            }\r\n        }\r\n        item.img = item.img.replace(/\\/w.h\\//g, '/128.180/')  \r\n    })\r\n    return items\r\n}\r\n\r\n\r\nmodule.exports = {render}\n\n//# sourceURL=webpack:///./src/javascripts/controllers/movie/app-movie-now-controller.js?");

/***/ }),

/***/ "./src/javascripts/index.js":
/*!**********************************!*\
  !*** ./src/javascripts/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\r\nconst Router = __webpack_require__(/*! ./router */ \"./src/javascripts/router/index.js\")\r\nconst appController = __webpack_require__(/*! ./controllers/app-controller */ \"./src/javascripts/controllers/app-controller.js\")\r\n\r\nappController.render();\r\n\r\n// 初始化路由\r\nnew Router({\r\n    initial: '/index'\r\n}).init()\n\n//# sourceURL=webpack:///./src/javascripts/index.js?");

/***/ }),

/***/ "./src/javascripts/models/app-index.model.js":
/*!***************************************************!*\
  !*** ./src/javascripts/models/app-index.model.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const api = __webpack_require__(/*! ../api */ \"./src/javascripts/api/index.js\")\r\n\r\nconst getFilmsList = () => {\r\n    \r\n    return api.request({ url: '/ajax/movieOnInfoList?token=' })\r\n}\r\n\r\nmodule.exports = {getFilmsList}\r\n\r\n\n\n//# sourceURL=webpack:///./src/javascripts/models/app-index.model.js?");

/***/ }),

/***/ "./src/javascripts/router/index.js":
/*!*****************************************!*\
  !*** ./src/javascripts/router/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("let routes = __webpack_require__(/*! ./router */ \"./src/javascripts/router/router.js\")\r\n\r\nclass Router {\r\n    constructor({initial}){\r\n        this.routes = routes \r\n        this.initial = initial // 默认路由\r\n    }\r\n\r\n    init(){\r\n        this.initialAction()\r\n        this.listenHashChange()\r\n    }\r\n\r\n    initialAction() {  // 初始时判断有无hash等动作\r\n        let path = location.hash.replace('#', '')\r\n        if ( !path ) { // 当前没有hash值\r\n            location.hash = this.initial\r\n        } else {\r\n            this.refreshRouter(path)      \r\n        }  \r\n    }\r\n\r\n    refreshRouter (path) {\r\n        \r\n        this.routes[path]()\r\n        this.handlerNavLink(path)\r\n    }\r\n\r\n    handlerNavLink (path) { // 当路由跳转匹配成功后给a标签加上active类名\r\n        console.log(path);\r\n        \r\n        $('.nav-link').removeClass('active')\r\n        $('.nav-link').each((i, item) => {\r\n            if ( $(item).data('path') === path ) $(item).addClass('active')\r\n        })\r\n    }\r\n\r\n    listenHashChange () { // 监听hash值变化后执行对应操作\r\n        window.addEventListener('hashchange', () => {\r\n            console.log(\"change 0001\")\r\n            let path = location.hash.replace('#', '')\r\n            let handler = this.routes[path]\r\n            if ( handler ) {\r\n                this.refreshRouter(path) \r\n            } else {\r\n                // 如果路由表中没有这个路由，跳转到默认路由\r\n                // location.hash = '/404'\r\n                location.hash = this.initial\r\n            }\r\n        })\r\n    }\r\n}\r\n\r\nmodule.exports = Router\n\n//# sourceURL=webpack:///./src/javascripts/router/index.js?");

/***/ }),

/***/ "./src/javascripts/router/router.js":
/*!******************************************!*\
  !*** ./src/javascripts/router/router.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const appIndexController = __webpack_require__(/*! ../controllers/movie/app-movie-controller */ \"./src/javascripts/controllers/movie/app-movie-controller.js\")\r\nconst appCinemaController = __webpack_require__(/*! ../controllers/cinema/app-cinema-controller */ \"./src/javascripts/controllers/cinema/app-cinema-controller.js\")\r\n\r\n// 路由表\r\nlet routes = {\r\n    '/index': appIndexController.render,\r\n    '/cinema': appCinemaController.render,\r\n    '/404': () => {  },\r\n    '/mine': () => {\r\n        // 如果有登录信息，执行个人中心控制器的render\r\n        // 如果没有登录信息， 执行登录控制器render\r\n    }\r\n}\r\n\r\nmodule.exports = routes\n\n//# sourceURL=webpack:///./src/javascripts/router/router.js?");

/***/ }),

/***/ "./src/javascripts/views/app-footer.html":
/*!***********************************************!*\
  !*** ./src/javascripts/views/app-footer.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<footer id=\\\"app-footer\\\">    <nav>        <a href=\\\"#/index\\\" data-path=\\\"/index\\\" class=\\\"nav-link\\\"><i class=\\\"icon icon-dianying\\\"></i><span>电影</span></a>        <a href=\\\"#/cinema\\\" data-path=\\\"/cinema\\\" class=\\\"nav-link\\\"><i class=\\\"icon icon-yingyuan\\\"></i><span>影院</span></a>        <a href=\\\"#/index\\\" class=\\\"nav-link\\\"><i class=\\\"icon icon-wode-copy\\\"></i><span>我的</span></a>    </nav></footer>\"\n\n//# sourceURL=webpack:///./src/javascripts/views/app-footer.html?");

/***/ }),

/***/ "./src/javascripts/views/app-header.html":
/*!***********************************************!*\
  !*** ./src/javascripts/views/app-header.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<header id=\\\"app-header\\\">    {{title}}</header>\"\n\n//# sourceURL=webpack:///./src/javascripts/views/app-header.html?");

/***/ }),

/***/ "./src/javascripts/views/cinema/app-cinema.html":
/*!******************************************************!*\
  !*** ./src/javascripts/views/cinema/app-cinema.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"aa\"\n\n//# sourceURL=webpack:///./src/javascripts/views/cinema/app-cinema.html?");

/***/ }),

/***/ "./src/javascripts/views/movie/app-movie-coming.html":
/*!***********************************************************!*\
  !*** ./src/javascripts/views/movie/app-movie-coming.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<!-- 内容影片列表 start --><div class=\\\"film-list\\\">    {{#each films}}    <div class=\\\"film-list__item\\\">        <div class=\\\"film-list__item-img\\\">            <img width=\\\"100%\\\" height=\\\"100%\\\" src=\\\"{{img}}\\\" alt=\\\"\\\">        </div>        <div class=\\\"film-list__item-info\\\">            <div class=\\\"film-list__item-title\\\">                <h1>{{nm}}</h1>                <span class=\\\"film-list__item-desc-img max\\\"></span>            </div>            <div class=\\\"film-list__item-grade\\\">{{{situation}}}</div>            <div class=\\\"film-list__item-actor\\\">主演: {{star}}</div>            <div class=\\\"film-list__item-count\\\">{{showInfo}}</div>        </div>        <div class=\\\"film-list__item-btn\\\">            {{#if preShow}}                <button class=\\\"film-list__btn film-list__btn--pre active\\\">预售</button>                            {{else}}                <button class=\\\"film-list__btn film-list__btn--buy active\\\">购票</button>             {{/if}}        </div>    </div>    {{/each}}</div><!-- 内容影片列表 end -->\"\n\n//# sourceURL=webpack:///./src/javascripts/views/movie/app-movie-coming.html?");

/***/ }),

/***/ "./src/javascripts/views/movie/app-movie-now.html":
/*!********************************************************!*\
  !*** ./src/javascripts/views/movie/app-movie-now.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<!-- 内容影片列表 start --><div class=\\\"film-list\\\">    {{#each films}}    <div class=\\\"film-list__item\\\">        <div class=\\\"film-list__item-img\\\">            <img width=\\\"100%\\\" height=\\\"100%\\\" src=\\\"{{img}}\\\" alt=\\\"\\\">        </div>        <div class=\\\"film-list__item-info\\\">            <div class=\\\"film-list__item-title\\\">                <h1>{{nm}}</h1>                <span class=\\\"film-list__item-desc-img max\\\"></span>            </div>            <div class=\\\"film-list__item-grade\\\">{{{situation}}}</div>            <div class=\\\"film-list__item-actor\\\">主演: {{star}}</div>            <div class=\\\"film-list__item-count\\\">{{showInfo}}</div>        </div>        <div class=\\\"film-list__item-btn\\\">            {{#if preShow}}                <button class=\\\"film-list__btn film-list__btn--pre active\\\">预售</button>                            {{else}}                <button class=\\\"film-list__btn film-list__btn--buy active\\\">购票</button>             {{/if}}        </div>    </div>    {{/each}}</div><!-- 内容影片列表 end -->\"\n\n//# sourceURL=webpack:///./src/javascripts/views/movie/app-movie-now.html?");

/***/ }),

/***/ "./src/javascripts/views/movie/app-movie.html":
/*!****************************************************!*\
  !*** ./src/javascripts/views/movie/app-movie.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<main id=\\\"app-container\\\">            <!-- 内容区域顶部的控制 start -->    <div class=\\\"film-controls\\\">        <div class=\\\"film-controls__city\\\">北京</div>        <div class=\\\"film-controls__types\\\">            <div data-type=\\\"now\\\" class=\\\"film-controls__type-item active \\\">正在热映</div>            <div data-type=\\\"coming\\\" class=\\\"film-controls__type-item\\\">即将上映</div>        </div>        <div class=\\\"film-controls__search\\\"><i class=\\\"icon icon-wode-copy\\\"></i></div>    </div>    <!-- 内容区域顶部的控制 end -->        <div class=\\\"app-index-view\\\"></div>    </main>\"\n\n//# sourceURL=webpack:///./src/javascripts/views/movie/app-movie.html?");

/***/ })

/******/ });