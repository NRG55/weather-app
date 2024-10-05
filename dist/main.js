/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ Object(function webpackMissingModule() { var e = new Error("Cannot find module '/dist/images/wallpaper.jpg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ Object(function webpackMissingModule() { var e = new Error("Cannot find module '/dist/images/chevron-left.svg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ Object(function webpackMissingModule() { var e = new Error("Cannot find module '/dist/images/chevron-right.svg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html, body {
    height: 100%; 
    background-image: linear-gradient(rgba(0, 0, 0, 0.4), 
                                      rgba(0, 0, 0, 0.4)),
                      url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;     
    font-family: 'Nunito', sans-serif;   
}

.top-nav {   
    display: grid;    
    align-items: center;
    grid-template-columns: 1fr 360px 1fr; 
    padding: 40px;  
}

.top-nav form {
    justify-self: center;    
}

.search-container {
    position: relative;
    display: grid;
    grid-template-columns: 1fr auto;  
}

.error-message {
    position: absolute;
    display: none;
    bottom: -24px;
    left: 20px;
    color: rgb(214, 214, 30);   
}

.search-input {
    height: 40px;
    padding: 10px;
    border: 1px solid rgba(199, 109, 109, 0.2);
    border-right: transparent;
    border-radius: 50px 0px 0px 50px;
    font-size: 16px;
    background-color: rgba(0, 0, 0, 0.5);
    outline: none;
    color: white;
    
    &.search-input::-webkit-search-cancel-button {
        display: none;
    } 
}

.search-input::placeholder {
    color: rgb(177, 177, 179);
}

.search-submit-button {
    cursor: pointer;   
    height: 40px;
    width: 40px;
    color: white;
    background-color: rgba(0, 0, 0, 0.5);
    border: 1px solid rgba(255, 255, 255, .2);
    border-radius: 0px 50px 50px 0px;
    border-left: transparent;

    img {
        height: 24px;
        width: 24px;
    }
}

main {
    display: grid;
    grid-template-columns: repeat(auto-fill, 540px);
    justify-content: center;   
    gap: 40px;
    padding: 40px;
   
} 

.today-info-card {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 3fr 1fr;
    justify-self: center;
    width: 540px;
    height: 400px;  
    border: 1px solid rgba(255, 255, 255, .2);
    border-radius: 16px;
    padding: 20px;    
    color: white;
    background-color: rgba(0, 0, 0, 0.5);    
 }

 img {   
    width: 124px;            
 }

 .today-weather-main-info {
    display: grid;
    grid-template-rows: auto 100px 36px 1fr;
    justify-items: center;
    align-items: center;
 }

 .today-weather-extra-info {
    display: grid;
    grid-template-rows: 40px 1fr;
    justify-items: end;     
 }

 .today-weather-extra-info > div:first-of-type {
    img {
        width: 20px;
        justify-self: end; 
        margin-right: 8px;
        opacity: 0.6;      
    }

    .date-wrap,
    .time-wrap {
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;         
    }
 }

 .today-weather-extra-info > div:nth-child(2) {
    display: grid; 
    justify-self: center; 
    align-self:center;
    justify-items: center;
    
    .humidity-wrap, 
    .wind-wrap {
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;       
    }

    img {
        width: 48px;
        justify-self: end;
    }
    
    .humidity, 
    .wind {
        font-size: 20px;
        font-weight: 700;
    }
}

 .location-name {
    font-size: 40px;
    font-weight: bold;
 }
 
 .today-temperature {
    font-size: 40px;
    font-weight: bold;
 }

 .today-conditions {
    font-size: 20px;
 }

 .week-weather-info-container {
    display: grid;
    color: white;   
    max-width: 540px;
 }

 .week-day-weather-row {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 20px;
    border-top: 1px solid rgba(255, 255, 255, .2);
    align-items: center;
    justify-items: center;
    
    .week-day-name {
        justify-self: start;
        text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
        font-size: 20px;
        font-weight: 600;
        color: rgb(247, 185, 135);
    }

    .week-day-temperature,
    .week-night-temperature {
        font-size: 20px;
        font-weight: 600;        
    }

    .week-night-temperature {
        font-weight: 400;
        opacity: 0.7;
    }
 } 

 .hourly-weather-info-container {
    position: relative;
    display: grid;
    grid-column: 1 / 3;
    padding: 0 32px;    
 }

 .hourly-weather-column {
    display: grid;
    justify-items: center;
    align-items: center;
    width: 36px;
    gap: 4px;
 }

 .slider-wrap {    
    position: relative;
    overflow: hidden;
    width: 432px;
    justify-self: center; 
    border-top: 1px solid rgba(255, 255, 255, .2); 
    padding-top: 8px;  
 }

 .slider-content {
    display: grid;
    grid-auto-flow: column;
    position: absolute;           
 }

 .nav-container {
    position: absolute;   
    width: 100%;
    height: 100%;   
    display: flex;
    justify-content: space-between;
    align-items: center;    
 }

#button-previous {
    background: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) no-repeat;
    background-position: 55% 50%;     
}

#button-next {
    background: url(${___CSS_LOADER_URL_REPLACEMENT_2___}) no-repeat; 
    background-position: 45% 50%;    
}

#button-previous,
#button-next {
    cursor: pointer;
    border: none;      
    border-radius: 50%;
    width: 18px;
    height: 18px;    
    background-size: 36px;
    opacity: 40%;
    
    &:hover {
        opacity: 80%;
    }
}

.hourly-weather-image {
    height: 28px;
    width: 28px;
}

.hourly-weather-time {
    opacity: 0.6;
}

.week-day-weather-image img {
    display: grid;
    height: 48px;
    width: 48px;
    align-self: center;
}

.switch {
    position: relative;
    display: inline-block;
    width: 66px;
    height: 40px;
    border: 1px solid rgba(255, 255, 255, .2);
    border-radius: 50px;
    background-color: rgba(0, 0, 0, 0.5);
}  

.switch input {
    opacity: 0;
    width: 0;
    height: 0;
}  

.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    -webkit-transition: .4s;
    transition: .4s;
}

.slider:before {
    position: absolute;    
    height: 28px;
    width: 28px;
    left: 4px;
    bottom: 4px;
    content: "°C";
    display: grid;
    place-content: center;
    color: #1e3c72;
    font-weight: 900;
    background-color: #dadfe7;
    -webkit-transition: .4s;
    transition: .4s;    
}

input:checked + .slider:before {
    content: '°F';    
}  

input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
} 

.slider.round:before {
    border-radius: 50%;
}

.active {
    display: block;
}

.loader {    
    position: absolute;
    display: none;
    bottom: -40px;
    left: 50%;
    transform: translate(-50%);
    font-size: 8px;
    width: 1em;
    height: 1em;
    border-radius: 50%;   
    animation: spin 1.1s infinite ease;
    transform: translateZ(0);    
  
    &.loader-active {
        display: block;
    }
}

  @keyframes spin {
    0%,
    100% {
      box-shadow: 0em -2.6em 0em 0em #ffffff, 1.8em -1.8em 0 0em rgba(255,255,255, 0.2), 2.5em 0em 0 0em rgba(255,255,255, 0.2), 1.75em 1.75em 0 0em rgba(255,255,255, 0.2), 0em 2.5em 0 0em rgba(255,255,255, 0.2), -1.8em 1.8em 0 0em rgba(255,255,255, 0.2), -2.6em 0em 0 0em rgba(255,255,255, 0.5), -1.8em -1.8em 0 0em rgba(255,255,255, 0.7);
    }
    12.5% {
      box-shadow: 0em -2.6em 0em 0em rgba(255,255,255, 0.7), 1.8em -1.8em 0 0em #ffffff, 2.5em 0em 0 0em rgba(255,255,255, 0.2), 1.75em 1.75em 0 0em rgba(255,255,255, 0.2), 0em 2.5em 0 0em rgba(255,255,255, 0.2), -1.8em 1.8em 0 0em rgba(255,255,255, 0.2), -2.6em 0em 0 0em rgba(255,255,255, 0.2), -1.8em -1.8em 0 0em rgba(255,255,255, 0.5);
    }
    25% {
      box-shadow: 0em -2.6em 0em 0em rgba(255,255,255, 0.5), 1.8em -1.8em 0 0em rgba(255,255,255, 0.7), 2.5em 0em 0 0em #ffffff, 1.75em 1.75em 0 0em rgba(255,255,255, 0.2), 0em 2.5em 0 0em rgba(255,255,255, 0.2), -1.8em 1.8em 0 0em rgba(255,255,255, 0.2), -2.6em 0em 0 0em rgba(255,255,255, 0.2), -1.8em -1.8em 0 0em rgba(255,255,255, 0.2);
    }
    37.5% {
      box-shadow: 0em -2.6em 0em 0em rgba(255,255,255, 0.2), 1.8em -1.8em 0 0em rgba(255,255,255, 0.5), 2.5em 0em 0 0em rgba(255,255,255, 0.7), 1.75em 1.75em 0 0em #ffffff, 0em 2.5em 0 0em rgba(255,255,255, 0.2), -1.8em 1.8em 0 0em rgba(255,255,255, 0.2), -2.6em 0em 0 0em rgba(255,255,255, 0.2), -1.8em -1.8em 0 0em rgba(255,255,255, 0.2);
    }
    50% {
      box-shadow: 0em -2.6em 0em 0em rgba(255,255,255, 0.2), 1.8em -1.8em 0 0em rgba(255,255,255, 0.2), 2.5em 0em 0 0em rgba(255,255,255, 0.5), 1.75em 1.75em 0 0em rgba(255,255,255, 0.7), 0em 2.5em 0 0em #ffffff, -1.8em 1.8em 0 0em rgba(255,255,255, 0.2), -2.6em 0em 0 0em rgba(255,255,255, 0.2), -1.8em -1.8em 0 0em rgba(255,255,255, 0.2);
    }
    62.5% {
      box-shadow: 0em -2.6em 0em 0em rgba(255,255,255, 0.2), 1.8em -1.8em 0 0em rgba(255,255,255, 0.2), 2.5em 0em 0 0em rgba(255,255,255, 0.2), 1.75em 1.75em 0 0em rgba(255,255,255, 0.5), 0em 2.5em 0 0em rgba(255,255,255, 0.7), -1.8em 1.8em 0 0em #ffffff, -2.6em 0em 0 0em rgba(255,255,255, 0.2), -1.8em -1.8em 0 0em rgba(255,255,255, 0.2);
    }
    75% {
      box-shadow: 0em -2.6em 0em 0em rgba(255,255,255, 0.2), 1.8em -1.8em 0 0em rgba(255,255,255, 0.2), 2.5em 0em 0 0em rgba(255,255,255, 0.2), 1.75em 1.75em 0 0em rgba(255,255,255, 0.2), 0em 2.5em 0 0em rgba(255,255,255, 0.5), -1.8em 1.8em 0 0em rgba(255,255,255, 0.7), -2.6em 0em 0 0em #ffffff, -1.8em -1.8em 0 0em rgba(255,255,255, 0.2);
    }
    87.5% {
      box-shadow: 0em -2.6em 0em 0em rgba(255,255,255, 0.2), 1.8em -1.8em 0 0em rgba(255,255,255, 0.2), 2.5em 0em 0 0em rgba(255,255,255, 0.2), 1.75em 1.75em 0 0em rgba(255,255,255, 0.2), 0em 2.5em 0 0em rgba(255,255,255, 0.2), -1.8em 1.8em 0 0em rgba(255,255,255, 0.5), -2.6em 0em 0 0em rgba(255,255,255, 0.7), -1.8em -1.8em 0 0em #ffffff;
    }
  }




