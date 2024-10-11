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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/wallpaper.jpg */ "./src/images/wallpaper.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./images/chevron-left.svg */ "./src/images/chevron-left.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./images/chevron-right.svg */ "./src/images/chevron-right.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    --light-grey: rgba(255, 255, 255, .2);
    --half-transparent: rgba(0, 0, 0, 0.5);
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html, body {
    height: 100%;
    display: flex; 
    flex-direction: column;
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

.logo {
    color: rgb(60, 176, 243);
    justify-self: center;
    font-weight: bold;
    font-size: 20px;
    transform: scaleX(0.9);
}

.logo > span:nth-child(2) {
    color: #e9b31f;
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
    color: #e9b31f;   
}

.search-input {
    height: 40px;
    padding: 10px;
    border: 1px solid rgba(199, 109, 109, 0.2);
    border-right: transparent;
    border-radius: 50px 0px 0px 50px;
    font-size: 16px;
    background-color: var(--half-transparent);
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
    background-color: var(--half-transparent);
    border: 1px solid var(--light-grey);
    border-radius: 0px 50px 50px 0px;
    border-left: transparent;

    img {
        height: 24px;
        width: 24px;
    }
}

main {  
    display: flex;
    flex-wrap: wrap;
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
    border: 1px solid var(--light-grey);
    border-radius: 16px;
    padding: 20px;    
    color: white;
    background-color: var(--half-transparent);    
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
    border-top: 1px solid var(--light-grey);
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
    border-top: 1px solid var(--light-grey); 
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
    border: 1px solid var(--light-grey);
    border-radius: 50px;
    background-color: var(--half-transparent);
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

  footer {
    margin-top: auto;    
    text-align: center;
    width: 100%;
    padding-bottom: 16px;
    color: rgb(204, 202, 202);

    a {
        color: rgb(120, 179, 247);
    }
  }




`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700&display=swap');\n\n:root {\n    --light-grey: rgba(255, 255, 255, .2);\n    --half-transparent: rgba(0, 0, 0, 0.5);\n}\n\n* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\nhtml, body {\n    height: 100%;\n    display: flex; \n    flex-direction: column;\n    background-image: linear-gradient(rgba(0, 0, 0, 0.4), \n                                      rgba(0, 0, 0, 0.4)),\n                      url('./images/wallpaper.jpg');\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: cover;     \n    font-family: 'Nunito', sans-serif;   \n}\n\n.top-nav {   \n    display: grid;    \n    align-items: center;\n    grid-template-columns: 1fr 360px 1fr; \n    padding: 40px;  \n}\n\n.logo {\n    color: rgb(60, 176, 243);\n    justify-self: center;\n    font-weight: bold;\n    font-size: 20px;\n    transform: scaleX(0.9);\n}\n\n.logo > span:nth-child(2) {\n    color: #e9b31f;\n}\n\n.top-nav form {\n    justify-self: center;    \n}\n\n.search-container {\n    position: relative;\n    display: grid;\n    grid-template-columns: 1fr auto;  \n}\n\n.error-message {\n    position: absolute;\n    display: none;\n    bottom: -24px;\n    left: 20px;\n    color: #e9b31f;   \n}\n\n.search-input {\n    height: 40px;\n    padding: 10px;\n    border: 1px solid rgba(199, 109, 109, 0.2);\n    border-right: transparent;\n    border-radius: 50px 0px 0px 50px;\n    font-size: 16px;\n    background-color: var(--half-transparent);\n    outline: none;\n    color: white;\n    \n    &.search-input::-webkit-search-cancel-button {\n        display: none;\n    } \n}\n\n.search-input::placeholder {\n    color: rgb(177, 177, 179);\n}\n\n.search-submit-button {\n    cursor: pointer;   \n    height: 40px;\n    width: 40px;\n    color: white;\n    background-color: var(--half-transparent);\n    border: 1px solid var(--light-grey);\n    border-radius: 0px 50px 50px 0px;\n    border-left: transparent;\n\n    img {\n        height: 24px;\n        width: 24px;\n    }\n}\n\nmain {  \n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;   \n    gap: 40px;\n    padding: 40px;     \n} \n\n.today-info-card {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 3fr 1fr;\n    justify-self: center;\n    width: 540px;\n    height: 400px;  \n    border: 1px solid var(--light-grey);\n    border-radius: 16px;\n    padding: 20px;    \n    color: white;\n    background-color: var(--half-transparent);    \n }\n\n img {   \n    width: 124px;            \n }\n\n .today-weather-main-info {\n    display: grid;\n    grid-template-rows: auto 100px 36px 1fr;\n    justify-items: center;\n    align-items: center;\n }\n\n .today-weather-extra-info {\n    display: grid;\n    grid-template-rows: 40px 1fr;\n    justify-items: end;     \n }\n\n .today-weather-extra-info > div:first-of-type {\n    img {\n        width: 20px;\n        justify-self: end; \n        margin-right: 8px;\n        opacity: 0.6;      \n    }\n\n    .date-wrap,\n    .time-wrap {\n        display: grid;\n        grid-template-columns: 1fr 1fr;\n        align-items: center;         \n    }\n }\n\n .today-weather-extra-info > div:nth-child(2) {\n    display: grid; \n    justify-self: center; \n    align-self:center;\n    justify-items: center;\n    \n    .humidity-wrap, \n    .wind-wrap {\n        display: grid;\n        grid-template-columns: 1fr 1fr;\n        align-items: center;       \n    }\n\n    img {\n        width: 48px;\n        justify-self: end;\n    }\n    \n    .humidity, \n    .wind {\n        font-size: 20px;\n        font-weight: 700;\n    }\n}\n\n .location-name {\n    font-size: 40px;\n    font-weight: bold;\n }\n \n .today-temperature {\n    font-size: 40px;\n    font-weight: bold;\n }\n\n .today-conditions {\n    font-size: 20px;\n }\n\n .week-weather-info-container {\n    display: grid;\n    color: white;   \n    max-width: 540px;\n }\n\n .week-day-weather-row {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr 1fr;\n    gap: 20px;\n    border-top: 1px solid var(--light-grey);\n    align-items: center;\n    justify-items: center;\n    \n    .week-day-name {\n        justify-self: start;\n        text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;\n        font-size: 20px;\n        font-weight: 600;\n        color: rgb(247, 185, 135);\n    }\n\n    .week-day-temperature,\n    .week-night-temperature {\n        font-size: 20px;\n        font-weight: 600;        \n    }\n\n    .week-night-temperature {\n        font-weight: 400;\n        opacity: 0.7;\n    }\n } \n\n .hourly-weather-info-container {\n    position: relative;\n    display: grid;\n    grid-column: 1 / 3;\n    padding: 0 32px;    \n }\n\n .hourly-weather-column {\n    display: grid;\n    justify-items: center;\n    align-items: center;\n    width: 36px;\n    gap: 4px;\n }\n\n .slider-wrap {    \n    position: relative;\n    overflow: hidden;\n    width: 432px;\n    justify-self: center; \n    border-top: 1px solid var(--light-grey); \n    padding-top: 8px;  \n }\n\n .slider-content {\n    display: grid;\n    grid-auto-flow: column;\n    position: absolute;           \n }\n\n .nav-container {\n    position: absolute;   \n    width: 100%;\n    height: 100%;   \n    display: flex;\n    justify-content: space-between;\n    align-items: center;    \n }\n\n#button-previous {\n    background: url(./images/chevron-left.svg) no-repeat;\n    background-position: 55% 50%;     \n}\n\n#button-next {\n    background: url(./images/chevron-right.svg) no-repeat; \n    background-position: 45% 50%;    \n}\n\n#button-previous,\n#button-next {\n    cursor: pointer;\n    border: none;      \n    border-radius: 50%;\n    width: 18px;\n    height: 18px;    \n    background-size: 36px;\n    opacity: 40%;\n    \n    &:hover {\n        opacity: 80%;\n    }\n}\n\n.hourly-weather-image {\n    height: 28px;\n    width: 28px;\n}\n\n.hourly-weather-time {\n    opacity: 0.6;\n}\n\n.week-day-weather-image img {\n    display: grid;\n    height: 48px;\n    width: 48px;\n    align-self: center;\n}\n\n.switch {\n    position: relative;\n    display: inline-block;\n    width: 66px;\n    height: 40px;\n    border: 1px solid var(--light-grey);\n    border-radius: 50px;\n    background-color: var(--half-transparent);\n}  \n\n.switch input {\n    opacity: 0;\n    width: 0;\n    height: 0;\n}  \n\n.slider {\n    position: absolute;\n    cursor: pointer;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    -webkit-transition: .4s;\n    transition: .4s;\n}\n\n.slider:before {\n    position: absolute;    \n    height: 28px;\n    width: 28px;\n    left: 4px;\n    bottom: 4px;\n    content: \"°C\";\n    display: grid;\n    place-content: center;\n    color: #1e3c72;\n    font-weight: 900;\n    background-color: #dadfe7;\n    -webkit-transition: .4s;\n    transition: .4s;    \n}\n\ninput:checked + .slider:before {\n    content: '°F';    \n}  \n\ninput:checked + .slider:before {\n    -webkit-transform: translateX(26px);\n    -ms-transform: translateX(26px);\n    transform: translateX(26px);\n} \n\n.slider.round:before {\n    border-radius: 50%;\n}\n\n.active {\n    display: block;\n}\n\n.loader {    \n    position: absolute;\n    display: none;\n    bottom: -40px;\n    left: 50%;\n    transform: translate(-50%);\n    font-size: 8px;\n    width: 1em;\n    height: 1em;\n    border-radius: 50%;   \n    animation: spin 1.1s infinite ease;\n    transform: translateZ(0);    \n  \n    &.loader-active {\n        display: block;\n    }\n}\n\n  @keyframes spin {\n    0%,\n    100% {\n      box-shadow: 0em -2.6em 0em 0em #ffffff, 1.8em -1.8em 0 0em rgba(255,255,255, 0.2), 2.5em 0em 0 0em rgba(255,255,255, 0.2), 1.75em 1.75em 0 0em rgba(255,255,255, 0.2), 0em 2.5em 0 0em rgba(255,255,255, 0.2), -1.8em 1.8em 0 0em rgba(255,255,255, 0.2), -2.6em 0em 0 0em rgba(255,255,255, 0.5), -1.8em -1.8em 0 0em rgba(255,255,255, 0.7);\n    }\n    12.5% {\n      box-shadow: 0em -2.6em 0em 0em rgba(255,255,255, 0.7), 1.8em -1.8em 0 0em #ffffff, 2.5em 0em 0 0em rgba(255,255,255, 0.2), 1.75em 1.75em 0 0em rgba(255,255,255, 0.2), 0em 2.5em 0 0em rgba(255,255,255, 0.2), -1.8em 1.8em 0 0em rgba(255,255,255, 0.2), -2.6em 0em 0 0em rgba(255,255,255, 0.2), -1.8em -1.8em 0 0em rgba(255,255,255, 0.5);\n    }\n    25% {\n      box-shadow: 0em -2.6em 0em 0em rgba(255,255,255, 0.5), 1.8em -1.8em 0 0em rgba(255,255,255, 0.7), 2.5em 0em 0 0em #ffffff, 1.75em 1.75em 0 0em rgba(255,255,255, 0.2), 0em 2.5em 0 0em rgba(255,255,255, 0.2), -1.8em 1.8em 0 0em rgba(255,255,255, 0.2), -2.6em 0em 0 0em rgba(255,255,255, 0.2), -1.8em -1.8em 0 0em rgba(255,255,255, 0.2);\n    }\n    37.5% {\n      box-shadow: 0em -2.6em 0em 0em rgba(255,255,255, 0.2), 1.8em -1.8em 0 0em rgba(255,255,255, 0.5), 2.5em 0em 0 0em rgba(255,255,255, 0.7), 1.75em 1.75em 0 0em #ffffff, 0em 2.5em 0 0em rgba(255,255,255, 0.2), -1.8em 1.8em 0 0em rgba(255,255,255, 0.2), -2.6em 0em 0 0em rgba(255,255,255, 0.2), -1.8em -1.8em 0 0em rgba(255,255,255, 0.2);\n    }\n    50% {\n      box-shadow: 0em -2.6em 0em 0em rgba(255,255,255, 0.2), 1.8em -1.8em 0 0em rgba(255,255,255, 0.2), 2.5em 0em 0 0em rgba(255,255,255, 0.5), 1.75em 1.75em 0 0em rgba(255,255,255, 0.7), 0em 2.5em 0 0em #ffffff, -1.8em 1.8em 0 0em rgba(255,255,255, 0.2), -2.6em 0em 0 0em rgba(255,255,255, 0.2), -1.8em -1.8em 0 0em rgba(255,255,255, 0.2);\n    }\n    62.5% {\n      box-shadow: 0em -2.6em 0em 0em rgba(255,255,255, 0.2), 1.8em -1.8em 0 0em rgba(255,255,255, 0.2), 2.5em 0em 0 0em rgba(255,255,255, 0.2), 1.75em 1.75em 0 0em rgba(255,255,255, 0.5), 0em 2.5em 0 0em rgba(255,255,255, 0.7), -1.8em 1.8em 0 0em #ffffff, -2.6em 0em 0 0em rgba(255,255,255, 0.2), -1.8em -1.8em 0 0em rgba(255,255,255, 0.2);\n    }\n    75% {\n      box-shadow: 0em -2.6em 0em 0em rgba(255,255,255, 0.2), 1.8em -1.8em 0 0em rgba(255,255,255, 0.2), 2.5em 0em 0 0em rgba(255,255,255, 0.2), 1.75em 1.75em 0 0em rgba(255,255,255, 0.2), 0em 2.5em 0 0em rgba(255,255,255, 0.5), -1.8em 1.8em 0 0em rgba(255,255,255, 0.7), -2.6em 0em 0 0em #ffffff, -1.8em -1.8em 0 0em rgba(255,255,255, 0.2);\n    }\n    87.5% {\n      box-shadow: 0em -2.6em 0em 0em rgba(255,255,255, 0.2), 1.8em -1.8em 0 0em rgba(255,255,255, 0.2), 2.5em 0em 0 0em rgba(255,255,255, 0.2), 1.75em 1.75em 0 0em rgba(255,255,255, 0.2), 0em 2.5em 0 0em rgba(255,255,255, 0.2), -1.8em 1.8em 0 0em rgba(255,255,255, 0.5), -2.6em 0em 0 0em rgba(255,255,255, 0.7), -1.8em -1.8em 0 0em #ffffff;\n    }\n  }\n\n  footer {\n    margin-top: auto;    \n    text-align: center;\n    width: 100%;\n    padding-bottom: 16px;\n    color: rgb(204, 202, 202);\n\n    a {\n        color: rgb(120, 179, 247);\n    }\n  }\n\n\n\n\n"],"sourceRoot":""}]);
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
        console.error('Fetch weather API is failed', error);
    };
}

function weatherDataMapper(data) {    
    return {
        location: data.resolvedAddress.split(",")[0],
        temperature: String(data.currentConditions.temp).split(".")[0],
        date: new Date().toLocaleDateString(),        
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
    
    displayTime();
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

const displayTime = () => {
    const time = new Date().toLocaleTimeString(navigator.language, {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
    });
   
    document.querySelector('.time').innerHTML = time;
    setTimeout(displayTime, 1000);
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
        
        sliderContent.style.transform = `translateX(-${(index / 2) * 100}%)`;
        currentIndex = index;   
    };

    buttonNext.onclick = () => {           
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





/***/ }),

/***/ "./src/images/chevron-left.svg":
/*!*************************************!*\
  !*** ./src/images/chevron-left.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/chevron-left.svg";

/***/ }),

/***/ "./src/images/chevron-right.svg":
/*!**************************************!*\
  !*** ./src/images/chevron-right.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/chevron-right.svg";

/***/ }),

/***/ "./src/images/wallpaper.jpg":
/*!**********************************!*\
  !*** ./src/images/wallpaper.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/wallpaper.jpg";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
      
    if (!isValid(userInput.value)) {        
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
    
    (0,_modules_getWeather__WEBPACK_IMPORTED_MODULE_1__.getWeather)(currentLocation.innerText);
});

const isValid = (userInput) => {     
    if (userInput === "") {
        return false;
    }
    return true;   
}

;(0,_modules_getWeather__WEBPACK_IMPORTED_MODULE_1__.getWeather)("Dublin");






/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLHlIQUF5QztBQUNyRiw0Q0FBNEMsK0hBQTRDO0FBQ3hGLDRDQUE0QyxpSUFBNkM7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRiwrR0FBK0csSUFBSSxJQUFJLGtCQUFrQjtBQUN6SSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLG1DQUFtQztBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCLG1DQUFtQztBQUN6RDtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCLG1DQUFtQztBQUN6RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0EsT0FBTyxnRkFBZ0YsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxPQUFPLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFdBQVcsS0FBSyxVQUFVLE1BQU0sTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsY0FBYyxNQUFNLFVBQVUsVUFBVSxLQUFLLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsTUFBTSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsY0FBYyxPQUFPLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxNQUFNLFVBQVUsWUFBWSxNQUFNLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxjQUFjLE1BQU0sWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sTUFBTSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sTUFBTSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxZQUFZLEtBQUssVUFBVSxNQUFNLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdB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V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7O0FDQXFCO0FBQzZCOztBQUVsRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxJQUFJLCtEQUFVO0FBQ2Q7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUksK0RBQVU7QUFDZCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnRUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL2dldFdlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy91aS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy93YWxscGFwZXIuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvY2hldnJvbi1sZWZ0LnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL2NoZXZyb24tcmlnaHQuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1OdW5pdG86d2dodEAzMDA7NDAwOzYwMDs3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gICAgLS1saWdodC1ncmV5OiByZ2JhKDI1NSwgMjU1LCAyNTUsIC4yKTtcbiAgICAtLWhhbGYtdHJhbnNwYXJlbnQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuKiB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbn1cblxuaHRtbCwgYm9keSB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7IFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC40KSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJnYmEoMCwgMCwgMCwgMC40KSksXG4gICAgICAgICAgICAgICAgICAgICAgdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7ICAgICBcbiAgICBmb250LWZhbWlseTogJ051bml0bycsIHNhbnMtc2VyaWY7ICAgXG59XG5cbi50b3AtbmF2IHsgICBcbiAgICBkaXNwbGF5OiBncmlkOyAgICBcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDM2MHB4IDFmcjsgXG4gICAgcGFkZGluZzogNDBweDsgIFxufVxuXG4ubG9nbyB7XG4gICAgY29sb3I6IHJnYig2MCwgMTc2LCAyNDMpO1xuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgwLjkpO1xufVxuXG4ubG9nbyA+IHNwYW46bnRoLWNoaWxkKDIpIHtcbiAgICBjb2xvcjogI2U5YjMxZjtcbn1cblxuLnRvcC1uYXYgZm9ybSB7XG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7ICAgIFxufVxuXG4uc2VhcmNoLWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgYXV0bzsgIFxufVxuXG4uZXJyb3ItbWVzc2FnZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgYm90dG9tOiAtMjRweDtcbiAgICBsZWZ0OiAyMHB4O1xuICAgIGNvbG9yOiAjZTliMzFmOyAgIFxufVxuXG4uc2VhcmNoLWlucHV0IHtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE5OSwgMTA5LCAxMDksIDAuMik7XG4gICAgYm9yZGVyLXJpZ2h0OiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4IDBweCAwcHggNTBweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGFsZi10cmFuc3BhcmVudCk7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgXG4gICAgJi5zZWFyY2gtaW5wdXQ6Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24ge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH0gXG59XG5cbi5zZWFyY2gtaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogcmdiKDE3NywgMTc3LCAxNzkpO1xufVxuXG4uc2VhcmNoLXN1Ym1pdC1idXR0b24ge1xuICAgIGN1cnNvcjogcG9pbnRlcjsgICBcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhhbGYtdHJhbnNwYXJlbnQpO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWxpZ2h0LWdyZXkpO1xuICAgIGJvcmRlci1yYWRpdXM6IDBweCA1MHB4IDUwcHggMHB4O1xuICAgIGJvcmRlci1sZWZ0OiB0cmFuc3BhcmVudDtcblxuICAgIGltZyB7XG4gICAgICAgIGhlaWdodDogMjRweDtcbiAgICAgICAgd2lkdGg6IDI0cHg7XG4gICAgfVxufVxuXG5tYWluIHsgIFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyAgIFxuICAgIGdhcDogNDBweDtcbiAgICBwYWRkaW5nOiA0MHB4OyAgICAgXG59IFxuXG4udG9kYXktaW5mby1jYXJkIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDNmciAxZnI7XG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gICAgd2lkdGg6IDU0MHB4O1xuICAgIGhlaWdodDogNDAwcHg7ICBcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1saWdodC1ncmV5KTtcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICAgIHBhZGRpbmc6IDIwcHg7ICAgIFxuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oYWxmLXRyYW5zcGFyZW50KTsgICAgXG4gfVxuXG4gaW1nIHsgICBcbiAgICB3aWR0aDogMTI0cHg7ICAgICAgICAgICAgXG4gfVxuXG4gLnRvZGF5LXdlYXRoZXItbWFpbi1pbmZvIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxMDBweCAzNnB4IDFmcjtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiB9XG5cbiAudG9kYXktd2VhdGhlci1leHRyYS1pbmZvIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNDBweCAxZnI7XG4gICAganVzdGlmeS1pdGVtczogZW5kOyAgICAgXG4gfVxuXG4gLnRvZGF5LXdlYXRoZXItZXh0cmEtaW5mbyA+IGRpdjpmaXJzdC1vZi10eXBlIHtcbiAgICBpbWcge1xuICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAganVzdGlmeS1zZWxmOiBlbmQ7IFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICAgICAgb3BhY2l0eTogMC42OyAgICAgIFxuICAgIH1cblxuICAgIC5kYXRlLXdyYXAsXG4gICAgLnRpbWUtd3JhcCB7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgICAgICAgICBcbiAgICB9XG4gfVxuXG4gLnRvZGF5LXdlYXRoZXItZXh0cmEtaW5mbyA+IGRpdjpudGgtY2hpbGQoMikge1xuICAgIGRpc3BsYXk6IGdyaWQ7IFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyOyBcbiAgICBhbGlnbi1zZWxmOmNlbnRlcjtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgXG4gICAgLmh1bWlkaXR5LXdyYXAsIFxuICAgIC53aW5kLXdyYXAge1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICAgICAgIFxuICAgIH1cblxuICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiA0OHB4O1xuICAgICAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcbiAgICB9XG4gICAgXG4gICAgLmh1bWlkaXR5LCBcbiAgICAud2luZCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICB9XG59XG5cbiAubG9jYXRpb24tbmFtZSB7XG4gICAgZm9udC1zaXplOiA0MHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuIH1cbiBcbiAudG9kYXktdGVtcGVyYXR1cmUge1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiB9XG5cbiAudG9kYXktY29uZGl0aW9ucyB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuIH1cblxuIC53ZWVrLXdlYXRoZXItaW5mby1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgY29sb3I6IHdoaXRlOyAgIFxuICAgIG1heC13aWR0aDogNTQwcHg7XG4gfVxuXG4gLndlZWstZGF5LXdlYXRoZXItcm93IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyO1xuICAgIGdhcDogMjBweDtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tbGlnaHQtZ3JleSk7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgXG4gICAgLndlZWstZGF5LW5hbWUge1xuICAgICAgICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xuICAgICAgICB0ZXh0LXNoYWRvdzogLTFweCAtMXB4IDAgIzAwMCwgMXB4IC0xcHggMCAjMDAwLCAtMXB4IDFweCAwICMwMDAsIDFweCAxcHggMCAjMDAwO1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGNvbG9yOiByZ2IoMjQ3LCAxODUsIDEzNSk7XG4gICAgfVxuXG4gICAgLndlZWstZGF5LXRlbXBlcmF0dXJlLFxuICAgIC53ZWVrLW5pZ2h0LXRlbXBlcmF0dXJlIHtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwOyAgICAgICAgXG4gICAgfVxuXG4gICAgLndlZWstbmlnaHQtdGVtcGVyYXR1cmUge1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBvcGFjaXR5OiAwLjc7XG4gICAgfVxuIH0gXG5cbiAuaG91cmx5LXdlYXRoZXItaW5mby1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcbiAgICBwYWRkaW5nOiAwIDMycHg7ICAgIFxuIH1cblxuIC5ob3VybHktd2VhdGhlci1jb2x1bW4ge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDM2cHg7XG4gICAgZ2FwOiA0cHg7XG4gfVxuXG4gLnNsaWRlci13cmFwIHsgICAgXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd2lkdGg6IDQzMnB4O1xuICAgIGp1c3RpZnktc2VsZjogY2VudGVyOyBcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tbGlnaHQtZ3JleSk7IFxuICAgIHBhZGRpbmctdG9wOiA4cHg7ICBcbiB9XG5cbiAuc2xpZGVyLWNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7ICAgICAgICAgICBcbiB9XG5cbiAubmF2LWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlOyAgIFxuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTsgICBcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyAgICBcbiB9XG5cbiNidXR0b24tcHJldmlvdXMge1xuICAgIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KSBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTUlIDUwJTsgICAgIFxufVxuXG4jYnV0dG9uLW5leHQge1xuICAgIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KSBuby1yZXBlYXQ7IFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDQ1JSA1MCU7ICAgIFxufVxuXG4jYnV0dG9uLXByZXZpb3VzLFxuI2J1dHRvbi1uZXh0IHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm9yZGVyOiBub25lOyAgICAgIFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB3aWR0aDogMThweDtcbiAgICBoZWlnaHQ6IDE4cHg7ICAgIFxuICAgIGJhY2tncm91bmQtc2l6ZTogMzZweDtcbiAgICBvcGFjaXR5OiA0MCU7XG4gICAgXG4gICAgJjpob3ZlciB7XG4gICAgICAgIG9wYWNpdHk6IDgwJTtcbiAgICB9XG59XG5cbi5ob3VybHktd2VhdGhlci1pbWFnZSB7XG4gICAgaGVpZ2h0OiAyOHB4O1xuICAgIHdpZHRoOiAyOHB4O1xufVxuXG4uaG91cmx5LXdlYXRoZXItdGltZSB7XG4gICAgb3BhY2l0eTogMC42O1xufVxuXG4ud2Vlay1kYXktd2VhdGhlci1pbWFnZSBpbWcge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgaGVpZ2h0OiA0OHB4O1xuICAgIHdpZHRoOiA0OHB4O1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuLnN3aXRjaCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogNjZweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbGlnaHQtZ3JleSk7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oYWxmLXRyYW5zcGFyZW50KTtcbn0gIFxuXG4uc3dpdGNoIGlucHV0IHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHdpZHRoOiAwO1xuICAgIGhlaWdodDogMDtcbn0gIFxuXG4uc2xpZGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC40cztcbiAgICB0cmFuc2l0aW9uOiAuNHM7XG59XG5cbi5zbGlkZXI6YmVmb3JlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7ICAgIFxuICAgIGhlaWdodDogMjhweDtcbiAgICB3aWR0aDogMjhweDtcbiAgICBsZWZ0OiA0cHg7XG4gICAgYm90dG9tOiA0cHg7XG4gICAgY29udGVudDogXCLCsENcIjtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBjb2xvcjogIzFlM2M3MjtcbiAgICBmb250LXdlaWdodDogOTAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkYWRmZTc7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNHM7XG4gICAgdHJhbnNpdGlvbjogLjRzOyAgICBcbn1cblxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnwrBGJzsgICAgXG59ICBcblxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcbn0gXG5cbi5zbGlkZXIucm91bmQ6YmVmb3JlIHtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5hY3RpdmUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ubG9hZGVyIHsgICAgXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgYm90dG9tOiAtNDBweDtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSk7XG4gICAgZm9udC1zaXplOiA4cHg7XG4gICAgd2lkdGg6IDFlbTtcbiAgICBoZWlnaHQ6IDFlbTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7ICAgXG4gICAgYW5pbWF0aW9uOiBzcGluIDEuMXMgaW5maW5pdGUgZWFzZTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7ICAgIFxuICBcbiAgICAmLmxvYWRlci1hY3RpdmUge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG59XG5cbiAgQGtleWZyYW1lcyBzcGluIHtcbiAgICAwJSxcbiAgICAxMDAlIHtcbiAgICAgIGJveC1zaGFkb3c6IDBlbSAtMi42ZW0gMGVtIDBlbSAjZmZmZmZmLCAxLjhlbSAtMS44ZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC4yKSwgMi41ZW0gMGVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuMiksIDEuNzVlbSAxLjc1ZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC4yKSwgMGVtIDIuNWVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuMiksIC0xLjhlbSAxLjhlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjIpLCAtMi42ZW0gMGVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuNSksIC0xLjhlbSAtMS44ZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC43KTtcbiAgICB9XG4gICAgMTIuNSUge1xuICAgICAgYm94LXNoYWRvdzogMGVtIC0yLjZlbSAwZW0gMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuNyksIDEuOGVtIC0xLjhlbSAwIDBlbSAjZmZmZmZmLCAyLjVlbSAwZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC4yKSwgMS43NWVtIDEuNzVlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjIpLCAwZW0gMi41ZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC4yKSwgLTEuOGVtIDEuOGVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuMiksIC0yLjZlbSAwZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC4yKSwgLTEuOGVtIC0xLjhlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjUpO1xuICAgIH1cbiAgICAyNSUge1xuICAgICAgYm94LXNoYWRvdzogMGVtIC0yLjZlbSAwZW0gMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuNSksIDEuOGVtIC0xLjhlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjcpLCAyLjVlbSAwZW0gMCAwZW0gI2ZmZmZmZiwgMS43NWVtIDEuNzVlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjIpLCAwZW0gMi41ZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC4yKSwgLTEuOGVtIDEuOGVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuMiksIC0yLjZlbSAwZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC4yKSwgLTEuOGVtIC0xLjhlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjIpO1xuICAgIH1cbiAgICAzNy41JSB7XG4gICAgICBib3gtc2hhZG93OiAwZW0gLTIuNmVtIDBlbSAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC4yKSwgMS44ZW0gLTEuOGVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuNSksIDIuNWVtIDBlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjcpLCAxLjc1ZW0gMS43NWVtIDAgMGVtICNmZmZmZmYsIDBlbSAyLjVlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjIpLCAtMS44ZW0gMS44ZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC4yKSwgLTIuNmVtIDBlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjIpLCAtMS44ZW0gLTEuOGVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuMik7XG4gICAgfVxuICAgIDUwJSB7XG4gICAgICBib3gtc2hhZG93OiAwZW0gLTIuNmVtIDBlbSAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC4yKSwgMS44ZW0gLTEuOGVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuMiksIDIuNWVtIDBlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjUpLCAxLjc1ZW0gMS43NWVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuNyksIDBlbSAyLjVlbSAwIDBlbSAjZmZmZmZmLCAtMS44ZW0gMS44ZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC4yKSwgLTIuNmVtIDBlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjIpLCAtMS44ZW0gLTEuOGVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuMik7XG4gICAgfVxuICAgIDYyLjUlIHtcbiAgICAgIGJveC1zaGFkb3c6IDBlbSAtMi42ZW0gMGVtIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjIpLCAxLjhlbSAtMS44ZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC4yKSwgMi41ZW0gMGVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuMiksIDEuNzVlbSAxLjc1ZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC41KSwgMGVtIDIuNWVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuNyksIC0xLjhlbSAxLjhlbSAwIDBlbSAjZmZmZmZmLCAtMi42ZW0gMGVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuMiksIC0xLjhlbSAtMS44ZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC4yKTtcbiAgICB9XG4gICAgNzUlIHtcbiAgICAgIGJveC1zaGFkb3c6IDBlbSAtMi42ZW0gMGVtIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjIpLCAxLjhlbSAtMS44ZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC4yKSwgMi41ZW0gMGVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuMiksIDEuNzVlbSAxLjc1ZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC4yKSwgMGVtIDIuNWVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuNSksIC0xLjhlbSAxLjhlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjcpLCAtMi42ZW0gMGVtIDAgMGVtICNmZmZmZmYsIC0xLjhlbSAtMS44ZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC4yKTtcbiAgICB9XG4gICAgODcuNSUge1xuICAgICAgYm94LXNoYWRvdzogMGVtIC0yLjZlbSAwZW0gMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuMiksIDEuOGVtIC0xLjhlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjIpLCAyLjVlbSAwZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC4yKSwgMS43NWVtIDEuNzVlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjIpLCAwZW0gMi41ZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC4yKSwgLTEuOGVtIDEuOGVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuNSksIC0yLjZlbSAwZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC43KSwgLTEuOGVtIC0xLjhlbSAwIDBlbSAjZmZmZmZmO1xuICAgIH1cbiAgfVxuXG4gIGZvb3RlciB7XG4gICAgbWFyZ2luLXRvcDogYXV0bzsgICAgXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xuICAgIGNvbG9yOiByZ2IoMjA0LCAyMDIsIDIwMik7XG5cbiAgICBhIHtcbiAgICAgICAgY29sb3I6IHJnYigxMjAsIDE3OSwgMjQ3KTtcbiAgICB9XG4gIH1cblxuXG5cblxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0lBQ0kscUNBQXFDO0lBQ3JDLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEI7OzZEQUUrQztJQUMvQyw0QkFBNEI7SUFDNUIsMkJBQTJCO0lBQzNCLHNCQUFzQjtJQUN0QixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG9DQUFvQztJQUNwQyxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsYUFBYTtJQUNiLFVBQVU7SUFDVixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYiwwQ0FBMEM7SUFDMUMseUJBQXlCO0lBQ3pCLGdDQUFnQztJQUNoQyxlQUFlO0lBQ2YseUNBQXlDO0lBQ3pDLGFBQWE7SUFDYixZQUFZOztJQUVaO1FBQ0ksYUFBYTtJQUNqQjtBQUNKOztBQUVBO0lBQ0ks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QUNJLHlCQUF5QjtJQUM3QjtFQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU51bml0bzp3Z2h0QDMwMDs0MDA7NjAwOzcwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG46cm9vdCB7XFxuICAgIC0tbGlnaHQtZ3JleTogcmdiYSgyNTUsIDI1NSwgMjU1LCAuMik7XFxuICAgIC0taGFsZi10cmFuc3BhcmVudDogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbn1cXG5cXG4qIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5odG1sLCBib2R5IHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4OyBcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC40KSwgXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZ2JhKDAsIDAsIDAsIDAuNCkpLFxcbiAgICAgICAgICAgICAgICAgICAgICB1cmwoJy4vaW1hZ2VzL3dhbGxwYXBlci5qcGcnKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAgICAgXFxuICAgIGZvbnQtZmFtaWx5OiAnTnVuaXRvJywgc2Fucy1zZXJpZjsgICBcXG59XFxuXFxuLnRvcC1uYXYgeyAgIFxcbiAgICBkaXNwbGF5OiBncmlkOyAgICBcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMzYwcHggMWZyOyBcXG4gICAgcGFkZGluZzogNDBweDsgIFxcbn1cXG5cXG4ubG9nbyB7XFxuICAgIGNvbG9yOiByZ2IoNjAsIDE3NiwgMjQzKTtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIHRyYW5zZm9ybTogc2NhbGVYKDAuOSk7XFxufVxcblxcbi5sb2dvID4gc3BhbjpudGgtY2hpbGQoMikge1xcbiAgICBjb2xvcjogI2U5YjMxZjtcXG59XFxuXFxuLnRvcC1uYXYgZm9ybSB7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyOyAgICBcXG59XFxuXFxuLnNlYXJjaC1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIGF1dG87ICBcXG59XFxuXFxuLmVycm9yLW1lc3NhZ2Uge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGJvdHRvbTogLTI0cHg7XFxuICAgIGxlZnQ6IDIwcHg7XFxuICAgIGNvbG9yOiAjZTliMzFmOyAgIFxcbn1cXG5cXG4uc2VhcmNoLWlucHV0IHtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE5OSwgMTA5LCAxMDksIDAuMik7XFxuICAgIGJvcmRlci1yaWdodDogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHggMHB4IDBweCA1MHB4O1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhhbGYtdHJhbnNwYXJlbnQpO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIFxcbiAgICAmLnNlYXJjaC1pbnB1dDo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbiB7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9IFxcbn1cXG5cXG4uc2VhcmNoLWlucHV0OjpwbGFjZWhvbGRlciB7XFxuICAgIGNvbG9yOiByZ2IoMTc3LCAxNzcsIDE3OSk7XFxufVxcblxcbi5zZWFyY2gtc3VibWl0LWJ1dHRvbiB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjsgICBcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICB3aWR0aDogNDBweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oYWxmLXRyYW5zcGFyZW50KTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbGlnaHQtZ3JleSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDBweCA1MHB4IDUwcHggMHB4O1xcbiAgICBib3JkZXItbGVmdDogdHJhbnNwYXJlbnQ7XFxuXFxuICAgIGltZyB7XFxuICAgICAgICBoZWlnaHQ6IDI0cHg7XFxuICAgICAgICB3aWR0aDogMjRweDtcXG4gICAgfVxcbn1cXG5cXG5tYWluIHsgIFxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyAgIFxcbiAgICBnYXA6IDQwcHg7XFxuICAgIHBhZGRpbmc6IDQwcHg7ICAgICBcXG59IFxcblxcbi50b2RheS1pbmZvLWNhcmQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogM2ZyIDFmcjtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIHdpZHRoOiA1NDBweDtcXG4gICAgaGVpZ2h0OiA0MDBweDsgIFxcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1saWdodC1ncmV5KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcXG4gICAgcGFkZGluZzogMjBweDsgICAgXFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGFsZi10cmFuc3BhcmVudCk7ICAgIFxcbiB9XFxuXFxuIGltZyB7ICAgXFxuICAgIHdpZHRoOiAxMjRweDsgICAgICAgICAgICBcXG4gfVxcblxcbiAudG9kYXktd2VhdGhlci1tYWluLWluZm8ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMTAwcHggMzZweCAxZnI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gfVxcblxcbiAudG9kYXktd2VhdGhlci1leHRyYS1pbmZvIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA0MHB4IDFmcjtcXG4gICAganVzdGlmeS1pdGVtczogZW5kOyAgICAgXFxuIH1cXG5cXG4gLnRvZGF5LXdlYXRoZXItZXh0cmEtaW5mbyA+IGRpdjpmaXJzdC1vZi10eXBlIHtcXG4gICAgaW1nIHtcXG4gICAgICAgIHdpZHRoOiAyMHB4O1xcbiAgICAgICAganVzdGlmeS1zZWxmOiBlbmQ7IFxcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XFxuICAgICAgICBvcGFjaXR5OiAwLjY7ICAgICAgXFxuICAgIH1cXG5cXG4gICAgLmRhdGUtd3JhcCxcXG4gICAgLnRpbWUtd3JhcCB7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgICAgICAgICBcXG4gICAgfVxcbiB9XFxuXFxuIC50b2RheS13ZWF0aGVyLWV4dHJhLWluZm8gPiBkaXY6bnRoLWNoaWxkKDIpIHtcXG4gICAgZGlzcGxheTogZ3JpZDsgXFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyOyBcXG4gICAgYWxpZ24tc2VsZjpjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgXFxuICAgIC5odW1pZGl0eS13cmFwLCBcXG4gICAgLndpbmQtd3JhcCB7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgICAgICAgXFxuICAgIH1cXG5cXG4gICAgaW1nIHtcXG4gICAgICAgIHdpZHRoOiA0OHB4O1xcbiAgICAgICAganVzdGlmeS1zZWxmOiBlbmQ7XFxuICAgIH1cXG4gICAgXFxuICAgIC5odW1pZGl0eSwgXFxuICAgIC53aW5kIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIH1cXG59XFxuXFxuIC5sb2NhdGlvbi1uYW1lIHtcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gfVxcbiBcXG4gLnRvZGF5LXRlbXBlcmF0dXJlIHtcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gfVxcblxcbiAudG9kYXktY29uZGl0aW9ucyB7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gfVxcblxcbiAud2Vlay13ZWF0aGVyLWluZm8tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgY29sb3I6IHdoaXRlOyAgIFxcbiAgICBtYXgtd2lkdGg6IDU0MHB4O1xcbiB9XFxuXFxuIC53ZWVrLWRheS13ZWF0aGVyLXJvdyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1saWdodC1ncmV5KTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBcXG4gICAgLndlZWstZGF5LW5hbWUge1xcbiAgICAgICAganVzdGlmeS1zZWxmOiBzdGFydDtcXG4gICAgICAgIHRleHQtc2hhZG93OiAtMXB4IC0xcHggMCAjMDAwLCAxcHggLTFweCAwICMwMDAsIC0xcHggMXB4IDAgIzAwMCwgMXB4IDFweCAwICMwMDA7XFxuICAgICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICAgICAgY29sb3I6IHJnYigyNDcsIDE4NSwgMTM1KTtcXG4gICAgfVxcblxcbiAgICAud2Vlay1kYXktdGVtcGVyYXR1cmUsXFxuICAgIC53ZWVrLW5pZ2h0LXRlbXBlcmF0dXJlIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7ICAgICAgICBcXG4gICAgfVxcblxcbiAgICAud2Vlay1uaWdodC10ZW1wZXJhdHVyZSB7XFxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICAgICAgb3BhY2l0eTogMC43O1xcbiAgICB9XFxuIH0gXFxuXFxuIC5ob3VybHktd2VhdGhlci1pbmZvLWNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgICBwYWRkaW5nOiAwIDMycHg7ICAgIFxcbiB9XFxuXFxuIC5ob3VybHktd2VhdGhlci1jb2x1bW4ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAzNnB4O1xcbiAgICBnYXA6IDRweDtcXG4gfVxcblxcbiAuc2xpZGVyLXdyYXAgeyAgICBcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB3aWR0aDogNDMycHg7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyOyBcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWxpZ2h0LWdyZXkpOyBcXG4gICAgcGFkZGluZy10b3A6IDhweDsgIFxcbiB9XFxuXFxuIC5zbGlkZXItY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgICAgICAgICAgIFxcbiB9XFxuXFxuIC5uYXYtY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlOyAgIFxcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlOyAgIFxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICAgIFxcbiB9XFxuXFxuI2J1dHRvbi1wcmV2aW91cyB7XFxuICAgIGJhY2tncm91bmQ6IHVybCguL2ltYWdlcy9jaGV2cm9uLWxlZnQuc3ZnKSBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDU1JSA1MCU7ICAgICBcXG59XFxuXFxuI2J1dHRvbi1uZXh0IHtcXG4gICAgYmFja2dyb3VuZDogdXJsKC4vaW1hZ2VzL2NoZXZyb24tcmlnaHQuc3ZnKSBuby1yZXBlYXQ7IFxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA0NSUgNTAlOyAgICBcXG59XFxuXFxuI2J1dHRvbi1wcmV2aW91cyxcXG4jYnV0dG9uLW5leHQge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlcjogbm9uZTsgICAgICBcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICB3aWR0aDogMThweDtcXG4gICAgaGVpZ2h0OiAxOHB4OyAgICBcXG4gICAgYmFja2dyb3VuZC1zaXplOiAzNnB4O1xcbiAgICBvcGFjaXR5OiA0MCU7XFxuICAgIFxcbiAgICAmOmhvdmVyIHtcXG4gICAgICAgIG9wYWNpdHk6IDgwJTtcXG4gICAgfVxcbn1cXG5cXG4uaG91cmx5LXdlYXRoZXItaW1hZ2Uge1xcbiAgICBoZWlnaHQ6IDI4cHg7XFxuICAgIHdpZHRoOiAyOHB4O1xcbn1cXG5cXG4uaG91cmx5LXdlYXRoZXItdGltZSB7XFxuICAgIG9wYWNpdHk6IDAuNjtcXG59XFxuXFxuLndlZWstZGF5LXdlYXRoZXItaW1hZ2UgaW1nIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgaGVpZ2h0OiA0OHB4O1xcbiAgICB3aWR0aDogNDhweDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uc3dpdGNoIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHdpZHRoOiA2NnB4O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWxpZ2h0LWdyZXkpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oYWxmLXRyYW5zcGFyZW50KTtcXG59ICBcXG5cXG4uc3dpdGNoIGlucHV0IHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgd2lkdGg6IDA7XFxuICAgIGhlaWdodDogMDtcXG59ICBcXG5cXG4uc2xpZGVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNHM7XFxuICAgIHRyYW5zaXRpb246IC40cztcXG59XFxuXFxuLnNsaWRlcjpiZWZvcmUge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7ICAgIFxcbiAgICBoZWlnaHQ6IDI4cHg7XFxuICAgIHdpZHRoOiAyOHB4O1xcbiAgICBsZWZ0OiA0cHg7XFxuICAgIGJvdHRvbTogNHB4O1xcbiAgICBjb250ZW50OiBcXFwiwrBDXFxcIjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbiAgICBjb2xvcjogIzFlM2M3MjtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RhZGZlNztcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNHM7XFxuICAgIHRyYW5zaXRpb246IC40czsgICAgXFxufVxcblxcbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6ICfCsEYnOyAgICBcXG59ICBcXG5cXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xcbn0gXFxuXFxuLnNsaWRlci5yb3VuZDpiZWZvcmUge1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbi5hY3RpdmUge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLmxvYWRlciB7ICAgIFxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGJvdHRvbTogLTQwcHg7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSk7XFxuICAgIGZvbnQtc2l6ZTogOHB4O1xcbiAgICB3aWR0aDogMWVtO1xcbiAgICBoZWlnaHQ6IDFlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlOyAgIFxcbiAgICBhbmltYXRpb246IHNwaW4gMS4xcyBpbmZpbml0ZSBlYXNlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7ICAgIFxcbiAgXFxuICAgICYubG9hZGVyLWFjdGl2ZSB7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgfVxcbn1cXG5cXG4gIEBrZXlmcmFtZXMgc3BpbiB7XFxuICAgIDAlLFxcbiAgICAxMDAlIHtcXG4gICAgICBib3gtc2hhZG93OiAwZW0gLTIuNmVtIDBlbSAwZW0gI2ZmZmZmZiwgMS44ZW0gLTEuOGVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuMiksIDIuNWVtIDBlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjIpLCAxLjc1ZW0gMS43NWVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuMiksIDBlbSAyLjVlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjIpLCAtMS44ZW0gMS44ZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC4yKSwgLTIuNmVtIDBlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjUpLCAtMS44ZW0gLTEuOGVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuNyk7XFxuICAgIH1cXG4gICAgMTIuNSUge1xcbiAgICAgIGJveC1zaGFkb3c6IDBlbSAtMi42ZW0gMGVtIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjcpLCAxLjhlbSAtMS44ZW0gMCAwZW0gI2ZmZmZmZiwgMi41ZW0gMGVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuMiksIDEuNzVlbSAxLjc1ZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC4yKSwgMGVtIDIuNWVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuMiksIC0xLjhlbSAxLjhlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjIpLCAtMi42ZW0gMGVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuMiksIC0xLjhlbSAtMS44ZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC41KTtcXG4gICAgfVxcbiAgICAyNSUge1xcbiAgICAgIGJveC1zaGFkb3c6IDBlbSAtMi42ZW0gMGVtIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjUpLCAxLjhlbSAtMS44ZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC43KSwgMi41ZW0gMGVtIDAgMGVtICNmZmZmZmYsIDEuNzVlbSAxLjc1ZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC4yKSwgMGVtIDIuNWVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuMiksIC0xLjhlbSAxLjhlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjIpLCAtMi42ZW0gMGVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuMiksIC0xLjhlbSAtMS44ZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC4yKTtcXG4gICAgfVxcbiAgICAzNy41JSB7XFxuICAgICAgYm94LXNoYWRvdzogMGVtIC0yLjZlbSAwZW0gMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuMiksIDEuOGVtIC0xLjhlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjUpLCAyLjVlbSAwZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC43KSwgMS43NWVtIDEuNzVlbSAwIDBlbSAjZmZmZmZmLCAwZW0gMi41ZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC4yKSwgLTEuOGVtIDEuOGVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuMiksIC0yLjZlbSAwZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC4yKSwgLTEuOGVtIC0xLjhlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjIpO1xcbiAgICB9XFxuICAgIDUwJSB7XFxuICAgICAgYm94LXNoYWRvdzogMGVtIC0yLjZlbSAwZW0gMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuMiksIDEuOGVtIC0xLjhlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjIpLCAyLjVlbSAwZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC41KSwgMS43NWVtIDEuNzVlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjcpLCAwZW0gMi41ZW0gMCAwZW0gI2ZmZmZmZiwgLTEuOGVtIDEuOGVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuMiksIC0yLjZlbSAwZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC4yKSwgLTEuOGVtIC0xLjhlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjIpO1xcbiAgICB9XFxuICAgIDYyLjUlIHtcXG4gICAgICBib3gtc2hhZG93OiAwZW0gLTIuNmVtIDBlbSAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC4yKSwgMS44ZW0gLTEuOGVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuMiksIDIuNWVtIDBlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjIpLCAxLjc1ZW0gMS43NWVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuNSksIDBlbSAyLjVlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjcpLCAtMS44ZW0gMS44ZW0gMCAwZW0gI2ZmZmZmZiwgLTIuNmVtIDBlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjIpLCAtMS44ZW0gLTEuOGVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuMik7XFxuICAgIH1cXG4gICAgNzUlIHtcXG4gICAgICBib3gtc2hhZG93OiAwZW0gLTIuNmVtIDBlbSAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC4yKSwgMS44ZW0gLTEuOGVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuMiksIDIuNWVtIDBlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjIpLCAxLjc1ZW0gMS43NWVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuMiksIDBlbSAyLjVlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjUpLCAtMS44ZW0gMS44ZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC43KSwgLTIuNmVtIDBlbSAwIDBlbSAjZmZmZmZmLCAtMS44ZW0gLTEuOGVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuMik7XFxuICAgIH1cXG4gICAgODcuNSUge1xcbiAgICAgIGJveC1zaGFkb3c6IDBlbSAtMi42ZW0gMGVtIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjIpLCAxLjhlbSAtMS44ZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC4yKSwgMi41ZW0gMGVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuMiksIDEuNzVlbSAxLjc1ZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC4yKSwgMGVtIDIuNWVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuMiksIC0xLjhlbSAxLjhlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjUpLCAtMi42ZW0gMGVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuNyksIC0xLjhlbSAtMS44ZW0gMCAwZW0gI2ZmZmZmZjtcXG4gICAgfVxcbiAgfVxcblxcbiAgZm9vdGVyIHtcXG4gICAgbWFyZ2luLXRvcDogYXV0bzsgICAgXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xcbiAgICBjb2xvcjogcmdiKDIwNCwgMjAyLCAyMDIpO1xcblxcbiAgICBhIHtcXG4gICAgICAgIGNvbG9yOiByZ2IoMTIwLCAxNzksIDI0Nyk7XFxuICAgIH1cXG4gIH1cXG5cXG5cXG5cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyByZW5kZXJEYWlseVdlYXRoZXIgfSBmcm9tICcuL3VpJztcbmltcG9ydCB7IHJlbmRlclRvZGF5V2VhdGhlckluZm9DYXJkIH0gZnJvbSBcIi4vdWlcIjtcbmltcG9ydCB7IGxvYWRpbmcgfSBmcm9tICcuL3VpJztcblxuZXhwb3J0IGNvbnN0IGdldFdlYXRoZXIgPSBhc3luYyAobG9jYXRpb24pID0+IHtcbiAgICBjb25zdCB1bml0c0NoZWNrYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVuaXRzLWNoZWNrYm94Jyk7XG4gICAgY29uc3QgdW5pdHMgPSB1bml0c0NoZWNrYm94LmNoZWNrZWQgPyAndXMnIDogJ21ldHJpYyc7XG5cbiAgICBjb25zdCBhcGlLZXkgPSAnWkZFWjlGQjZMTFlaVVo5REZEVTdHSlRNRCc7XG4gICAgY29uc3QgdXJsID0gYGh0dHBzOi8vd2VhdGhlci52aXN1YWxjcm9zc2luZy5jb20vVmlzdWFsQ3Jvc3NpbmdXZWJTZXJ2aWNlcy9yZXN0L3NlcnZpY2VzL3RpbWVsaW5lLyR7bG9jYXRpb259P3VuaXRHcm91cD0ke3VuaXRzfSZrZXk9JHthcGlLZXl9YDsgICAgXG4gICAgXG4gICAgbG9hZGluZygnc3RhcnRlZCcpO1xuXG4gICAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwgeyBtb2RlOiAnY29ycyd9KTtcbiAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZXJyb3ItbWVzc2FnZScpOyAgICBcbiAgICBcbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgIGxvYWRpbmcoJ2ZpbmlzaGVkJyk7XG5cbiAgICAgICAgZXJyb3JNZXNzYWdlLmlubmVyVGV4dCA9IFwiU29ycnksIG5vIGxvY2F0aW9uIGZvdW5kXCI7XG4gICAgICAgIGVycm9yTWVzc2FnZS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBlcnJvck1lc3NhZ2UuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyksIDMwMDApO1xuXG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBkYXRhID0gd2VhdGhlckRhdGFNYXBwZXIoYXdhaXQgcmVzcG9uc2UuanNvbigpKTtcbiAgICBcbiAgICByZW5kZXJUb2RheVdlYXRoZXJJbmZvQ2FyZChkYXRhKTtcbiAgICByZW5kZXJEYWlseVdlYXRoZXIoZGF0YSk7ICAgIFxuICAgIGxvYWRpbmcoJ2ZpbmlzaGVkJyk7ICAgIFxuXG4gICAgfSBjYXRjaCAoZXJyb3IpIHsgICAgICAgIFxuICAgICAgICBjb25zb2xlLmVycm9yKCdGZXRjaCB3ZWF0aGVyIEFQSSBpcyBmYWlsZWQnLCBlcnJvcik7XG4gICAgfTtcbn1cblxuZnVuY3Rpb24gd2VhdGhlckRhdGFNYXBwZXIoZGF0YSkgeyAgICBcbiAgICByZXR1cm4ge1xuICAgICAgICBsb2NhdGlvbjogZGF0YS5yZXNvbHZlZEFkZHJlc3Muc3BsaXQoXCIsXCIpWzBdLFxuICAgICAgICB0ZW1wZXJhdHVyZTogU3RyaW5nKGRhdGEuY3VycmVudENvbmRpdGlvbnMudGVtcCkuc3BsaXQoXCIuXCIpWzBdLFxuICAgICAgICBkYXRlOiBuZXcgRGF0ZSgpLnRvTG9jYWxlRGF0ZVN0cmluZygpLCAgICAgICAgXG4gICAgICAgIGNvbmRpdGlvbnM6IGRhdGEuY3VycmVudENvbmRpdGlvbnMuY29uZGl0aW9ucyxcbiAgICAgICAgaHVtaWRpdHk6IFN0cmluZyhkYXRhLmN1cnJlbnRDb25kaXRpb25zLmh1bWlkaXR5KS5zcGxpdChcIi5cIilbMF0sXG4gICAgICAgIHdpbmRTcGVlZDogU3RyaW5nKGRhdGEuY3VycmVudENvbmRpdGlvbnMud2luZHNwZWVkKS5zcGxpdChcIi5cIilbMF0sXG4gICAgICAgIGljb246IGRhdGEuY3VycmVudENvbmRpdGlvbnMuaWNvbixcbiAgICAgICAgaG91cmx5Rm9yZWNhc3Q6IGRhdGEuZGF5c1swXS5ob3Vycy5tYXAoaG91ciA9PiAoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWU6IGhvdXIuZGF0ZXRpbWUuc2xpY2UoMCwgMiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGVyYXR1cmU6IFN0cmluZyhob3VyLnRlbXApLnNwbGl0KFwiLlwiKVswXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiBob3VyLmljb25cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKSxcbiAgICAgICAgd2Vla0ZvcmVjYXN0OiBkYXRhLmRheXMuc2xpY2UoMSwgOCkubWFwKGRheSA9PiAoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdlZWtEYXk6IG5ldyBEYXRlKGRheS5kYXRldGltZSkudG9Mb2NhbGVEYXRlU3RyaW5nKCdlbi1VUycsIHt3ZWVrZGF5OiAnbG9uZyd9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhUZW1wZXJhdHVyZTogU3RyaW5nKGRheS50ZW1wbWF4KS5zcGxpdChcIi5cIilbMF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluVGVtcGVyYXR1cmU6IFN0cmluZyhkYXkudGVtcG1pbikuc3BsaXQoXCIuXCIpWzBdLCAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246IGRheS5pY29uXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSkgICAgICAgIFxuICAgIH07XG59IiwiZXhwb3J0IGNvbnN0IHJlbmRlckRhaWx5V2VhdGhlciA9ICh3ZWF0aGVyKSA9PiB7XG4gICAgY29uc3Qgd2Vla1dlYXRoZXJJbmZvQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlZWstd2VhdGhlci1pbmZvLWNvbnRhaW5lcicpO1xuICAgIHdlZWtXZWF0aGVySW5mb0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcblxuICAgIHdlYXRoZXIud2Vla0ZvcmVjYXN0Lm1hcCgoZWxlbWVudCkgPT4geyAgICAgICBcbiAgICAgICAgd2Vla1dlYXRoZXJJbmZvQ29udGFpbmVyLmlubmVySFRNTCArPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ3ZWVrLWRheS13ZWF0aGVyLXJvd1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3ZWVrLWRheS1uYW1lXCI+JHtlbGVtZW50LndlZWtEYXl9PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIndlZWstZGF5LXdlYXRoZXItaW1hZ2VcIj5cbiAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIGNsYXNzPVwid2Vlay1kYXktd2VhdGhlci1pY29uXCJcbiAgICAgICAgICAgICAgc3JjPVwiaW1hZ2VzL3dlYXRoZXItaW1hZ2VzLWZpbGxlZC8ke2VsZW1lbnQuaWNvbn0uc3ZnXCJcbiAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj4gICAgXG4gICAgICAgICAgPGRpdiBjbGFzcz1cIndlZWstZGF5LXRlbXBlcmF0dXJlXCI+PHN1cD4mdWFycjs8L3N1cD4ke2VsZW1lbnQubWF4VGVtcGVyYXR1cmV9wrA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwid2Vlay1uaWdodC10ZW1wZXJhdHVyZVwiPjxzdXA+JmRhcnI7PC9zdXA+JHtlbGVtZW50Lm1pblRlbXBlcmF0dXJlfcKwPC9kaXY+ICAgICAgICAgICAgICAgIFxuICAgICAgICA8L2Rpdj5gICAgICAgICAgICAgICAgICBcbiAgICB9KTtcblxuICAgIHdlZWtXZWF0aGVySW5mb0NvbnRhaW5lci5jaGlsZHJlblswXS5zdHlsZS5ib3JkZXIgPSAnbm9uZSc7XG59XG5cbmV4cG9ydCBjb25zdCByZW5kZXJUb2RheVdlYXRoZXJJbmZvQ2FyZCA9ICh3ZWF0aGVyKSA9PiB7XG4gICAgY29uc3QgdG9kYXlXZWF0aGVySW5mb0NhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kYXktaW5mby1jYXJkJyk7XG4gICAgdG9kYXlXZWF0aGVySW5mb0NhcmQuaW5uZXJIVE1MID0gJyc7XG4gICAgXG4gICAgY29uc3QgbWFpbldlYXRoZXJJbmZvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWFpbldlYXRoZXJJbmZvRGl2LmNsYXNzTGlzdC5hZGQoJ3RvZGF5LXdlYXRoZXItbWFpbi1pbmZvJyk7XG4gICAgbWFpbldlYXRoZXJJbmZvRGl2LmlubmVySFRNTCA9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImxvY2F0aW9uLW5hbWVcIj4ke3dlYXRoZXIubG9jYXRpb259PC9kaXY+ICAgICAgICAgICAgICAgICAgIFxuICAgICAgICA8aW1nIHNyYz1cImltYWdlcy93ZWF0aGVyLWltYWdlcy1maWxsZWQvJHt3ZWF0aGVyLmljb259LnN2Z1wiPiAgICAgICBcbiAgICAgICAgPGRpdiBjbGFzcz1cInRvZGF5LXRlbXBlcmF0dXJlXCI+JHt3ZWF0aGVyLnRlbXBlcmF0dXJlfcKwPC9kaXY+ICAgICAgICAgIFxuICAgICAgICA8ZGl2IGNsYXNzPVwidG9kYXktY29uZGl0aW9uc1wiPiR7d2VhdGhlci5jb25kaXRpb25zfTwvZGl2PiAgICAgICBcbiAgICBgOyBcbiAgICBcbiAgICBjb25zdCBhZGRpdGlvbmFsV2VhdGhlckluZm9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhZGRpdGlvbmFsV2VhdGhlckluZm9EaXYuY2xhc3NMaXN0LmFkZCgndG9kYXktd2VhdGhlci1leHRyYS1pbmZvJyk7XG4gICAgYWRkaXRpb25hbFdlYXRoZXJJbmZvRGl2LmlubmVySFRNTCA9IGBcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXRlLXdyYXBcIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltYWdlcy9kYXRlLnN2Z1wiPiBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGF0ZVwiPiR7d2VhdGhlci5kYXRlfTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGltZS13cmFwXCI+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWFnZXMvdGltZS5zdmdcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGltZVwiPiR7d2VhdGhlci50aW1lfTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImh1bWlkaXR5LXdyYXBcIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltYWdlcy93ZWF0aGVyLWltYWdlcy1saW5lZC9odW1pZGl0eS5zdmdcIj4gICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJodW1pZGl0eVwiPiR7d2VhdGhlci5odW1pZGl0eX0lPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3aW5kLXdyYXBcIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltYWdlcy93ZWF0aGVyLWltYWdlcy1saW5lZC93aW5kLnN2Z1wiPiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3aW5kXCI+PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgIDwvZGl2PlxuICAgIGA7XG4gICAgXG4gICAgY29uc3QgaG91cmx5V2VhdGhlckluZm9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBob3VybHlXZWF0aGVySW5mb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdob3VybHktd2VhdGhlci1pbmZvLWNvbnRhaW5lcicpO1xuXG4gICAgY29uc3Qgc2xpZGVyV3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIFxuICAgIGhvdXJseVdlYXRoZXJJbmZvQ29udGFpbmVyLmlubmVySFRNTCA9IHJlbmRlclNsaWRlck5hdmlnYXRpb25QYW5lbCgpO1xuICAgIGhvdXJseVdlYXRoZXJJbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKHNsaWRlcldyYXApO1xuXG4gICAgc2xpZGVyV3JhcC5jbGFzc0xpc3QuYWRkKCdzbGlkZXItd3JhcCcpO1xuICAgIHNsaWRlcldyYXAuaW5uZXJIVE1MID0gcmVuZGVyU2xpZGVyKCk7ICAgXG5cbiAgICB0b2RheVdlYXRoZXJJbmZvQ2FyZC5hcHBlbmQobWFpbldlYXRoZXJJbmZvRGl2LCBhZGRpdGlvbmFsV2VhdGhlckluZm9EaXYsIGhvdXJseVdlYXRoZXJJbmZvQ29udGFpbmVyKTtcbiAgICBcbiAgICBkaXNwbGF5VGltZSgpO1xuICAgIHJlbmRlckhvdXJseVdlYXRoZXJJbmZvKHdlYXRoZXIpO1xuICAgIHJlbmRlcldpbmRTcGVlZCh3ZWF0aGVyLndpbmRTcGVlZCk7XG4gICAgYWRkRXZlbnRMaXN0ZW5lclRvU2xpZGVyKCk7XG5cbiAgICByZXR1cm4gdG9kYXlXZWF0aGVySW5mb0NhcmQ7XG59XG5cbmNvbnN0IHJlbmRlckhvdXJseVdlYXRoZXJJbmZvID0gKHdlYXRoZXIpID0+IHtcbiAgICBjb25zdCBzbGlkZXJDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNsaWRlci1jb250ZW50Jyk7XG5cbiAgICB3ZWF0aGVyLmhvdXJseUZvcmVjYXN0Lm1hcCgoaG91cikgPT4geyAgICAgICBcbiAgICAgICAgc2xpZGVyQ29udGVudC5pbm5lckhUTUwgKz0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiaG91cmx5LXdlYXRoZXItY29sdW1uXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImhvdXJseS13ZWF0aGVyLXRpbWVcIj4ke2hvdXIudGltZX08L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaG91cmx5LXdlYXRoZXItaW1hZ2VcIj5cbiAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIGNsYXNzPVwiaG91cmx5LXdlYXRoZXItaW1hZ2VcIlxuICAgICAgICAgICAgICBzcmM9XCJpbWFnZXMvd2VhdGhlci1pbWFnZXMtbGluZWQvJHtob3VyLmljb259LnN2Z1wiXG4gICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+ICAgIFxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJob3VybHktd2VhdGhlci10ZW1wZXJhdHVyZVwiPiR7aG91ci50ZW1wZXJhdHVyZX3CsDwvZGl2PiAgICAgICAgICAgICAgIFxuICAgICAgICA8L2Rpdj5gICAgICAgICAgXG4gICAgfSk7XG59XG5cbmNvbnN0IHJlbmRlclNsaWRlciA9ICgpID0+IHtcbiAgICByZXR1cm4gYCAgICAgICAgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzbGlkZXItY29udGVudFwiPjwvZGl2PiAgICAgICAgICAgICAgICBcbiAgICBgO1xufVxuXG5jb25zdCByZW5kZXJTbGlkZXJOYXZpZ2F0aW9uUGFuZWwgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGBcbiAgICAgICAgPGRpdiBjbGFzcz1cIm5hdi1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxidXR0b24gaWQ9XCJidXR0b24tcHJldmlvdXNcIj48L2J1dHRvbj4gICAgICAgICAgIFxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImJ1dHRvbi1uZXh0XCI+PC9idXR0b24+ICAgICAgICAgICAgXG4gICAgICAgIDwvZGl2PiBcbiAgICBgXG59XG5cbmNvbnN0IHJlbmRlcldpbmRTcGVlZCA9ICh3aW5kU3BlZWQpID0+IHtcbiAgICBjb25zdCB3aW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndpbmQnKTtcbiAgICBjb25zdCB1bml0c0NoZWNrYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVuaXRzLWNoZWNrYm94Jyk7XG4gICAgY29uc3QgdW5pdCA9IHVuaXRzQ2hlY2tib3guY2hlY2tlZCA/ICdtcGgnIDogJ2ttL2gnO1xuXG4gICAgd2luZC5pbm5lckhUTUwgPSB3aW5kU3BlZWQgKyB1bml0O1xufVxuXG5jb25zdCBkaXNwbGF5VGltZSA9ICgpID0+IHtcbiAgICBjb25zdCB0aW1lID0gbmV3IERhdGUoKS50b0xvY2FsZVRpbWVTdHJpbmcobmF2aWdhdG9yLmxhbmd1YWdlLCB7XG4gICAgICAgIGhvdXI6IFwiMi1kaWdpdFwiLFxuICAgICAgICBtaW51dGU6IFwiMi1kaWdpdFwiLFxuICAgICAgICBob3VyMTI6IGZhbHNlLFxuICAgIH0pO1xuICAgXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpbWUnKS5pbm5lckhUTUwgPSB0aW1lO1xuICAgIHNldFRpbWVvdXQoZGlzcGxheVRpbWUsIDEwMDApO1xufVxuXG5cbmNvbnN0IGFkZEV2ZW50TGlzdGVuZXJUb1NsaWRlciA9ICgpID0+IHtcbiAgICBjb25zdCBzbGlkZXJDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zbGlkZXItY29udGVudFwiKTtcbiAgICBjb25zdCBidXR0b25OZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidXR0b24tbmV4dFwiKTtcbiAgICBjb25zdCBidXR0b25QcmV2aW91cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnV0dG9uLXByZXZpb3VzXCIpOyAgICBcblxuICAgIGxldCBjdXJyZW50SW5kZXggPSAwO1xuXG4gICAgY29uc3Qgc2xpZGUgPSAoaW5kZXgpID0+IHsgICBcbiAgICAgICAgaWYgKGluZGV4IDwgMCkge1xuICAgICAgICAgICAgaW5kZXggPSAyIC0xOyAgICAgICAgXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGluZGV4ID49IDIpIHtcbiAgICAgICAgICAgIGluZGV4ID0gMDsgICAgICAgIFxuICAgICAgICB9OyAgICAgXG4gICAgICAgIFxuICAgICAgICBzbGlkZXJDb250ZW50LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKC0keyhpbmRleCAvIDIpICogMTAwfSUpYDtcbiAgICAgICAgY3VycmVudEluZGV4ID0gaW5kZXg7ICAgXG4gICAgfTtcblxuICAgIGJ1dHRvbk5leHQub25jbGljayA9ICgpID0+IHsgICAgICAgICAgIFxuICAgICAgICBzbGlkZShjdXJyZW50SW5kZXggKyAxKTtcbiAgICB9O1xuXG4gICAgYnV0dG9uUHJldmlvdXMub25jbGljayA9ICgpID0+IHsgICBcbiAgICAgICAgc2xpZGUoY3VycmVudEluZGV4IC0gMSk7XG4gICAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IGxvYWRpbmcgPSAoc3RhdGUpID0+IHtcbiAgICBjb25zdCBsb2FkaW5nU3Bpbm5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2FkZXInKTtcblxuICAgIGlmIChzdGF0ZSA9PT0gJ3N0YXJ0ZWQnKSB7XG4gICAgICBsb2FkaW5nU3Bpbm5lci5jbGFzc0xpc3QuYWRkKCdsb2FkZXItYWN0aXZlJyk7ICAgICBcbiAgICB9IGVsc2Uge1xuICAgICAgbG9hZGluZ1NwaW5uZXIuY2xhc3NMaXN0LnJlbW92ZSgnbG9hZGVyLWFjdGl2ZScpO1xuICAgIH1cbn1cblxuXG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQgJiYgZG9jdW1lbnQuY3VycmVudFNjcmlwdC50YWdOYW1lLnRvVXBwZXJDYXNlKCkgPT09ICdTQ1JJUFQnKVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBnZXRXZWF0aGVyIH0gZnJvbSAnLi9tb2R1bGVzL2dldFdlYXRoZXInO1xuXG5jb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1mb3JtJyk7XG5cbmZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgdXNlcklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1pbnB1dCcpO1xuICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lcnJvci1tZXNzYWdlJyk7XG4gICAgICBcbiAgICBpZiAoIWlzVmFsaWQodXNlcklucHV0LnZhbHVlKSkgeyAgICAgICAgXG4gICAgICAgIGVycm9yTWVzc2FnZS5pbm5lclRleHQgPSBcIlBsZWFzZSBlbnRlciBhIGxvY2F0aW9uXCI7XG4gICAgICAgIGVycm9yTWVzc2FnZS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBlcnJvck1lc3NhZ2UuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyksIDMwMDApO1xuXG4gICAgICAgIHJldHVybjtcbiAgICB9O1xuXG4gICAgZ2V0V2VhdGhlcih1c2VySW5wdXQudmFsdWUpO1xuICAgIHVzZXJJbnB1dC52YWx1ZSA9ICcnO1xufSk7XG5cbmNvbnN0IHVuaXRDaGVja2JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51bml0cy1jaGVja2JveCcpO1xuXG51bml0Q2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgY3VycmVudExvY2F0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvY2F0aW9uLW5hbWUnKTtcbiAgICBcbiAgICBnZXRXZWF0aGVyKGN1cnJlbnRMb2NhdGlvbi5pbm5lclRleHQpO1xufSk7XG5cbmNvbnN0IGlzVmFsaWQgPSAodXNlcklucHV0KSA9PiB7ICAgICBcbiAgICBpZiAodXNlcklucHV0ID09PSBcIlwiKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7ICAgXG59XG5cbmdldFdlYXRoZXIoXCJEdWJsaW5cIik7XG5cblxuXG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9