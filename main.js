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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLHlIQUF5QztBQUNyRiw0Q0FBNEMsK0hBQTRDO0FBQ3hGLDRDQUE0QyxpSUFBNkM7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRiwrR0FBK0csSUFBSSxJQUFJLGtCQUFrQjtBQUN6SSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLG1DQUFtQztBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0IsbUNBQW1DO0FBQ3pEO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0IsbUNBQW1DO0FBQ3pEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQSxPQUFPLGdGQUFnRixZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLE9BQU8sYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFdBQVcsS0FBSyxVQUFVLE1BQU0sTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsY0FBYyxNQUFNLFVBQVUsVUFBVSxLQUFLLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsTUFBTSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsY0FBYyxPQUFPLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxNQUFNLFVBQVUsWUFBWSxNQUFNLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxjQUFjLE1BQU0sWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sTUFBTSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sTUFBTSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxZQUFZLEtBQUssVUFBVSxNQUFNLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFh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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0VBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy9nZXRXZWF0aGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvdWkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvd2FsbHBhcGVyLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL2NoZXZyb24tbGVmdC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9jaGV2cm9uLXJpZ2h0LnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TnVuaXRvOndnaHRAMzAwOzQwMDs2MDA7NzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAgIC0tbGlnaHQtZ3JleTogcmdiYSgyNTUsIDI1NSwgMjU1LCAuMik7XG4gICAgLS1oYWxmLXRyYW5zcGFyZW50OiByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbioge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG59XG5cbmh0bWwsIGJvZHkge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4OyBcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDAuNCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZ2JhKDAsIDAsIDAsIDAuNCkpLFxuICAgICAgICAgICAgICAgICAgICAgIHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAgICAgXG4gICAgZm9udC1mYW1pbHk6ICdOdW5pdG8nLCBzYW5zLXNlcmlmOyAgIFxufVxuXG4udG9wLW5hdiB7ICAgXG4gICAgZGlzcGxheTogZ3JpZDsgICAgXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzNjBweCAxZnI7IFxuICAgIHBhZGRpbmc6IDQwcHg7ICBcbn1cblxuLnRvcC1uYXYgZm9ybSB7XG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7ICAgIFxufVxuXG4uc2VhcmNoLWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgYXV0bzsgIFxufVxuXG4uZXJyb3ItbWVzc2FnZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgYm90dG9tOiAtMjRweDtcbiAgICBsZWZ0OiAyMHB4O1xuICAgIGNvbG9yOiByZ2IoMjE0LCAyMTQsIDMwKTsgICBcbn1cblxuLnNlYXJjaC1pbnB1dCB7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxOTksIDEwOSwgMTA5LCAwLjIpO1xuICAgIGJvcmRlci1yaWdodDogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweCAwcHggMHB4IDUwcHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhhbGYtdHJhbnNwYXJlbnQpO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIFxuICAgICYuc2VhcmNoLWlucHV0Ojotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9IFxufVxuXG4uc2VhcmNoLWlucHV0OjpwbGFjZWhvbGRlciB7XG4gICAgY29sb3I6IHJnYigxNzcsIDE3NywgMTc5KTtcbn1cblxuLnNlYXJjaC1zdWJtaXQtYnV0dG9uIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7ICAgXG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oYWxmLXRyYW5zcGFyZW50KTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1saWdodC1ncmV5KTtcbiAgICBib3JkZXItcmFkaXVzOiAwcHggNTBweCA1MHB4IDBweDtcbiAgICBib3JkZXItbGVmdDogdHJhbnNwYXJlbnQ7XG5cbiAgICBpbWcge1xuICAgICAgICBoZWlnaHQ6IDI0cHg7XG4gICAgICAgIHdpZHRoOiAyNHB4O1xuICAgIH1cbn1cblxubWFpbiB7ICBcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgICBcbiAgICBnYXA6IDQwcHg7XG4gICAgcGFkZGluZzogNDBweDsgICAgIFxufSBcblxuLnRvZGF5LWluZm8tY2FyZCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzZnIgMWZyO1xuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICAgIHdpZHRoOiA1NDBweDtcbiAgICBoZWlnaHQ6IDQwMHB4OyAgXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbGlnaHQtZ3JleSk7XG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgICBwYWRkaW5nOiAyMHB4OyAgICBcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGFsZi10cmFuc3BhcmVudCk7ICAgIFxuIH1cblxuIGltZyB7ICAgXG4gICAgd2lkdGg6IDEyNHB4OyAgICAgICAgICAgIFxuIH1cblxuIC50b2RheS13ZWF0aGVyLW1haW4taW5mbyB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMTAwcHggMzZweCAxZnI7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gfVxuXG4gLnRvZGF5LXdlYXRoZXItZXh0cmEtaW5mbyB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDQwcHggMWZyO1xuICAgIGp1c3RpZnktaXRlbXM6IGVuZDsgICAgIFxuIH1cblxuIC50b2RheS13ZWF0aGVyLWV4dHJhLWluZm8gPiBkaXY6Zmlyc3Qtb2YtdHlwZSB7XG4gICAgaW1nIHtcbiAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgIGp1c3RpZnktc2VsZjogZW5kOyBcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgICAgIG9wYWNpdHk6IDAuNjsgICAgICBcbiAgICB9XG5cbiAgICAuZGF0ZS13cmFwLFxuICAgIC50aW1lLXdyYXAge1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICAgICAgICAgXG4gICAgfVxuIH1cblxuIC50b2RheS13ZWF0aGVyLWV4dHJhLWluZm8gPiBkaXY6bnRoLWNoaWxkKDIpIHtcbiAgICBkaXNwbGF5OiBncmlkOyBcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjsgXG4gICAgYWxpZ24tc2VsZjpjZW50ZXI7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIFxuICAgIC5odW1pZGl0eS13cmFwLCBcbiAgICAud2luZC13cmFwIHtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOyAgICAgICBcbiAgICB9XG5cbiAgICBpbWcge1xuICAgICAgICB3aWR0aDogNDhweDtcbiAgICAgICAganVzdGlmeS1zZWxmOiBlbmQ7XG4gICAgfVxuICAgIFxuICAgIC5odW1pZGl0eSwgXG4gICAgLndpbmQge1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgfVxufVxuXG4gLmxvY2F0aW9uLW5hbWUge1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiB9XG4gXG4gLnRvZGF5LXRlbXBlcmF0dXJlIHtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gfVxuXG4gLnRvZGF5LWNvbmRpdGlvbnMge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiB9XG5cbiAud2Vlay13ZWF0aGVyLWluZm8tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGNvbG9yOiB3aGl0ZTsgICBcbiAgICBtYXgtd2lkdGg6IDU0MHB4O1xuIH1cblxuIC53ZWVrLWRheS13ZWF0aGVyLXJvdyB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmcjtcbiAgICBnYXA6IDIwcHg7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWxpZ2h0LWdyZXkpO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIFxuICAgIC53ZWVrLWRheS1uYW1lIHtcbiAgICAgICAganVzdGlmeS1zZWxmOiBzdGFydDtcbiAgICAgICAgdGV4dC1zaGFkb3c6IC0xcHggLTFweCAwICMwMDAsIDFweCAtMXB4IDAgIzAwMCwgLTFweCAxcHggMCAjMDAwLCAxcHggMXB4IDAgIzAwMDtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBjb2xvcjogcmdiKDI0NywgMTg1LCAxMzUpO1xuICAgIH1cblxuICAgIC53ZWVrLWRheS10ZW1wZXJhdHVyZSxcbiAgICAud2Vlay1uaWdodC10ZW1wZXJhdHVyZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDsgICAgICAgIFxuICAgIH1cblxuICAgIC53ZWVrLW5pZ2h0LXRlbXBlcmF0dXJlIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgb3BhY2l0eTogMC43O1xuICAgIH1cbiB9IFxuXG4gLmhvdXJseS13ZWF0aGVyLWluZm8tY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XG4gICAgcGFkZGluZzogMCAzMnB4OyAgICBcbiB9XG5cbiAuaG91cmx5LXdlYXRoZXItY29sdW1uIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiAzNnB4O1xuICAgIGdhcDogNHB4O1xuIH1cblxuIC5zbGlkZXItd3JhcCB7ICAgIFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdpZHRoOiA0MzJweDtcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjsgXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWxpZ2h0LWdyZXkpOyBcbiAgICBwYWRkaW5nLXRvcDogOHB4OyAgXG4gfVxuXG4gLnNsaWRlci1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XG4gICAgcG9zaXRpb246IGFic29sdXRlOyAgICAgICAgICAgXG4gfVxuXG4gLm5hdi1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgICBcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7ICAgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgICAgXG4gfVxuXG4jYnV0dG9uLXByZXZpb3VzIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSkgbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDU1JSA1MCU7ICAgICBcbn1cblxuI2J1dHRvbi1uZXh0IHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSkgbm8tcmVwZWF0OyBcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA0NSUgNTAlOyAgICBcbn1cblxuI2J1dHRvbi1wcmV2aW91cyxcbiNidXR0b24tbmV4dCB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJvcmRlcjogbm9uZTsgICAgICBcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgd2lkdGg6IDE4cHg7XG4gICAgaGVpZ2h0OiAxOHB4OyAgICBcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDM2cHg7XG4gICAgb3BhY2l0eTogNDAlO1xuICAgIFxuICAgICY6aG92ZXIge1xuICAgICAgICBvcGFjaXR5OiA4MCU7XG4gICAgfVxufVxuXG4uaG91cmx5LXdlYXRoZXItaW1hZ2Uge1xuICAgIGhlaWdodDogMjhweDtcbiAgICB3aWR0aDogMjhweDtcbn1cblxuLmhvdXJseS13ZWF0aGVyLXRpbWUge1xuICAgIG9wYWNpdHk6IDAuNjtcbn1cblxuLndlZWstZGF5LXdlYXRoZXItaW1hZ2UgaW1nIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGhlaWdodDogNDhweDtcbiAgICB3aWR0aDogNDhweDtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbi5zd2l0Y2gge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDY2cHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWxpZ2h0LWdyZXkpO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGFsZi10cmFuc3BhcmVudCk7XG59ICBcblxuLnN3aXRjaCBpbnB1dCB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDA7XG59ICBcblxuLnNsaWRlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNHM7XG4gICAgdHJhbnNpdGlvbjogLjRzO1xufVxuXG4uc2xpZGVyOmJlZm9yZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlOyAgICBcbiAgICBoZWlnaHQ6IDI4cHg7XG4gICAgd2lkdGg6IDI4cHg7XG4gICAgbGVmdDogNHB4O1xuICAgIGJvdHRvbTogNHB4O1xuICAgIGNvbnRlbnQ6IFwiwrBDXCI7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XG4gICAgY29sb3I6ICMxZTNjNzI7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGFkZmU3O1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xuICAgIHRyYW5zaXRpb246IC40czsgICAgXG59XG5cbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XG4gICAgY29udGVudDogJ8KwRic7ICAgIFxufSAgXG5cbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XG59IFxuXG4uc2xpZGVyLnJvdW5kOmJlZm9yZSB7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uYWN0aXZlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmxvYWRlciB7ICAgIFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIGJvdHRvbTogLTQwcHg7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUpO1xuICAgIGZvbnQtc2l6ZTogOHB4O1xuICAgIHdpZHRoOiAxZW07XG4gICAgaGVpZ2h0OiAxZW07XG4gICAgYm9yZGVyLXJhZGl1czogNTAlOyAgIFxuICAgIGFuaW1hdGlvbjogc3BpbiAxLjFzIGluZmluaXRlIGVhc2U7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApOyAgICBcbiAgXG4gICAgJi5sb2FkZXItYWN0aXZlIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxufVxuXG4gIEBrZXlmcmFtZXMgc3BpbiB7XG4gICAgMCUsXG4gICAgMTAwJSB7XG4gICAgICBib3gtc2hhZG93OiAwZW0gLTIuNmVtIDBlbSAwZW0gI2ZmZmZmZiwgMS44ZW0gLTEuOGVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuMiksIDIuNWVtIDBlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjIpLCAxLjc1ZW0gMS43NWVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuMiksIDBlbSAyLjVlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjIpLCAtMS44ZW0gMS44ZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC4yKSwgLTIuNmVtIDBlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjUpLCAtMS44ZW0gLTEuOGVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuNyk7XG4gICAgfVxuICAgIDEyLjUlIHtcbiAgICAgIGJveC1zaGFkb3c6IDBlbSAtMi42ZW0gMGVtIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjcpLCAxLjhlbSAtMS44ZW0gMCAwZW0gI2ZmZmZmZiwgMi41ZW0gMGVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuMiksIDEuNzVlbSAxLjc1ZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC4yKSwgMGVtIDIuNWVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuMiksIC0xLjhlbSAxLjhlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjIpLCAtMi42ZW0gMGVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuMiksIC0xLjhlbSAtMS44ZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC41KTtcbiAgICB9XG4gICAgMjUlIHtcbiAgICAgIGJveC1zaGFkb3c6IDBlbSAtMi42ZW0gMGVtIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjUpLCAxLjhlbSAtMS44ZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC43KSwgMi41ZW0gMGVtIDAgMGVtICNmZmZmZmYsIDEuNzVlbSAxLjc1ZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC4yKSwgMGVtIDIuNWVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuMiksIC0xLjhlbSAxLjhlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjIpLCAtMi42ZW0gMGVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuMiksIC0xLjhlbSAtMS44ZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC4yKTtcbiAgICB9XG4gICAgMzcuNSUge1xuICAgICAgYm94LXNoYWRvdzogMGVtIC0yLjZlbSAwZW0gMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuMiksIDEuOGVtIC0xLjhlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjUpLCAyLjVlbSAwZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC43KSwgMS43NWVtIDEuNzVlbSAwIDBlbSAjZmZmZmZmLCAwZW0gMi41ZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC4yKSwgLTEuOGVtIDEuOGVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuMiksIC0yLjZlbSAwZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC4yKSwgLTEuOGVtIC0xLjhlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjIpO1xuICAgIH1cbiAgICA1MCUge1xuICAgICAgYm94LXNoYWRvdzogMGVtIC0yLjZlbSAwZW0gMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuMiksIDEuOGVtIC0xLjhlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjIpLCAyLjVlbSAwZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC41KSwgMS43NWVtIDEuNzVlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjcpLCAwZW0gMi41ZW0gMCAwZW0gI2ZmZmZmZiwgLTEuOGVtIDEuOGVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuMiksIC0yLjZlbSAwZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC4yKSwgLTEuOGVtIC0xLjhlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjIpO1xuICAgIH1cbiAgICA2Mi41JSB7XG4gICAgICBib3gtc2hhZG93OiAwZW0gLTIuNmVtIDBlbSAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC4yKSwgMS44ZW0gLTEuOGVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuMiksIDIuNWVtIDBlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjIpLCAxLjc1ZW0gMS43NWVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuNSksIDBlbSAyLjVlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjcpLCAtMS44ZW0gMS44ZW0gMCAwZW0gI2ZmZmZmZiwgLTIuNmVtIDBlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjIpLCAtMS44ZW0gLTEuOGVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuMik7XG4gICAgfVxuICAgIDc1JSB7XG4gICAgICBib3gtc2hhZG93OiAwZW0gLTIuNmVtIDBlbSAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC4yKSwgMS44ZW0gLTEuOGVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuMiksIDIuNWVtIDBlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjIpLCAxLjc1ZW0gMS43NWVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuMiksIDBlbSAyLjVlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjUpLCAtMS44ZW0gMS44ZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC43KSwgLTIuNmVtIDBlbSAwIDBlbSAjZmZmZmZmLCAtMS44ZW0gLTEuOGVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuMik7XG4gICAgfVxuICAgIDg3LjUlIHtcbiAgICAgIGJveC1zaGFkb3c6IDBlbSAtMi42ZW0gMGVtIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjIpLCAxLjhlbSAtMS44ZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC4yKSwgMi41ZW0gMGVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuMiksIDEuNzVlbSAxLjc1ZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC4yKSwgMGVtIDIuNWVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuMiksIC0xLjhlbSAxLjhlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjUpLCAtMi42ZW0gMGVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuNyksIC0xLjhlbSAtMS44ZW0gMCAwZW0gI2ZmZmZmZjtcbiAgICB9XG4gIH1cblxuICBmb290ZXIge1xuICAgIG1hcmdpbi10b3A6IGF1dG87ICAgIFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTZweDtcbiAgICBjb2xvcjogcmdiKDIwNCwgMjAyLCAyMDIpO1xuXG4gICAgYSB7XG4gICAgICAgIGNvbG9yOiByZ2IoMTIwLCAxNzksIDI0Nyk7XG4gICAgfVxuICB9XG5cblxuXG5cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtJQUNJLHFDQUFxQztJQUNyQyxzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCOzs2REFFK0M7SUFDL0MsNEJBQTRCO0lBQzVCLDJCQUEyQjtJQUMzQixzQkFBc0I7SUFDdEIsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixvQ0FBb0M7SUFDcEMsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixhQUFhO0lBQ2IsVUFBVTtJQUNWLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsMENBQTBDO0lBQzFDLHlCQUF5QjtJQUN6QixnQ0FBZ0M7SUFDaEMsZUFBZTtJQUNmLHlDQUF5QztJQUN6QyxhQUFhO0lBQ2IsWUFBWTs7SUFFWjtRQUNJLGFBQWE7SUFDakI7QUFDSjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osV0FBVztJQUNYLFlBQVk7SUFDWix5Q0FBeUM7SUFDekMsbUNBQW1DO0lBQ25DLGdDQUFnQztJQUNoQyx3QkFBd0I7O0lBRXhCO1FBQ0ksWUFBWTtRQUNaLFdBQVc7SUFDZjtBQUNKOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsU0FBUztJQUNULGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLDJCQUEyQjtJQUMzQixvQkFBb0I7SUFDcEIsWUFBWTtJQUNaLGFBQWE7SUFDYixtQ0FBbUM7SUFDbkMsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixZQUFZO0lBQ1oseUNBQXlDO0NBQzVDOztDQUVBO0lBQ0csWUFBWTtDQUNmOztDQUVBO0lBQ0csYUFBYTtJQUNiLHVDQUF1QztJQUN2QyxxQkFBcUI7SUFDckIsbUJBQW1CO0NBQ3RCOztDQUVBO0lBQ0csYUFBYTtJQUNiLDRCQUE0QjtJQUM1QixrQkFBa0I7Q0FDckI7O0NBRUE7SUFDRztRQUNJLFdBQVc7UUFDWCxpQkFBaUI7UUFDakIsaUJBQWlCO1FBQ2pCLFlBQVk7SUFDaEI7O0lBRUE7O1FBRUksYUFBYTtRQUNiLDhCQUE4QjtRQUM5QixtQkFBbUI7SUFDdkI7Q0FDSDs7Q0FFQTtJQUNHLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLHFCQUFxQjs7SUFFckI7O1FBRUksYUFBYTtRQUNiLDhCQUE4QjtRQUM5QixtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsaUJBQWlCO0lBQ3JCOztJQUVBOztRQUVJLGVBQWU7UUFDZixnQkFBZ0I7SUFDcEI7QUFDSjs7Q0FFQztJQUNHLGVBQWU7SUFDZixpQkFBaUI7Q0FDcEI7O0NBRUE7SUFDRyxlQUFlO0lBQ2YsaUJBQWlCO0NBQ3BCOztDQUVBO0lBQ0csZUFBZTtDQUNsQjs7Q0FFQTtJQUNHLGFBQWE7SUFDYixZQUFZO0lBQ1osZ0JBQWdCO0NBQ25COztDQUVBO0lBQ0csYUFBYTtJQUNiLHNDQUFzQztJQUN0QyxTQUFTO0lBQ1QsdUNBQXVDO0lBQ3ZDLG1CQUFtQjtJQUNuQixxQkFBcUI7O0lBRXJCO1FBQ0ksbUJBQW1CO1FBQ25CLCtFQUErRTtRQUMvRSxlQUFlO1FBQ2YsZ0JBQWdCO1FBQ2hCLHlCQUF5QjtJQUM3Qjs7SUFFQTs7UUFFSSxlQUFlO1FBQ2YsZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksZ0JBQWdCO1FBQ2hCLFlBQVk7SUFDaEI7Q0FDSDs7Q0FFQTtJQUNHLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGVBQWU7Q0FDbEI7O0NBRUE7SUFDRyxhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsUUFBUTtDQUNYOztDQUVBO0lBQ0csa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLHVDQUF1QztJQUN2QyxnQkFBZ0I7Q0FDbkI7O0NBRUE7SUFDRyxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGtCQUFrQjtDQUNyQjs7Q0FFQTtJQUNHLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0NBQ3RCOztBQUVEO0lBQ0ksNkRBQW9EO0lBQ3BELDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLDZEQUFxRDtJQUNyRCw0QkFBNEI7QUFDaEM7O0FBRUE7O0lBRUksZUFBZTtJQUNmLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsWUFBWTs7SUFFWjtRQUNJLFlBQVk7SUFDaEI7QUFDSjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsWUFBWTtJQUNaLG1DQUFtQztJQUNuQyxtQkFBbUI7SUFDbkIseUNBQXlDO0FBQzdDOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFFBQVE7SUFDUixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLE1BQU07SUFDTixPQUFPO0lBQ1AsUUFBUTtJQUNSLFNBQVM7SUFDVCx1QkFBdUI7SUFDdkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osV0FBVztJQUNYLFNBQVM7SUFDVCxXQUFXO0lBQ1gsYUFBYTtJQUNiLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsY0FBYztJQUNkLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsdUJBQXVCO0lBQ3ZCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksbUNBQW1DO0lBQ25DLCtCQUErQjtJQUMvQiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixhQUFhO0lBQ2IsU0FBUztJQUNULDBCQUEwQjtJQUMxQixjQUFjO0lBQ2QsVUFBVTtJQUNWLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsa0NBQWtDO0lBQ2xDLHdCQUF3Qjs7SUFFeEI7UUFDSSxjQUFjO0lBQ2xCO0FBQ0o7O0VBRUU7SUFDRTs7TUFFRSw2VUFBNlU7SUFDL1U7SUFDQTtNQUNFLDZVQUE2VTtJQUMvVTtJQUNBO01BQ0UsNlVBQTZVO0lBQy9VO0lBQ0E7TUFDRSw2VUFBNlU7SUFDL1U7SUFDQTtNQUNFLDZVQUE2VTtJQUMvVTtJQUNBO01BQ0UsNlVBQTZVO0lBQy9VO0lBQ0E7TUFDRSw2VUFBNlU7SUFDL1U7SUFDQTtNQUNFLDZVQUE2VTtJQUMvVTtFQUNGOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsb0JBQW9CO0lBQ3BCLHlCQUF5Qjs7SUFFekI7UUFDSSx5QkFBeUI7SUFDN0I7RUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1OdW5pdG86d2dodEAzMDA7NDAwOzYwMDs3MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuOnJvb3Qge1xcbiAgICAtLWxpZ2h0LWdyZXk6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjIpO1xcbiAgICAtLWhhbGYtdHJhbnNwYXJlbnQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG59XFxuXFxuKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuaHRtbCwgYm9keSB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDsgXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDAuNCksIFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmdiYSgwLCAwLCAwLCAwLjQpKSxcXG4gICAgICAgICAgICAgICAgICAgICAgdXJsKCcuL2ltYWdlcy93YWxscGFwZXIuanBnJyk7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgICAgIFxcbiAgICBmb250LWZhbWlseTogJ051bml0bycsIHNhbnMtc2VyaWY7ICAgXFxufVxcblxcbi50b3AtbmF2IHsgICBcXG4gICAgZGlzcGxheTogZ3JpZDsgICAgXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDM2MHB4IDFmcjsgXFxuICAgIHBhZGRpbmc6IDQwcHg7ICBcXG59XFxuXFxuLnRvcC1uYXYgZm9ybSB7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyOyAgICBcXG59XFxuXFxuLnNlYXJjaC1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIGF1dG87ICBcXG59XFxuXFxuLmVycm9yLW1lc3NhZ2Uge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGJvdHRvbTogLTI0cHg7XFxuICAgIGxlZnQ6IDIwcHg7XFxuICAgIGNvbG9yOiByZ2IoMjE0LCAyMTQsIDMwKTsgICBcXG59XFxuXFxuLnNlYXJjaC1pbnB1dCB7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxOTksIDEwOSwgMTA5LCAwLjIpO1xcbiAgICBib3JkZXItcmlnaHQ6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4IDBweCAwcHggNTBweDtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oYWxmLXRyYW5zcGFyZW50KTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBcXG4gICAgJi5zZWFyY2gtaW5wdXQ6Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24ge1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfSBcXG59XFxuXFxuLnNlYXJjaC1pbnB1dDo6cGxhY2Vob2xkZXIge1xcbiAgICBjb2xvcjogcmdiKDE3NywgMTc3LCAxNzkpO1xcbn1cXG5cXG4uc2VhcmNoLXN1Ym1pdC1idXR0b24ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7ICAgXFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgd2lkdGg6IDQwcHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGFsZi10cmFuc3BhcmVudCk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWxpZ2h0LWdyZXkpO1xcbiAgICBib3JkZXItcmFkaXVzOiAwcHggNTBweCA1MHB4IDBweDtcXG4gICAgYm9yZGVyLWxlZnQ6IHRyYW5zcGFyZW50O1xcblxcbiAgICBpbWcge1xcbiAgICAgICAgaGVpZ2h0OiAyNHB4O1xcbiAgICAgICAgd2lkdGg6IDI0cHg7XFxuICAgIH1cXG59XFxuXFxubWFpbiB7ICBcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgICBcXG4gICAgZ2FwOiA0MHB4O1xcbiAgICBwYWRkaW5nOiA0MHB4OyAgICAgXFxufSBcXG5cXG4udG9kYXktaW5mby1jYXJkIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDNmciAxZnI7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICB3aWR0aDogNTQwcHg7XFxuICAgIGhlaWdodDogNDAwcHg7ICBcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbGlnaHQtZ3JleSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxuICAgIHBhZGRpbmc6IDIwcHg7ICAgIFxcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhhbGYtdHJhbnNwYXJlbnQpOyAgICBcXG4gfVxcblxcbiBpbWcgeyAgIFxcbiAgICB3aWR0aDogMTI0cHg7ICAgICAgICAgICAgXFxuIH1cXG5cXG4gLnRvZGF5LXdlYXRoZXItbWFpbi1pbmZvIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDEwMHB4IDM2cHggMWZyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuIH1cXG5cXG4gLnRvZGF5LXdlYXRoZXItZXh0cmEtaW5mbyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNDBweCAxZnI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGVuZDsgICAgIFxcbiB9XFxuXFxuIC50b2RheS13ZWF0aGVyLWV4dHJhLWluZm8gPiBkaXY6Zmlyc3Qtb2YtdHlwZSB7XFxuICAgIGltZyB7XFxuICAgICAgICB3aWR0aDogMjBweDtcXG4gICAgICAgIGp1c3RpZnktc2VsZjogZW5kOyBcXG4gICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xcbiAgICAgICAgb3BhY2l0eTogMC42OyAgICAgIFxcbiAgICB9XFxuXFxuICAgIC5kYXRlLXdyYXAsXFxuICAgIC50aW1lLXdyYXAge1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICAgICAgICAgXFxuICAgIH1cXG4gfVxcblxcbiAudG9kYXktd2VhdGhlci1leHRyYS1pbmZvID4gZGl2Om50aC1jaGlsZCgyKSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7IFxcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjsgXFxuICAgIGFsaWduLXNlbGY6Y2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIFxcbiAgICAuaHVtaWRpdHktd3JhcCwgXFxuICAgIC53aW5kLXdyYXAge1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICAgICAgIFxcbiAgICB9XFxuXFxuICAgIGltZyB7XFxuICAgICAgICB3aWR0aDogNDhweDtcXG4gICAgICAgIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgICB9XFxuICAgIFxcbiAgICAuaHVtaWRpdHksIFxcbiAgICAud2luZCB7XFxuICAgICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICB9XFxufVxcblxcbiAubG9jYXRpb24tbmFtZSB7XFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuIH1cXG4gXFxuIC50b2RheS10ZW1wZXJhdHVyZSB7XFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuIH1cXG5cXG4gLnRvZGF5LWNvbmRpdGlvbnMge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuIH1cXG5cXG4gLndlZWstd2VhdGhlci1pbmZvLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGNvbG9yOiB3aGl0ZTsgICBcXG4gICAgbWF4LXdpZHRoOiA1NDBweDtcXG4gfVxcblxcbiAud2Vlay1kYXktd2VhdGhlci1yb3cge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmcjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tbGlnaHQtZ3JleSk7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgXFxuICAgIC53ZWVrLWRheS1uYW1lIHtcXG4gICAgICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxuICAgICAgICB0ZXh0LXNoYWRvdzogLTFweCAtMXB4IDAgIzAwMCwgMXB4IC0xcHggMCAjMDAwLCAtMXB4IDFweCAwICMwMDAsIDFweCAxcHggMCAjMDAwO1xcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgICAgIGNvbG9yOiByZ2IoMjQ3LCAxODUsIDEzNSk7XFxuICAgIH1cXG5cXG4gICAgLndlZWstZGF5LXRlbXBlcmF0dXJlLFxcbiAgICAud2Vlay1uaWdodC10ZW1wZXJhdHVyZSB7XFxuICAgICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgICAgICBmb250LXdlaWdodDogNjAwOyAgICAgICAgXFxuICAgIH1cXG5cXG4gICAgLndlZWstbmlnaHQtdGVtcGVyYXR1cmUge1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgICAgIG9wYWNpdHk6IDAuNztcXG4gICAgfVxcbiB9IFxcblxcbiAuaG91cmx5LXdlYXRoZXItaW5mby1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXG4gICAgcGFkZGluZzogMCAzMnB4OyAgICBcXG4gfVxcblxcbiAuaG91cmx5LXdlYXRoZXItY29sdW1uIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMzZweDtcXG4gICAgZ2FwOiA0cHg7XFxuIH1cXG5cXG4gLnNsaWRlci13cmFwIHsgICAgXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgd2lkdGg6IDQzMnB4O1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjsgXFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1saWdodC1ncmV5KTsgXFxuICAgIHBhZGRpbmctdG9wOiA4cHg7ICBcXG4gfVxcblxcbiAuc2xpZGVyLWNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7ICAgICAgICAgICBcXG4gfVxcblxcbiAubmF2LWNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgICBcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTsgICBcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyAgICBcXG4gfVxcblxcbiNidXR0b24tcHJldmlvdXMge1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi9pbWFnZXMvY2hldnJvbi1sZWZ0LnN2Zykgbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1NSUgNTAlOyAgICAgXFxufVxcblxcbiNidXR0b24tbmV4dCB7XFxuICAgIGJhY2tncm91bmQ6IHVybCguL2ltYWdlcy9jaGV2cm9uLXJpZ2h0LnN2Zykgbm8tcmVwZWF0OyBcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNDUlIDUwJTsgICAgXFxufVxcblxcbiNidXR0b24tcHJldmlvdXMsXFxuI2J1dHRvbi1uZXh0IHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXI6IG5vbmU7ICAgICAgXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgd2lkdGg6IDE4cHg7XFxuICAgIGhlaWdodDogMThweDsgICAgXFxuICAgIGJhY2tncm91bmQtc2l6ZTogMzZweDtcXG4gICAgb3BhY2l0eTogNDAlO1xcbiAgICBcXG4gICAgJjpob3ZlciB7XFxuICAgICAgICBvcGFjaXR5OiA4MCU7XFxuICAgIH1cXG59XFxuXFxuLmhvdXJseS13ZWF0aGVyLWltYWdlIHtcXG4gICAgaGVpZ2h0OiAyOHB4O1xcbiAgICB3aWR0aDogMjhweDtcXG59XFxuXFxuLmhvdXJseS13ZWF0aGVyLXRpbWUge1xcbiAgICBvcGFjaXR5OiAwLjY7XFxufVxcblxcbi53ZWVrLWRheS13ZWF0aGVyLWltYWdlIGltZyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGhlaWdodDogNDhweDtcXG4gICAgd2lkdGg6IDQ4cHg7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLnN3aXRjaCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB3aWR0aDogNjZweDtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1saWdodC1ncmV5KTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGFsZi10cmFuc3BhcmVudCk7XFxufSAgXFxuXFxuLnN3aXRjaCBpbnB1dCB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHdpZHRoOiAwO1xcbiAgICBoZWlnaHQ6IDA7XFxufSAgXFxuXFxuLnNsaWRlciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xcbiAgICB0cmFuc2l0aW9uOiAuNHM7XFxufVxcblxcbi5zbGlkZXI6YmVmb3JlIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlOyAgICBcXG4gICAgaGVpZ2h0OiAyOHB4O1xcbiAgICB3aWR0aDogMjhweDtcXG4gICAgbGVmdDogNHB4O1xcbiAgICBib3R0b206IDRweDtcXG4gICAgY29udGVudDogXFxcIsKwQ1xcXCI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgY29sb3I6ICMxZTNjNzI7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkYWRmZTc7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xcbiAgICB0cmFuc2l0aW9uOiAuNHM7ICAgIFxcbn1cXG5cXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xcbiAgICBjb250ZW50OiAnwrBGJzsgICAgXFxufSAgXFxuXFxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XFxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcXG59IFxcblxcbi5zbGlkZXIucm91bmQ6YmVmb3JlIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4uYWN0aXZlIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5sb2FkZXIgeyAgICBcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBib3R0b206IC00MHB4O1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUpO1xcbiAgICBmb250LXNpemU6IDhweDtcXG4gICAgd2lkdGg6IDFlbTtcXG4gICAgaGVpZ2h0OiAxZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTsgICBcXG4gICAgYW5pbWF0aW9uOiBzcGluIDEuMXMgaW5maW5pdGUgZWFzZTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApOyAgICBcXG4gIFxcbiAgICAmLmxvYWRlci1hY3RpdmUge1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgIH1cXG59XFxuXFxuICBAa2V5ZnJhbWVzIHNwaW4ge1xcbiAgICAwJSxcXG4gICAgMTAwJSB7XFxuICAgICAgYm94LXNoYWRvdzogMGVtIC0yLjZlbSAwZW0gMGVtICNmZmZmZmYsIDEuOGVtIC0xLjhlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjIpLCAyLjVlbSAwZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC4yKSwgMS43NWVtIDEuNzVlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjIpLCAwZW0gMi41ZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC4yKSwgLTEuOGVtIDEuOGVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuMiksIC0yLjZlbSAwZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC41KSwgLTEuOGVtIC0xLjhlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjcpO1xcbiAgICB9XFxuICAgIDEyLjUlIHtcXG4gICAgICBib3gtc2hhZG93OiAwZW0gLTIuNmVtIDBlbSAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC43KSwgMS44ZW0gLTEuOGVtIDAgMGVtICNmZmZmZmYsIDIuNWVtIDBlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjIpLCAxLjc1ZW0gMS43NWVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuMiksIDBlbSAyLjVlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjIpLCAtMS44ZW0gMS44ZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC4yKSwgLTIuNmVtIDBlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjIpLCAtMS44ZW0gLTEuOGVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuNSk7XFxuICAgIH1cXG4gICAgMjUlIHtcXG4gICAgICBib3gtc2hhZG93OiAwZW0gLTIuNmVtIDBlbSAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC41KSwgMS44ZW0gLTEuOGVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuNyksIDIuNWVtIDBlbSAwIDBlbSAjZmZmZmZmLCAxLjc1ZW0gMS43NWVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuMiksIDBlbSAyLjVlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjIpLCAtMS44ZW0gMS44ZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC4yKSwgLTIuNmVtIDBlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjIpLCAtMS44ZW0gLTEuOGVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuMik7XFxuICAgIH1cXG4gICAgMzcuNSUge1xcbiAgICAgIGJveC1zaGFkb3c6IDBlbSAtMi42ZW0gMGVtIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjIpLCAxLjhlbSAtMS44ZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC41KSwgMi41ZW0gMGVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuNyksIDEuNzVlbSAxLjc1ZW0gMCAwZW0gI2ZmZmZmZiwgMGVtIDIuNWVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuMiksIC0xLjhlbSAxLjhlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjIpLCAtMi42ZW0gMGVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuMiksIC0xLjhlbSAtMS44ZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC4yKTtcXG4gICAgfVxcbiAgICA1MCUge1xcbiAgICAgIGJveC1zaGFkb3c6IDBlbSAtMi42ZW0gMGVtIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjIpLCAxLjhlbSAtMS44ZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC4yKSwgMi41ZW0gMGVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuNSksIDEuNzVlbSAxLjc1ZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC43KSwgMGVtIDIuNWVtIDAgMGVtICNmZmZmZmYsIC0xLjhlbSAxLjhlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjIpLCAtMi42ZW0gMGVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuMiksIC0xLjhlbSAtMS44ZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC4yKTtcXG4gICAgfVxcbiAgICA2Mi41JSB7XFxuICAgICAgYm94LXNoYWRvdzogMGVtIC0yLjZlbSAwZW0gMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuMiksIDEuOGVtIC0xLjhlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjIpLCAyLjVlbSAwZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC4yKSwgMS43NWVtIDEuNzVlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjUpLCAwZW0gMi41ZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC43KSwgLTEuOGVtIDEuOGVtIDAgMGVtICNmZmZmZmYsIC0yLjZlbSAwZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC4yKSwgLTEuOGVtIC0xLjhlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjIpO1xcbiAgICB9XFxuICAgIDc1JSB7XFxuICAgICAgYm94LXNoYWRvdzogMGVtIC0yLjZlbSAwZW0gMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuMiksIDEuOGVtIC0xLjhlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjIpLCAyLjVlbSAwZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC4yKSwgMS43NWVtIDEuNzVlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjIpLCAwZW0gMi41ZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC41KSwgLTEuOGVtIDEuOGVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuNyksIC0yLjZlbSAwZW0gMCAwZW0gI2ZmZmZmZiwgLTEuOGVtIC0xLjhlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjIpO1xcbiAgICB9XFxuICAgIDg3LjUlIHtcXG4gICAgICBib3gtc2hhZG93OiAwZW0gLTIuNmVtIDBlbSAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC4yKSwgMS44ZW0gLTEuOGVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuMiksIDIuNWVtIDBlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjIpLCAxLjc1ZW0gMS43NWVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuMiksIDBlbSAyLjVlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjIpLCAtMS44ZW0gMS44ZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC41KSwgLTIuNmVtIDBlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjcpLCAtMS44ZW0gLTEuOGVtIDAgMGVtICNmZmZmZmY7XFxuICAgIH1cXG4gIH1cXG5cXG4gIGZvb3RlciB7XFxuICAgIG1hcmdpbi10b3A6IGF1dG87ICAgIFxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTZweDtcXG4gICAgY29sb3I6IHJnYigyMDQsIDIwMiwgMjAyKTtcXG5cXG4gICAgYSB7XFxuICAgICAgICBjb2xvcjogcmdiKDEyMCwgMTc5LCAyNDcpO1xcbiAgICB9XFxuICB9XFxuXFxuXFxuXFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgcmVuZGVyRGFpbHlXZWF0aGVyIH0gZnJvbSAnLi91aSc7XG5pbXBvcnQgeyByZW5kZXJUb2RheVdlYXRoZXJJbmZvQ2FyZCB9IGZyb20gXCIuL3VpXCI7XG5pbXBvcnQgeyBsb2FkaW5nIH0gZnJvbSAnLi91aSc7XG5cbmV4cG9ydCBjb25zdCBnZXRXZWF0aGVyID0gYXN5bmMgKGxvY2F0aW9uKSA9PiB7XG4gICAgY29uc3QgdW5pdHNDaGVja2JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51bml0cy1jaGVja2JveCcpO1xuICAgIGNvbnN0IHVuaXRzID0gdW5pdHNDaGVja2JveC5jaGVja2VkID8gJ3VzJyA6ICdtZXRyaWMnO1xuXG4gICAgY29uc3QgYXBpS2V5ID0gJ1pGRVo5RkI2TExZWlVaOURGRFU3R0pUTUQnO1xuICAgIGNvbnN0IHVybCA9IGBodHRwczovL3dlYXRoZXIudmlzdWFsY3Jvc3NpbmcuY29tL1Zpc3VhbENyb3NzaW5nV2ViU2VydmljZXMvcmVzdC9zZXJ2aWNlcy90aW1lbGluZS8ke2xvY2F0aW9ufT91bml0R3JvdXA9JHt1bml0c30ma2V5PSR7YXBpS2V5fWA7ICAgIFxuICAgIFxuICAgIGxvYWRpbmcoJ3N0YXJ0ZWQnKTtcblxuICAgIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHsgbW9kZTogJ2NvcnMnfSk7XG4gICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVycm9yLW1lc3NhZ2UnKTsgICAgXG4gICAgXG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICBsb2FkaW5nKCdmaW5pc2hlZCcpO1xuXG4gICAgICAgIGVycm9yTWVzc2FnZS5pbm5lclRleHQgPSBcIlNvcnJ5LCBubyBsb2NhdGlvbiBmb3VuZFwiO1xuICAgICAgICBlcnJvck1lc3NhZ2UuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gZXJyb3JNZXNzYWdlLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpLCAzMDAwKTtcblxuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZGF0YSA9IHdlYXRoZXJEYXRhTWFwcGVyKGF3YWl0IHJlc3BvbnNlLmpzb24oKSk7XG4gICAgXG4gICAgcmVuZGVyVG9kYXlXZWF0aGVySW5mb0NhcmQoZGF0YSk7XG4gICAgcmVuZGVyRGFpbHlXZWF0aGVyKGRhdGEpOyAgICBcbiAgICBsb2FkaW5nKCdmaW5pc2hlZCcpOyAgICBcblxuICAgIH0gY2F0Y2ggKGVycm9yKSB7ICAgICAgICBcbiAgICAgICAgY29uc29sZS5lcnJvcignRmV0Y2ggd2VhdGhlciBBUEkgaXMgZmFpbGVkJywgZXJyb3IpO1xuICAgIH07XG59XG5cbmZ1bmN0aW9uIHdlYXRoZXJEYXRhTWFwcGVyKGRhdGEpIHsgICAgXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbG9jYXRpb246IGRhdGEucmVzb2x2ZWRBZGRyZXNzLnNwbGl0KFwiLFwiKVswXSxcbiAgICAgICAgdGVtcGVyYXR1cmU6IFN0cmluZyhkYXRhLmN1cnJlbnRDb25kaXRpb25zLnRlbXApLnNwbGl0KFwiLlwiKVswXSxcbiAgICAgICAgZGF0ZTogbmV3IERhdGUoKS50b0xvY2FsZURhdGVTdHJpbmcoKSxcbiAgICAgICAgdGltZTogbmV3IERhdGUoKS50b0xvY2FsZVRpbWVTdHJpbmcoKS5zbGljZSgwLCAtMyksXG4gICAgICAgIGNvbmRpdGlvbnM6IGRhdGEuY3VycmVudENvbmRpdGlvbnMuY29uZGl0aW9ucyxcbiAgICAgICAgaHVtaWRpdHk6IFN0cmluZyhkYXRhLmN1cnJlbnRDb25kaXRpb25zLmh1bWlkaXR5KS5zcGxpdChcIi5cIilbMF0sXG4gICAgICAgIHdpbmRTcGVlZDogU3RyaW5nKGRhdGEuY3VycmVudENvbmRpdGlvbnMud2luZHNwZWVkKS5zcGxpdChcIi5cIilbMF0sXG4gICAgICAgIGljb246IGRhdGEuY3VycmVudENvbmRpdGlvbnMuaWNvbixcbiAgICAgICAgaG91cmx5Rm9yZWNhc3Q6IGRhdGEuZGF5c1swXS5ob3Vycy5tYXAoaG91ciA9PiAoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWU6IGhvdXIuZGF0ZXRpbWUuc2xpY2UoMCwgMiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGVyYXR1cmU6IFN0cmluZyhob3VyLnRlbXApLnNwbGl0KFwiLlwiKVswXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiBob3VyLmljb25cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKSxcbiAgICAgICAgd2Vla0ZvcmVjYXN0OiBkYXRhLmRheXMuc2xpY2UoMSwgOCkubWFwKGRheSA9PiAoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdlZWtEYXk6IG5ldyBEYXRlKGRheS5kYXRldGltZSkudG9Mb2NhbGVEYXRlU3RyaW5nKCdlbi1VUycsIHt3ZWVrZGF5OiAnbG9uZyd9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhUZW1wZXJhdHVyZTogU3RyaW5nKGRheS50ZW1wbWF4KS5zcGxpdChcIi5cIilbMF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluVGVtcGVyYXR1cmU6IFN0cmluZyhkYXkudGVtcG1pbikuc3BsaXQoXCIuXCIpWzBdLCAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246IGRheS5pY29uXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSkgICAgICAgIFxuICAgIH07XG59IiwiZXhwb3J0IGNvbnN0IHJlbmRlckRhaWx5V2VhdGhlciA9ICh3ZWF0aGVyKSA9PiB7XG4gICAgY29uc3Qgd2Vla1dlYXRoZXJJbmZvQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlZWstd2VhdGhlci1pbmZvLWNvbnRhaW5lcicpO1xuICAgIHdlZWtXZWF0aGVySW5mb0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcblxuICAgIHdlYXRoZXIud2Vla0ZvcmVjYXN0Lm1hcCgoZWxlbWVudCkgPT4geyAgICAgICBcbiAgICAgICAgd2Vla1dlYXRoZXJJbmZvQ29udGFpbmVyLmlubmVySFRNTCArPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ3ZWVrLWRheS13ZWF0aGVyLXJvd1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3ZWVrLWRheS1uYW1lXCI+JHtlbGVtZW50LndlZWtEYXl9PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIndlZWstZGF5LXdlYXRoZXItaW1hZ2VcIj5cbiAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIGNsYXNzPVwid2Vlay1kYXktd2VhdGhlci1pY29uXCJcbiAgICAgICAgICAgICAgc3JjPVwiaW1hZ2VzL3dlYXRoZXItaW1hZ2VzLWZpbGxlZC8ke2VsZW1lbnQuaWNvbn0uc3ZnXCJcbiAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj4gICAgXG4gICAgICAgICAgPGRpdiBjbGFzcz1cIndlZWstZGF5LXRlbXBlcmF0dXJlXCI+PHN1cD4mdWFycjs8L3N1cD4ke2VsZW1lbnQubWF4VGVtcGVyYXR1cmV9wrA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwid2Vlay1uaWdodC10ZW1wZXJhdHVyZVwiPjxzdXA+JmRhcnI7PC9zdXA+JHtlbGVtZW50Lm1pblRlbXBlcmF0dXJlfcKwPC9kaXY+ICAgICAgICAgICAgICAgIFxuICAgICAgICA8L2Rpdj5gICAgICAgICAgICAgICAgICBcbiAgICB9KTtcblxuICAgIHdlZWtXZWF0aGVySW5mb0NvbnRhaW5lci5jaGlsZHJlblswXS5zdHlsZS5ib3JkZXIgPSAnbm9uZSc7XG59XG5cbmV4cG9ydCBjb25zdCByZW5kZXJUb2RheVdlYXRoZXJJbmZvQ2FyZCA9ICh3ZWF0aGVyKSA9PiB7XG4gICAgY29uc3QgdG9kYXlXZWF0aGVySW5mb0NhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kYXktaW5mby1jYXJkJyk7XG4gICAgdG9kYXlXZWF0aGVySW5mb0NhcmQuaW5uZXJIVE1MID0gJyc7XG4gICAgXG4gICAgY29uc3QgbWFpbldlYXRoZXJJbmZvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWFpbldlYXRoZXJJbmZvRGl2LmNsYXNzTGlzdC5hZGQoJ3RvZGF5LXdlYXRoZXItbWFpbi1pbmZvJyk7XG4gICAgbWFpbldlYXRoZXJJbmZvRGl2LmlubmVySFRNTCA9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImxvY2F0aW9uLW5hbWVcIj4ke3dlYXRoZXIubG9jYXRpb259PC9kaXY+ICAgICAgICAgICAgICAgICAgIFxuICAgICAgICA8aW1nIHNyYz1cImltYWdlcy93ZWF0aGVyLWltYWdlcy1maWxsZWQvJHt3ZWF0aGVyLmljb259LnN2Z1wiPiAgICAgICBcbiAgICAgICAgPGRpdiBjbGFzcz1cInRvZGF5LXRlbXBlcmF0dXJlXCI+JHt3ZWF0aGVyLnRlbXBlcmF0dXJlfcKwPC9kaXY+ICAgICAgICAgIFxuICAgICAgICA8ZGl2IGNsYXNzPVwidG9kYXktY29uZGl0aW9uc1wiPiR7d2VhdGhlci5jb25kaXRpb25zfTwvZGl2PiAgICAgICBcbiAgICBgOyBcbiAgICBcbiAgICBjb25zdCBhZGRpdGlvbmFsV2VhdGhlckluZm9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhZGRpdGlvbmFsV2VhdGhlckluZm9EaXYuY2xhc3NMaXN0LmFkZCgndG9kYXktd2VhdGhlci1leHRyYS1pbmZvJyk7XG4gICAgYWRkaXRpb25hbFdlYXRoZXJJbmZvRGl2LmlubmVySFRNTCA9IGBcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXRlLXdyYXBcIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltYWdlcy9kYXRlLnN2Z1wiPiBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGF0ZVwiPiR7d2VhdGhlci5kYXRlfTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGltZS13cmFwXCI+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWFnZXMvdGltZS5zdmdcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGltZVwiPiR7d2VhdGhlci50aW1lfTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImh1bWlkaXR5LXdyYXBcIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltYWdlcy93ZWF0aGVyLWltYWdlcy1saW5lZC9odW1pZGl0eS5zdmdcIj4gICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJodW1pZGl0eVwiPiR7d2VhdGhlci5odW1pZGl0eX0lPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3aW5kLXdyYXBcIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltYWdlcy93ZWF0aGVyLWltYWdlcy1saW5lZC93aW5kLnN2Z1wiPiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3aW5kXCI+PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgIDwvZGl2PlxuICAgIGA7XG4gICAgXG4gICAgY29uc3QgaG91cmx5V2VhdGhlckluZm9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBob3VybHlXZWF0aGVySW5mb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdob3VybHktd2VhdGhlci1pbmZvLWNvbnRhaW5lcicpO1xuXG4gICAgY29uc3Qgc2xpZGVyV3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIFxuICAgIGhvdXJseVdlYXRoZXJJbmZvQ29udGFpbmVyLmlubmVySFRNTCA9IHJlbmRlclNsaWRlck5hdmlnYXRpb25QYW5lbCgpO1xuICAgIGhvdXJseVdlYXRoZXJJbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKHNsaWRlcldyYXApO1xuXG4gICAgc2xpZGVyV3JhcC5jbGFzc0xpc3QuYWRkKCdzbGlkZXItd3JhcCcpO1xuICAgIHNsaWRlcldyYXAuaW5uZXJIVE1MID0gcmVuZGVyU2xpZGVyKCk7ICAgXG5cbiAgICB0b2RheVdlYXRoZXJJbmZvQ2FyZC5hcHBlbmQobWFpbldlYXRoZXJJbmZvRGl2LCBhZGRpdGlvbmFsV2VhdGhlckluZm9EaXYsIGhvdXJseVdlYXRoZXJJbmZvQ29udGFpbmVyKTtcbiAgICBcbiAgICByZW5kZXJIb3VybHlXZWF0aGVySW5mbyh3ZWF0aGVyKTtcbiAgICByZW5kZXJXaW5kU3BlZWQod2VhdGhlci53aW5kU3BlZWQpO1xuICAgIGFkZEV2ZW50TGlzdGVuZXJUb1NsaWRlcigpO1xuXG4gICAgcmV0dXJuIHRvZGF5V2VhdGhlckluZm9DYXJkO1xufVxuXG5jb25zdCByZW5kZXJIb3VybHlXZWF0aGVySW5mbyA9ICh3ZWF0aGVyKSA9PiB7XG4gICAgY29uc3Qgc2xpZGVyQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZXItY29udGVudCcpO1xuXG4gICAgd2VhdGhlci5ob3VybHlGb3JlY2FzdC5tYXAoKGhvdXIpID0+IHsgICAgICAgXG4gICAgICAgIHNsaWRlckNvbnRlbnQuaW5uZXJIVE1MICs9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImhvdXJseS13ZWF0aGVyLWNvbHVtblwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJob3VybHktd2VhdGhlci10aW1lXCI+JHtob3VyLnRpbWV9PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImhvdXJseS13ZWF0aGVyLWltYWdlXCI+XG4gICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBjbGFzcz1cImhvdXJseS13ZWF0aGVyLWltYWdlXCJcbiAgICAgICAgICAgICAgc3JjPVwiaW1hZ2VzL3dlYXRoZXItaW1hZ2VzLWxpbmVkLyR7aG91ci5pY29ufS5zdmdcIlxuICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PiAgICBcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaG91cmx5LXdlYXRoZXItdGVtcGVyYXR1cmVcIj4ke2hvdXIudGVtcGVyYXR1cmV9wrA8L2Rpdj4gICAgICAgICAgICAgICBcbiAgICAgICAgPC9kaXY+YCAgICAgICAgIFxuICAgIH0pO1xufVxuXG5jb25zdCByZW5kZXJTbGlkZXIgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGAgICAgICAgIFxuICAgICAgICA8ZGl2IGNsYXNzPVwic2xpZGVyLWNvbnRlbnRcIj48L2Rpdj4gICAgICAgICAgICAgICAgXG4gICAgYDtcbn1cblxuY29uc3QgcmVuZGVyU2xpZGVyTmF2aWdhdGlvblBhbmVsID0gKCkgPT4ge1xuICAgIHJldHVybiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJuYXYtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8YnV0dG9uIGlkPVwiYnV0dG9uLXByZXZpb3VzXCI+PC9idXR0b24+ICAgICAgICAgICBcbiAgICAgICAgICAgIDxidXR0b24gaWQ9XCJidXR0b24tbmV4dFwiPjwvYnV0dG9uPiAgICAgICAgICAgIFxuICAgICAgICA8L2Rpdj4gXG4gICAgYFxufVxuXG5jb25zdCByZW5kZXJXaW5kU3BlZWQgPSAod2luZFNwZWVkKSA9PiB7XG4gICAgY29uc3Qgd2luZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aW5kJyk7XG4gICAgY29uc3QgdW5pdHNDaGVja2JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51bml0cy1jaGVja2JveCcpO1xuICAgIGNvbnN0IHVuaXQgPSB1bml0c0NoZWNrYm94LmNoZWNrZWQgPyAnbXBoJyA6ICdrbS9oJztcblxuICAgIHdpbmQuaW5uZXJIVE1MID0gd2luZFNwZWVkICsgdW5pdDtcbn1cblxuXG5jb25zdCBhZGRFdmVudExpc3RlbmVyVG9TbGlkZXIgPSAoKSA9PiB7XG4gICAgY29uc3Qgc2xpZGVyQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2xpZGVyLWNvbnRlbnRcIik7XG4gICAgY29uc3QgYnV0dG9uTmV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnV0dG9uLW5leHRcIik7XG4gICAgY29uc3QgYnV0dG9uUHJldmlvdXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ1dHRvbi1wcmV2aW91c1wiKTsgICAgXG5cbiAgICBsZXQgY3VycmVudEluZGV4ID0gMDtcblxuICAgIGNvbnN0IHNsaWRlID0gKGluZGV4KSA9PiB7ICAgXG4gICAgICAgIGlmIChpbmRleCA8IDApIHtcbiAgICAgICAgICAgIGluZGV4ID0gMiAtMTsgICAgICAgIFxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChpbmRleCA+PSAyKSB7XG4gICAgICAgICAgICBpbmRleCA9IDA7ICAgICAgICBcbiAgICAgICAgfTsgICAgIFxuICAgICAgICBcbiAgICAgICAgc2xpZGVyQ29udGVudC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgtJHsoaW5kZXggLyAyKSAqIDEwMH0lKWA7XG4gICAgICAgIGN1cnJlbnRJbmRleCA9IGluZGV4OyAgIFxuICAgIH07XG5cbiAgICBidXR0b25OZXh0Lm9uY2xpY2sgPSAoKSA9PiB7ICAgICAgICAgICBcbiAgICAgICAgc2xpZGUoY3VycmVudEluZGV4ICsgMSk7XG4gICAgfTtcblxuICAgIGJ1dHRvblByZXZpb3VzLm9uY2xpY2sgPSAoKSA9PiB7ICAgXG4gICAgICAgIHNsaWRlKGN1cnJlbnRJbmRleCAtIDEpO1xuICAgIH07XG59XG5cbmV4cG9ydCBjb25zdCBsb2FkaW5nID0gKHN0YXRlKSA9PiB7XG4gICAgY29uc3QgbG9hZGluZ1NwaW5uZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9hZGVyJyk7XG5cbiAgICBpZiAoc3RhdGUgPT09ICdzdGFydGVkJykge1xuICAgICAgbG9hZGluZ1NwaW5uZXIuY2xhc3NMaXN0LmFkZCgnbG9hZGVyLWFjdGl2ZScpOyAgICAgXG4gICAgfSBlbHNlIHtcbiAgICAgIGxvYWRpbmdTcGlubmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2xvYWRlci1hY3RpdmUnKTtcbiAgICB9XG59XG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQgJiYgZG9jdW1lbnQuY3VycmVudFNjcmlwdC50YWdOYW1lLnRvVXBwZXJDYXNlKCkgPT09ICdTQ1JJUFQnKVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBnZXRXZWF0aGVyIH0gZnJvbSAnLi9tb2R1bGVzL2dldFdlYXRoZXInO1xuXG5jb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1mb3JtJyk7XG5cbmZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgdXNlcklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1pbnB1dCcpO1xuICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lcnJvci1tZXNzYWdlJyk7XG4gICAgICBcbiAgICBpZiAoIWlzVmFsaWQodXNlcklucHV0LnZhbHVlKSkgeyAgICAgICAgXG4gICAgICAgIGVycm9yTWVzc2FnZS5pbm5lclRleHQgPSBcIlBsZWFzZSBlbnRlciBhIGxvY2F0aW9uXCI7XG4gICAgICAgIGVycm9yTWVzc2FnZS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBlcnJvck1lc3NhZ2UuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyksIDMwMDApO1xuXG4gICAgICAgIHJldHVybjtcbiAgICB9O1xuXG4gICAgZ2V0V2VhdGhlcih1c2VySW5wdXQudmFsdWUpO1xuICAgIHVzZXJJbnB1dC52YWx1ZSA9ICcnO1xufSk7XG5cbmNvbnN0IHVuaXRDaGVja2JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51bml0cy1jaGVja2JveCcpO1xuXG51bml0Q2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgY3VycmVudExvY2F0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvY2F0aW9uLW5hbWUnKTtcbiAgICBcbiAgICBnZXRXZWF0aGVyKGN1cnJlbnRMb2NhdGlvbi5pbm5lclRleHQpO1xufSk7XG5cbmNvbnN0IGlzVmFsaWQgPSAodXNlcklucHV0KSA9PiB7ICAgICBcbiAgICBpZiAodXNlcklucHV0ID09PSBcIlwiKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7ICAgXG59XG5cbmdldFdlYXRoZXIoXCJEdWJsaW5cIik7XG5cblxuXG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9