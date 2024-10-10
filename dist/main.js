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




`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700&display=swap');\n\n:root {\n    --light-grey: rgba(255, 255, 255, .2);\n    --half-transparent: rgba(0, 0, 0, 0.5);\n}\n\n* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\nhtml, body {\n    height: 100%;\n    display: flex; \n    flex-direction: column;\n    background-image: linear-gradient(rgba(0, 0, 0, 0.4), \n                                      rgba(0, 0, 0, 0.4)),\n                      url('./images/wallpaper.jpg');\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: cover;     \n    font-family: 'Nunito', sans-serif;   \n}\n\n.top-nav {   \n    display: grid;    \n    align-items: center;\n    grid-template-columns: 1fr 360px 1fr; \n    padding: 40px;  \n}\n\n.top-nav form {\n    justify-self: center;    \n}\n\n.search-container {\n    position: relative;\n    display: grid;\n    grid-template-columns: 1fr auto;  \n}\n\n.error-message {\n    position: absolute;\n    display: none;\n    bottom: -24px;\n    left: 20px;\n    color: rgb(214, 214, 30);   \n}\n\n.search-input {\n    height: 40px;\n    padding: 10px;\n    border: 1px solid rgba(199, 109, 109, 0.2);\n    border-right: transparent;\n    border-radius: 50px 0px 0px 50px;\n    font-size: 16px;\n    background-color: var(--half-transparent);\n    outline: none;\n    color: white;\n    \n    &.search-input::-webkit-search-cancel-button {\n        display: none;\n    } \n}\n\n.search-input::placeholder {\n    color: rgb(177, 177, 179);\n}\n\n.search-submit-button {\n    cursor: pointer;   \n    height: 40px;\n    width: 40px;\n    color: white;\n    background-color: var(--half-transparent);\n    border: 1px solid var(--light-grey);\n    border-radius: 0px 50px 50px 0px;\n    border-left: transparent;\n\n    img {\n        height: 24px;\n        width: 24px;\n    }\n}\n\nmain {  \n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;   \n    gap: 40px;\n    padding: 40px;     \n} \n\n.today-info-card {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 3fr 1fr;\n    justify-self: center;\n    width: 540px;\n    height: 400px;  \n    border: 1px solid var(--light-grey);\n    border-radius: 16px;\n    padding: 20px;    \n    color: white;\n    background-color: var(--half-transparent);    \n }\n\n img {   \n    width: 124px;            \n }\n\n .today-weather-main-info {\n    display: grid;\n    grid-template-rows: auto 100px 36px 1fr;\n    justify-items: center;\n    align-items: center;\n }\n\n .today-weather-extra-info {\n    display: grid;\n    grid-template-rows: 40px 1fr;\n    justify-items: end;     \n }\n\n .today-weather-extra-info > div:first-of-type {\n    img {\n        width: 20px;\n        justify-self: end; \n        margin-right: 8px;\n        opacity: 0.6;      \n    }\n\n    .date-wrap,\n    .time-wrap {\n        display: grid;\n        grid-template-columns: 1fr 1fr;\n        align-items: center;         \n    }\n }\n\n .today-weather-extra-info > div:nth-child(2) {\n    display: grid; \n    justify-self: center; \n    align-self:center;\n    justify-items: center;\n    \n    .humidity-wrap, \n    .wind-wrap {\n        display: grid;\n        grid-template-columns: 1fr 1fr;\n        align-items: center;       \n    }\n\n    img {\n        width: 48px;\n        justify-self: end;\n    }\n    \n    .humidity, \n    .wind {\n        font-size: 20px;\n        font-weight: 700;\n    }\n}\n\n .location-name {\n    font-size: 40px;\n    font-weight: bold;\n }\n \n .today-temperature {\n    font-size: 40px;\n    font-weight: bold;\n }\n\n .today-conditions {\n    font-size: 20px;\n }\n\n .week-weather-info-container {\n    display: grid;\n    color: white;   \n    max-width: 540px;\n }\n\n .week-day-weather-row {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr 1fr;\n    gap: 20px;\n    border-top: 1px solid var(--light-grey);\n    align-items: center;\n    justify-items: center;\n    \n    .week-day-name {\n        justify-self: start;\n        text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;\n        font-size: 20px;\n        font-weight: 600;\n        color: rgb(247, 185, 135);\n    }\n\n    .week-day-temperature,\n    .week-night-temperature {\n        font-size: 20px;\n        font-weight: 600;        \n    }\n\n    .week-night-temperature {\n        font-weight: 400;\n        opacity: 0.7;\n    }\n } \n\n .hourly-weather-info-container {\n    position: relative;\n    display: grid;\n    grid-column: 1 / 3;\n    padding: 0 32px;    \n }\n\n .hourly-weather-column {\n    display: grid;\n    justify-items: center;\n    align-items: center;\n    width: 36px;\n    gap: 4px;\n }\n\n .slider-wrap {    \n    position: relative;\n    overflow: hidden;\n    width: 432px;\n    justify-self: center; \n    border-top: 1px solid var(--light-grey); \n    padding-top: 8px;  \n }\n\n .slider-content {\n    display: grid;\n    grid-auto-flow: column;\n    position: absolute;           \n }\n\n .nav-container {\n    position: absolute;   \n    width: 100%;\n    height: 100%;   \n    display: flex;\n    justify-content: space-between;\n    align-items: center;    \n }\n\n#button-previous {\n    background: url(./images/chevron-left.svg) no-repeat;\n    background-position: 55% 50%;     \n}\n\n#button-next {\n    background: url(./images/chevron-right.svg) no-repeat; \n    background-position: 45% 50%;    \n}\n\n#button-previous,\n#button-next {\n    cursor: pointer;\n    border: none;      \n    border-radius: 50%;\n    width: 18px;\n    height: 18px;    \n    background-size: 36px;\n    opacity: 40%;\n    \n    &:hover {\n        opacity: 80%;\n    }\n}\n\n.hourly-weather-image {\n    height: 28px;\n    width: 28px;\n}\n\n.hourly-weather-time {\n    opacity: 0.6;\n}\n\n.week-day-weather-image img {\n    display: grid;\n    height: 48px;\n    width: 48px;\n    align-self: center;\n}\n\n.switch {\n    position: relative;\n    display: inline-block;\n    width: 66px;\n    height: 40px;\n    border: 1px solid var(--light-grey);\n    border-radius: 50px;\n    background-color: var(--half-transparent);\n}  \n\n.switch input {\n    opacity: 0;\n    width: 0;\n    height: 0;\n}  \n\n.slider {\n    position: absolute;\n    cursor: pointer;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    -webkit-transition: .4s;\n    transition: .4s;\n}\n\n.slider:before {\n    position: absolute;    \n    height: 28px;\n    width: 28px;\n    left: 4px;\n    bottom: 4px;\n    content: \"°C\";\n    display: grid;\n    place-content: center;\n    color: #1e3c72;\n    font-weight: 900;\n    background-color: #dadfe7;\n    -webkit-transition: .4s;\n    transition: .4s;    \n}\n\ninput:checked + .slider:before {\n    content: '°F';    \n}  \n\ninput:checked + .slider:before {\n    -webkit-transform: translateX(26px);\n    -ms-transform: translateX(26px);\n    transform: translateX(26px);\n} \n\n.slider.round:before {\n    border-radius: 50%;\n}\n\n.active {\n    display: block;\n}\n\n.loader {    \n    position: absolute;\n    display: none;\n    bottom: -40px;\n    left: 50%;\n    transform: translate(-50%);\n    font-size: 8px;\n    width: 1em;\n    height: 1em;\n    border-radius: 50%;   \n    animation: spin 1.1s infinite ease;\n    transform: translateZ(0);    \n  \n    &.loader-active {\n        display: block;\n    }\n}\n\n  @keyframes spin {\n    0%,\n    100% {\n      box-shadow: 0em -2.6em 0em 0em #ffffff, 1.8em -1.8em 0 0em rgba(255,255,255, 0.2), 2.5em 0em 0 0em rgba(255,255,255, 0.2), 1.75em 1.75em 0 0em rgba(255,255,255, 0.2), 0em 2.5em 0 0em rgba(255,255,255, 0.2), -1.8em 1.8em 0 0em rgba(255,255,255, 0.2), -2.6em 0em 0 0em rgba(255,255,255, 0.5), -1.8em -1.8em 0 0em rgba(255,255,255, 0.7);\n    }\n    12.5% {\n      box-shadow: 0em -2.6em 0em 0em rgba(255,255,255, 0.7), 1.8em -1.8em 0 0em #ffffff, 2.5em 0em 0 0em rgba(255,255,255, 0.2), 1.75em 1.75em 0 0em rgba(255,255,255, 0.2), 0em 2.5em 0 0em rgba(255,255,255, 0.2), -1.8em 1.8em 0 0em rgba(255,255,255, 0.2), -2.6em 0em 0 0em rgba(255,255,255, 0.2), -1.8em -1.8em 0 0em rgba(255,255,255, 0.5);\n    }\n    25% {\n      box-shadow: 0em -2.6em 0em 0em rgba(255,255,255, 0.5), 1.8em -1.8em 0 0em rgba(255,255,255, 0.7), 2.5em 0em 0 0em #ffffff, 1.75em 1.75em 0 0em rgba(255,255,255, 0.2), 0em 2.5em 0 0em rgba(255,255,255, 0.2), -1.8em 1.8em 0 0em rgba(255,255,255, 0.2), -2.6em 0em 0 0em rgba(255,255,255, 0.2), -1.8em -1.8em 0 0em rgba(255,255,255, 0.2);\n    }\n    37.5% {\n      box-shadow: 0em -2.6em 0em 0em rgba(255,255,255, 0.2), 1.8em -1.8em 0 0em rgba(255,255,255, 0.5), 2.5em 0em 0 0em rgba(255,255,255, 0.7), 1.75em 1.75em 0 0em #ffffff, 0em 2.5em 0 0em rgba(255,255,255, 0.2), -1.8em 1.8em 0 0em rgba(255,255,255, 0.2), -2.6em 0em 0 0em rgba(255,255,255, 0.2), -1.8em -1.8em 0 0em rgba(255,255,255, 0.2);\n    }\n    50% {\n      box-shadow: 0em -2.6em 0em 0em rgba(255,255,255, 0.2), 1.8em -1.8em 0 0em rgba(255,255,255, 0.2), 2.5em 0em 0 0em rgba(255,255,255, 0.5), 1.75em 1.75em 0 0em rgba(255,255,255, 0.7), 0em 2.5em 0 0em #ffffff, -1.8em 1.8em 0 0em rgba(255,255,255, 0.2), -2.6em 0em 0 0em rgba(255,255,255, 0.2), -1.8em -1.8em 0 0em rgba(255,255,255, 0.2);\n    }\n    62.5% {\n      box-shadow: 0em -2.6em 0em 0em rgba(255,255,255, 0.2), 1.8em -1.8em 0 0em rgba(255,255,255, 0.2), 2.5em 0em 0 0em rgba(255,255,255, 0.2), 1.75em 1.75em 0 0em rgba(255,255,255, 0.5), 0em 2.5em 0 0em rgba(255,255,255, 0.7), -1.8em 1.8em 0 0em #ffffff, -2.6em 0em 0 0em rgba(255,255,255, 0.2), -1.8em -1.8em 0 0em rgba(255,255,255, 0.2);\n    }\n    75% {\n      box-shadow: 0em -2.6em 0em 0em rgba(255,255,255, 0.2), 1.8em -1.8em 0 0em rgba(255,255,255, 0.2), 2.5em 0em 0 0em rgba(255,255,255, 0.2), 1.75em 1.75em 0 0em rgba(255,255,255, 0.2), 0em 2.5em 0 0em rgba(255,255,255, 0.5), -1.8em 1.8em 0 0em rgba(255,255,255, 0.7), -2.6em 0em 0 0em #ffffff, -1.8em -1.8em 0 0em rgba(255,255,255, 0.2);\n    }\n    87.5% {\n      box-shadow: 0em -2.6em 0em 0em rgba(255,255,255, 0.2), 1.8em -1.8em 0 0em rgba(255,255,255, 0.2), 2.5em 0em 0 0em rgba(255,255,255, 0.2), 1.75em 1.75em 0 0em rgba(255,255,255, 0.2), 0em 2.5em 0 0em rgba(255,255,255, 0.2), -1.8em 1.8em 0 0em rgba(255,255,255, 0.5), -2.6em 0em 0 0em rgba(255,255,255, 0.7), -1.8em -1.8em 0 0em #ffffff;\n    }\n  }\n\n  footer {\n    margin-top: auto;    \n    text-align: center;\n    width: 100%;\n    padding-bottom: 16px;\n    color: rgb(204, 202, 202);\n\n    a {\n        color: rgb(120, 179, 247);\n    }\n  }\n\n\n\n\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLHlIQUF5QztBQUNyRiw0Q0FBNEMsK0hBQTRDO0FBQ3hGLDRDQUE0QyxpSUFBNkM7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRiwrR0FBK0csSUFBSSxJQUFJLGtCQUFrQjtBQUN6SSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLG1DQUFtQztBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0IsbUNBQW1DO0FBQ3pEO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0IsbUNBQW1DO0FBQ3pEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQSxPQUFPLGdGQUFnRixZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLE9BQU8sYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFdBQVcsS0FBSyxVQUFVLE1BQU0sTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsY0FBYyxNQUFNLFVBQVUsVUFBVSxLQUFLLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsTUFBTSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsY0FBYyxPQUFPLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxNQUFNLFVBQVUsWUFBWSxNQUFNLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxjQUFjLE1BQU0sWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sTUFBTSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sTUFBTSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxZQUFZLEtBQUssVUFBVSxNQUFNLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFh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QUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSSwrREFBVTtBQUNkLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdFQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvZ2V0V2VhdGhlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL3VpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL3dhbGxwYXBlci5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9jaGV2cm9uLWxlZnQuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvY2hldnJvbi1yaWdodC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU51bml0bzp3Z2h0QDMwMDs0MDA7NjAwOzcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgICAtLWxpZ2h0LWdyZXk6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjIpO1xuICAgIC0taGFsZi10cmFuc3BhcmVudDogcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG4qIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xufVxuXG5odG1sLCBib2R5IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDsgXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjQpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmdiYSgwLCAwLCAwLCAwLjQpKSxcbiAgICAgICAgICAgICAgICAgICAgICB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgICAgIFxuICAgIGZvbnQtZmFtaWx5OiAnTnVuaXRvJywgc2Fucy1zZXJpZjsgICBcbn1cblxuLnRvcC1uYXYgeyAgIFxuICAgIGRpc3BsYXk6IGdyaWQ7ICAgIFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMzYwcHggMWZyOyBcbiAgICBwYWRkaW5nOiA0MHB4OyAgXG59XG5cbi50b3AtbmF2IGZvcm0ge1xuICAgIGp1c3RpZnktc2VsZjogY2VudGVyOyAgICBcbn1cblxuLnNlYXJjaC1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIGF1dG87ICBcbn1cblxuLmVycm9yLW1lc3NhZ2Uge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIGJvdHRvbTogLTI0cHg7XG4gICAgbGVmdDogMjBweDtcbiAgICBjb2xvcjogcmdiKDIxNCwgMjE0LCAzMCk7ICAgXG59XG5cbi5zZWFyY2gtaW5wdXQge1xuICAgIGhlaWdodDogNDBweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTk5LCAxMDksIDEwOSwgMC4yKTtcbiAgICBib3JkZXItcmlnaHQ6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHggMHB4IDBweCA1MHB4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oYWxmLXRyYW5zcGFyZW50KTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBcbiAgICAmLnNlYXJjaC1pbnB1dDo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbiB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfSBcbn1cblxuLnNlYXJjaC1pbnB1dDo6cGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiByZ2IoMTc3LCAxNzcsIDE3OSk7XG59XG5cbi5zZWFyY2gtc3VibWl0LWJ1dHRvbiB7XG4gICAgY3Vyc29yOiBwb2ludGVyOyAgIFxuICAgIGhlaWdodDogNDBweDtcbiAgICB3aWR0aDogNDBweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGFsZi10cmFuc3BhcmVudCk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbGlnaHQtZ3JleSk7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDUwcHggNTBweCAwcHg7XG4gICAgYm9yZGVyLWxlZnQ6IHRyYW5zcGFyZW50O1xuXG4gICAgaW1nIHtcbiAgICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgICB3aWR0aDogMjRweDtcbiAgICB9XG59XG5cbm1haW4geyAgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICAgXG4gICAgZ2FwOiA0MHB4O1xuICAgIHBhZGRpbmc6IDQwcHg7ICAgICBcbn0gXG5cbi50b2RheS1pbmZvLWNhcmQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogM2ZyIDFmcjtcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgICB3aWR0aDogNTQwcHg7XG4gICAgaGVpZ2h0OiA0MDBweDsgIFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWxpZ2h0LWdyZXkpO1xuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gICAgcGFkZGluZzogMjBweDsgICAgXG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhhbGYtdHJhbnNwYXJlbnQpOyAgICBcbiB9XG5cbiBpbWcgeyAgIFxuICAgIHdpZHRoOiAxMjRweDsgICAgICAgICAgICBcbiB9XG5cbiAudG9kYXktd2VhdGhlci1tYWluLWluZm8ge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDEwMHB4IDM2cHggMWZyO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuIH1cblxuIC50b2RheS13ZWF0aGVyLWV4dHJhLWluZm8ge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA0MHB4IDFmcjtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBlbmQ7ICAgICBcbiB9XG5cbiAudG9kYXktd2VhdGhlci1leHRyYS1pbmZvID4gZGl2OmZpcnN0LW9mLXR5cGUge1xuICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICBqdXN0aWZ5LXNlbGY6IGVuZDsgXG4gICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgICAgICBvcGFjaXR5OiAwLjY7ICAgICAgXG4gICAgfVxuXG4gICAgLmRhdGUtd3JhcCxcbiAgICAudGltZS13cmFwIHtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOyAgICAgICAgIFxuICAgIH1cbiB9XG5cbiAudG9kYXktd2VhdGhlci1leHRyYS1pbmZvID4gZGl2Om50aC1jaGlsZCgyKSB7XG4gICAgZGlzcGxheTogZ3JpZDsgXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7IFxuICAgIGFsaWduLXNlbGY6Y2VudGVyO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBcbiAgICAuaHVtaWRpdHktd3JhcCwgXG4gICAgLndpbmQtd3JhcCB7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgICAgICAgXG4gICAgfVxuXG4gICAgaW1nIHtcbiAgICAgICAgd2lkdGg6IDQ4cHg7XG4gICAgICAgIGp1c3RpZnktc2VsZjogZW5kO1xuICAgIH1cbiAgICBcbiAgICAuaHVtaWRpdHksIFxuICAgIC53aW5kIHtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgIH1cbn1cblxuIC5sb2NhdGlvbi1uYW1lIHtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gfVxuIFxuIC50b2RheS10ZW1wZXJhdHVyZSB7XG4gICAgZm9udC1zaXplOiA0MHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuIH1cblxuIC50b2RheS1jb25kaXRpb25zIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gfVxuXG4gLndlZWstd2VhdGhlci1pbmZvLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBjb2xvcjogd2hpdGU7ICAgXG4gICAgbWF4LXdpZHRoOiA1NDBweDtcbiB9XG5cbiAud2Vlay1kYXktd2VhdGhlci1yb3cge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnI7XG4gICAgZ2FwOiAyMHB4O1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1saWdodC1ncmV5KTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBcbiAgICAud2Vlay1kYXktbmFtZSB7XG4gICAgICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XG4gICAgICAgIHRleHQtc2hhZG93OiAtMXB4IC0xcHggMCAjMDAwLCAxcHggLTFweCAwICMwMDAsIC0xcHggMXB4IDAgIzAwMCwgMXB4IDFweCAwICMwMDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgY29sb3I6IHJnYigyNDcsIDE4NSwgMTM1KTtcbiAgICB9XG5cbiAgICAud2Vlay1kYXktdGVtcGVyYXR1cmUsXG4gICAgLndlZWstbmlnaHQtdGVtcGVyYXR1cmUge1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7ICAgICAgICBcbiAgICB9XG5cbiAgICAud2Vlay1uaWdodC10ZW1wZXJhdHVyZSB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIG9wYWNpdHk6IDAuNztcbiAgICB9XG4gfSBcblxuIC5ob3VybHktd2VhdGhlci1pbmZvLWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xuICAgIHBhZGRpbmc6IDAgMzJweDsgICAgXG4gfVxuXG4gLmhvdXJseS13ZWF0aGVyLWNvbHVtbiB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogMzZweDtcbiAgICBnYXA6IDRweDtcbiB9XG5cbiAuc2xpZGVyLXdyYXAgeyAgICBcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aWR0aDogNDMycHg7XG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7IFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1saWdodC1ncmV5KTsgXG4gICAgcGFkZGluZy10b3A6IDhweDsgIFxuIH1cblxuIC5zbGlkZXItY29udGVudCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgICAgICAgICAgIFxuIH1cblxuIC5uYXYtY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7ICAgXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlOyAgIFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICAgIFxuIH1cblxuI2J1dHRvbi1wcmV2aW91cyB7XG4gICAgYmFja2dyb3VuZDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pIG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1NSUgNTAlOyAgICAgXG59XG5cbiNidXR0b24tbmV4dCB7XG4gICAgYmFja2dyb3VuZDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pIG5vLXJlcGVhdDsgXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNDUlIDUwJTsgICAgXG59XG5cbiNidXR0b24tcHJldmlvdXMsXG4jYnV0dG9uLW5leHQge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3JkZXI6IG5vbmU7ICAgICAgXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHdpZHRoOiAxOHB4O1xuICAgIGhlaWdodDogMThweDsgICAgXG4gICAgYmFja2dyb3VuZC1zaXplOiAzNnB4O1xuICAgIG9wYWNpdHk6IDQwJTtcbiAgICBcbiAgICAmOmhvdmVyIHtcbiAgICAgICAgb3BhY2l0eTogODAlO1xuICAgIH1cbn1cblxuLmhvdXJseS13ZWF0aGVyLWltYWdlIHtcbiAgICBoZWlnaHQ6IDI4cHg7XG4gICAgd2lkdGg6IDI4cHg7XG59XG5cbi5ob3VybHktd2VhdGhlci10aW1lIHtcbiAgICBvcGFjaXR5OiAwLjY7XG59XG5cbi53ZWVrLWRheS13ZWF0aGVyLWltYWdlIGltZyB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgd2lkdGg6IDQ4cHg7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG4uc3dpdGNoIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiA2NnB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1saWdodC1ncmV5KTtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhhbGYtdHJhbnNwYXJlbnQpO1xufSAgXG5cbi5zd2l0Y2ggaW5wdXQge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAwO1xufSAgXG5cbi5zbGlkZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xuICAgIHRyYW5zaXRpb246IC40cztcbn1cblxuLnNsaWRlcjpiZWZvcmUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgICAgXG4gICAgaGVpZ2h0OiAyOHB4O1xuICAgIHdpZHRoOiAyOHB4O1xuICAgIGxlZnQ6IDRweDtcbiAgICBib3R0b206IDRweDtcbiAgICBjb250ZW50OiBcIsKwQ1wiO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgcGxhY2UtY29udGVudDogY2VudGVyO1xuICAgIGNvbG9yOiAjMWUzYzcyO1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RhZGZlNztcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC40cztcbiAgICB0cmFuc2l0aW9uOiAuNHM7ICAgIFxufVxuXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICfCsEYnOyAgICBcbn0gIFxuXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xufSBcblxuLnNsaWRlci5yb3VuZDpiZWZvcmUge1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmFjdGl2ZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5sb2FkZXIgeyAgICBcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBib3R0b206IC00MHB4O1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlKTtcbiAgICBmb250LXNpemU6IDhweDtcbiAgICB3aWR0aDogMWVtO1xuICAgIGhlaWdodDogMWVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTsgICBcbiAgICBhbmltYXRpb246IHNwaW4gMS4xcyBpbmZpbml0ZSBlYXNlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTsgICAgXG4gIFxuICAgICYubG9hZGVyLWFjdGl2ZSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbn1cblxuICBAa2V5ZnJhbWVzIHNwaW4ge1xuICAgIDAlLFxuICAgIDEwMCUge1xuICAgICAgYm94LXNoYWRvdzogMGVtIC0yLjZlbSAwZW0gMGVtICNmZmZmZmYsIDEuOGVtIC0xLjhlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjIpLCAyLjVlbSAwZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC4yKSwgMS43NWVtIDEuNzVlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjIpLCAwZW0gMi41ZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC4yKSwgLTEuOGVtIDEuOGVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuMiksIC0yLjZlbSAwZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC41KSwgLTEuOGVtIC0xLjhlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjcpO1xuICAgIH1cbiAgICAxMi41JSB7XG4gICAgICBib3gtc2hhZG93OiAwZW0gLTIuNmVtIDBlbSAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC43KSwgMS44ZW0gLTEuOGVtIDAgMGVtICNmZmZmZmYsIDIuNWVtIDBlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjIpLCAxLjc1ZW0gMS43NWVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuMiksIDBlbSAyLjVlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjIpLCAtMS44ZW0gMS44ZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC4yKSwgLTIuNmVtIDBlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjIpLCAtMS44ZW0gLTEuOGVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuNSk7XG4gICAgfVxuICAgIDI1JSB7XG4gICAgICBib3gtc2hhZG93OiAwZW0gLTIuNmVtIDBlbSAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC41KSwgMS44ZW0gLTEuOGVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuNyksIDIuNWVtIDBlbSAwIDBlbSAjZmZmZmZmLCAxLjc1ZW0gMS43NWVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuMiksIDBlbSAyLjVlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjIpLCAtMS44ZW0gMS44ZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC4yKSwgLTIuNmVtIDBlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjIpLCAtMS44ZW0gLTEuOGVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuMik7XG4gICAgfVxuICAgIDM3LjUlIHtcbiAgICAgIGJveC1zaGFkb3c6IDBlbSAtMi42ZW0gMGVtIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjIpLCAxLjhlbSAtMS44ZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC41KSwgMi41ZW0gMGVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuNyksIDEuNzVlbSAxLjc1ZW0gMCAwZW0gI2ZmZmZmZiwgMGVtIDIuNWVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuMiksIC0xLjhlbSAxLjhlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjIpLCAtMi42ZW0gMGVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuMiksIC0xLjhlbSAtMS44ZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC4yKTtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgIGJveC1zaGFkb3c6IDBlbSAtMi42ZW0gMGVtIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjIpLCAxLjhlbSAtMS44ZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC4yKSwgMi41ZW0gMGVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuNSksIDEuNzVlbSAxLjc1ZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC43KSwgMGVtIDIuNWVtIDAgMGVtICNmZmZmZmYsIC0xLjhlbSAxLjhlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjIpLCAtMi42ZW0gMGVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuMiksIC0xLjhlbSAtMS44ZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC4yKTtcbiAgICB9XG4gICAgNjIuNSUge1xuICAgICAgYm94LXNoYWRvdzogMGVtIC0yLjZlbSAwZW0gMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuMiksIDEuOGVtIC0xLjhlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjIpLCAyLjVlbSAwZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC4yKSwgMS43NWVtIDEuNzVlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjUpLCAwZW0gMi41ZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC43KSwgLTEuOGVtIDEuOGVtIDAgMGVtICNmZmZmZmYsIC0yLjZlbSAwZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC4yKSwgLTEuOGVtIC0xLjhlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjIpO1xuICAgIH1cbiAgICA3NSUge1xuICAgICAgYm94LXNoYWRvdzogMGVtIC0yLjZlbSAwZW0gMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuMiksIDEuOGVtIC0xLjhlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjIpLCAyLjVlbSAwZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC4yKSwgMS43NWVtIDEuNzVlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjIpLCAwZW0gMi41ZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC41KSwgLTEuOGVtIDEuOGVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuNyksIC0yLjZlbSAwZW0gMCAwZW0gI2ZmZmZmZiwgLTEuOGVtIC0xLjhlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjIpO1xuICAgIH1cbiAgICA4Ny41JSB7XG4gICAgICBib3gtc2hhZG93OiAwZW0gLTIuNmVtIDBlbSAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC4yKSwgMS44ZW0gLTEuOGVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuMiksIDIuNWVtIDBlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjIpLCAxLjc1ZW0gMS43NWVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuMiksIDBlbSAyLjVlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjIpLCAtMS44ZW0gMS44ZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC41KSwgLTIuNmVtIDBlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjcpLCAtMS44ZW0gLTEuOGVtIDAgMGVtICNmZmZmZmY7XG4gICAgfVxuICB9XG5cbiAgZm9vdGVyIHtcbiAgICBtYXJnaW4tdG9wOiBhdXRvOyAgICBcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZy1ib3R0b206IDE2cHg7XG4gICAgY29sb3I6IHJnYigyMDQsIDIwMiwgMjAyKTtcblxuICAgIGEge1xuICAgICAgICBjb2xvcjogcmdiKDEyMCwgMTc5LCAyNDcpO1xuICAgIH1cbiAgfVxuXG5cblxuXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7SUFDSSxxQ0FBcUM7SUFDckMsc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FB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QUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsYUFBYTtJQUNiLFNBQVM7SUFDVCwwQkFBMEI7SUFDMUIsY0FBYztJQUNkLFVBQVU7SUFDVixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGtDQUFrQztJQUNsQyx3QkFBd0I7O0lBRXhCO1FBQ0ksY0FBYztJQUNsQjtBQUNKOztFQUVFO0lBQ0U7O01BRUUsNlVBQTZVO0lBQy9VO0lBQ0E7TUFDRSw2VUFBNlU7SUFDL1U7SUFDQTtNQUNFLDZVQUE2VTtJQUMvVTtJQUNBO01BQ0UsNlVBQTZVO0lBQy9VO0lBQ0E7TUFDRSw2VUFBNlU7SUFDL1U7SUFDQTtNQUNFLDZVQUE2VTtJQUMvVTtJQUNBO01BQ0UsNlVBQTZVO0lBQy9VO0lBQ0E7TUFDRSw2VUFBNlU7SUFDL1U7RUFDRjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLG9CQUFvQjtJQUNwQix5QkFBeUI7O0lBRXpCO1FBQ0kseUJBQXlCO0lBQzdCO0VBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TnVuaXRvOndnaHRAMzAwOzQwMDs2MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbjpyb290IHtcXG4gICAgLS1saWdodC1ncmV5OiByZ2JhKDI1NSwgMjU1LCAyNTUsIC4yKTtcXG4gICAgLS1oYWxmLXRyYW5zcGFyZW50OiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxufVxcblxcbioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbmh0bWwsIGJvZHkge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7IFxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjQpLCBcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJnYmEoMCwgMCwgMCwgMC40KSksXFxuICAgICAgICAgICAgICAgICAgICAgIHVybCgnLi9pbWFnZXMvd2FsbHBhcGVyLmpwZycpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7ICAgICBcXG4gICAgZm9udC1mYW1pbHk6ICdOdW5pdG8nLCBzYW5zLXNlcmlmOyAgIFxcbn1cXG5cXG4udG9wLW5hdiB7ICAgXFxuICAgIGRpc3BsYXk6IGdyaWQ7ICAgIFxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzNjBweCAxZnI7IFxcbiAgICBwYWRkaW5nOiA0MHB4OyAgXFxufVxcblxcbi50b3AtbmF2IGZvcm0ge1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjsgICAgXFxufVxcblxcbi5zZWFyY2gtY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBhdXRvOyAgXFxufVxcblxcbi5lcnJvci1tZXNzYWdlIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBib3R0b206IC0yNHB4O1xcbiAgICBsZWZ0OiAyMHB4O1xcbiAgICBjb2xvcjogcmdiKDIxNCwgMjE0LCAzMCk7ICAgXFxufVxcblxcbi5zZWFyY2gtaW5wdXQge1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTk5LCAxMDksIDEwOSwgMC4yKTtcXG4gICAgYm9yZGVyLXJpZ2h0OiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTBweCAwcHggMHB4IDUwcHg7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGFsZi10cmFuc3BhcmVudCk7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgXFxuICAgICYuc2VhcmNoLWlucHV0Ojotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uIHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH0gXFxufVxcblxcbi5zZWFyY2gtaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXG4gICAgY29sb3I6IHJnYigxNzcsIDE3NywgMTc5KTtcXG59XFxuXFxuLnNlYXJjaC1zdWJtaXQtYnV0dG9uIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyOyAgIFxcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIHdpZHRoOiA0MHB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhhbGYtdHJhbnNwYXJlbnQpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1saWdodC1ncmV5KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDUwcHggNTBweCAwcHg7XFxuICAgIGJvcmRlci1sZWZ0OiB0cmFuc3BhcmVudDtcXG5cXG4gICAgaW1nIHtcXG4gICAgICAgIGhlaWdodDogMjRweDtcXG4gICAgICAgIHdpZHRoOiAyNHB4O1xcbiAgICB9XFxufVxcblxcbm1haW4geyAgXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICAgXFxuICAgIGdhcDogNDBweDtcXG4gICAgcGFkZGluZzogNDBweDsgICAgIFxcbn0gXFxuXFxuLnRvZGF5LWluZm8tY2FyZCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzZnIgMWZyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDU0MHB4O1xcbiAgICBoZWlnaHQ6IDQwMHB4OyAgXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWxpZ2h0LWdyZXkpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xcbiAgICBwYWRkaW5nOiAyMHB4OyAgICBcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oYWxmLXRyYW5zcGFyZW50KTsgICAgXFxuIH1cXG5cXG4gaW1nIHsgICBcXG4gICAgd2lkdGg6IDEyNHB4OyAgICAgICAgICAgIFxcbiB9XFxuXFxuIC50b2RheS13ZWF0aGVyLW1haW4taW5mbyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxMDBweCAzNnB4IDFmcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiB9XFxuXFxuIC50b2RheS13ZWF0aGVyLWV4dHJhLWluZm8ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDQwcHggMWZyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBlbmQ7ICAgICBcXG4gfVxcblxcbiAudG9kYXktd2VhdGhlci1leHRyYS1pbmZvID4gZGl2OmZpcnN0LW9mLXR5cGUge1xcbiAgICBpbWcge1xcbiAgICAgICAgd2lkdGg6IDIwcHg7XFxuICAgICAgICBqdXN0aWZ5LXNlbGY6IGVuZDsgXFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcXG4gICAgICAgIG9wYWNpdHk6IDAuNjsgICAgICBcXG4gICAgfVxcblxcbiAgICAuZGF0ZS13cmFwLFxcbiAgICAudGltZS13cmFwIHtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOyAgICAgICAgIFxcbiAgICB9XFxuIH1cXG5cXG4gLnRvZGF5LXdlYXRoZXItZXh0cmEtaW5mbyA+IGRpdjpudGgtY2hpbGQoMikge1xcbiAgICBkaXNwbGF5OiBncmlkOyBcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7IFxcbiAgICBhbGlnbi1zZWxmOmNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBcXG4gICAgLmh1bWlkaXR5LXdyYXAsIFxcbiAgICAud2luZC13cmFwIHtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOyAgICAgICBcXG4gICAgfVxcblxcbiAgICBpbWcge1xcbiAgICAgICAgd2lkdGg6IDQ4cHg7XFxuICAgICAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gICAgfVxcbiAgICBcXG4gICAgLmh1bWlkaXR5LCBcXG4gICAgLndpbmQge1xcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgfVxcbn1cXG5cXG4gLmxvY2F0aW9uLW5hbWUge1xcbiAgICBmb250LXNpemU6IDQwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiB9XFxuIFxcbiAudG9kYXktdGVtcGVyYXR1cmUge1xcbiAgICBmb250LXNpemU6IDQwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiB9XFxuXFxuIC50b2RheS1jb25kaXRpb25zIHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiB9XFxuXFxuIC53ZWVrLXdlYXRoZXItaW5mby1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBjb2xvcjogd2hpdGU7ICAgXFxuICAgIG1heC13aWR0aDogNTQwcHg7XFxuIH1cXG5cXG4gLndlZWstZGF5LXdlYXRoZXItcm93IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnI7XFxuICAgIGdhcDogMjBweDtcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWxpZ2h0LWdyZXkpO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIFxcbiAgICAud2Vlay1kYXktbmFtZSB7XFxuICAgICAgICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcbiAgICAgICAgdGV4dC1zaGFkb3c6IC0xcHggLTFweCAwICMwMDAsIDFweCAtMXB4IDAgIzAwMCwgLTFweCAxcHggMCAjMDAwLCAxcHggMXB4IDAgIzAwMDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgICAgICBjb2xvcjogcmdiKDI0NywgMTg1LCAxMzUpO1xcbiAgICB9XFxuXFxuICAgIC53ZWVrLWRheS10ZW1wZXJhdHVyZSxcXG4gICAgLndlZWstbmlnaHQtdGVtcGVyYXR1cmUge1xcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDsgICAgICAgIFxcbiAgICB9XFxuXFxuICAgIC53ZWVrLW5pZ2h0LXRlbXBlcmF0dXJlIHtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgICAgICBvcGFjaXR5OiAwLjc7XFxuICAgIH1cXG4gfSBcXG5cXG4gLmhvdXJseS13ZWF0aGVyLWluZm8tY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxuICAgIHBhZGRpbmc6IDAgMzJweDsgICAgXFxuIH1cXG5cXG4gLmhvdXJseS13ZWF0aGVyLWNvbHVtbiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDM2cHg7XFxuICAgIGdhcDogNHB4O1xcbiB9XFxuXFxuIC5zbGlkZXItd3JhcCB7ICAgIFxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHdpZHRoOiA0MzJweDtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7IFxcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tbGlnaHQtZ3JleSk7IFxcbiAgICBwYWRkaW5nLXRvcDogOHB4OyAgXFxuIH1cXG5cXG4gLnNsaWRlci1jb250ZW50IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlOyAgICAgICAgICAgXFxuIH1cXG5cXG4gLm5hdi1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7ICAgXFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7ICAgXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgICAgXFxuIH1cXG5cXG4jYnV0dG9uLXByZXZpb3VzIHtcXG4gICAgYmFja2dyb3VuZDogdXJsKC4vaW1hZ2VzL2NoZXZyb24tbGVmdC5zdmcpIG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTUlIDUwJTsgICAgIFxcbn1cXG5cXG4jYnV0dG9uLW5leHQge1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi9pbWFnZXMvY2hldnJvbi1yaWdodC5zdmcpIG5vLXJlcGVhdDsgXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDQ1JSA1MCU7ICAgIFxcbn1cXG5cXG4jYnV0dG9uLXByZXZpb3VzLFxcbiNidXR0b24tbmV4dCB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyOiBub25lOyAgICAgIFxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIHdpZHRoOiAxOHB4O1xcbiAgICBoZWlnaHQ6IDE4cHg7ICAgIFxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDM2cHg7XFxuICAgIG9wYWNpdHk6IDQwJTtcXG4gICAgXFxuICAgICY6aG92ZXIge1xcbiAgICAgICAgb3BhY2l0eTogODAlO1xcbiAgICB9XFxufVxcblxcbi5ob3VybHktd2VhdGhlci1pbWFnZSB7XFxuICAgIGhlaWdodDogMjhweDtcXG4gICAgd2lkdGg6IDI4cHg7XFxufVxcblxcbi5ob3VybHktd2VhdGhlci10aW1lIHtcXG4gICAgb3BhY2l0eTogMC42O1xcbn1cXG5cXG4ud2Vlay1kYXktd2VhdGhlci1pbWFnZSBpbWcge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBoZWlnaHQ6IDQ4cHg7XFxuICAgIHdpZHRoOiA0OHB4O1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5zd2l0Y2gge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgd2lkdGg6IDY2cHg7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbGlnaHQtZ3JleSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhhbGYtdHJhbnNwYXJlbnQpO1xcbn0gIFxcblxcbi5zd2l0Y2ggaW5wdXQge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB3aWR0aDogMDtcXG4gICAgaGVpZ2h0OiAwO1xcbn0gIFxcblxcbi5zbGlkZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC40cztcXG4gICAgdHJhbnNpdGlvbjogLjRzO1xcbn1cXG5cXG4uc2xpZGVyOmJlZm9yZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgICAgXFxuICAgIGhlaWdodDogMjhweDtcXG4gICAgd2lkdGg6IDI4cHg7XFxuICAgIGxlZnQ6IDRweDtcXG4gICAgYm90dG9tOiA0cHg7XFxuICAgIGNvbnRlbnQ6IFxcXCLCsENcXFwiO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGNvbG9yOiAjMWUzYzcyO1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGFkZmU3O1xcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC40cztcXG4gICAgdHJhbnNpdGlvbjogLjRzOyAgICBcXG59XFxuXFxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcXG4gICAgY29udGVudDogJ8KwRic7ICAgIFxcbn0gIFxcblxcbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XFxufSBcXG5cXG4uc2xpZGVyLnJvdW5kOmJlZm9yZSB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLmFjdGl2ZSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4ubG9hZGVyIHsgICAgXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgYm90dG9tOiAtNDBweDtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlKTtcXG4gICAgZm9udC1zaXplOiA4cHg7XFxuICAgIHdpZHRoOiAxZW07XFxuICAgIGhlaWdodDogMWVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7ICAgXFxuICAgIGFuaW1hdGlvbjogc3BpbiAxLjFzIGluZmluaXRlIGVhc2U7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTsgICAgXFxuICBcXG4gICAgJi5sb2FkZXItYWN0aXZlIHtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB9XFxufVxcblxcbiAgQGtleWZyYW1lcyBzcGluIHtcXG4gICAgMCUsXFxuICAgIDEwMCUge1xcbiAgICAgIGJveC1zaGFkb3c6IDBlbSAtMi42ZW0gMGVtIDBlbSAjZmZmZmZmLCAxLjhlbSAtMS44ZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC4yKSwgMi41ZW0gMGVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuMiksIDEuNzVlbSAxLjc1ZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC4yKSwgMGVtIDIuNWVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuMiksIC0xLjhlbSAxLjhlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjIpLCAtMi42ZW0gMGVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuNSksIC0xLjhlbSAtMS44ZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC43KTtcXG4gICAgfVxcbiAgICAxMi41JSB7XFxuICAgICAgYm94LXNoYWRvdzogMGVtIC0yLjZlbSAwZW0gMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuNyksIDEuOGVtIC0xLjhlbSAwIDBlbSAjZmZmZmZmLCAyLjVlbSAwZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC4yKSwgMS43NWVtIDEuNzVlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjIpLCAwZW0gMi41ZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC4yKSwgLTEuOGVtIDEuOGVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuMiksIC0yLjZlbSAwZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC4yKSwgLTEuOGVtIC0xLjhlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjUpO1xcbiAgICB9XFxuICAgIDI1JSB7XFxuICAgICAgYm94LXNoYWRvdzogMGVtIC0yLjZlbSAwZW0gMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuNSksIDEuOGVtIC0xLjhlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjcpLCAyLjVlbSAwZW0gMCAwZW0gI2ZmZmZmZiwgMS43NWVtIDEuNzVlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjIpLCAwZW0gMi41ZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC4yKSwgLTEuOGVtIDEuOGVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuMiksIC0yLjZlbSAwZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC4yKSwgLTEuOGVtIC0xLjhlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjIpO1xcbiAgICB9XFxuICAgIDM3LjUlIHtcXG4gICAgICBib3gtc2hhZG93OiAwZW0gLTIuNmVtIDBlbSAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC4yKSwgMS44ZW0gLTEuOGVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuNSksIDIuNWVtIDBlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjcpLCAxLjc1ZW0gMS43NWVtIDAgMGVtICNmZmZmZmYsIDBlbSAyLjVlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjIpLCAtMS44ZW0gMS44ZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC4yKSwgLTIuNmVtIDBlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjIpLCAtMS44ZW0gLTEuOGVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuMik7XFxuICAgIH1cXG4gICAgNTAlIHtcXG4gICAgICBib3gtc2hhZG93OiAwZW0gLTIuNmVtIDBlbSAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC4yKSwgMS44ZW0gLTEuOGVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuMiksIDIuNWVtIDBlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjUpLCAxLjc1ZW0gMS43NWVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuNyksIDBlbSAyLjVlbSAwIDBlbSAjZmZmZmZmLCAtMS44ZW0gMS44ZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC4yKSwgLTIuNmVtIDBlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjIpLCAtMS44ZW0gLTEuOGVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuMik7XFxuICAgIH1cXG4gICAgNjIuNSUge1xcbiAgICAgIGJveC1zaGFkb3c6IDBlbSAtMi42ZW0gMGVtIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjIpLCAxLjhlbSAtMS44ZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC4yKSwgMi41ZW0gMGVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuMiksIDEuNzVlbSAxLjc1ZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC41KSwgMGVtIDIuNWVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuNyksIC0xLjhlbSAxLjhlbSAwIDBlbSAjZmZmZmZmLCAtMi42ZW0gMGVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuMiksIC0xLjhlbSAtMS44ZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC4yKTtcXG4gICAgfVxcbiAgICA3NSUge1xcbiAgICAgIGJveC1zaGFkb3c6IDBlbSAtMi42ZW0gMGVtIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjIpLCAxLjhlbSAtMS44ZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC4yKSwgMi41ZW0gMGVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuMiksIDEuNzVlbSAxLjc1ZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC4yKSwgMGVtIDIuNWVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuNSksIC0xLjhlbSAxLjhlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjcpLCAtMi42ZW0gMGVtIDAgMGVtICNmZmZmZmYsIC0xLjhlbSAtMS44ZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC4yKTtcXG4gICAgfVxcbiAgICA4Ny41JSB7XFxuICAgICAgYm94LXNoYWRvdzogMGVtIC0yLjZlbSAwZW0gMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuMiksIDEuOGVtIC0xLjhlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjIpLCAyLjVlbSAwZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC4yKSwgMS43NWVtIDEuNzVlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjIpLCAwZW0gMi41ZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC4yKSwgLTEuOGVtIDEuOGVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuNSksIC0yLjZlbSAwZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC43KSwgLTEuOGVtIC0xLjhlbSAwIDBlbSAjZmZmZmZmO1xcbiAgICB9XFxuICB9XFxuXFxuICBmb290ZXIge1xcbiAgICBtYXJnaW4tdG9wOiBhdXRvOyAgICBcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZy1ib3R0b206IDE2cHg7XFxuICAgIGNvbG9yOiByZ2IoMjA0LCAyMDIsIDIwMik7XFxuXFxuICAgIGEge1xcbiAgICAgICAgY29sb3I6IHJnYigxMjAsIDE3OSwgMjQ3KTtcXG4gICAgfVxcbiAgfVxcblxcblxcblxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IHJlbmRlckRhaWx5V2VhdGhlciB9IGZyb20gJy4vdWknO1xuaW1wb3J0IHsgcmVuZGVyVG9kYXlXZWF0aGVySW5mb0NhcmQgfSBmcm9tIFwiLi91aVwiO1xuaW1wb3J0IHsgbG9hZGluZyB9IGZyb20gJy4vdWknO1xuXG5leHBvcnQgY29uc3QgZ2V0V2VhdGhlciA9IGFzeW5jIChsb2NhdGlvbikgPT4ge1xuICAgIGNvbnN0IHVuaXRzQ2hlY2tib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudW5pdHMtY2hlY2tib3gnKTtcbiAgICBjb25zdCB1bml0cyA9IHVuaXRzQ2hlY2tib3guY2hlY2tlZCA/ICd1cycgOiAnbWV0cmljJztcblxuICAgIGNvbnN0IGFwaUtleSA9ICdaRkVaOUZCNkxMWVpVWjlERkRVN0dKVE1EJztcbiAgICBjb25zdCB1cmwgPSBgaHR0cHM6Ly93ZWF0aGVyLnZpc3VhbGNyb3NzaW5nLmNvbS9WaXN1YWxDcm9zc2luZ1dlYlNlcnZpY2VzL3Jlc3Qvc2VydmljZXMvdGltZWxpbmUvJHtsb2NhdGlvbn0/dW5pdEdyb3VwPSR7dW5pdHN9JmtleT0ke2FwaUtleX1gOyAgICBcbiAgICBcbiAgICBsb2FkaW5nKCdzdGFydGVkJyk7XG5cbiAgICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7IG1vZGU6ICdjb3JzJ30pO1xuICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lcnJvci1tZXNzYWdlJyk7ICAgIFxuICAgIFxuICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgbG9hZGluZygnZmluaXNoZWQnKTtcblxuICAgICAgICBlcnJvck1lc3NhZ2UuaW5uZXJUZXh0ID0gXCJTb3JyeSwgbm8gbG9jYXRpb24gZm91bmRcIjtcbiAgICAgICAgZXJyb3JNZXNzYWdlLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGVycm9yTWVzc2FnZS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSwgMzAwMCk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGRhdGEgPSB3ZWF0aGVyRGF0YU1hcHBlcihhd2FpdCByZXNwb25zZS5qc29uKCkpO1xuICAgIFxuICAgIHJlbmRlclRvZGF5V2VhdGhlckluZm9DYXJkKGRhdGEpO1xuICAgIHJlbmRlckRhaWx5V2VhdGhlcihkYXRhKTsgICAgXG4gICAgbG9hZGluZygnZmluaXNoZWQnKTsgICAgXG5cbiAgICB9IGNhdGNoIChlcnJvcikgeyAgICAgICAgXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZldGNoIHdlYXRoZXIgQVBJIGlzIGZhaWxlZCcsIGVycm9yKTtcbiAgICB9O1xufVxuXG5mdW5jdGlvbiB3ZWF0aGVyRGF0YU1hcHBlcihkYXRhKSB7ICAgIFxuICAgIHJldHVybiB7XG4gICAgICAgIGxvY2F0aW9uOiBkYXRhLnJlc29sdmVkQWRkcmVzcy5zcGxpdChcIixcIilbMF0sXG4gICAgICAgIHRlbXBlcmF0dXJlOiBTdHJpbmcoZGF0YS5jdXJyZW50Q29uZGl0aW9ucy50ZW1wKS5zcGxpdChcIi5cIilbMF0sXG4gICAgICAgIGRhdGU6IG5ldyBEYXRlKCkudG9Mb2NhbGVEYXRlU3RyaW5nKCksICAgICAgICBcbiAgICAgICAgY29uZGl0aW9uczogZGF0YS5jdXJyZW50Q29uZGl0aW9ucy5jb25kaXRpb25zLFxuICAgICAgICBodW1pZGl0eTogU3RyaW5nKGRhdGEuY3VycmVudENvbmRpdGlvbnMuaHVtaWRpdHkpLnNwbGl0KFwiLlwiKVswXSxcbiAgICAgICAgd2luZFNwZWVkOiBTdHJpbmcoZGF0YS5jdXJyZW50Q29uZGl0aW9ucy53aW5kc3BlZWQpLnNwbGl0KFwiLlwiKVswXSxcbiAgICAgICAgaWNvbjogZGF0YS5jdXJyZW50Q29uZGl0aW9ucy5pY29uLFxuICAgICAgICBob3VybHlGb3JlY2FzdDogZGF0YS5kYXlzWzBdLmhvdXJzLm1hcChob3VyID0+ICh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZTogaG91ci5kYXRldGltZS5zbGljZSgwLCAyKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wZXJhdHVyZTogU3RyaW5nKGhvdXIudGVtcCkuc3BsaXQoXCIuXCIpWzBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246IGhvdXIuaWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgfSkpLFxuICAgICAgICB3ZWVrRm9yZWNhc3Q6IGRhdGEuZGF5cy5zbGljZSgxLCA4KS5tYXAoZGF5ID0+ICh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2Vla0RheTogbmV3IERhdGUoZGF5LmRhdGV0aW1lKS50b0xvY2FsZURhdGVTdHJpbmcoJ2VuLVVTJywge3dlZWtkYXk6ICdsb25nJ30pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heFRlbXBlcmF0dXJlOiBTdHJpbmcoZGF5LnRlbXBtYXgpLnNwbGl0KFwiLlwiKVswXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5UZW1wZXJhdHVyZTogU3RyaW5nKGRheS50ZW1wbWluKS5zcGxpdChcIi5cIilbMF0sICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogZGF5Lmljb25cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKSAgICAgICAgXG4gICAgfTtcbn0iLCJleHBvcnQgY29uc3QgcmVuZGVyRGFpbHlXZWF0aGVyID0gKHdlYXRoZXIpID0+IHtcbiAgICBjb25zdCB3ZWVrV2VhdGhlckluZm9Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2Vlay13ZWF0aGVyLWluZm8tY29udGFpbmVyJyk7XG4gICAgd2Vla1dlYXRoZXJJbmZvQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuXG4gICAgd2VhdGhlci53ZWVrRm9yZWNhc3QubWFwKChlbGVtZW50KSA9PiB7ICAgICAgIFxuICAgICAgICB3ZWVrV2VhdGhlckluZm9Db250YWluZXIuaW5uZXJIVE1MICs9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cIndlZWstZGF5LXdlYXRoZXItcm93XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIndlZWstZGF5LW5hbWVcIj4ke2VsZW1lbnQud2Vla0RheX08L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwid2Vlay1kYXktd2VhdGhlci1pbWFnZVwiPlxuICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgY2xhc3M9XCJ3ZWVrLWRheS13ZWF0aGVyLWljb25cIlxuICAgICAgICAgICAgICBzcmM9XCJpbWFnZXMvd2VhdGhlci1pbWFnZXMtZmlsbGVkLyR7ZWxlbWVudC5pY29ufS5zdmdcIlxuICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PiAgICBcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwid2Vlay1kYXktdGVtcGVyYXR1cmVcIj48c3VwPiZ1YXJyOzwvc3VwPiR7ZWxlbWVudC5tYXhUZW1wZXJhdHVyZX3CsDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3ZWVrLW5pZ2h0LXRlbXBlcmF0dXJlXCI+PHN1cD4mZGFycjs8L3N1cD4ke2VsZW1lbnQubWluVGVtcGVyYXR1cmV9wrA8L2Rpdj4gICAgICAgICAgICAgICAgXG4gICAgICAgIDwvZGl2PmAgICAgICAgICAgICAgICAgIFxuICAgIH0pO1xuXG4gICAgd2Vla1dlYXRoZXJJbmZvQ29udGFpbmVyLmNoaWxkcmVuWzBdLnN0eWxlLmJvcmRlciA9ICdub25lJztcbn1cblxuZXhwb3J0IGNvbnN0IHJlbmRlclRvZGF5V2VhdGhlckluZm9DYXJkID0gKHdlYXRoZXIpID0+IHtcbiAgICBjb25zdCB0b2RheVdlYXRoZXJJbmZvQ2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RheS1pbmZvLWNhcmQnKTtcbiAgICB0b2RheVdlYXRoZXJJbmZvQ2FyZC5pbm5lckhUTUwgPSAnJztcbiAgICBcbiAgICBjb25zdCBtYWluV2VhdGhlckluZm9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYWluV2VhdGhlckluZm9EaXYuY2xhc3NMaXN0LmFkZCgndG9kYXktd2VhdGhlci1tYWluLWluZm8nKTtcbiAgICBtYWluV2VhdGhlckluZm9EaXYuaW5uZXJIVE1MID0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwibG9jYXRpb24tbmFtZVwiPiR7d2VhdGhlci5sb2NhdGlvbn08L2Rpdj4gICAgICAgICAgICAgICAgICAgXG4gICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL3dlYXRoZXItaW1hZ2VzLWZpbGxlZC8ke3dlYXRoZXIuaWNvbn0uc3ZnXCI+ICAgICAgIFxuICAgICAgICA8ZGl2IGNsYXNzPVwidG9kYXktdGVtcGVyYXR1cmVcIj4ke3dlYXRoZXIudGVtcGVyYXR1cmV9wrA8L2Rpdj4gICAgICAgICAgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0b2RheS1jb25kaXRpb25zXCI+JHt3ZWF0aGVyLmNvbmRpdGlvbnN9PC9kaXY+ICAgICAgIFxuICAgIGA7IFxuICAgIFxuICAgIGNvbnN0IGFkZGl0aW9uYWxXZWF0aGVySW5mb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFkZGl0aW9uYWxXZWF0aGVySW5mb0Rpdi5jbGFzc0xpc3QuYWRkKCd0b2RheS13ZWF0aGVyLWV4dHJhLWluZm8nKTtcbiAgICBhZGRpdGlvbmFsV2VhdGhlckluZm9EaXYuaW5uZXJIVE1MID0gYFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRhdGUtd3JhcFwiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL2RhdGUuc3ZnXCI+IFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXRlXCI+JHt3ZWF0aGVyLmRhdGV9PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aW1lLXdyYXBcIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltYWdlcy90aW1lLnN2Z1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aW1lXCI+JHt3ZWF0aGVyLnRpbWV9PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaHVtaWRpdHktd3JhcFwiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL3dlYXRoZXItaW1hZ2VzLWxpbmVkL2h1bWlkaXR5LnN2Z1wiPiAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImh1bWlkaXR5XCI+JHt3ZWF0aGVyLmh1bWlkaXR5fSU8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIndpbmQtd3JhcFwiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL3dlYXRoZXItaW1hZ2VzLWxpbmVkL3dpbmQuc3ZnXCI+ICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIndpbmRcIj48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgPC9kaXY+XG4gICAgYDtcbiAgICBcbiAgICBjb25zdCBob3VybHlXZWF0aGVySW5mb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhvdXJseVdlYXRoZXJJbmZvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hvdXJseS13ZWF0aGVyLWluZm8tY29udGFpbmVyJyk7XG5cbiAgICBjb25zdCBzbGlkZXJXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgXG4gICAgaG91cmx5V2VhdGhlckluZm9Db250YWluZXIuaW5uZXJIVE1MID0gcmVuZGVyU2xpZGVyTmF2aWdhdGlvblBhbmVsKCk7XG4gICAgaG91cmx5V2VhdGhlckluZm9Db250YWluZXIuYXBwZW5kQ2hpbGQoc2xpZGVyV3JhcCk7XG5cbiAgICBzbGlkZXJXcmFwLmNsYXNzTGlzdC5hZGQoJ3NsaWRlci13cmFwJyk7XG4gICAgc2xpZGVyV3JhcC5pbm5lckhUTUwgPSByZW5kZXJTbGlkZXIoKTsgICBcblxuICAgIHRvZGF5V2VhdGhlckluZm9DYXJkLmFwcGVuZChtYWluV2VhdGhlckluZm9EaXYsIGFkZGl0aW9uYWxXZWF0aGVySW5mb0RpdiwgaG91cmx5V2VhdGhlckluZm9Db250YWluZXIpO1xuICAgIFxuICAgIGRpc3BsYXlUaW1lKCk7XG4gICAgcmVuZGVySG91cmx5V2VhdGhlckluZm8od2VhdGhlcik7XG4gICAgcmVuZGVyV2luZFNwZWVkKHdlYXRoZXIud2luZFNwZWVkKTtcbiAgICBhZGRFdmVudExpc3RlbmVyVG9TbGlkZXIoKTtcblxuICAgIHJldHVybiB0b2RheVdlYXRoZXJJbmZvQ2FyZDtcbn1cblxuY29uc3QgcmVuZGVySG91cmx5V2VhdGhlckluZm8gPSAod2VhdGhlcikgPT4ge1xuICAgIGNvbnN0IHNsaWRlckNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2xpZGVyLWNvbnRlbnQnKTtcblxuICAgIHdlYXRoZXIuaG91cmx5Rm9yZWNhc3QubWFwKChob3VyKSA9PiB7ICAgICAgIFxuICAgICAgICBzbGlkZXJDb250ZW50LmlubmVySFRNTCArPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJob3VybHktd2VhdGhlci1jb2x1bW5cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaG91cmx5LXdlYXRoZXItdGltZVwiPiR7aG91ci50aW1lfTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJob3VybHktd2VhdGhlci1pbWFnZVwiPlxuICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgY2xhc3M9XCJob3VybHktd2VhdGhlci1pbWFnZVwiXG4gICAgICAgICAgICAgIHNyYz1cImltYWdlcy93ZWF0aGVyLWltYWdlcy1saW5lZC8ke2hvdXIuaWNvbn0uc3ZnXCJcbiAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj4gICAgXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImhvdXJseS13ZWF0aGVyLXRlbXBlcmF0dXJlXCI+JHtob3VyLnRlbXBlcmF0dXJlfcKwPC9kaXY+ICAgICAgICAgICAgICAgXG4gICAgICAgIDwvZGl2PmAgICAgICAgICBcbiAgICB9KTtcbn1cblxuY29uc3QgcmVuZGVyU2xpZGVyID0gKCkgPT4ge1xuICAgIHJldHVybiBgICAgICAgICBcbiAgICAgICAgPGRpdiBjbGFzcz1cInNsaWRlci1jb250ZW50XCI+PC9kaXY+ICAgICAgICAgICAgICAgIFxuICAgIGA7XG59XG5cbmNvbnN0IHJlbmRlclNsaWRlck5hdmlnYXRpb25QYW5lbCA9ICgpID0+IHtcbiAgICByZXR1cm4gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwibmF2LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImJ1dHRvbi1wcmV2aW91c1wiPjwvYnV0dG9uPiAgICAgICAgICAgXG4gICAgICAgICAgICA8YnV0dG9uIGlkPVwiYnV0dG9uLW5leHRcIj48L2J1dHRvbj4gICAgICAgICAgICBcbiAgICAgICAgPC9kaXY+IFxuICAgIGBcbn1cblxuY29uc3QgcmVuZGVyV2luZFNwZWVkID0gKHdpbmRTcGVlZCkgPT4ge1xuICAgIGNvbnN0IHdpbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2luZCcpO1xuICAgIGNvbnN0IHVuaXRzQ2hlY2tib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudW5pdHMtY2hlY2tib3gnKTtcbiAgICBjb25zdCB1bml0ID0gdW5pdHNDaGVja2JveC5jaGVja2VkID8gJ21waCcgOiAna20vaCc7XG5cbiAgICB3aW5kLmlubmVySFRNTCA9IHdpbmRTcGVlZCArIHVuaXQ7XG59XG5cbmNvbnN0IGRpc3BsYXlUaW1lID0gKCkgPT4ge1xuICAgIGNvbnN0IHRpbWUgPSBuZXcgRGF0ZSgpLnRvTG9jYWxlVGltZVN0cmluZyhuYXZpZ2F0b3IubGFuZ3VhZ2UsIHtcbiAgICAgICAgaG91cjogXCIyLWRpZ2l0XCIsXG4gICAgICAgIG1pbnV0ZTogXCIyLWRpZ2l0XCIsXG4gICAgICAgIGhvdXIxMjogZmFsc2UsXG4gICAgfSk7XG4gICBcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGltZScpLmlubmVySFRNTCA9IHRpbWU7XG4gICAgc2V0VGltZW91dChkaXNwbGF5VGltZSwgMTAwMCk7XG59XG5cblxuY29uc3QgYWRkRXZlbnRMaXN0ZW5lclRvU2xpZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IHNsaWRlckNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNsaWRlci1jb250ZW50XCIpO1xuICAgIGNvbnN0IGJ1dHRvbk5leHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ1dHRvbi1uZXh0XCIpO1xuICAgIGNvbnN0IGJ1dHRvblByZXZpb3VzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidXR0b24tcHJldmlvdXNcIik7ICAgIFxuXG4gICAgbGV0IGN1cnJlbnRJbmRleCA9IDA7XG5cbiAgICBjb25zdCBzbGlkZSA9IChpbmRleCkgPT4geyAgIFxuICAgICAgICBpZiAoaW5kZXggPCAwKSB7XG4gICAgICAgICAgICBpbmRleCA9IDIgLTE7ICAgICAgICBcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoaW5kZXggPj0gMikge1xuICAgICAgICAgICAgaW5kZXggPSAwOyAgICAgICAgXG4gICAgICAgIH07ICAgICBcbiAgICAgICAgXG4gICAgICAgIHNsaWRlckNvbnRlbnQuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoLSR7KGluZGV4IC8gMikgKiAxMDB9JSlgO1xuICAgICAgICBjdXJyZW50SW5kZXggPSBpbmRleDsgICBcbiAgICB9O1xuXG4gICAgYnV0dG9uTmV4dC5vbmNsaWNrID0gKCkgPT4geyAgICAgICAgICAgXG4gICAgICAgIHNsaWRlKGN1cnJlbnRJbmRleCArIDEpO1xuICAgIH07XG5cbiAgICBidXR0b25QcmV2aW91cy5vbmNsaWNrID0gKCkgPT4geyAgIFxuICAgICAgICBzbGlkZShjdXJyZW50SW5kZXggLSAxKTtcbiAgICB9O1xufVxuXG5leHBvcnQgY29uc3QgbG9hZGluZyA9IChzdGF0ZSkgPT4ge1xuICAgIGNvbnN0IGxvYWRpbmdTcGlubmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvYWRlcicpO1xuXG4gICAgaWYgKHN0YXRlID09PSAnc3RhcnRlZCcpIHtcbiAgICAgIGxvYWRpbmdTcGlubmVyLmNsYXNzTGlzdC5hZGQoJ2xvYWRlci1hY3RpdmUnKTsgICAgIFxuICAgIH0gZWxzZSB7XG4gICAgICBsb2FkaW5nU3Bpbm5lci5jbGFzc0xpc3QucmVtb3ZlKCdsb2FkZXItYWN0aXZlJyk7XG4gICAgfVxufVxuXG5cblxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdCAmJiBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnRhZ05hbWUudG9VcHBlckNhc2UoKSA9PT0gJ1NDUklQVCcpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IGdldFdlYXRoZXIgfSBmcm9tICcuL21vZHVsZXMvZ2V0V2VhdGhlcic7XG5cbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWZvcm0nKTtcblxuZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB1c2VySW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWlucHV0Jyk7XG4gICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVycm9yLW1lc3NhZ2UnKTtcbiAgICAgIFxuICAgIGlmICghaXNWYWxpZCh1c2VySW5wdXQudmFsdWUpKSB7ICAgICAgICBcbiAgICAgICAgZXJyb3JNZXNzYWdlLmlubmVyVGV4dCA9IFwiUGxlYXNlIGVudGVyIGEgbG9jYXRpb25cIjtcbiAgICAgICAgZXJyb3JNZXNzYWdlLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGVycm9yTWVzc2FnZS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSwgMzAwMCk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgIH07XG5cbiAgICBnZXRXZWF0aGVyKHVzZXJJbnB1dC52YWx1ZSk7XG4gICAgdXNlcklucHV0LnZhbHVlID0gJyc7XG59KTtcblxuY29uc3QgdW5pdENoZWNrYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVuaXRzLWNoZWNrYm94Jyk7XG5cbnVuaXRDaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBjdXJyZW50TG9jYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9jYXRpb24tbmFtZScpO1xuICAgIFxuICAgIGdldFdlYXRoZXIoY3VycmVudExvY2F0aW9uLmlubmVyVGV4dCk7XG59KTtcblxuY29uc3QgaXNWYWxpZCA9ICh1c2VySW5wdXQpID0+IHsgICAgIFxuICAgIGlmICh1c2VySW5wdXQgPT09IFwiXCIpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTsgICBcbn1cblxuZ2V0V2VhdGhlcihcIkR1YmxpblwiKTtcblxuXG5cblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=