`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700&display=swap');\n\n* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\nhtml, body {\n    height: 100%; \n    background-image: linear-gradient(rgba(0, 0, 0, 0.4), \n                                      rgba(0, 0, 0, 0.4)),\n                      url('/dist/images/wallpaper.jpg');\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: cover;     \n    font-family: 'Nunito', sans-serif;   \n}\n\n.top-nav {   \n    display: grid;    \n    align-items: center;\n    grid-template-columns: 1fr 360px 1fr; \n    padding: 40px;  \n}\n\n.top-nav form {\n    justify-self: center;    \n}\n\n.search-container {\n    position: relative;\n    display: grid;\n    grid-template-columns: 1fr auto;  \n}\n\n.error-message {\n    position: absolute;\n    display: none;\n    bottom: -24px;\n    left: 20px;\n    color: rgb(214, 214, 30);   \n}\n\n.search-input {\n    height: 40px;\n    padding: 10px;\n    border: 1px solid rgba(199, 109, 109, 0.2);\n    border-right: transparent;\n    border-radius: 50px 0px 0px 50px;\n    font-size: 16px;\n    background-color: rgba(0, 0, 0, 0.5);\n    outline: none;\n    color: white;\n    \n    &.search-input::-webkit-search-cancel-button {\n        display: none;\n    } \n}\n\n.search-input::placeholder {\n    color: rgb(177, 177, 179);\n}\n\n.search-submit-button {\n    cursor: pointer;   \n    height: 40px;\n    width: 40px;\n    color: white;\n    background-color: rgba(0, 0, 0, 0.5);\n    border: 1px solid rgba(255, 255, 255, .2);\n    border-radius: 0px 50px 50px 0px;\n    border-left: transparent;\n\n    img {\n        height: 24px;\n        width: 24px;\n    }\n}\n\nmain {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, 540px);\n    justify-content: center;   \n    gap: 40px;\n    padding: 40px;\n   \n} \n\n.today-info-card {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 3fr 1fr;\n    justify-self: center;\n    width: 540px;\n    height: 400px;  \n    border: 1px solid rgba(255, 255, 255, .2);\n    border-radius: 16px;\n    padding: 20px;    \n    color: white;\n    background-color: rgba(0, 0, 0, 0.5);    \n }\n\n img {   \n    width: 124px;            \n }\n\n .today-weather-main-info {\n    display: grid;\n    grid-template-rows: auto 100px 36px 1fr;\n    justify-items: center;\n    align-items: center;\n }\n\n .today-weather-extra-info {\n    display: grid;\n    grid-template-rows: 40px 1fr;\n    justify-items: end;     \n }\n\n .today-weather-extra-info > div:first-of-type {\n    img {\n        width: 20px;\n        justify-self: end; \n        margin-right: 8px;\n        opacity: 0.6;      \n    }\n\n    .date-wrap,\n    .time-wrap {\n        display: grid;\n        grid-template-columns: 1fr 1fr;\n        align-items: center;         \n    }\n }\n\n .today-weather-extra-info > div:nth-child(2) {\n    display: grid; \n    justify-self: center; \n    align-self:center;\n    justify-items: center;\n    \n    .humidity-wrap, \n    .wind-wrap {\n        display: grid;\n        grid-template-columns: 1fr 1fr;\n        align-items: center;       \n    }\n\n    img {\n        width: 48px;\n        justify-self: end;\n    }\n    \n    .humidity, \n    .wind {\n        font-size: 20px;\n        font-weight: 700;\n    }\n}\n\n .location-name {\n    font-size: 40px;\n    font-weight: bold;\n }\n \n .today-temperature {\n    font-size: 40px;\n    font-weight: bold;\n }\n\n .today-conditions {\n    font-size: 20px;\n }\n\n .week-weather-info-container {\n    display: grid;\n    color: white;   \n    max-width: 540px;\n }\n\n .week-day-weather-row {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr 1fr;\n    gap: 20px;\n    border-top: 1px solid rgba(255, 255, 255, .2);\n    align-items: center;\n    justify-items: center;\n    \n    .week-day-name {\n        justify-self: start;\n        text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;\n        font-size: 20px;\n        font-weight: 600;\n        color: rgb(247, 185, 135);\n    }\n\n    .week-day-temperature,\n    .week-night-temperature {\n        font-size: 20px;\n        font-weight: 600;        \n    }\n\n    .week-night-temperature {\n        font-weight: 400;\n        opacity: 0.7;\n    }\n } \n\n .hourly-weather-info-container {\n    position: relative;\n    display: grid;\n    grid-column: 1 / 3;\n    padding: 0 32px;    \n }\n\n .hourly-weather-column {\n    display: grid;\n    justify-items: center;\n    align-items: center;\n    width: 36px;\n    gap: 4px;\n }\n\n .slider-wrap {    \n    position: relative;\n    overflow: hidden;\n    width: 432px;\n    justify-self: center; \n    border-top: 1px solid rgba(255, 255, 255, .2); \n    padding-top: 8px;  \n }\n\n .slider-content {\n    display: grid;\n    grid-auto-flow: column;\n    position: absolute;           \n }\n\n .nav-container {\n    position: absolute;   \n    width: 100%;\n    height: 100%;   \n    display: flex;\n    justify-content: space-between;\n    align-items: center;    \n }\n\n#button-previous {\n    background: url(/dist/images/chevron-left.svg) no-repeat;\n    background-position: 55% 50%;     \n}\n\n#button-next {\n    background: url(/dist/images/chevron-right.svg) no-repeat; \n    background-position: 45% 50%;    \n}\n\n#button-previous,\n#button-next {\n    cursor: pointer;\n    border: none;      \n    border-radius: 50%;\n    width: 18px;\n    height: 18px;    \n    background-size: 36px;\n    opacity: 40%;\n    \n    &:hover {\n        opacity: 80%;\n    }\n}\n\n.hourly-weather-image {\n    height: 28px;\n    width: 28px;\n}\n\n.hourly-weather-time {\n    opacity: 0.6;\n}\n\n.week-day-weather-image img {\n    display: grid;\n    height: 48px;\n    width: 48px;\n    align-self: center;\n}\n\n.switch {\n    position: relative;\n    display: inline-block;\n    width: 66px;\n    height: 40px;\n    border: 1px solid rgba(255, 255, 255, .2);\n    border-radius: 50px;\n    background-color: rgba(0, 0, 0, 0.5);\n}  \n\n.switch input {\n    opacity: 0;\n    width: 0;\n    height: 0;\n}  \n\n.slider {\n    position: absolute;\n    cursor: pointer;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    -webkit-transition: .4s;\n    transition: .4s;\n}\n\n.slider:before {\n    position: absolute;    \n    height: 28px;\n    width: 28px;\n    left: 4px;\n    bottom: 4px;\n    content: \"°C\";\n    display: grid;\n    place-content: center;\n    color: #1e3c72;\n    font-weight: 900;\n    background-color: #dadfe7;\n    -webkit-transition: .4s;\n    transition: .4s;    \n}\n\ninput:checked + .slider:before {\n    content: '°F';    \n}  \n\ninput:checked + .slider:before {\n    -webkit-transform: translateX(26px);\n    -ms-transform: translateX(26px);\n    transform: translateX(26px);\n} \n\n.slider.round:before {\n    border-radius: 50%;\n}\n\n.active {\n    display: block;\n}\n\n.loader {    \n    position: absolute;\n    display: none;\n    bottom: -40px;\n    left: 50%;\n    transform: translate(-50%);\n    font-size: 8px;\n    width: 1em;\n    height: 1em;\n    border-radius: 50%;   \n    animation: spin 1.1s infinite ease;\n    transform: translateZ(0);    \n  \n    &.loader-active {\n        display: block;\n    }\n}\n\n  @keyframes spin {\n    0%,\n    100% {\n      box-shadow: 0em -2.6em 0em 0em #ffffff, 1.8em -1.8em 0 0em rgba(255,255,255, 0.2), 2.5em 0em 0 0em rgba(255,255,255, 0.2), 1.75em 1.75em 0 0em rgba(255,255,255, 0.2), 0em 2.5em 0 0em rgba(255,255,255, 0.2), -1.8em 1.8em 0 0em rgba(255,255,255, 0.2), -2.6em 0em 0 0em rgba(255,255,255, 0.5), -1.8em -1.8em 0 0em rgba(255,255,255, 0.7);\n    }\n    12.5% {\n      box-shadow: 0em -2.6em 0em 0em rgba(255,255,255, 0.7), 1.8em -1.8em 0 0em #ffffff, 2.5em 0em 0 0em rgba(255,255,255, 0.2), 1.75em 1.75em 0 0em rgba(255,255,255, 0.2), 0em 2.5em 0 0em rgba(255,255,255, 0.2), -1.8em 1.8em 0 0em rgba(255,255,255, 0.2), -2.6em 0em 0 0em rgba(255,255,255, 0.2), -1.8em -1.8em 0 0em rgba(255,255,255, 0.5);\n    }\n    25% {\n      box-shadow: 0em -2.6em 0em 0em rgba(255,255,255, 0.5), 1.8em -1.8em 0 0em rgba(255,255,255, 0.7), 2.5em 0em 0 0em #ffffff, 1.75em 1.75em 0 0em rgba(255,255,255, 0.2), 0em 2.5em 0 0em rgba(255,255,255, 0.2), -1.8em 1.8em 0 0em rgba(255,255,255, 0.2), -2.6em 0em 0 0em rgba(255,255,255, 0.2), -1.8em -1.8em 0 0em rgba(255,255,255, 0.2);\n    }\n    37.5% {\n      box-shadow: 0em -2.6em 0em 0em rgba(255,255,255, 0.2), 1.8em -1.8em 0 0em rgba(255,255,255, 0.5), 2.5em 0em 0 0em rgba(255,255,255, 0.7), 1.75em 1.75em 0 0em #ffffff, 0em 2.5em 0 0em rgba(255,255,255, 0.2), -1.8em 1.8em 0 0em rgba(255,255,255, 0.2), -2.6em 0em 0 0em rgba(255,255,255, 0.2), -1.8em -1.8em 0 0em rgba(255,255,255, 0.2);\n    }\n    50% {\n      box-shadow: 0em -2.6em 0em 0em rgba(255,255,255, 0.2), 1.8em -1.8em 0 0em rgba(255,255,255, 0.2), 2.5em 0em 0 0em rgba(255,255,255, 0.5), 1.75em 1.75em 0 0em rgba(255,255,255, 0.7), 0em 2.5em 0 0em #ffffff, -1.8em 1.8em 0 0em rgba(255,255,255, 0.2), -2.6em 0em 0 0em rgba(255,255,255, 0.2), -1.8em -1.8em 0 0em rgba(255,255,255, 0.2);\n    }\n    62.5% {\n      box-shadow: 0em -2.6em 0em 0em rgba(255,255,255, 0.2), 1.8em -1.8em 0 0em rgba(255,255,255, 0.2), 2.5em 0em 0 0em rgba(255,255,255, 0.2), 1.75em 1.75em 0 0em rgba(255,255,255, 0.5), 0em 2.5em 0 0em rgba(255,255,255, 0.7), -1.8em 1.8em 0 0em #ffffff, -2.6em 0em 0 0em rgba(255,255,255, 0.2), -1.8em -1.8em 0 0em rgba(255,255,255, 0.2);\n    }\n    75% {\n      box-shadow: 0em -2.6em 0em 0em rgba(255,255,255, 0.2), 1.8em -1.8em 0 0em rgba(255,255,255, 0.2), 2.5em 0em 0 0em rgba(255,255,255, 0.2), 1.75em 1.75em 0 0em rgba(255,255,255, 0.2), 0em 2.5em 0 0em rgba(255,255,255, 0.5), -1.8em 1.8em 0 0em rgba(255,255,255, 0.7), -2.6em 0em 0 0em #ffffff, -1.8em -1.8em 0 0em rgba(255,255,255, 0.2);\n    }\n    87.5% {\n      box-shadow: 0em -2.6em 0em 0em rgba(255,255,255, 0.2), 1.8em -1.8em 0 0em rgba(255,255,255, 0.2), 2.5em 0em 0 0em rgba(255,255,255, 0.2), 1.75em 1.75em 0 0em rgba(255,255,255, 0.2), 0em 2.5em 0 0em rgba(255,255,255, 0.2), -1.8em 1.8em 0 0em rgba(255,255,255, 0.5), -2.6em 0em 0 0em rgba(255,255,255, 0.7), -1.8em -1.8em 0 0em #ffffff;\n    }\n  }\n\n\n\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/getWeather.js":
/*!***********************************!*\
  !*** ./src/modules/getWeather.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getWeather: () => (/* binding */ getWeather)
/* harmony export */ });
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui */ "./src/modules/ui.js");




const getWeather = async (location) => {
    const unitsCheckbox = document.querySelector('.units-checkbox');
    const units = unitsCheckbox.checked ? 'us' : 'metric';

    const apiKey = 'ZFEZ9FB6LLYZUZ9DFDU7GJTMD';
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=${units}&key=${apiKey}`;    
    
    (0,_ui__WEBPACK_IMPORTED_MODULE_0__.loading)('started');

    try {
    const response = await fetch(url, { mode: 'cors'});
    const errorMessage = document.querySelector('.error-message');    
    
    if (!response.ok) {
        (0,_ui__WEBPACK_IMPORTED_MODULE_0__.loading)('finished');

        errorMessage.innerText = "Sorry, no location found";
        errorMessage.classList.add('active');
        setTimeout(() => errorMessage.classList.remove('active'), 3000);

        return;
    }

    const data = weatherDataMapper(await response.json());
    
    (0,_ui__WEBPACK_IMPORTED_MODULE_0__.renderTodayWeatherInfoCard)(data);
    (0,_ui__WEBPACK_IMPORTED_MODULE_0__.renderDailyWeather)(data);    
    (0,_ui__WEBPACK_IMPORTED_MODULE_0__.loading)('finished');    

    } catch (error) {
        console.log(error)
        console.error('Fetch weather API is failed', error);
    };
}

function weatherDataMapper(data) {
    console.log(data)
    return {
        location: data.resolvedAddress.split(",")[0],
        temperature: String(data.currentConditions.temp).split(".")[0],
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString().slice(0, -3),
        conditions: data.currentConditions.conditions,
        humidity: String(data.currentConditions.humidity).split(".")[0],
        windSpeed: String(data.currentConditions.windspeed).split(".")[0],
        icon: data.currentConditions.icon,
        hourlyForecast: data.days[0].hours.map(hour => ({
                            time: hour.datetime.slice(0, 2),
                            temperature: String(hour.temp).split(".")[0],
                            icon: hour.icon
                        })),
        weekForecast: data.days.slice(1, 8).map(day => ({
                            weekDay: new Date(day.datetime).toLocaleDateString('en-US', {weekday: 'long'}),
                            maxTemperature: String(day.tempmax).split(".")[0],
                            minTemperature: String(day.tempmin).split(".")[0],                        
                            icon: day.icon
                        }))
        
    };
}

/***/ }),

/***/ "./src/modules/ui.js":
/*!***************************!*\
  !*** ./src/modules/ui.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loading: () => (/* binding */ loading),
/* harmony export */   renderDailyWeather: () => (/* binding */ renderDailyWeather),
/* harmony export */   renderTodayWeatherInfoCard: () => (/* binding */ renderTodayWeatherInfoCard)
/* harmony export */ });
const renderDailyWeather = (weather) => {
    const weekWeatherInfoContainer = document.querySelector('.week-weather-info-container');
    weekWeatherInfoContainer.innerHTML = '';

    weather.weekForecast.map((element) => {       
        weekWeatherInfoContainer.innerHTML += `
        <div class="week-day-weather-row">
          <div class="week-day-name">${element.weekDay}</div>
          <div class="week-day-weather-image">
             <img
              class="week-day-weather-icon"
              src="images/weather-images-filled/${element.icon}.svg"
              alt=""
              />
          </div>    
          <div class="week-day-temperature"><sup>&uarr;</sup>${element.maxTemperature}°</div>
          <div class="week-night-temperature"><sup>&darr;</sup>${element.minTemperature}°</div>                
        </div>`                 
    });

    weekWeatherInfoContainer.children[0].style.border = 'none';
}

const renderTodayWeatherInfoCard = (weather) => {
    const todayWeatherInfoCard = document.querySelector('.today-info-card');
    todayWeatherInfoCard.innerHTML = '';
    
    const mainWeatherInfoDiv = document.createElement('div');
    mainWeatherInfoDiv.classList.add('today-weather-main-info');
    mainWeatherInfoDiv.innerHTML = `
        <div class="location-name">${weather.location}</div>                   
        <img src="images/weather-images-filled/${weather.icon}.svg">       
        <div class="today-temperature">${weather.temperature}°</div>          
        <div class="today-conditions">${weather.conditions}</div>       
    `; 
    
    const additionalWeatherInfoDiv = document.createElement('div');
    additionalWeatherInfoDiv.classList.add('today-weather-extra-info');
    additionalWeatherInfoDiv.innerHTML = `
        <div>
            <div class="date-wrap">
                <img src="images/date.svg"> 
                <div class="date">${weather.date}</div>
            </div>
            <div class="time-wrap">
                <img src="images/time.svg">
                <div class="time">${weather.time}</div>
            </div>
        </div>
        <div>
            <div class="humidity-wrap">
                <img src="images/weather-images-lined/humidity.svg">           
                <div class="humidity">${weather.humidity}%</div>
            </div>
            <div class="wind-wrap">
                <img src="images/weather-images-lined/wind.svg">            
                <div class="wind"></div>
            </div>
         </div>
    `;
    
    const hourlyWeatherInfoContainer = document.createElement('div');
    hourlyWeatherInfoContainer.classList.add('hourly-weather-info-container');

    const sliderWrap = document.createElement('div');
    
    hourlyWeatherInfoContainer.innerHTML = renderSliderNavigationPanel();
    hourlyWeatherInfoContainer.appendChild(sliderWrap);

    sliderWrap.classList.add('slider-wrap');
    sliderWrap.innerHTML = renderSlider();   

    todayWeatherInfoCard.append(mainWeatherInfoDiv, additionalWeatherInfoDiv, hourlyWeatherInfoContainer);
    
    renderHourlyWeatherInfo(weather);
    renderWindSpeed(weather.windSpeed);
    addEventListenerToSlider();

    return todayWeatherInfoCard;
}

const renderHourlyWeatherInfo = (weather) => {
    const sliderContent = document.querySelector('.slider-content');

    weather.hourlyForecast.map((hour) => {       
        sliderContent.innerHTML += `
        <div class="hourly-weather-column">
          <div class="hourly-weather-time">${hour.time}</div>
          <div class="hourly-weather-image">
             <img
              class="hourly-weather-image"
              src="images/weather-images-lined/${hour.icon}.svg"
              alt=""
              />
          </div>    
          <div class="hourly-weather-temperature">${hour.temperature}°</div>               
        </div>`         
    });
}

const renderSlider = () => {
    return `        
        <div class="slider-content"></div>                
    `;
}

const renderSliderNavigationPanel = () => {
    return `
        <div class="nav-container">
            <button id="button-previous"></button>           
            <button id="button-next"></button>            
        </div> 
    `
}

const renderWindSpeed = (windSpeed) => {
    const wind = document.querySelector('.wind');
    const unitsCheckbox = document.querySelector('.units-checkbox');
    const unit = unitsCheckbox.checked ? 'mph' : 'km/h';

    wind.innerHTML = windSpeed + unit;
}


const addEventListenerToSlider = () => {
    const sliderContent = document.querySelector(".slider-content");
    const buttonNext = document.getElementById("button-next");
    const buttonPrevious = document.getElementById("button-previous");    

    let currentIndex = 0;

    const slide = (index) => {   
        if (index < 0) {
            index = 2 -1;        
        };

        if (index >= 2) {
            index = 0;        
        };     
    
        console.log(`translateX(-${(index / 2) * 100}%)`)
        sliderContent.style.transform = `translateX(-${(index / 2) * 100}%)`;
        currentIndex = index;   
    };

    buttonNext.onclick = () => { 
        console.log("click!")    
        slide(currentIndex + 1);
    };

    buttonPrevious.onclick = () => {   
        slide(currentIndex - 1);
    };
}

const loading = (state) => {
    const loadingSpinner = document.querySelector('.loader');

    if (state === 'started') {
      loadingSpinner.classList.add('loader-active');     
    } else {
      loadingSpinner.classList.remove('loader-active');
    }
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_getWeather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/getWeather */ "./src/modules/getWeather.js");



const form = document.querySelector('.search-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const userInput = document.querySelector('.search-input');
    const errorMessage = document.querySelector('.error-message');
   
    console.log(userInput)
    if (!isValid(userInput.value)) {
        console.log('click')
        errorMessage.innerText = "Please enter a location";
        errorMessage.classList.add('active');
        setTimeout(() => errorMessage.classList.remove('active'), 3000);

        return;
    };

    (0,_modules_getWeather__WEBPACK_IMPORTED_MODULE_1__.getWeather)(userInput.value);
    userInput.value = '';
});

const unitCheckbox = document.querySelector('.units-checkbox');

unitCheckbox.addEventListener('click', () => {
    const currentLocation = document.querySelector('.location-name');
    console.log(currentLocation.innerText)
    ;(0,_modules_getWeather__WEBPACK_IMPORTED_MODULE_1__.getWeather)(currentLocation.innerText);
});

const isValid = (userInput) => {
    console.log(userInput)    
    if (userInput === "") {
        return false;
    }
    return true;   
}

;(0,_modules_getWeather__WEBPACK_IMPORTED_MODULE_1__.getWeather)("Dublin");






/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLG1NQUE2QztBQUN6Riw0Q0FBNEMsc01BQWdEO0FBQzVGLDRDQUE0Qyx1TUFBaUQ7QUFDN0YsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRiwrR0FBK0csSUFBSSxJQUFJLGtCQUFrQjtBQUN6SSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsbUNBQW1DO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCLG1DQUFtQztBQUN6RDtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCLG1DQUFtQztBQUN6RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQSxPQUFPLGdGQUFnRixZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLE9BQU8sYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFdBQVcsS0FBSyxVQUFVLE1BQU0sTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsY0FBYyxNQUFNLFVBQVUsVUFBVSxLQUFLLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsTUFBTSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsY0FBYyxPQUFPLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxNQUFNLFVBQVUsWUFBWSxNQUFNLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxjQUFjLE1BQU0sWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sTUFBTSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sTUFBTSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxZQUFZLEtBQUssVUFBVSxNQUFNLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlB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QTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7OztBQ0FxQjtBQUM2Qjs7QUFFbEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLElBQUksK0RBQVU7QUFDZDtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSSxnRUFBVTtBQUNkLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0VBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy9nZXRXZWF0aGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvdWkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi9kaXN0L2ltYWdlcy93YWxscGFwZXIuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiL2Rpc3QvaW1hZ2VzL2NoZXZyb24tbGVmdC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIvZGlzdC9pbWFnZXMvY2hldnJvbi1yaWdodC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU51bml0bzp3Z2h0QDMwMDs0MDA7NjAwOzcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG59XG5cbmh0bWwsIGJvZHkge1xuICAgIGhlaWdodDogMTAwJTsgXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC40KSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJnYmEoMCwgMCwgMCwgMC40KSksXG4gICAgICAgICAgICAgICAgICAgICAgdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7ICAgICBcbiAgICBmb250LWZhbWlseTogJ051bml0bycsIHNhbnMtc2VyaWY7ICAgXG59XG5cbi50b3AtbmF2IHsgICBcbiAgICBkaXNwbGF5OiBncmlkOyAgICBcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDM2MHB4IDFmcjsgXG4gICAgcGFkZGluZzogNDBweDsgIFxufVxuXG4udG9wLW5hdiBmb3JtIHtcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjsgICAgXG59XG5cbi5zZWFyY2gtY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBhdXRvOyAgXG59XG5cbi5lcnJvci1tZXNzYWdlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBib3R0b206IC0yNHB4O1xuICAgIGxlZnQ6IDIwcHg7XG4gICAgY29sb3I6IHJnYigyMTQsIDIxNCwgMzApOyAgIFxufVxuXG4uc2VhcmNoLWlucHV0IHtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE5OSwgMTA5LCAxMDksIDAuMik7XG4gICAgYm9yZGVyLXJpZ2h0OiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4IDBweCAwcHggNTBweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIFxuICAgICYuc2VhcmNoLWlucHV0Ojotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9IFxufVxuXG4uc2VhcmNoLWlucHV0OjpwbGFjZWhvbGRlciB7XG4gICAgY29sb3I6IHJnYigxNzcsIDE3NywgMTc5KTtcbn1cblxuLnNlYXJjaC1zdWJtaXQtYnV0dG9uIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7ICAgXG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAuMik7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDUwcHggNTBweCAwcHg7XG4gICAgYm9yZGVyLWxlZnQ6IHRyYW5zcGFyZW50O1xuXG4gICAgaW1nIHtcbiAgICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgICB3aWR0aDogMjRweDtcbiAgICB9XG59XG5cbm1haW4ge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCA1NDBweCk7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICAgXG4gICAgZ2FwOiA0MHB4O1xuICAgIHBhZGRpbmc6IDQwcHg7XG4gICBcbn0gXG5cbi50b2RheS1pbmZvLWNhcmQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogM2ZyIDFmcjtcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgICB3aWR0aDogNTQwcHg7XG4gICAgaGVpZ2h0OiA0MDBweDsgIFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgLjIpO1xuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gICAgcGFkZGluZzogMjBweDsgICAgXG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTsgICAgXG4gfVxuXG4gaW1nIHsgICBcbiAgICB3aWR0aDogMTI0cHg7ICAgICAgICAgICAgXG4gfVxuXG4gLnRvZGF5LXdlYXRoZXItbWFpbi1pbmZvIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxMDBweCAzNnB4IDFmcjtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiB9XG5cbiAudG9kYXktd2VhdGhlci1leHRyYS1pbmZvIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNDBweCAxZnI7XG4gICAganVzdGlmeS1pdGVtczogZW5kOyAgICAgXG4gfVxuXG4gLnRvZGF5LXdlYXRoZXItZXh0cmEtaW5mbyA+IGRpdjpmaXJzdC1vZi10eXBlIHtcbiAgICBpbWcge1xuICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAganVzdGlmeS1zZWxmOiBlbmQ7IFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICAgICAgb3BhY2l0eTogMC42OyAgICAgIFxuICAgIH1cblxuICAgIC5kYXRlLXdyYXAsXG4gICAgLnRpbWUtd3JhcCB7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgICAgICAgICBcbiAgICB9XG4gfVxuXG4gLnRvZGF5LXdlYXRoZXItZXh0cmEtaW5mbyA+IGRpdjpudGgtY2hpbGQoMikge1xuICAgIGRpc3BsYXk6IGdyaWQ7IFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyOyBcbiAgICBhbGlnbi1zZWxmOmNlbnRlcjtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgXG4gICAgLmh1bWlkaXR5LXdyYXAsIFxuICAgIC53aW5kLXdyYXAge1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICAgICAgIFxuICAgIH1cblxuICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiA0OHB4O1xuICAgICAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcbiAgICB9XG4gICAgXG4gICAgLmh1bWlkaXR5LCBcbiAgICAud2luZCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICB9XG59XG5cbiAubG9jYXRpb24tbmFtZSB7XG4gICAgZm9udC1zaXplOiA0MHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuIH1cbiBcbiAudG9kYXktdGVtcGVyYXR1cmUge1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiB9XG5cbiAudG9kYXktY29uZGl0aW9ucyB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuIH1cblxuIC53ZWVrLXdlYXRoZXItaW5mby1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgY29sb3I6IHdoaXRlOyAgIFxuICAgIG1heC13aWR0aDogNTQwcHg7XG4gfVxuXG4gLndlZWstZGF5LXdlYXRoZXItcm93IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyO1xuICAgIGdhcDogMjBweDtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAuMik7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgXG4gICAgLndlZWstZGF5LW5hbWUge1xuICAgICAgICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xuICAgICAgICB0ZXh0LXNoYWRvdzogLTFweCAtMXB4IDAgIzAwMCwgMXB4IC0xcHggMCAjMDAwLCAtMXB4IDFweCAwICMwMDAsIDFweCAxcHggMCAjMDAwO1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGNvbG9yOiByZ2IoMjQ3LCAxODUsIDEzNSk7XG4gICAgfVxuXG4gICAgLndlZWstZGF5LXRlbXBlcmF0dXJlLFxuICAgIC53ZWVrLW5pZ2h0LXRlbXBlcmF0dXJlIHtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwOyAgICAgICAgXG4gICAgfVxuXG4gICAgLndlZWstbmlnaHQtdGVtcGVyYXR1cmUge1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBvcGFjaXR5OiAwLjc7XG4gICAgfVxuIH0gXG5cbiAuaG91cmx5LXdlYXRoZXItaW5mby1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcbiAgICBwYWRkaW5nOiAwIDMycHg7ICAgIFxuIH1cblxuIC5ob3VybHktd2VhdGhlci1jb2x1bW4ge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDM2cHg7XG4gICAgZ2FwOiA0cHg7XG4gfVxuXG4gLnNsaWRlci13cmFwIHsgICAgXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd2lkdGg6IDQzMnB4O1xuICAgIGp1c3RpZnktc2VsZjogY2VudGVyOyBcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAuMik7IFxuICAgIHBhZGRpbmctdG9wOiA4cHg7ICBcbiB9XG5cbiAuc2xpZGVyLWNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7ICAgICAgICAgICBcbiB9XG5cbiAubmF2LWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlOyAgIFxuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTsgICBcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyAgICBcbiB9XG5cbiNidXR0b24tcHJldmlvdXMge1xuICAgIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KSBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTUlIDUwJTsgICAgIFxufVxuXG4jYnV0dG9uLW5leHQge1xuICAgIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KSBuby1yZXBlYXQ7IFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDQ1JSA1MCU7ICAgIFxufVxuXG4jYnV0dG9uLXByZXZpb3VzLFxuI2J1dHRvbi1uZXh0IHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm9yZGVyOiBub25lOyAgICAgIFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB3aWR0aDogMThweDtcbiAgICBoZWlnaHQ6IDE4cHg7ICAgIFxuICAgIGJhY2tncm91bmQtc2l6ZTogMzZweDtcbiAgICBvcGFjaXR5OiA0MCU7XG4gICAgXG4gICAgJjpob3ZlciB7XG4gICAgICAgIG9wYWNpdHk6IDgwJTtcbiAgICB9XG59XG5cbi5ob3VybHktd2VhdGhlci1pbWFnZSB7XG4gICAgaGVpZ2h0OiAyOHB4O1xuICAgIHdpZHRoOiAyOHB4O1xufVxuXG4uaG91cmx5LXdlYXRoZXItdGltZSB7XG4gICAgb3BhY2l0eTogMC42O1xufVxuXG4ud2Vlay1kYXktd2VhdGhlci1pbWFnZSBpbWcge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgaGVpZ2h0OiA0OHB4O1xuICAgIHdpZHRoOiA0OHB4O1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuLnN3aXRjaCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogNjZweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAuMik7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG59ICBcblxuLnN3aXRjaCBpbnB1dCB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDA7XG59ICBcblxuLnNsaWRlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNHM7XG4gICAgdHJhbnNpdGlvbjogLjRzO1xufVxuXG4uc2xpZGVyOmJlZm9yZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlOyAgICBcbiAgICBoZWlnaHQ6IDI4cHg7XG4gICAgd2lkdGg6IDI4cHg7XG4gICAgbGVmdDogNHB4O1xuICAgIGJvdHRvbTogNHB4O1xuICAgIGNvbnRlbnQ6IFwiwrBDXCI7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XG4gICAgY29sb3I6ICMxZTNjNzI7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGFkZmU3O1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xuICAgIHRyYW5zaXRpb246IC40czsgICAgXG59XG5cbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XG4gICAgY29udGVudDogJ8KwRic7ICAgIFxufSAgXG5cbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XG59IFxuXG4uc2xpZGVyLnJvdW5kOmJlZm9yZSB7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uYWN0aXZlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmxvYWRlciB7ICAgIFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIGJvdHRvbTogLTQwcHg7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUpO1xuICAgIGZvbnQtc2l6ZTogOHB4O1xuICAgIHdpZHRoOiAxZW07XG4gICAgaGVpZ2h0OiAxZW07XG4gICAgYm9yZGVyLXJhZGl1czogNTAlOyAgIFxuICAgIGFuaW1hdGlvbjogc3BpbiAxLjFzIGluZmluaXRlIGVhc2U7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApOyAgICBcbiAgXG4gICAgJi5sb2FkZXItYWN0aXZlIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxufVxuXG4gIEBrZXlmcmFtZXMgc3BpbiB7XG4gICAgMCUsXG4gICAgMTAwJSB7XG4gICAgICBib3gtc2hhZG93OiAwZW0gLTIuNmVtIDBlbSAwZW0gI2ZmZmZmZiwgMS44ZW0gLTEuOGVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuMiksIDIuNWVtIDBlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjIpLCAxLjc1ZW0gMS43NWVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuMiksIDBlbSAyLjVlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjIpLCAtMS44ZW0gMS44ZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC4yKSwgLTIuNmVtIDBlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjUpLCAtMS44ZW0gLTEuOGVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuNyk7XG4gICAgfVxuICAgIDEyLjUlIHtcbiAgICAgIGJveC1zaGFkb3c6IDBlbSAtMi42ZW0gMGVtIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjcpLCAxLjhlbSAtMS44ZW0gMCAwZW0gI2ZmZmZmZiwgMi41ZW0gMGVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuMiksIDEuNzVlbSAxLjc1ZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC4yKSwgMGVtIDIuNWVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuMiksIC0xLjhlbSAxLjhlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjIpLCAtMi42ZW0gMGVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuMiksIC0xLjhlbSAtMS44ZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC41KTtcbiAgICB9XG4gICAgMjUlIHtcbiAgICAgIGJveC1zaGFkb3c6IDBlbSAtMi42ZW0gMGVtIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjUpLCAxLjhlbSAtMS44ZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC43KSwgMi41ZW0gMGVtIDAgMGVtICNmZmZmZmYsIDEuNzVlbSAxLjc1ZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC4yKSwgMGVtIDIuNWVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuMiksIC0xLjhlbSAxLjhlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjIpLCAtMi42ZW0gMGVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuMiksIC0xLjhlbSAtMS44ZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC4yKTtcbiAgICB9XG4gICAgMzcuNSUge1xuICAgICAgYm94LXNoYWRvdzogMGVtIC0yLjZlbSAwZW0gMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuMiksIDEuOGVtIC0xLjhlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjUpLCAyLjVlbSAwZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC43KSwgMS43NWVtIDEuNzVlbSAwIDBlbSAjZmZmZmZmLCAwZW0gMi41ZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC4yKSwgLTEuOGVtIDEuOGVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuMiksIC0yLjZlbSAwZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC4yKSwgLTEuOGVtIC0xLjhlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjIpO1xuICAgIH1cbiAgICA1MCUge1xuICAgICAgYm94LXNoYWRvdzogMGVtIC0yLjZlbSAwZW0gMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuMiksIDEuOGVtIC0xLjhlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjIpLCAyLjVlbSAwZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC41KSwgMS43NWVtIDEuNzVlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjcpLCAwZW0gMi41ZW0gMCAwZW0gI2ZmZmZmZiwgLTEuOGVtIDEuOGVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuMiksIC0yLjZlbSAwZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC4yKSwgLTEuOGVtIC0xLjhlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjIpO1xuICAgIH1cbiAgICA2Mi41JSB7XG4gICAgICBib3gtc2hhZG93OiAwZW0gLTIuNmVtIDBlbSAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC4yKSwgMS44ZW0gLTEuOGVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuMiksIDIuNWVtIDBlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjIpLCAxLjc1ZW0gMS43NWVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuNSksIDBlbSAyLjVlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjcpLCAtMS44ZW0gMS44ZW0gMCAwZW0gI2ZmZmZmZiwgLTIuNmVtIDBlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjIpLCAtMS44ZW0gLTEuOGVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuMik7XG4gICAgfVxuICAgIDc1JSB7XG4gICAgICBib3gtc2hhZG93OiAwZW0gLTIuNmVtIDBlbSAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC4yKSwgMS44ZW0gLTEuOGVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuMiksIDIuNWVtIDBlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjIpLCAxLjc1ZW0gMS43NWVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuMiksIDBlbSAyLjVlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjUpLCAtMS44ZW0gMS44ZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC43KSwgLTIuNmVtIDBlbSAwIDBlbSAjZmZmZmZmLCAtMS44ZW0gLTEuOGVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuMik7XG4gICAgfVxuICAgIDg3LjUlIHtcbiAgICAgIGJveC1zaGFkb3c6IDBlbSAtMi42ZW0gMGVtIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjIpLCAxLjhlbSAtMS44ZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC4yKSwgMi41ZW0gMGVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuMiksIDEuNzVlbSAxLjc1ZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC4yKSwgMGVtIDIuNWVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuMiksIC0xLjhlbSAxLjhlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjUpLCAtMi42ZW0gMGVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuNyksIC0xLjhlbSAtMS44ZW0gMCAwZW0gI2ZmZmZmZjtcbiAgICB9XG4gIH1cblxuXG5cblxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLFNBQVM7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RUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixhQUFhO0lBQ2IsU0FBUztJQUNULDBCQUEwQjtJQUMxQixjQUFjO0lBQ2QsVUFBVTtJQUNWLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsa0NBQWtDO0lBQ2xDLHdCQUF3Qjs7SUFFeEI7UUFDSSxjQUFjO0lBQ2xCO0FBQ0o7O0VBRUU7SUFDRTs7TUFFRSw2VUFBNlU7SUFDL1U7SUFDQTtNQUNFLDZVQUE2VTtJQUMvVTtJQUNBO01BQ0UsNlVBQTZVO0lBQy9VO0lBQ0E7TUFDRSw2VUFBNlU7SUFDL1U7SUFDQTtNQUNFLDZVQUE2VTtJQUMvVTtJQUNBO01BQ0UsNlVBQTZVO0lBQy9VO0lBQ0E7TUFDRSw2VUFBNlU7SUFDL1U7SUFDQTtNQUNFLDZVQUE2VTtJQUMvVTtFQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU51bml0bzp3Z2h0QDMwMDs0MDA7NjAwOzcwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG4qIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5odG1sLCBib2R5IHtcXG4gICAgaGVpZ2h0OiAxMDAlOyBcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC40KSwgXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZ2JhKDAsIDAsIDAsIDAuNCkpLFxcbiAgICAgICAgICAgICAgICAgICAgICB1cmwoJy9kaXN0L2ltYWdlcy93YWxscGFwZXIuanBnJyk7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgICAgIFxcbiAgICBmb250LWZhbWlseTogJ051bml0bycsIHNhbnMtc2VyaWY7ICAgXFxufVxcblxcbi50b3AtbmF2IHsgICBcXG4gICAgZGlzcGxheTogZ3JpZDsgICAgXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDM2MHB4IDFmcjsgXFxuICAgIHBhZGRpbmc6IDQwcHg7ICBcXG59XFxuXFxuLnRvcC1uYXYgZm9ybSB7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyOyAgICBcXG59XFxuXFxuLnNlYXJjaC1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIGF1dG87ICBcXG59XFxuXFxuLmVycm9yLW1lc3NhZ2Uge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGJvdHRvbTogLTI0cHg7XFxuICAgIGxlZnQ6IDIwcHg7XFxuICAgIGNvbG9yOiByZ2IoMjE0LCAyMTQsIDMwKTsgICBcXG59XFxuXFxuLnNlYXJjaC1pbnB1dCB7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxOTksIDEwOSwgMTA5LCAwLjIpO1xcbiAgICBib3JkZXItcmlnaHQ6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4IDBweCAwcHggNTBweDtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgXFxuICAgICYuc2VhcmNoLWlucHV0Ojotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uIHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH0gXFxufVxcblxcbi5zZWFyY2gtaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXG4gICAgY29sb3I6IHJnYigxNzcsIDE3NywgMTc5KTtcXG59XFxuXFxuLnNlYXJjaC1zdWJtaXQtYnV0dG9uIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyOyAgIFxcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIHdpZHRoOiA0MHB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAuMik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDBweCA1MHB4IDUwcHggMHB4O1xcbiAgICBib3JkZXItbGVmdDogdHJhbnNwYXJlbnQ7XFxuXFxuICAgIGltZyB7XFxuICAgICAgICBoZWlnaHQ6IDI0cHg7XFxuICAgICAgICB3aWR0aDogMjRweDtcXG4gICAgfVxcbn1cXG5cXG5tYWluIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCA1NDBweCk7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyAgIFxcbiAgICBnYXA6IDQwcHg7XFxuICAgIHBhZGRpbmc6IDQwcHg7XFxuICAgXFxufSBcXG5cXG4udG9kYXktaW5mby1jYXJkIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDNmciAxZnI7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICB3aWR0aDogNTQwcHg7XFxuICAgIGhlaWdodDogNDAwcHg7ICBcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAuMik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxuICAgIHBhZGRpbmc6IDIwcHg7ICAgIFxcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTsgICAgXFxuIH1cXG5cXG4gaW1nIHsgICBcXG4gICAgd2lkdGg6IDEyNHB4OyAgICAgICAgICAgIFxcbiB9XFxuXFxuIC50b2RheS13ZWF0aGVyLW1haW4taW5mbyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxMDBweCAzNnB4IDFmcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiB9XFxuXFxuIC50b2RheS13ZWF0aGVyLWV4dHJhLWluZm8ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDQwcHggMWZyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBlbmQ7ICAgICBcXG4gfVxcblxcbiAudG9kYXktd2VhdGhlci1leHRyYS1pbmZvID4gZGl2OmZpcnN0LW9mLXR5cGUge1xcbiAgICBpbWcge1xcbiAgICAgICAgd2lkdGg6IDIwcHg7XFxuICAgICAgICBqdXN0aWZ5LXNlbGY6IGVuZDsgXFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcXG4gICAgICAgIG9wYWNpdHk6IDAuNjsgICAgICBcXG4gICAgfVxcblxcbiAgICAuZGF0ZS13cmFwLFxcbiAgICAudGltZS13cmFwIHtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOyAgICAgICAgIFxcbiAgICB9XFxuIH1cXG5cXG4gLnRvZGF5LXdlYXRoZXItZXh0cmEtaW5mbyA+IGRpdjpudGgtY2hpbGQoMikge1xcbiAgICBkaXNwbGF5OiBncmlkOyBcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7IFxcbiAgICBhbGlnbi1zZWxmOmNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBcXG4gICAgLmh1bWlkaXR5LXdyYXAsIFxcbiAgICAud2luZC13cmFwIHtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOyAgICAgICBcXG4gICAgfVxcblxcbiAgICBpbWcge1xcbiAgICAgICAgd2lkdGg6IDQ4cHg7XFxuICAgICAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gICAgfVxcbiAgICBcXG4gICAgLmh1bWlkaXR5LCBcXG4gICAgLndpbmQge1xcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgfVxcbn1cXG5cXG4gLmxvY2F0aW9uLW5hbWUge1xcbiAgICBmb250LXNpemU6IDQwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiB9XFxuIFxcbiAudG9kYXktdGVtcGVyYXR1cmUge1xcbiAgICBmb250LXNpemU6IDQwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiB9XFxuXFxuIC50b2RheS1jb25kaXRpb25zIHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiB9XFxuXFxuIC53ZWVrLXdlYXRoZXItaW5mby1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBjb2xvcjogd2hpdGU7ICAgXFxuICAgIG1heC13aWR0aDogNTQwcHg7XFxuIH1cXG5cXG4gLndlZWstZGF5LXdlYXRoZXItcm93IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnI7XFxuICAgIGdhcDogMjBweDtcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgLjIpO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIFxcbiAgICAud2Vlay1kYXktbmFtZSB7XFxuICAgICAgICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcbiAgICAgICAgdGV4dC1zaGFkb3c6IC0xcHggLTFweCAwICMwMDAsIDFweCAtMXB4IDAgIzAwMCwgLTFweCAxcHggMCAjMDAwLCAxcHggMXB4IDAgIzAwMDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgICAgICBjb2xvcjogcmdiKDI0NywgMTg1LCAxMzUpO1xcbiAgICB9XFxuXFxuICAgIC53ZWVrLWRheS10ZW1wZXJhdHVyZSxcXG4gICAgLndlZWstbmlnaHQtdGVtcGVyYXR1cmUge1xcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDsgICAgICAgIFxcbiAgICB9XFxuXFxuICAgIC53ZWVrLW5pZ2h0LXRlbXBlcmF0dXJlIHtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgICAgICBvcGFjaXR5OiAwLjc7XFxuICAgIH1cXG4gfSBcXG5cXG4gLmhvdXJseS13ZWF0aGVyLWluZm8tY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxuICAgIHBhZGRpbmc6IDAgMzJweDsgICAgXFxuIH1cXG5cXG4gLmhvdXJseS13ZWF0aGVyLWNvbHVtbiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDM2cHg7XFxuICAgIGdhcDogNHB4O1xcbiB9XFxuXFxuIC5zbGlkZXItd3JhcCB7ICAgIFxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHdpZHRoOiA0MzJweDtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7IFxcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAuMik7IFxcbiAgICBwYWRkaW5nLXRvcDogOHB4OyAgXFxuIH1cXG5cXG4gLnNsaWRlci1jb250ZW50IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlOyAgICAgICAgICAgXFxuIH1cXG5cXG4gLm5hdi1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7ICAgXFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7ICAgXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgICAgXFxuIH1cXG5cXG4jYnV0dG9uLXByZXZpb3VzIHtcXG4gICAgYmFja2dyb3VuZDogdXJsKC9kaXN0L2ltYWdlcy9jaGV2cm9uLWxlZnQuc3ZnKSBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDU1JSA1MCU7ICAgICBcXG59XFxuXFxuI2J1dHRvbi1uZXh0IHtcXG4gICAgYmFja2dyb3VuZDogdXJsKC9kaXN0L2ltYWdlcy9jaGV2cm9uLXJpZ2h0LnN2Zykgbm8tcmVwZWF0OyBcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNDUlIDUwJTsgICAgXFxufVxcblxcbiNidXR0b24tcHJldmlvdXMsXFxuI2J1dHRvbi1uZXh0IHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXI6IG5vbmU7ICAgICAgXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgd2lkdGg6IDE4cHg7XFxuICAgIGhlaWdodDogMThweDsgICAgXFxuICAgIGJhY2tncm91bmQtc2l6ZTogMzZweDtcXG4gICAgb3BhY2l0eTogNDAlO1xcbiAgICBcXG4gICAgJjpob3ZlciB7XFxuICAgICAgICBvcGFjaXR5OiA4MCU7XFxuICAgIH1cXG59XFxuXFxuLmhvdXJseS13ZWF0aGVyLWltYWdlIHtcXG4gICAgaGVpZ2h0OiAyOHB4O1xcbiAgICB3aWR0aDogMjhweDtcXG59XFxuXFxuLmhvdXJseS13ZWF0aGVyLXRpbWUge1xcbiAgICBvcGFjaXR5OiAwLjY7XFxufVxcblxcbi53ZWVrLWRheS13ZWF0aGVyLWltYWdlIGltZyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGhlaWdodDogNDhweDtcXG4gICAgd2lkdGg6IDQ4cHg7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLnN3aXRjaCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB3aWR0aDogNjZweDtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIC4yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbn0gIFxcblxcbi5zd2l0Y2ggaW5wdXQge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB3aWR0aDogMDtcXG4gICAgaGVpZ2h0OiAwO1xcbn0gIFxcblxcbi5zbGlkZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC40cztcXG4gICAgdHJhbnNpdGlvbjogLjRzO1xcbn1cXG5cXG4uc2xpZGVyOmJlZm9yZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgICAgXFxuICAgIGhlaWdodDogMjhweDtcXG4gICAgd2lkdGg6IDI4cHg7XFxuICAgIGxlZnQ6IDRweDtcXG4gICAgYm90dG9tOiA0cHg7XFxuICAgIGNvbnRlbnQ6IFxcXCLCsENcXFwiO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGNvbG9yOiAjMWUzYzcyO1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGFkZmU3O1xcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC40cztcXG4gICAgdHJhbnNpdGlvbjogLjRzOyAgICBcXG59XFxuXFxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcXG4gICAgY29udGVudDogJ8KwRic7ICAgIFxcbn0gIFxcblxcbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XFxufSBcXG5cXG4uc2xpZGVyLnJvdW5kOmJlZm9yZSB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLmFjdGl2ZSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4ubG9hZGVyIHsgICAgXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgYm90dG9tOiAtNDBweDtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlKTtcXG4gICAgZm9udC1zaXplOiA4cHg7XFxuICAgIHdpZHRoOiAxZW07XFxuICAgIGhlaWdodDogMWVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7ICAgXFxuICAgIGFuaW1hdGlvbjogc3BpbiAxLjFzIGluZmluaXRlIGVhc2U7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTsgICAgXFxuICBcXG4gICAgJi5sb2FkZXItYWN0aXZlIHtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB9XFxufVxcblxcbiAgQGtleWZyYW1lcyBzcGluIHtcXG4gICAgMCUsXFxuICAgIDEwMCUge1xcbiAgICAgIGJveC1zaGFkb3c6IDBlbSAtMi42ZW0gMGVtIDBlbSAjZmZmZmZmLCAxLjhlbSAtMS44ZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC4yKSwgMi41ZW0gMGVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuMiksIDEuNzVlbSAxLjc1ZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC4yKSwgMGVtIDIuNWVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuMiksIC0xLjhlbSAxLjhlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjIpLCAtMi42ZW0gMGVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuNSksIC0xLjhlbSAtMS44ZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC43KTtcXG4gICAgfVxcbiAgICAxMi41JSB7XFxuICAgICAgYm94LXNoYWRvdzogMGVtIC0yLjZlbSAwZW0gMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuNyksIDEuOGVtIC0xLjhlbSAwIDBlbSAjZmZmZmZmLCAyLjVlbSAwZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC4yKSwgMS43NWVtIDEuNzVlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjIpLCAwZW0gMi41ZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC4yKSwgLTEuOGVtIDEuOGVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuMiksIC0yLjZlbSAwZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC4yKSwgLTEuOGVtIC0xLjhlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjUpO1xcbiAgICB9XFxuICAgIDI1JSB7XFxuICAgICAgYm94LXNoYWRvdzogMGVtIC0yLjZlbSAwZW0gMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuNSksIDEuOGVtIC0xLjhlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjcpLCAyLjVlbSAwZW0gMCAwZW0gI2ZmZmZmZiwgMS43NWVtIDEuNzVlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjIpLCAwZW0gMi41ZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC4yKSwgLTEuOGVtIDEuOGVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuMiksIC0yLjZlbSAwZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC4yKSwgLTEuOGVtIC0xLjhlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjIpO1xcbiAgICB9XFxuICAgIDM3LjUlIHtcXG4gICAgICBib3gtc2hhZG93OiAwZW0gLTIuNmVtIDBlbSAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC4yKSwgMS44ZW0gLTEuOGVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuNSksIDIuNWVtIDBlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjcpLCAxLjc1ZW0gMS43NWVtIDAgMGVtICNmZmZmZmYsIDBlbSAyLjVlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjIpLCAtMS44ZW0gMS44ZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC4yKSwgLTIuNmVtIDBlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjIpLCAtMS44ZW0gLTEuOGVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuMik7XFxuICAgIH1cXG4gICAgNTAlIHtcXG4gICAgICBib3gtc2hhZG93OiAwZW0gLTIuNmVtIDBlbSAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC4yKSwgMS44ZW0gLTEuOGVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuMiksIDIuNWVtIDBlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjUpLCAxLjc1ZW0gMS43NWVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuNyksIDBlbSAyLjVlbSAwIDBlbSAjZmZmZmZmLCAtMS44ZW0gMS44ZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC4yKSwgLTIuNmVtIDBlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjIpLCAtMS44ZW0gLTEuOGVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuMik7XFxuICAgIH1cXG4gICAgNjIuNSUge1xcbiAgICAgIGJveC1zaGFkb3c6IDBlbSAtMi42ZW0gMGVtIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjIpLCAxLjhlbSAtMS44ZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC4yKSwgMi41ZW0gMGVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuMiksIDEuNzVlbSAxLjc1ZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC41KSwgMGVtIDIuNWVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuNyksIC0xLjhlbSAxLjhlbSAwIDBlbSAjZmZmZmZmLCAtMi42ZW0gMGVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuMiksIC0xLjhlbSAtMS44ZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC4yKTtcXG4gICAgfVxcbiAgICA3NSUge1xcbiAgICAgIGJveC1zaGFkb3c6IDBlbSAtMi42ZW0gMGVtIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjIpLCAxLjhlbSAtMS44ZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC4yKSwgMi41ZW0gMGVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuMiksIDEuNzVlbSAxLjc1ZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC4yKSwgMGVtIDIuNWVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuNSksIC0xLjhlbSAxLjhlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjcpLCAtMi42ZW0gMGVtIDAgMGVtICNmZmZmZmYsIC0xLjhlbSAtMS44ZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC4yKTtcXG4gICAgfVxcbiAgICA4Ny41JSB7XFxuICAgICAgYm94LXNoYWRvdzogMGVtIC0yLjZlbSAwZW0gMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuMiksIDEuOGVtIC0xLjhlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjIpLCAyLjVlbSAwZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC4yKSwgMS43NWVtIDEuNzVlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjIpLCAwZW0gMi41ZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC4yKSwgLTEuOGVtIDEuOGVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuNSksIC0yLjZlbSAwZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC43KSwgLTEuOGVtIC0xLjhlbSAwIDBlbSAjZmZmZmZmO1xcbiAgICB9XFxuICB9XFxuXFxuXFxuXFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgcmVuZGVyRGFpbHlXZWF0aGVyIH0gZnJvbSAnLi91aSc7XG5pbXBvcnQgeyByZW5kZXJUb2RheVdlYXRoZXJJbmZvQ2FyZCB9IGZyb20gXCIuL3VpXCI7XG5pbXBvcnQgeyBsb2FkaW5nIH0gZnJvbSAnLi91aSc7XG5cbmV4cG9ydCBjb25zdCBnZXRXZWF0aGVyID0gYXN5bmMgKGxvY2F0aW9uKSA9PiB7XG4gICAgY29uc3QgdW5pdHNDaGVja2JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51bml0cy1jaGVja2JveCcpO1xuICAgIGNvbnN0IHVuaXRzID0gdW5pdHNDaGVja2JveC5jaGVja2VkID8gJ3VzJyA6ICdtZXRyaWMnO1xuXG4gICAgY29uc3QgYXBpS2V5ID0gJ1pGRVo5RkI2TExZWlVaOURGRFU3R0pUTUQnO1xuICAgIGNvbnN0IHVybCA9IGBodHRwczovL3dlYXRoZXIudmlzdWFsY3Jvc3NpbmcuY29tL1Zpc3VhbENyb3NzaW5nV2ViU2VydmljZXMvcmVzdC9zZXJ2aWNlcy90aW1lbGluZS8ke2xvY2F0aW9ufT91bml0R3JvdXA9JHt1bml0c30ma2V5PSR7YXBpS2V5fWA7ICAgIFxuICAgIFxuICAgIGxvYWRpbmcoJ3N0YXJ0ZWQnKTtcblxuICAgIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHsgbW9kZTogJ2NvcnMnfSk7XG4gICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVycm9yLW1lc3NhZ2UnKTsgICAgXG4gICAgXG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICBsb2FkaW5nKCdmaW5pc2hlZCcpO1xuXG4gICAgICAgIGVycm9yTWVzc2FnZS5pbm5lclRleHQgPSBcIlNvcnJ5LCBubyBsb2NhdGlvbiBmb3VuZFwiO1xuICAgICAgICBlcnJvck1lc3NhZ2UuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gZXJyb3JNZXNzYWdlLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpLCAzMDAwKTtcblxuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZGF0YSA9IHdlYXRoZXJEYXRhTWFwcGVyKGF3YWl0IHJlc3BvbnNlLmpzb24oKSk7XG4gICAgXG4gICAgcmVuZGVyVG9kYXlXZWF0aGVySW5mb0NhcmQoZGF0YSk7XG4gICAgcmVuZGVyRGFpbHlXZWF0aGVyKGRhdGEpOyAgICBcbiAgICBsb2FkaW5nKCdmaW5pc2hlZCcpOyAgICBcblxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICBjb25zb2xlLmVycm9yKCdGZXRjaCB3ZWF0aGVyIEFQSSBpcyBmYWlsZWQnLCBlcnJvcik7XG4gICAgfTtcbn1cblxuZnVuY3Rpb24gd2VhdGhlckRhdGFNYXBwZXIoZGF0YSkge1xuICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbG9jYXRpb246IGRhdGEucmVzb2x2ZWRBZGRyZXNzLnNwbGl0KFwiLFwiKVswXSxcbiAgICAgICAgdGVtcGVyYXR1cmU6IFN0cmluZyhkYXRhLmN1cnJlbnRDb25kaXRpb25zLnRlbXApLnNwbGl0KFwiLlwiKVswXSxcbiAgICAgICAgZGF0ZTogbmV3IERhdGUoKS50b0xvY2FsZURhdGVTdHJpbmcoKSxcbiAgICAgICAgdGltZTogbmV3IERhdGUoKS50b0xvY2FsZVRpbWVTdHJpbmcoKS5zbGljZSgwLCAtMyksXG4gICAgICAgIGNvbmRpdGlvbnM6IGRhdGEuY3VycmVudENvbmRpdGlvbnMuY29uZGl0aW9ucyxcbiAgICAgICAgaHVtaWRpdHk6IFN0cmluZyhkYXRhLmN1cnJlbnRDb25kaXRpb25zLmh1bWlkaXR5KS5zcGxpdChcIi5cIilbMF0sXG4gICAgICAgIHdpbmRTcGVlZDogU3RyaW5nKGRhdGEuY3VycmVudENvbmRpdGlvbnMud2luZHNwZWVkKS5zcGxpdChcIi5cIilbMF0sXG4gICAgICAgIGljb246IGRhdGEuY3VycmVudENvbmRpdGlvbnMuaWNvbixcbiAgICAgICAgaG91cmx5Rm9yZWNhc3Q6IGRhdGEuZGF5c1swXS5ob3Vycy5tYXAoaG91ciA9PiAoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWU6IGhvdXIuZGF0ZXRpbWUuc2xpY2UoMCwgMiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGVyYXR1cmU6IFN0cmluZyhob3VyLnRlbXApLnNwbGl0KFwiLlwiKVswXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiBob3VyLmljb25cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKSxcbiAgICAgICAgd2Vla0ZvcmVjYXN0OiBkYXRhLmRheXMuc2xpY2UoMSwgOCkubWFwKGRheSA9PiAoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdlZWtEYXk6IG5ldyBEYXRlKGRheS5kYXRldGltZSkudG9Mb2NhbGVEYXRlU3RyaW5nKCdlbi1VUycsIHt3ZWVrZGF5OiAnbG9uZyd9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhUZW1wZXJhdHVyZTogU3RyaW5nKGRheS50ZW1wbWF4KS5zcGxpdChcIi5cIilbMF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluVGVtcGVyYXR1cmU6IFN0cmluZyhkYXkudGVtcG1pbikuc3BsaXQoXCIuXCIpWzBdLCAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246IGRheS5pY29uXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSlcbiAgICAgICAgXG4gICAgfTtcbn0iLCJleHBvcnQgY29uc3QgcmVuZGVyRGFpbHlXZWF0aGVyID0gKHdlYXRoZXIpID0+IHtcbiAgICBjb25zdCB3ZWVrV2VhdGhlckluZm9Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2Vlay13ZWF0aGVyLWluZm8tY29udGFpbmVyJyk7XG4gICAgd2Vla1dlYXRoZXJJbmZvQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuXG4gICAgd2VhdGhlci53ZWVrRm9yZWNhc3QubWFwKChlbGVtZW50KSA9PiB7ICAgICAgIFxuICAgICAgICB3ZWVrV2VhdGhlckluZm9Db250YWluZXIuaW5uZXJIVE1MICs9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cIndlZWstZGF5LXdlYXRoZXItcm93XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIndlZWstZGF5LW5hbWVcIj4ke2VsZW1lbnQud2Vla0RheX08L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwid2Vlay1kYXktd2VhdGhlci1pbWFnZVwiPlxuICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgY2xhc3M9XCJ3ZWVrLWRheS13ZWF0aGVyLWljb25cIlxuICAgICAgICAgICAgICBzcmM9XCJpbWFnZXMvd2VhdGhlci1pbWFnZXMtZmlsbGVkLyR7ZWxlbWVudC5pY29ufS5zdmdcIlxuICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PiAgICBcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwid2Vlay1kYXktdGVtcGVyYXR1cmVcIj48c3VwPiZ1YXJyOzwvc3VwPiR7ZWxlbWVudC5tYXhUZW1wZXJhdHVyZX3CsDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3ZWVrLW5pZ2h0LXRlbXBlcmF0dXJlXCI+PHN1cD4mZGFycjs8L3N1cD4ke2VsZW1lbnQubWluVGVtcGVyYXR1cmV9wrA8L2Rpdj4gICAgICAgICAgICAgICAgXG4gICAgICAgIDwvZGl2PmAgICAgICAgICAgICAgICAgIFxuICAgIH0pO1xuXG4gICAgd2Vla1dlYXRoZXJJbmZvQ29udGFpbmVyLmNoaWxkcmVuWzBdLnN0eWxlLmJvcmRlciA9ICdub25lJztcbn1cblxuZXhwb3J0IGNvbnN0IHJlbmRlclRvZGF5V2VhdGhlckluZm9DYXJkID0gKHdlYXRoZXIpID0+IHtcbiAgICBjb25zdCB0b2RheVdlYXRoZXJJbmZvQ2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RheS1pbmZvLWNhcmQnKTtcbiAgICB0b2RheVdlYXRoZXJJbmZvQ2FyZC5pbm5lckhUTUwgPSAnJztcbiAgICBcbiAgICBjb25zdCBtYWluV2VhdGhlckluZm9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYWluV2VhdGhlckluZm9EaXYuY2xhc3NMaXN0LmFkZCgndG9kYXktd2VhdGhlci1tYWluLWluZm8nKTtcbiAgICBtYWluV2VhdGhlckluZm9EaXYuaW5uZXJIVE1MID0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwibG9jYXRpb24tbmFtZVwiPiR7d2VhdGhlci5sb2NhdGlvbn08L2Rpdj4gICAgICAgICAgICAgICAgICAgXG4gICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL3dlYXRoZXItaW1hZ2VzLWZpbGxlZC8ke3dlYXRoZXIuaWNvbn0uc3ZnXCI+ICAgICAgIFxuICAgICAgICA8ZGl2IGNsYXNzPVwidG9kYXktdGVtcGVyYXR1cmVcIj4ke3dlYXRoZXIudGVtcGVyYXR1cmV9wrA8L2Rpdj4gICAgICAgICAgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0b2RheS1jb25kaXRpb25zXCI+JHt3ZWF0aGVyLmNvbmRpdGlvbnN9PC9kaXY+ICAgICAgIFxuICAgIGA7IFxuICAgIFxuICAgIGNvbnN0IGFkZGl0aW9uYWxXZWF0aGVySW5mb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFkZGl0aW9uYWxXZWF0aGVySW5mb0Rpdi5jbGFzc0xpc3QuYWRkKCd0b2RheS13ZWF0aGVyLWV4dHJhLWluZm8nKTtcbiAgICBhZGRpdGlvbmFsV2VhdGhlckluZm9EaXYuaW5uZXJIVE1MID0gYFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRhdGUtd3JhcFwiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL2RhdGUuc3ZnXCI+IFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXRlXCI+JHt3ZWF0aGVyLmRhdGV9PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aW1lLXdyYXBcIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltYWdlcy90aW1lLnN2Z1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aW1lXCI+JHt3ZWF0aGVyLnRpbWV9PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaHVtaWRpdHktd3JhcFwiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL3dlYXRoZXItaW1hZ2VzLWxpbmVkL2h1bWlkaXR5LnN2Z1wiPiAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImh1bWlkaXR5XCI+JHt3ZWF0aGVyLmh1bWlkaXR5fSU8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIndpbmQtd3JhcFwiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL3dlYXRoZXItaW1hZ2VzLWxpbmVkL3dpbmQuc3ZnXCI+ICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIndpbmRcIj48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgPC9kaXY+XG4gICAgYDtcbiAgICBcbiAgICBjb25zdCBob3VybHlXZWF0aGVySW5mb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhvdXJseVdlYXRoZXJJbmZvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hvdXJseS13ZWF0aGVyLWluZm8tY29udGFpbmVyJyk7XG5cbiAgICBjb25zdCBzbGlkZXJXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgXG4gICAgaG91cmx5V2VhdGhlckluZm9Db250YWluZXIuaW5uZXJIVE1MID0gcmVuZGVyU2xpZGVyTmF2aWdhdGlvblBhbmVsKCk7XG4gICAgaG91cmx5V2VhdGhlckluZm9Db250YWluZXIuYXBwZW5kQ2hpbGQoc2xpZGVyV3JhcCk7XG5cbiAgICBzbGlkZXJXcmFwLmNsYXNzTGlzdC5hZGQoJ3NsaWRlci13cmFwJyk7XG4gICAgc2xpZGVyV3JhcC5pbm5lckhUTUwgPSByZW5kZXJTbGlkZXIoKTsgICBcblxuICAgIHRvZGF5V2VhdGhlckluZm9DYXJkLmFwcGVuZChtYWluV2VhdGhlckluZm9EaXYsIGFkZGl0aW9uYWxXZWF0aGVySW5mb0RpdiwgaG91cmx5V2VhdGhlckluZm9Db250YWluZXIpO1xuICAgIFxuICAgIHJlbmRlckhvdXJseVdlYXRoZXJJbmZvKHdlYXRoZXIpO1xuICAgIHJlbmRlcldpbmRTcGVlZCh3ZWF0aGVyLndpbmRTcGVlZCk7XG4gICAgYWRkRXZlbnRMaXN0ZW5lclRvU2xpZGVyKCk7XG5cbiAgICByZXR1cm4gdG9kYXlXZWF0aGVySW5mb0NhcmQ7XG59XG5cbmNvbnN0IHJlbmRlckhvdXJseVdlYXRoZXJJbmZvID0gKHdlYXRoZXIpID0+IHtcbiAgICBjb25zdCBzbGlkZXJDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNsaWRlci1jb250ZW50Jyk7XG5cbiAgICB3ZWF0aGVyLmhvdXJseUZvcmVjYXN0Lm1hcCgoaG91cikgPT4geyAgICAgICBcbiAgICAgICAgc2xpZGVyQ29udGVudC5pbm5lckhUTUwgKz0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiaG91cmx5LXdlYXRoZXItY29sdW1uXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImhvdXJseS13ZWF0aGVyLXRpbWVcIj4ke2hvdXIudGltZX08L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaG91cmx5LXdlYXRoZXItaW1hZ2VcIj5cbiAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIGNsYXNzPVwiaG91cmx5LXdlYXRoZXItaW1hZ2VcIlxuICAgICAgICAgICAgICBzcmM9XCJpbWFnZXMvd2VhdGhlci1pbWFnZXMtbGluZWQvJHtob3VyLmljb259LnN2Z1wiXG4gICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+ICAgIFxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJob3VybHktd2VhdGhlci10ZW1wZXJhdHVyZVwiPiR7aG91ci50ZW1wZXJhdHVyZX3CsDwvZGl2PiAgICAgICAgICAgICAgIFxuICAgICAgICA8L2Rpdj5gICAgICAgICAgXG4gICAgfSk7XG59XG5cbmNvbnN0IHJlbmRlclNsaWRlciA9ICgpID0+IHtcbiAgICByZXR1cm4gYCAgICAgICAgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzbGlkZXItY29udGVudFwiPjwvZGl2PiAgICAgICAgICAgICAgICBcbiAgICBgO1xufVxuXG5jb25zdCByZW5kZXJTbGlkZXJOYXZpZ2F0aW9uUGFuZWwgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGBcbiAgICAgICAgPGRpdiBjbGFzcz1cIm5hdi1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxidXR0b24gaWQ9XCJidXR0b24tcHJldmlvdXNcIj48L2J1dHRvbj4gICAgICAgICAgIFxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImJ1dHRvbi1uZXh0XCI+PC9idXR0b24+ICAgICAgICAgICAgXG4gICAgICAgIDwvZGl2PiBcbiAgICBgXG59XG5cbmNvbnN0IHJlbmRlcldpbmRTcGVlZCA9ICh3aW5kU3BlZWQpID0+IHtcbiAgICBjb25zdCB3aW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndpbmQnKTtcbiAgICBjb25zdCB1bml0c0NoZWNrYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVuaXRzLWNoZWNrYm94Jyk7XG4gICAgY29uc3QgdW5pdCA9IHVuaXRzQ2hlY2tib3guY2hlY2tlZCA/ICdtcGgnIDogJ2ttL2gnO1xuXG4gICAgd2luZC5pbm5lckhUTUwgPSB3aW5kU3BlZWQgKyB1bml0O1xufVxuXG5cbmNvbnN0IGFkZEV2ZW50TGlzdGVuZXJUb1NsaWRlciA9ICgpID0+IHtcbiAgICBjb25zdCBzbGlkZXJDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zbGlkZXItY29udGVudFwiKTtcbiAgICBjb25zdCBidXR0b25OZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidXR0b24tbmV4dFwiKTtcbiAgICBjb25zdCBidXR0b25QcmV2aW91cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnV0dG9uLXByZXZpb3VzXCIpOyAgICBcblxuICAgIGxldCBjdXJyZW50SW5kZXggPSAwO1xuXG4gICAgY29uc3Qgc2xpZGUgPSAoaW5kZXgpID0+IHsgICBcbiAgICAgICAgaWYgKGluZGV4IDwgMCkge1xuICAgICAgICAgICAgaW5kZXggPSAyIC0xOyAgICAgICAgXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGluZGV4ID49IDIpIHtcbiAgICAgICAgICAgIGluZGV4ID0gMDsgICAgICAgIFxuICAgICAgICB9OyAgICAgXG4gICAgXG4gICAgICAgIGNvbnNvbGUubG9nKGB0cmFuc2xhdGVYKC0keyhpbmRleCAvIDIpICogMTAwfSUpYClcbiAgICAgICAgc2xpZGVyQ29udGVudC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgtJHsoaW5kZXggLyAyKSAqIDEwMH0lKWA7XG4gICAgICAgIGN1cnJlbnRJbmRleCA9IGluZGV4OyAgIFxuICAgIH07XG5cbiAgICBidXR0b25OZXh0Lm9uY2xpY2sgPSAoKSA9PiB7IFxuICAgICAgICBjb25zb2xlLmxvZyhcImNsaWNrIVwiKSAgICBcbiAgICAgICAgc2xpZGUoY3VycmVudEluZGV4ICsgMSk7XG4gICAgfTtcblxuICAgIGJ1dHRvblByZXZpb3VzLm9uY2xpY2sgPSAoKSA9PiB7ICAgXG4gICAgICAgIHNsaWRlKGN1cnJlbnRJbmRleCAtIDEpO1xuICAgIH07XG59XG5cbmV4cG9ydCBjb25zdCBsb2FkaW5nID0gKHN0YXRlKSA9PiB7XG4gICAgY29uc3QgbG9hZGluZ1NwaW5uZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9hZGVyJyk7XG5cbiAgICBpZiAoc3RhdGUgPT09ICdzdGFydGVkJykge1xuICAgICAgbG9hZGluZ1NwaW5uZXIuY2xhc3NMaXN0LmFkZCgnbG9hZGVyLWFjdGl2ZScpOyAgICAgXG4gICAgfSBlbHNlIHtcbiAgICAgIGxvYWRpbmdTcGlubmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2xvYWRlci1hY3RpdmUnKTtcbiAgICB9XG59XG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgZ2V0V2VhdGhlciB9IGZyb20gJy4vbW9kdWxlcy9nZXRXZWF0aGVyJztcblxuY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtZm9ybScpO1xuXG5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHVzZXJJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtaW5wdXQnKTtcbiAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZXJyb3ItbWVzc2FnZScpO1xuICAgXG4gICAgY29uc29sZS5sb2codXNlcklucHV0KVxuICAgIGlmICghaXNWYWxpZCh1c2VySW5wdXQudmFsdWUpKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdjbGljaycpXG4gICAgICAgIGVycm9yTWVzc2FnZS5pbm5lclRleHQgPSBcIlBsZWFzZSBlbnRlciBhIGxvY2F0aW9uXCI7XG4gICAgICAgIGVycm9yTWVzc2FnZS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBlcnJvck1lc3NhZ2UuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyksIDMwMDApO1xuXG4gICAgICAgIHJldHVybjtcbiAgICB9O1xuXG4gICAgZ2V0V2VhdGhlcih1c2VySW5wdXQudmFsdWUpO1xuICAgIHVzZXJJbnB1dC52YWx1ZSA9ICcnO1xufSk7XG5cbmNvbnN0IHVuaXRDaGVja2JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51bml0cy1jaGVja2JveCcpO1xuXG51bml0Q2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgY3VycmVudExvY2F0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvY2F0aW9uLW5hbWUnKTtcbiAgICBjb25zb2xlLmxvZyhjdXJyZW50TG9jYXRpb24uaW5uZXJUZXh0KVxuICAgIGdldFdlYXRoZXIoY3VycmVudExvY2F0aW9uLmlubmVyVGV4dCk7XG59KTtcblxuY29uc3QgaXNWYWxpZCA9ICh1c2VySW5wdXQpID0+IHtcbiAgICBjb25zb2xlLmxvZyh1c2VySW5wdXQpICAgIFxuICAgIGlmICh1c2VySW5wdXQgPT09IFwiXCIpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTsgICBcbn1cblxuZ2V0V2VhdGhlcihcIkR1YmxpblwiKTtcblxuXG5cblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=