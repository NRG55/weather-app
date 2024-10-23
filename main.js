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

/* -----------------HEADER------------------ */

.top-nav {   
    display: grid;    
    align-items: center;
    grid-template-columns: 1fr 360px 1fr; 
    padding: 40px;  
}

.logo {
    display: flex;
    align-items: center;
    color: #2885C7;
    justify-self: center;
    font-weight: bold;
    font-size: 20px;
    transform: scaleX(0.9);
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;

    img {
        width: 36px; 
        margin-right: 8px;
        transform: scaleX(1.1);
    }
    
    span:nth-child(2) {
        color: #F59E0B;
    }
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

/* -------------------MAIN-------------------- */

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

 .today-weather-main-info {
    display: grid;
    grid-template-rows: auto 100px 36px 1fr;
    justify-items: center;
    align-items: center;

    img {   
        width: 124px;            
     }
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
    grid-template-columns: 1fr 1fr;
    justify-self: center; 
    align-self:center;
    justify-items: center;
    
    img {
        width: 40px;       
    }
    
    .humidity-wrap, 
    .wind-wrap {
        display: grid;
        grid-template-columns: auto 48px;
        align-items: center;       
        padding-bottom: 20px;        
    }
    
    .humidity-wrap img, 
    .wind-wrap img {
        width: 32px;       
    }
    
    .humidity, 
    .wind {
        font-size: 16px;        
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
        color: #F59E0B;
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

 /* --------Hourly-weather-navigation-------- */

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

/* ------------Temperature-units-switch------------ */

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

/* --------------Spinning-loader-------------- */

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

  /* ----------------FOOTER------------------- */

  footer {
    margin-top: auto;    
    text-align: center;
    width: 100%;
    padding-bottom: 16px;
    color: rgb(204, 202, 202);

    a {
        color: #2885C7;
    }
  }




`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700&display=swap');\n\n:root {\n    --light-grey: rgba(255, 255, 255, .2);\n    --half-transparent: rgba(0, 0, 0, 0.5);\n}\n\n* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\nhtml, body {\n    height: 100%;\n    display: flex; \n    flex-direction: column;\n    background-image: linear-gradient(rgba(0, 0, 0, 0.4), \n                                      rgba(0, 0, 0, 0.4)),\n                      url('./images/wallpaper.jpg');\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: cover;     \n    font-family: 'Nunito', sans-serif;   \n}\n\n/* -----------------HEADER------------------ */\n\n.top-nav {   \n    display: grid;    \n    align-items: center;\n    grid-template-columns: 1fr 360px 1fr; \n    padding: 40px;  \n}\n\n.logo {\n    display: flex;\n    align-items: center;\n    color: #2885C7;\n    justify-self: center;\n    font-weight: bold;\n    font-size: 20px;\n    transform: scaleX(0.9);\n    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;\n\n    img {\n        width: 36px; \n        margin-right: 8px;\n        transform: scaleX(1.1);\n    }\n    \n    span:nth-child(2) {\n        color: #F59E0B;\n    }\n}\n\n.top-nav form {\n    justify-self: center;    \n}\n\n.search-container {\n    position: relative;\n    display: grid;\n    grid-template-columns: 1fr auto;  \n}\n\n.error-message {\n    position: absolute;\n    display: none;\n    bottom: -24px;\n    left: 20px;\n    color: #e9b31f;   \n}\n\n.search-input {\n    height: 40px;\n    padding: 10px;\n    border: 1px solid rgba(199, 109, 109, 0.2);\n    border-right: transparent;\n    border-radius: 50px 0px 0px 50px;\n    font-size: 16px;\n    background-color: var(--half-transparent);\n    outline: none;\n    color: white;\n    \n    &.search-input::-webkit-search-cancel-button {\n        display: none;\n    } \n}\n\n.search-input::placeholder {\n    color: rgb(177, 177, 179);\n}\n\n.search-submit-button {\n    cursor: pointer;   \n    height: 40px;\n    width: 40px;\n    color: white;\n    background-color: var(--half-transparent);\n    border: 1px solid var(--light-grey);\n    border-radius: 0px 50px 50px 0px;\n    border-left: transparent;\n\n    img {\n        height: 24px;\n        width: 24px;\n    }\n}\n\n/* -------------------MAIN-------------------- */\n\nmain {  \n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;   \n    gap: 40px;\n    padding: 40px;     \n} \n\n.today-info-card {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 3fr 1fr;\n    justify-self: center;\n    width: 540px;\n    height: 400px;  \n    border: 1px solid var(--light-grey);\n    border-radius: 16px;\n    padding: 20px;    \n    color: white;\n    background-color: var(--half-transparent);    \n } \n\n .today-weather-main-info {\n    display: grid;\n    grid-template-rows: auto 100px 36px 1fr;\n    justify-items: center;\n    align-items: center;\n\n    img {   \n        width: 124px;            \n     }\n }\n\n .today-weather-extra-info {\n    display: grid;\n    grid-template-rows: 40px 1fr;\n    justify-items: end;     \n }\n\n .today-weather-extra-info > div:first-of-type {\n    img {\n        width: 20px;\n        justify-self: end; \n        margin-right: 8px;\n        opacity: 0.6;      \n    }\n\n    .date-wrap,\n    .time-wrap {\n        display: grid;\n        grid-template-columns: 1fr 1fr;\n        align-items: center;         \n    }\n }\n\n .today-weather-extra-info > div:nth-child(2) {\n    display: grid; \n    grid-template-columns: 1fr 1fr;\n    justify-self: center; \n    align-self:center;\n    justify-items: center;\n    \n    img {\n        width: 40px;       \n    }\n    \n    .humidity-wrap, \n    .wind-wrap {\n        display: grid;\n        grid-template-columns: auto 48px;\n        align-items: center;       \n        padding-bottom: 20px;        \n    }\n    \n    .humidity-wrap img, \n    .wind-wrap img {\n        width: 32px;       \n    }\n    \n    .humidity, \n    .wind {\n        font-size: 16px;        \n    }\n}\n\n .location-name {\n    font-size: 40px;\n    font-weight: bold;\n }\n \n .today-temperature {\n    font-size: 40px;\n    font-weight: bold;\n }\n\n .today-conditions {\n    font-size: 20px;\n }\n\n .week-weather-info-container {\n    display: grid;\n    color: white;   \n    max-width: 540px;\n }\n\n .week-day-weather-row {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr 1fr;\n    gap: 20px;\n    border-top: 1px solid var(--light-grey);\n    align-items: center;\n    justify-items: center;\n    \n    .week-day-name {\n        justify-self: start;\n        text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;\n        font-size: 20px;\n        font-weight: 600;\n        color: #F59E0B;\n    }\n\n    .week-day-temperature,\n    .week-night-temperature {\n        font-size: 20px;\n        font-weight: 600;        \n    }\n\n    .week-night-temperature {\n        font-weight: 400;\n        opacity: 0.7;\n    }\n } \n\n .hourly-weather-info-container {\n    position: relative;\n    display: grid;\n    grid-column: 1 / 3;\n    padding: 0 32px;    \n }\n\n .hourly-weather-column {\n    display: grid;\n    justify-items: center;\n    align-items: center;\n    width: 36px;\n    gap: 4px;\n }\n\n /* --------Hourly-weather-navigation-------- */\n\n .slider-wrap {    \n    position: relative;\n    overflow: hidden;\n    width: 432px;\n    justify-self: center; \n    border-top: 1px solid var(--light-grey); \n    padding-top: 8px;  \n }\n\n .slider-content {\n    display: grid;\n    grid-auto-flow: column;\n    position: absolute;           \n }\n\n .nav-container {\n    position: absolute;   \n    width: 100%;\n    height: 100%;   \n    display: flex;\n    justify-content: space-between;\n    align-items: center;    \n }\n\n#button-previous {\n    background: url(./images/chevron-left.svg) no-repeat;\n    background-position: 55% 50%;     \n}\n\n#button-next {\n    background: url(./images/chevron-right.svg) no-repeat; \n    background-position: 45% 50%;    \n}\n\n#button-previous,\n#button-next {\n    cursor: pointer;\n    border: none;      \n    border-radius: 50%;\n    width: 18px;\n    height: 18px;    \n    background-size: 36px;\n    opacity: 40%;\n    \n    &:hover {\n        opacity: 80%;\n    }\n}\n\n.hourly-weather-image {\n    height: 28px;\n    width: 28px;\n}\n\n.hourly-weather-time {\n    opacity: 0.6;\n}\n\n.week-day-weather-image img {\n    display: grid;\n    height: 48px;\n    width: 48px;\n    align-self: center;\n}\n\n/* ------------Temperature-units-switch------------ */\n\n.switch {\n    position: relative;\n    display: inline-block;\n    width: 66px;\n    height: 40px;\n    border: 1px solid var(--light-grey);\n    border-radius: 50px;\n    background-color: var(--half-transparent);\n}  \n\n.switch input {\n    opacity: 0;\n    width: 0;\n    height: 0;\n}  \n\n.slider {\n    position: absolute;\n    cursor: pointer;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    -webkit-transition: .4s;\n    transition: .4s;\n}\n\n.slider:before {\n    position: absolute;    \n    height: 28px;\n    width: 28px;\n    left: 4px;\n    bottom: 4px;\n    content: \"°C\";\n    display: grid;\n    place-content: center;\n    color: #1e3c72;\n    font-weight: 900;\n    background-color: #dadfe7;\n    -webkit-transition: .4s;\n    transition: .4s;    \n}\n\ninput:checked + .slider:before {\n    content: '°F';    \n}  \n\ninput:checked + .slider:before {\n    -webkit-transform: translateX(26px);\n    -ms-transform: translateX(26px);\n    transform: translateX(26px);\n} \n\n.slider.round:before {\n    border-radius: 50%;\n}\n\n.active {\n    display: block;\n}\n\n/* --------------Spinning-loader-------------- */\n\n.loader {    \n    position: absolute;\n    display: none;\n    bottom: -40px;\n    left: 50%;\n    transform: translate(-50%);\n    font-size: 8px;\n    width: 1em;\n    height: 1em;\n    border-radius: 50%;   \n    animation: spin 1.1s infinite ease;\n    transform: translateZ(0);    \n  \n    &.loader-active {\n        display: block;\n    }\n}\n\n  @keyframes spin {\n    0%,\n    100% {\n      box-shadow: 0em -2.6em 0em 0em #ffffff, 1.8em -1.8em 0 0em rgba(255,255,255, 0.2), 2.5em 0em 0 0em rgba(255,255,255, 0.2), 1.75em 1.75em 0 0em rgba(255,255,255, 0.2), 0em 2.5em 0 0em rgba(255,255,255, 0.2), -1.8em 1.8em 0 0em rgba(255,255,255, 0.2), -2.6em 0em 0 0em rgba(255,255,255, 0.5), -1.8em -1.8em 0 0em rgba(255,255,255, 0.7);\n    }\n    12.5% {\n      box-shadow: 0em -2.6em 0em 0em rgba(255,255,255, 0.7), 1.8em -1.8em 0 0em #ffffff, 2.5em 0em 0 0em rgba(255,255,255, 0.2), 1.75em 1.75em 0 0em rgba(255,255,255, 0.2), 0em 2.5em 0 0em rgba(255,255,255, 0.2), -1.8em 1.8em 0 0em rgba(255,255,255, 0.2), -2.6em 0em 0 0em rgba(255,255,255, 0.2), -1.8em -1.8em 0 0em rgba(255,255,255, 0.5);\n    }\n    25% {\n      box-shadow: 0em -2.6em 0em 0em rgba(255,255,255, 0.5), 1.8em -1.8em 0 0em rgba(255,255,255, 0.7), 2.5em 0em 0 0em #ffffff, 1.75em 1.75em 0 0em rgba(255,255,255, 0.2), 0em 2.5em 0 0em rgba(255,255,255, 0.2), -1.8em 1.8em 0 0em rgba(255,255,255, 0.2), -2.6em 0em 0 0em rgba(255,255,255, 0.2), -1.8em -1.8em 0 0em rgba(255,255,255, 0.2);\n    }\n    37.5% {\n      box-shadow: 0em -2.6em 0em 0em rgba(255,255,255, 0.2), 1.8em -1.8em 0 0em rgba(255,255,255, 0.5), 2.5em 0em 0 0em rgba(255,255,255, 0.7), 1.75em 1.75em 0 0em #ffffff, 0em 2.5em 0 0em rgba(255,255,255, 0.2), -1.8em 1.8em 0 0em rgba(255,255,255, 0.2), -2.6em 0em 0 0em rgba(255,255,255, 0.2), -1.8em -1.8em 0 0em rgba(255,255,255, 0.2);\n    }\n    50% {\n      box-shadow: 0em -2.6em 0em 0em rgba(255,255,255, 0.2), 1.8em -1.8em 0 0em rgba(255,255,255, 0.2), 2.5em 0em 0 0em rgba(255,255,255, 0.5), 1.75em 1.75em 0 0em rgba(255,255,255, 0.7), 0em 2.5em 0 0em #ffffff, -1.8em 1.8em 0 0em rgba(255,255,255, 0.2), -2.6em 0em 0 0em rgba(255,255,255, 0.2), -1.8em -1.8em 0 0em rgba(255,255,255, 0.2);\n    }\n    62.5% {\n      box-shadow: 0em -2.6em 0em 0em rgba(255,255,255, 0.2), 1.8em -1.8em 0 0em rgba(255,255,255, 0.2), 2.5em 0em 0 0em rgba(255,255,255, 0.2), 1.75em 1.75em 0 0em rgba(255,255,255, 0.5), 0em 2.5em 0 0em rgba(255,255,255, 0.7), -1.8em 1.8em 0 0em #ffffff, -2.6em 0em 0 0em rgba(255,255,255, 0.2), -1.8em -1.8em 0 0em rgba(255,255,255, 0.2);\n    }\n    75% {\n      box-shadow: 0em -2.6em 0em 0em rgba(255,255,255, 0.2), 1.8em -1.8em 0 0em rgba(255,255,255, 0.2), 2.5em 0em 0 0em rgba(255,255,255, 0.2), 1.75em 1.75em 0 0em rgba(255,255,255, 0.2), 0em 2.5em 0 0em rgba(255,255,255, 0.5), -1.8em 1.8em 0 0em rgba(255,255,255, 0.7), -2.6em 0em 0 0em #ffffff, -1.8em -1.8em 0 0em rgba(255,255,255, 0.2);\n    }\n    87.5% {\n      box-shadow: 0em -2.6em 0em 0em rgba(255,255,255, 0.2), 1.8em -1.8em 0 0em rgba(255,255,255, 0.2), 2.5em 0em 0 0em rgba(255,255,255, 0.2), 1.75em 1.75em 0 0em rgba(255,255,255, 0.2), 0em 2.5em 0 0em rgba(255,255,255, 0.2), -1.8em 1.8em 0 0em rgba(255,255,255, 0.5), -2.6em 0em 0 0em rgba(255,255,255, 0.7), -1.8em -1.8em 0 0em #ffffff;\n    }\n  }\n\n  /* ----------------FOOTER------------------- */\n\n  footer {\n    margin-top: auto;    \n    text-align: center;\n    width: 100%;\n    padding-bottom: 16px;\n    color: rgb(204, 202, 202);\n\n    a {\n        color: #2885C7;\n    }\n  }\n\n\n\n\n"],"sourceRoot":""}]);
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
        sunrise: data.currentConditions.sunrise.slice(0,5),
        sunset: data.currentConditions.sunset.slice(0,5),
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
            <div class="sunrise-wrap">
                <img src="images/weather-images-lined/sunrise.svg">            
                <div class="sunrise">${weather.sunrise}</div>
            </div>
            <div class="sunset-wrap">
                <img src="images/weather-images-lined/sunset.svg">            
                <div class="sunset">${weather.sunset}</div>
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLHlIQUF5QztBQUNyRiw0Q0FBNEMsK0hBQTRDO0FBQ3hGLDRDQUE0QyxpSUFBNkM7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRiwrR0FBK0csSUFBSSxJQUFJLGtCQUFrQjtBQUN6SSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLG1DQUFtQztBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0IsbUNBQW1DO0FBQ3pEO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0IsbUNBQW1DO0FBQ3pEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQSxPQUFPLGdGQUFnRixZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLE9BQU8sYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLGFBQWEsTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGNBQWMsTUFBTSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsV0FBVyxLQUFLLFVBQVUsTUFBTSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxjQUFjLE1BQU0sVUFBVSxVQUFVLEtBQUssTUFBTSxhQUFhLE1BQU0sVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGNBQWMsTUFBTSxVQUFVLEtBQUssTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLE1BQU0sTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsY0FBYyxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsY0FBYyxNQUFNLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxPQUFPLE1BQU0sVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sYUFBYSxNQUFNLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sTUFBTSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVB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LGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7O0FDQXFCO0FBQzZCOztBQUVsRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxJQUFJLCtEQUFVO0FBQ2Q7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUksK0RBQVU7QUFDZCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnRUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL2dldFdlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy91aS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy93YWxscGFwZXIuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvY2hldnJvbi1sZWZ0LnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL2NoZXZyb24tcmlnaHQuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1OdW5pdG86d2dodEAzMDA7NDAwOzYwMDs3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gICAgLS1saWdodC1ncmV5OiByZ2JhKDI1NSwgMjU1LCAyNTUsIC4yKTtcbiAgICAtLWhhbGYtdHJhbnNwYXJlbnQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuKiB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbn1cblxuaHRtbCwgYm9keSB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7IFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC40KSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJnYmEoMCwgMCwgMCwgMC40KSksXG4gICAgICAgICAgICAgICAgICAgICAgdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7ICAgICBcbiAgICBmb250LWZhbWlseTogJ051bml0bycsIHNhbnMtc2VyaWY7ICAgXG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tSEVBREVSLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi50b3AtbmF2IHsgICBcbiAgICBkaXNwbGF5OiBncmlkOyAgICBcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDM2MHB4IDFmcjsgXG4gICAgcGFkZGluZzogNDBweDsgIFxufVxuXG4ubG9nbyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGNvbG9yOiAjMjg4NUM3O1xuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgwLjkpO1xuICAgIHRleHQtc2hhZG93OiAtMXB4IC0xcHggMCAjMDAwLCAxcHggLTFweCAwICMwMDAsIC0xcHggMXB4IDAgIzAwMCwgMXB4IDFweCAwICMwMDA7XG5cbiAgICBpbWcge1xuICAgICAgICB3aWR0aDogMzZweDsgXG4gICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgxLjEpO1xuICAgIH1cbiAgICBcbiAgICBzcGFuOm50aC1jaGlsZCgyKSB7XG4gICAgICAgIGNvbG9yOiAjRjU5RTBCO1xuICAgIH1cbn1cblxuLnRvcC1uYXYgZm9ybSB7XG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7ICAgIFxufVxuXG4uc2VhcmNoLWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgYXV0bzsgIFxufVxuXG4uZXJyb3ItbWVzc2FnZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgYm90dG9tOiAtMjRweDtcbiAgICBsZWZ0OiAyMHB4O1xuICAgIGNvbG9yOiAjZTliMzFmOyAgIFxufVxuXG4uc2VhcmNoLWlucHV0IHtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE5OSwgMTA5LCAxMDksIDAuMik7XG4gICAgYm9yZGVyLXJpZ2h0OiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4IDBweCAwcHggNTBweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGFsZi10cmFuc3BhcmVudCk7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgXG4gICAgJi5zZWFyY2gtaW5wdXQ6Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24ge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH0gXG59XG5cbi5zZWFyY2gtaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogcmdiKDE3NywgMTc3LCAxNzkpO1xufVxuXG4uc2VhcmNoLXN1Ym1pdC1idXR0b24ge1xuICAgIGN1cnNvcjogcG9pbnRlcjsgICBcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhhbGYtdHJhbnNwYXJlbnQpO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWxpZ2h0LWdyZXkpO1xuICAgIGJvcmRlci1yYWRpdXM6IDBweCA1MHB4IDUwcHggMHB4O1xuICAgIGJvcmRlci1sZWZ0OiB0cmFuc3BhcmVudDtcblxuICAgIGltZyB7XG4gICAgICAgIGhlaWdodDogMjRweDtcbiAgICAgICAgd2lkdGg6IDI0cHg7XG4gICAgfVxufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tTUFJTi0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbm1haW4geyAgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICAgXG4gICAgZ2FwOiA0MHB4O1xuICAgIHBhZGRpbmc6IDQwcHg7ICAgICBcbn0gXG5cbi50b2RheS1pbmZvLWNhcmQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogM2ZyIDFmcjtcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgICB3aWR0aDogNTQwcHg7XG4gICAgaGVpZ2h0OiA0MDBweDsgIFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWxpZ2h0LWdyZXkpO1xuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gICAgcGFkZGluZzogMjBweDsgICAgXG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhhbGYtdHJhbnNwYXJlbnQpOyAgICBcbiB9IFxuXG4gLnRvZGF5LXdlYXRoZXItbWFpbi1pbmZvIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxMDBweCAzNnB4IDFmcjtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIGltZyB7ICAgXG4gICAgICAgIHdpZHRoOiAxMjRweDsgICAgICAgICAgICBcbiAgICAgfVxuIH1cblxuIC50b2RheS13ZWF0aGVyLWV4dHJhLWluZm8ge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA0MHB4IDFmcjtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBlbmQ7ICAgICBcbiB9XG5cbiAudG9kYXktd2VhdGhlci1leHRyYS1pbmZvID4gZGl2OmZpcnN0LW9mLXR5cGUge1xuICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICBqdXN0aWZ5LXNlbGY6IGVuZDsgXG4gICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgICAgICBvcGFjaXR5OiAwLjY7ICAgICAgXG4gICAgfVxuXG4gICAgLmRhdGUtd3JhcCxcbiAgICAudGltZS13cmFwIHtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOyAgICAgICAgIFxuICAgIH1cbiB9XG5cbiAudG9kYXktd2VhdGhlci1leHRyYS1pbmZvID4gZGl2Om50aC1jaGlsZCgyKSB7XG4gICAgZGlzcGxheTogZ3JpZDsgXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgIGp1c3RpZnktc2VsZjogY2VudGVyOyBcbiAgICBhbGlnbi1zZWxmOmNlbnRlcjtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgXG4gICAgaW1nIHtcbiAgICAgICAgd2lkdGg6IDQwcHg7ICAgICAgIFxuICAgIH1cbiAgICBcbiAgICAuaHVtaWRpdHktd3JhcCwgXG4gICAgLndpbmQtd3JhcCB7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byA0OHB4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOyAgICAgICBcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7ICAgICAgICBcbiAgICB9XG4gICAgXG4gICAgLmh1bWlkaXR5LXdyYXAgaW1nLCBcbiAgICAud2luZC13cmFwIGltZyB7XG4gICAgICAgIHdpZHRoOiAzMnB4OyAgICAgICBcbiAgICB9XG4gICAgXG4gICAgLmh1bWlkaXR5LCBcbiAgICAud2luZCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDsgICAgICAgIFxuICAgIH1cbn1cblxuIC5sb2NhdGlvbi1uYW1lIHtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gfVxuIFxuIC50b2RheS10ZW1wZXJhdHVyZSB7XG4gICAgZm9udC1zaXplOiA0MHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuIH1cblxuIC50b2RheS1jb25kaXRpb25zIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gfVxuXG4gLndlZWstd2VhdGhlci1pbmZvLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBjb2xvcjogd2hpdGU7ICAgXG4gICAgbWF4LXdpZHRoOiA1NDBweDtcbiB9XG5cbiAud2Vlay1kYXktd2VhdGhlci1yb3cge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnI7XG4gICAgZ2FwOiAyMHB4O1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1saWdodC1ncmV5KTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBcbiAgICAud2Vlay1kYXktbmFtZSB7XG4gICAgICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XG4gICAgICAgIHRleHQtc2hhZG93OiAtMXB4IC0xcHggMCAjMDAwLCAxcHggLTFweCAwICMwMDAsIC0xcHggMXB4IDAgIzAwMCwgMXB4IDFweCAwICMwMDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgY29sb3I6ICNGNTlFMEI7XG4gICAgfVxuXG4gICAgLndlZWstZGF5LXRlbXBlcmF0dXJlLFxuICAgIC53ZWVrLW5pZ2h0LXRlbXBlcmF0dXJlIHtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwOyAgICAgICAgXG4gICAgfVxuXG4gICAgLndlZWstbmlnaHQtdGVtcGVyYXR1cmUge1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBvcGFjaXR5OiAwLjc7XG4gICAgfVxuIH0gXG5cbiAuaG91cmx5LXdlYXRoZXItaW5mby1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcbiAgICBwYWRkaW5nOiAwIDMycHg7ICAgIFxuIH1cblxuIC5ob3VybHktd2VhdGhlci1jb2x1bW4ge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDM2cHg7XG4gICAgZ2FwOiA0cHg7XG4gfVxuXG4gLyogLS0tLS0tLS1Ib3VybHktd2VhdGhlci1uYXZpZ2F0aW9uLS0tLS0tLS0gKi9cblxuIC5zbGlkZXItd3JhcCB7ICAgIFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdpZHRoOiA0MzJweDtcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjsgXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWxpZ2h0LWdyZXkpOyBcbiAgICBwYWRkaW5nLXRvcDogOHB4OyAgXG4gfVxuXG4gLnNsaWRlci1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XG4gICAgcG9zaXRpb246IGFic29sdXRlOyAgICAgICAgICAgXG4gfVxuXG4gLm5hdi1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgICBcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7ICAgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgICAgXG4gfVxuXG4jYnV0dG9uLXByZXZpb3VzIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSkgbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDU1JSA1MCU7ICAgICBcbn1cblxuI2J1dHRvbi1uZXh0IHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSkgbm8tcmVwZWF0OyBcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA0NSUgNTAlOyAgICBcbn1cblxuI2J1dHRvbi1wcmV2aW91cyxcbiNidXR0b24tbmV4dCB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJvcmRlcjogbm9uZTsgICAgICBcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgd2lkdGg6IDE4cHg7XG4gICAgaGVpZ2h0OiAxOHB4OyAgICBcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDM2cHg7XG4gICAgb3BhY2l0eTogNDAlO1xuICAgIFxuICAgICY6aG92ZXIge1xuICAgICAgICBvcGFjaXR5OiA4MCU7XG4gICAgfVxufVxuXG4uaG91cmx5LXdlYXRoZXItaW1hZ2Uge1xuICAgIGhlaWdodDogMjhweDtcbiAgICB3aWR0aDogMjhweDtcbn1cblxuLmhvdXJseS13ZWF0aGVyLXRpbWUge1xuICAgIG9wYWNpdHk6IDAuNjtcbn1cblxuLndlZWstZGF5LXdlYXRoZXItaW1hZ2UgaW1nIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGhlaWdodDogNDhweDtcbiAgICB3aWR0aDogNDhweDtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbi8qIC0tLS0tLS0tLS0tLVRlbXBlcmF0dXJlLXVuaXRzLXN3aXRjaC0tLS0tLS0tLS0tLSAqL1xuXG4uc3dpdGNoIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiA2NnB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1saWdodC1ncmV5KTtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhhbGYtdHJhbnNwYXJlbnQpO1xufSAgXG5cbi5zd2l0Y2ggaW5wdXQge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAwO1xufSAgXG5cbi5zbGlkZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xuICAgIHRyYW5zaXRpb246IC40cztcbn1cblxuLnNsaWRlcjpiZWZvcmUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgICAgXG4gICAgaGVpZ2h0OiAyOHB4O1xuICAgIHdpZHRoOiAyOHB4O1xuICAgIGxlZnQ6IDRweDtcbiAgICBib3R0b206IDRweDtcbiAgICBjb250ZW50OiBcIsKwQ1wiO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgcGxhY2UtY29udGVudDogY2VudGVyO1xuICAgIGNvbG9yOiAjMWUzYzcyO1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RhZGZlNztcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC40cztcbiAgICB0cmFuc2l0aW9uOiAuNHM7ICAgIFxufVxuXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICfCsEYnOyAgICBcbn0gIFxuXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xufSBcblxuLnNsaWRlci5yb3VuZDpiZWZvcmUge1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmFjdGl2ZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tU3Bpbm5pbmctbG9hZGVyLS0tLS0tLS0tLS0tLS0gKi9cblxuLmxvYWRlciB7ICAgIFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIGJvdHRvbTogLTQwcHg7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUpO1xuICAgIGZvbnQtc2l6ZTogOHB4O1xuICAgIHdpZHRoOiAxZW07XG4gICAgaGVpZ2h0OiAxZW07XG4gICAgYm9yZGVyLXJhZGl1czogNTAlOyAgIFxuICAgIGFuaW1hdGlvbjogc3BpbiAxLjFzIGluZmluaXRlIGVhc2U7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApOyAgICBcbiAgXG4gICAgJi5sb2FkZXItYWN0aXZlIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxufVxuXG4gIEBrZXlmcmFtZXMgc3BpbiB7XG4gICAgMCUsXG4gICAgMTAwJSB7XG4gICAgICBib3gtc2hhZG93OiAwZW0gLTIuNmVtIDBlbSAwZW0gI2ZmZmZmZiwgMS44ZW0gLTEuOGVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuMiksIDIuNWVtIDBlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjIpLCAxLjc1ZW0gMS43NWVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuMiksIDBlbSAyLjVlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjIpLCAtMS44ZW0gMS44ZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC4yKSwgLTIuNmVtIDBlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjUpLCAtMS44ZW0gLTEuOGVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuNyk7XG4gICAgfVxuICAgIDEyLjUlIHtcbiAgICAgIGJveC1zaGFkb3c6IDBlbSAtMi42ZW0gMGVtIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjcpLCAxLjhlbSAtMS44ZW0gMCAwZW0gI2ZmZmZmZiwgMi41ZW0gMGVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuMiksIDEuNzVlbSAxLjc1ZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC4yKSwgMGVtIDIuNWVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuMiksIC0xLjhlbSAxLjhlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjIpLCAtMi42ZW0gMGVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuMiksIC0xLjhlbSAtMS44ZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC41KTtcbiAgICB9XG4gICAgMjUlIHtcbiAgICAgIGJveC1zaGFkb3c6IDBlbSAtMi42ZW0gMGVtIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjUpLCAxLjhlbSAtMS44ZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC43KSwgMi41ZW0gMGVtIDAgMGVtICNmZmZmZmYsIDEuNzVlbSAxLjc1ZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC4yKSwgMGVtIDIuNWVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuMiksIC0xLjhlbSAxLjhlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjIpLCAtMi42ZW0gMGVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuMiksIC0xLjhlbSAtMS44ZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC4yKTtcbiAgICB9XG4gICAgMzcuNSUge1xuICAgICAgYm94LXNoYWRvdzogMGVtIC0yLjZlbSAwZW0gMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuMiksIDEuOGVtIC0xLjhlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjUpLCAyLjVlbSAwZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC43KSwgMS43NWVtIDEuNzVlbSAwIDBlbSAjZmZmZmZmLCAwZW0gMi41ZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC4yKSwgLTEuOGVtIDEuOGVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuMiksIC0yLjZlbSAwZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC4yKSwgLTEuOGVtIC0xLjhlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjIpO1xuICAgIH1cbiAgICA1MCUge1xuICAgICAgYm94LXNoYWRvdzogMGVtIC0yLjZlbSAwZW0gMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuMiksIDEuOGVtIC0xLjhlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjIpLCAyLjVlbSAwZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC41KSwgMS43NWVtIDEuNzVlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjcpLCAwZW0gMi41ZW0gMCAwZW0gI2ZmZmZmZiwgLTEuOGVtIDEuOGVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuMiksIC0yLjZlbSAwZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC4yKSwgLTEuOGVtIC0xLjhlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjIpO1xuICAgIH1cbiAgICA2Mi41JSB7XG4gICAgICBib3gtc2hhZG93OiAwZW0gLTIuNmVtIDBlbSAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC4yKSwgMS44ZW0gLTEuOGVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuMiksIDIuNWVtIDBlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjIpLCAxLjc1ZW0gMS43NWVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuNSksIDBlbSAyLjVlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjcpLCAtMS44ZW0gMS44ZW0gMCAwZW0gI2ZmZmZmZiwgLTIuNmVtIDBlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjIpLCAtMS44ZW0gLTEuOGVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuMik7XG4gICAgfVxuICAgIDc1JSB7XG4gICAgICBib3gtc2hhZG93OiAwZW0gLTIuNmVtIDBlbSAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC4yKSwgMS44ZW0gLTEuOGVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuMiksIDIuNWVtIDBlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjIpLCAxLjc1ZW0gMS43NWVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuMiksIDBlbSAyLjVlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjUpLCAtMS44ZW0gMS44ZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC43KSwgLTIuNmVtIDBlbSAwIDBlbSAjZmZmZmZmLCAtMS44ZW0gLTEuOGVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuMik7XG4gICAgfVxuICAgIDg3LjUlIHtcbiAgICAgIGJveC1zaGFkb3c6IDBlbSAtMi42ZW0gMGVtIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjIpLCAxLjhlbSAtMS44ZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC4yKSwgMi41ZW0gMGVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuMiksIDEuNzVlbSAxLjc1ZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC4yKSwgMGVtIDIuNWVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuMiksIC0xLjhlbSAxLjhlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjUpLCAtMi42ZW0gMGVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuNyksIC0xLjhlbSAtMS44ZW0gMCAwZW0gI2ZmZmZmZjtcbiAgICB9XG4gIH1cblxuICAvKiAtLS0tLS0tLS0tLS0tLS0tRk9PVEVSLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4gIGZvb3RlciB7XG4gICAgbWFyZ2luLXRvcDogYXV0bzsgICAgXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xuICAgIGNvbG9yOiByZ2IoMjA0LCAyMDIsIDIwMik7XG5cbiAgICBhIHtcbiAgICAgICAgY29sb3I6ICMyODg1Qzc7XG4gICAgfVxuICB9XG5cblxuXG5cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtJQUNJLHFDQUFxQztJQUNyQyxzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCOzs2REFFK0M7SUFDL0MsNEJBQTRCO0lBQzVCLDJCQUEyQjtJQUMzQixzQkFBc0I7SUFDdEIsaUNBQWlDO0FBQ3JDOztBQUVBLDhDQUE4Qzs7QUFFOUM7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG9DQUFvQztJQUNwQyxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2Qsb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLCtFQUErRTs7SUFFL0U7UUFDSSxXQUFXO1FBQ1gsaUJBQWlCO1FBQ2pCLHNCQUFzQjtJQUMxQjs7SUFFQTtRQUNJLGNBQWM7SUFDbEI7QUFDSjs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Is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Qjs7SUFFeEI7UUFDSSxjQUFjO0lBQ2xCO0FBQ0o7O0VBRUU7SUFDRTs7TUFFRSw2VUFBNlU7SUFDL1U7SUFDQTtNQUNFLDZVQUE2VTtJQUMvVTtJQUNBO01BQ0UsNlVBQTZVO0lBQy9VO0lBQ0E7TUFDRSw2VUFBNlU7SUFDL1U7SUFDQTtNQUNFLDZVQUE2VTtJQUMvVTtJQUNBO01BQ0UsNlVBQTZVO0lBQy9VO0lBQ0E7TUFDRSw2VUFBNlU7SUFDL1U7SUFDQTtNQUNFLDZVQUE2VTtJQUMvVTtFQUNGOztFQUVBLDhDQUE4Qzs7RUFFOUM7SUFDRSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxvQkFBb0I7SUFDcEIseUJBQXlCOztJQUV6QjtRQUNJLGNBQWM7SUFDbEI7RUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1OdW5pdG86d2dodEAzMDA7NDAwOzYwMDs3MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuOnJvb3Qge1xcbiAgICAtLWxpZ2h0LWdyZXk6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjIpO1xcbiAgICAtLWhhbGYtdHJhbnNwYXJlbnQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG59XFxuXFxuKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuaHRtbCwgYm9keSB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDsgXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDAuNCksIFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmdiYSgwLCAwLCAwLCAwLjQpKSxcXG4gICAgICAgICAgICAgICAgICAgICAgdXJsKCcuL2ltYWdlcy93YWxscGFwZXIuanBnJyk7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgICAgIFxcbiAgICBmb250LWZhbWlseTogJ051bml0bycsIHNhbnMtc2VyaWY7ICAgXFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLS0tSEVBREVSLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuLnRvcC1uYXYgeyAgIFxcbiAgICBkaXNwbGF5OiBncmlkOyAgICBcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMzYwcHggMWZyOyBcXG4gICAgcGFkZGluZzogNDBweDsgIFxcbn1cXG5cXG4ubG9nbyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGNvbG9yOiAjMjg4NUM3O1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMC45KTtcXG4gICAgdGV4dC1zaGFkb3c6IC0xcHggLTFweCAwICMwMDAsIDFweCAtMXB4IDAgIzAwMCwgLTFweCAxcHggMCAjMDAwLCAxcHggMXB4IDAgIzAwMDtcXG5cXG4gICAgaW1nIHtcXG4gICAgICAgIHdpZHRoOiAzNnB4OyBcXG4gICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMS4xKTtcXG4gICAgfVxcbiAgICBcXG4gICAgc3BhbjpudGgtY2hpbGQoMikge1xcbiAgICAgICAgY29sb3I6ICNGNTlFMEI7XFxuICAgIH1cXG59XFxuXFxuLnRvcC1uYXYgZm9ybSB7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyOyAgICBcXG59XFxuXFxuLnNlYXJjaC1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIGF1dG87ICBcXG59XFxuXFxuLmVycm9yLW1lc3NhZ2Uge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGJvdHRvbTogLTI0cHg7XFxuICAgIGxlZnQ6IDIwcHg7XFxuICAgIGNvbG9yOiAjZTliMzFmOyAgIFxcbn1cXG5cXG4uc2VhcmNoLWlucHV0IHtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE5OSwgMTA5LCAxMDksIDAuMik7XFxuICAgIGJvcmRlci1yaWdodDogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHggMHB4IDBweCA1MHB4O1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhhbGYtdHJhbnNwYXJlbnQpO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIFxcbiAgICAmLnNlYXJjaC1pbnB1dDo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbiB7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9IFxcbn1cXG5cXG4uc2VhcmNoLWlucHV0OjpwbGFjZWhvbGRlciB7XFxuICAgIGNvbG9yOiByZ2IoMTc3LCAxNzcsIDE3OSk7XFxufVxcblxcbi5zZWFyY2gtc3VibWl0LWJ1dHRvbiB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjsgICBcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICB3aWR0aDogNDBweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oYWxmLXRyYW5zcGFyZW50KTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbGlnaHQtZ3JleSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDBweCA1MHB4IDUwcHggMHB4O1xcbiAgICBib3JkZXItbGVmdDogdHJhbnNwYXJlbnQ7XFxuXFxuICAgIGltZyB7XFxuICAgICAgICBoZWlnaHQ6IDI0cHg7XFxuICAgICAgICB3aWR0aDogMjRweDtcXG4gICAgfVxcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tTUFJTi0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuXFxubWFpbiB7ICBcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgICBcXG4gICAgZ2FwOiA0MHB4O1xcbiAgICBwYWRkaW5nOiA0MHB4OyAgICAgXFxufSBcXG5cXG4udG9kYXktaW5mby1jYXJkIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDNmciAxZnI7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICB3aWR0aDogNTQwcHg7XFxuICAgIGhlaWdodDogNDAwcHg7ICBcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbGlnaHQtZ3JleSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxuICAgIHBhZGRpbmc6IDIwcHg7ICAgIFxcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhhbGYtdHJhbnNwYXJlbnQpOyAgICBcXG4gfSBcXG5cXG4gLnRvZGF5LXdlYXRoZXItbWFpbi1pbmZvIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDEwMHB4IDM2cHggMWZyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIGltZyB7ICAgXFxuICAgICAgICB3aWR0aDogMTI0cHg7ICAgICAgICAgICAgXFxuICAgICB9XFxuIH1cXG5cXG4gLnRvZGF5LXdlYXRoZXItZXh0cmEtaW5mbyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNDBweCAxZnI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGVuZDsgICAgIFxcbiB9XFxuXFxuIC50b2RheS13ZWF0aGVyLWV4dHJhLWluZm8gPiBkaXY6Zmlyc3Qtb2YtdHlwZSB7XFxuICAgIGltZyB7XFxuICAgICAgICB3aWR0aDogMjBweDtcXG4gICAgICAgIGp1c3RpZnktc2VsZjogZW5kOyBcXG4gICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xcbiAgICAgICAgb3BhY2l0eTogMC42OyAgICAgIFxcbiAgICB9XFxuXFxuICAgIC5kYXRlLXdyYXAsXFxuICAgIC50aW1lLXdyYXAge1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICAgICAgICAgXFxuICAgIH1cXG4gfVxcblxcbiAudG9kYXktd2VhdGhlci1leHRyYS1pbmZvID4gZGl2Om50aC1jaGlsZCgyKSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7IFxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyOyBcXG4gICAgYWxpZ24tc2VsZjpjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgXFxuICAgIGltZyB7XFxuICAgICAgICB3aWR0aDogNDBweDsgICAgICAgXFxuICAgIH1cXG4gICAgXFxuICAgIC5odW1pZGl0eS13cmFwLCBcXG4gICAgLndpbmQtd3JhcCB7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDQ4cHg7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOyAgICAgICBcXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4OyAgICAgICAgXFxuICAgIH1cXG4gICAgXFxuICAgIC5odW1pZGl0eS13cmFwIGltZywgXFxuICAgIC53aW5kLXdyYXAgaW1nIHtcXG4gICAgICAgIHdpZHRoOiAzMnB4OyAgICAgICBcXG4gICAgfVxcbiAgICBcXG4gICAgLmh1bWlkaXR5LCBcXG4gICAgLndpbmQge1xcbiAgICAgICAgZm9udC1zaXplOiAxNnB4OyAgICAgICAgXFxuICAgIH1cXG59XFxuXFxuIC5sb2NhdGlvbi1uYW1lIHtcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gfVxcbiBcXG4gLnRvZGF5LXRlbXBlcmF0dXJlIHtcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gfVxcblxcbiAudG9kYXktY29uZGl0aW9ucyB7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gfVxcblxcbiAud2Vlay13ZWF0aGVyLWluZm8tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgY29sb3I6IHdoaXRlOyAgIFxcbiAgICBtYXgtd2lkdGg6IDU0MHB4O1xcbiB9XFxuXFxuIC53ZWVrLWRheS13ZWF0aGVyLXJvdyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1saWdodC1ncmV5KTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBcXG4gICAgLndlZWstZGF5LW5hbWUge1xcbiAgICAgICAganVzdGlmeS1zZWxmOiBzdGFydDtcXG4gICAgICAgIHRleHQtc2hhZG93OiAtMXB4IC0xcHggMCAjMDAwLCAxcHggLTFweCAwICMwMDAsIC0xcHggMXB4IDAgIzAwMCwgMXB4IDFweCAwICMwMDA7XFxuICAgICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICAgICAgY29sb3I6ICNGNTlFMEI7XFxuICAgIH1cXG5cXG4gICAgLndlZWstZGF5LXRlbXBlcmF0dXJlLFxcbiAgICAud2Vlay1uaWdodC10ZW1wZXJhdHVyZSB7XFxuICAgICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgICAgICBmb250LXdlaWdodDogNjAwOyAgICAgICAgXFxuICAgIH1cXG5cXG4gICAgLndlZWstbmlnaHQtdGVtcGVyYXR1cmUge1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgICAgIG9wYWNpdHk6IDAuNztcXG4gICAgfVxcbiB9IFxcblxcbiAuaG91cmx5LXdlYXRoZXItaW5mby1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXG4gICAgcGFkZGluZzogMCAzMnB4OyAgICBcXG4gfVxcblxcbiAuaG91cmx5LXdlYXRoZXItY29sdW1uIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMzZweDtcXG4gICAgZ2FwOiA0cHg7XFxuIH1cXG5cXG4gLyogLS0tLS0tLS1Ib3VybHktd2VhdGhlci1uYXZpZ2F0aW9uLS0tLS0tLS0gKi9cXG5cXG4gLnNsaWRlci13cmFwIHsgICAgXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgd2lkdGg6IDQzMnB4O1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjsgXFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1saWdodC1ncmV5KTsgXFxuICAgIHBhZGRpbmctdG9wOiA4cHg7ICBcXG4gfVxcblxcbiAuc2xpZGVyLWNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7ICAgICAgICAgICBcXG4gfVxcblxcbiAubmF2LWNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgICBcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTsgICBcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyAgICBcXG4gfVxcblxcbiNidXR0b24tcHJldmlvdXMge1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi9pbWFnZXMvY2hldnJvbi1sZWZ0LnN2Zykgbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1NSUgNTAlOyAgICAgXFxufVxcblxcbiNidXR0b24tbmV4dCB7XFxuICAgIGJhY2tncm91bmQ6IHVybCguL2ltYWdlcy9jaGV2cm9uLXJpZ2h0LnN2Zykgbm8tcmVwZWF0OyBcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNDUlIDUwJTsgICAgXFxufVxcblxcbiNidXR0b24tcHJldmlvdXMsXFxuI2J1dHRvbi1uZXh0IHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXI6IG5vbmU7ICAgICAgXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgd2lkdGg6IDE4cHg7XFxuICAgIGhlaWdodDogMThweDsgICAgXFxuICAgIGJhY2tncm91bmQtc2l6ZTogMzZweDtcXG4gICAgb3BhY2l0eTogNDAlO1xcbiAgICBcXG4gICAgJjpob3ZlciB7XFxuICAgICAgICBvcGFjaXR5OiA4MCU7XFxuICAgIH1cXG59XFxuXFxuLmhvdXJseS13ZWF0aGVyLWltYWdlIHtcXG4gICAgaGVpZ2h0OiAyOHB4O1xcbiAgICB3aWR0aDogMjhweDtcXG59XFxuXFxuLmhvdXJseS13ZWF0aGVyLXRpbWUge1xcbiAgICBvcGFjaXR5OiAwLjY7XFxufVxcblxcbi53ZWVrLWRheS13ZWF0aGVyLWltYWdlIGltZyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGhlaWdodDogNDhweDtcXG4gICAgd2lkdGg6IDQ4cHg7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tVGVtcGVyYXR1cmUtdW5pdHMtc3dpdGNoLS0tLS0tLS0tLS0tICovXFxuXFxuLnN3aXRjaCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB3aWR0aDogNjZweDtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1saWdodC1ncmV5KTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGFsZi10cmFuc3BhcmVudCk7XFxufSAgXFxuXFxuLnN3aXRjaCBpbnB1dCB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHdpZHRoOiAwO1xcbiAgICBoZWlnaHQ6IDA7XFxufSAgXFxuXFxuLnNsaWRlciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xcbiAgICB0cmFuc2l0aW9uOiAuNHM7XFxufVxcblxcbi5zbGlkZXI6YmVmb3JlIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlOyAgICBcXG4gICAgaGVpZ2h0OiAyOHB4O1xcbiAgICB3aWR0aDogMjhweDtcXG4gICAgbGVmdDogNHB4O1xcbiAgICBib3R0b206IDRweDtcXG4gICAgY29udGVudDogXFxcIsKwQ1xcXCI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgY29sb3I6ICMxZTNjNzI7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkYWRmZTc7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xcbiAgICB0cmFuc2l0aW9uOiAuNHM7ICAgIFxcbn1cXG5cXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xcbiAgICBjb250ZW50OiAnwrBGJzsgICAgXFxufSAgXFxuXFxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XFxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcXG59IFxcblxcbi5zbGlkZXIucm91bmQ6YmVmb3JlIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4uYWN0aXZlIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tU3Bpbm5pbmctbG9hZGVyLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4ubG9hZGVyIHsgICAgXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgYm90dG9tOiAtNDBweDtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlKTtcXG4gICAgZm9udC1zaXplOiA4cHg7XFxuICAgIHdpZHRoOiAxZW07XFxuICAgIGhlaWdodDogMWVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7ICAgXFxuICAgIGFuaW1hdGlvbjogc3BpbiAxLjFzIGluZmluaXRlIGVhc2U7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTsgICAgXFxuICBcXG4gICAgJi5sb2FkZXItYWN0aXZlIHtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB9XFxufVxcblxcbiAgQGtleWZyYW1lcyBzcGluIHtcXG4gICAgMCUsXFxuICAgIDEwMCUge1xcbiAgICAgIGJveC1zaGFkb3c6IDBlbSAtMi42ZW0gMGVtIDBlbSAjZmZmZmZmLCAxLjhlbSAtMS44ZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC4yKSwgMi41ZW0gMGVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuMiksIDEuNzVlbSAxLjc1ZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC4yKSwgMGVtIDIuNWVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuMiksIC0xLjhlbSAxLjhlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjIpLCAtMi42ZW0gMGVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuNSksIC0xLjhlbSAtMS44ZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC43KTtcXG4gICAgfVxcbiAgICAxMi41JSB7XFxuICAgICAgYm94LXNoYWRvdzogMGVtIC0yLjZlbSAwZW0gMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuNyksIDEuOGVtIC0xLjhlbSAwIDBlbSAjZmZmZmZmLCAyLjVlbSAwZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC4yKSwgMS43NWVtIDEuNzVlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjIpLCAwZW0gMi41ZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC4yKSwgLTEuOGVtIDEuOGVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuMiksIC0yLjZlbSAwZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC4yKSwgLTEuOGVtIC0xLjhlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjUpO1xcbiAgICB9XFxuICAgIDI1JSB7XFxuICAgICAgYm94LXNoYWRvdzogMGVtIC0yLjZlbSAwZW0gMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuNSksIDEuOGVtIC0xLjhlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjcpLCAyLjVlbSAwZW0gMCAwZW0gI2ZmZmZmZiwgMS43NWVtIDEuNzVlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjIpLCAwZW0gMi41ZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC4yKSwgLTEuOGVtIDEuOGVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuMiksIC0yLjZlbSAwZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC4yKSwgLTEuOGVtIC0xLjhlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjIpO1xcbiAgICB9XFxuICAgIDM3LjUlIHtcXG4gICAgICBib3gtc2hhZG93OiAwZW0gLTIuNmVtIDBlbSAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC4yKSwgMS44ZW0gLTEuOGVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuNSksIDIuNWVtIDBlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjcpLCAxLjc1ZW0gMS43NWVtIDAgMGVtICNmZmZmZmYsIDBlbSAyLjVlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjIpLCAtMS44ZW0gMS44ZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC4yKSwgLTIuNmVtIDBlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjIpLCAtMS44ZW0gLTEuOGVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuMik7XFxuICAgIH1cXG4gICAgNTAlIHtcXG4gICAgICBib3gtc2hhZG93OiAwZW0gLTIuNmVtIDBlbSAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC4yKSwgMS44ZW0gLTEuOGVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuMiksIDIuNWVtIDBlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjUpLCAxLjc1ZW0gMS43NWVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuNyksIDBlbSAyLjVlbSAwIDBlbSAjZmZmZmZmLCAtMS44ZW0gMS44ZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC4yKSwgLTIuNmVtIDBlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjIpLCAtMS44ZW0gLTEuOGVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuMik7XFxuICAgIH1cXG4gICAgNjIuNSUge1xcbiAgICAgIGJveC1zaGFkb3c6IDBlbSAtMi42ZW0gMGVtIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjIpLCAxLjhlbSAtMS44ZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC4yKSwgMi41ZW0gMGVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuMiksIDEuNzVlbSAxLjc1ZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC41KSwgMGVtIDIuNWVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuNyksIC0xLjhlbSAxLjhlbSAwIDBlbSAjZmZmZmZmLCAtMi42ZW0gMGVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuMiksIC0xLjhlbSAtMS44ZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC4yKTtcXG4gICAgfVxcbiAgICA3NSUge1xcbiAgICAgIGJveC1zaGFkb3c6IDBlbSAtMi42ZW0gMGVtIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjIpLCAxLjhlbSAtMS44ZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC4yKSwgMi41ZW0gMGVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuMiksIDEuNzVlbSAxLjc1ZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC4yKSwgMGVtIDIuNWVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuNSksIC0xLjhlbSAxLjhlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjcpLCAtMi42ZW0gMGVtIDAgMGVtICNmZmZmZmYsIC0xLjhlbSAtMS44ZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC4yKTtcXG4gICAgfVxcbiAgICA4Ny41JSB7XFxuICAgICAgYm94LXNoYWRvdzogMGVtIC0yLjZlbSAwZW0gMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuMiksIDEuOGVtIC0xLjhlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjIpLCAyLjVlbSAwZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC4yKSwgMS43NWVtIDEuNzVlbSAwIDBlbSByZ2JhKDI1NSwyNTUsMjU1LCAwLjIpLCAwZW0gMi41ZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC4yKSwgLTEuOGVtIDEuOGVtIDAgMGVtIHJnYmEoMjU1LDI1NSwyNTUsIDAuNSksIC0yLjZlbSAwZW0gMCAwZW0gcmdiYSgyNTUsMjU1LDI1NSwgMC43KSwgLTEuOGVtIC0xLjhlbSAwIDBlbSAjZmZmZmZmO1xcbiAgICB9XFxuICB9XFxuXFxuICAvKiAtLS0tLS0tLS0tLS0tLS0tRk9PVEVSLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbiAgZm9vdGVyIHtcXG4gICAgbWFyZ2luLXRvcDogYXV0bzsgICAgXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xcbiAgICBjb2xvcjogcmdiKDIwNCwgMjAyLCAyMDIpO1xcblxcbiAgICBhIHtcXG4gICAgICAgIGNvbG9yOiAjMjg4NUM3O1xcbiAgICB9XFxuICB9XFxuXFxuXFxuXFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgcmVuZGVyRGFpbHlXZWF0aGVyIH0gZnJvbSAnLi91aSc7XG5pbXBvcnQgeyByZW5kZXJUb2RheVdlYXRoZXJJbmZvQ2FyZCB9IGZyb20gXCIuL3VpXCI7XG5pbXBvcnQgeyBsb2FkaW5nIH0gZnJvbSAnLi91aSc7XG5cbmV4cG9ydCBjb25zdCBnZXRXZWF0aGVyID0gYXN5bmMgKGxvY2F0aW9uKSA9PiB7XG4gICAgY29uc3QgdW5pdHNDaGVja2JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51bml0cy1jaGVja2JveCcpO1xuICAgIGNvbnN0IHVuaXRzID0gdW5pdHNDaGVja2JveC5jaGVja2VkID8gJ3VzJyA6ICdtZXRyaWMnO1xuXG4gICAgY29uc3QgYXBpS2V5ID0gJ1pGRVo5RkI2TExZWlVaOURGRFU3R0pUTUQnO1xuICAgIGNvbnN0IHVybCA9IGBodHRwczovL3dlYXRoZXIudmlzdWFsY3Jvc3NpbmcuY29tL1Zpc3VhbENyb3NzaW5nV2ViU2VydmljZXMvcmVzdC9zZXJ2aWNlcy90aW1lbGluZS8ke2xvY2F0aW9ufT91bml0R3JvdXA9JHt1bml0c30ma2V5PSR7YXBpS2V5fWA7ICAgIFxuICAgIFxuICAgIGxvYWRpbmcoJ3N0YXJ0ZWQnKTtcblxuICAgIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHsgbW9kZTogJ2NvcnMnfSk7XG4gICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVycm9yLW1lc3NhZ2UnKTsgICAgXG4gICAgXG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICBsb2FkaW5nKCdmaW5pc2hlZCcpO1xuXG4gICAgICAgIGVycm9yTWVzc2FnZS5pbm5lclRleHQgPSBcIlNvcnJ5LCBubyBsb2NhdGlvbiBmb3VuZFwiO1xuICAgICAgICBlcnJvck1lc3NhZ2UuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gZXJyb3JNZXNzYWdlLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpLCAzMDAwKTtcblxuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZGF0YSA9IHdlYXRoZXJEYXRhTWFwcGVyKGF3YWl0IHJlc3BvbnNlLmpzb24oKSk7XG4gICAgXG4gICAgcmVuZGVyVG9kYXlXZWF0aGVySW5mb0NhcmQoZGF0YSk7XG4gICAgcmVuZGVyRGFpbHlXZWF0aGVyKGRhdGEpOyAgICBcbiAgICBsb2FkaW5nKCdmaW5pc2hlZCcpOyAgICBcblxuICAgIH0gY2F0Y2ggKGVycm9yKSB7ICAgICAgICBcbiAgICAgICAgY29uc29sZS5lcnJvcignRmV0Y2ggd2VhdGhlciBBUEkgaXMgZmFpbGVkJywgZXJyb3IpO1xuICAgIH07XG59XG5cbmZ1bmN0aW9uIHdlYXRoZXJEYXRhTWFwcGVyKGRhdGEpIHsgICAgIFxuICAgIHJldHVybiB7XG4gICAgICAgIGxvY2F0aW9uOiBkYXRhLnJlc29sdmVkQWRkcmVzcy5zcGxpdChcIixcIilbMF0sXG4gICAgICAgIHRlbXBlcmF0dXJlOiBTdHJpbmcoZGF0YS5jdXJyZW50Q29uZGl0aW9ucy50ZW1wKS5zcGxpdChcIi5cIilbMF0sXG4gICAgICAgIGRhdGU6IG5ldyBEYXRlKCkudG9Mb2NhbGVEYXRlU3RyaW5nKCksICAgICAgICBcbiAgICAgICAgY29uZGl0aW9uczogZGF0YS5jdXJyZW50Q29uZGl0aW9ucy5jb25kaXRpb25zLFxuICAgICAgICBodW1pZGl0eTogU3RyaW5nKGRhdGEuY3VycmVudENvbmRpdGlvbnMuaHVtaWRpdHkpLnNwbGl0KFwiLlwiKVswXSxcbiAgICAgICAgd2luZFNwZWVkOiBTdHJpbmcoZGF0YS5jdXJyZW50Q29uZGl0aW9ucy53aW5kc3BlZWQpLnNwbGl0KFwiLlwiKVswXSxcbiAgICAgICAgc3VucmlzZTogZGF0YS5jdXJyZW50Q29uZGl0aW9ucy5zdW5yaXNlLnNsaWNlKDAsNSksXG4gICAgICAgIHN1bnNldDogZGF0YS5jdXJyZW50Q29uZGl0aW9ucy5zdW5zZXQuc2xpY2UoMCw1KSxcbiAgICAgICAgaWNvbjogZGF0YS5jdXJyZW50Q29uZGl0aW9ucy5pY29uLFxuICAgICAgICBob3VybHlGb3JlY2FzdDogZGF0YS5kYXlzWzBdLmhvdXJzLm1hcChob3VyID0+ICh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZTogaG91ci5kYXRldGltZS5zbGljZSgwLCAyKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wZXJhdHVyZTogU3RyaW5nKGhvdXIudGVtcCkuc3BsaXQoXCIuXCIpWzBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246IGhvdXIuaWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgfSkpLFxuICAgICAgICB3ZWVrRm9yZWNhc3Q6IGRhdGEuZGF5cy5zbGljZSgxLCA4KS5tYXAoZGF5ID0+ICh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2Vla0RheTogbmV3IERhdGUoZGF5LmRhdGV0aW1lKS50b0xvY2FsZURhdGVTdHJpbmcoJ2VuLVVTJywge3dlZWtkYXk6ICdsb25nJ30pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heFRlbXBlcmF0dXJlOiBTdHJpbmcoZGF5LnRlbXBtYXgpLnNwbGl0KFwiLlwiKVswXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5UZW1wZXJhdHVyZTogU3RyaW5nKGRheS50ZW1wbWluKS5zcGxpdChcIi5cIilbMF0sICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogZGF5Lmljb25cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKSAgICAgICAgXG4gICAgfTtcbn0iLCJleHBvcnQgY29uc3QgcmVuZGVyRGFpbHlXZWF0aGVyID0gKHdlYXRoZXIpID0+IHtcbiAgICBjb25zdCB3ZWVrV2VhdGhlckluZm9Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2Vlay13ZWF0aGVyLWluZm8tY29udGFpbmVyJyk7XG4gICAgd2Vla1dlYXRoZXJJbmZvQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuXG4gICAgd2VhdGhlci53ZWVrRm9yZWNhc3QubWFwKChlbGVtZW50KSA9PiB7ICAgICAgIFxuICAgICAgICB3ZWVrV2VhdGhlckluZm9Db250YWluZXIuaW5uZXJIVE1MICs9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cIndlZWstZGF5LXdlYXRoZXItcm93XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIndlZWstZGF5LW5hbWVcIj4ke2VsZW1lbnQud2Vla0RheX08L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwid2Vlay1kYXktd2VhdGhlci1pbWFnZVwiPlxuICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgY2xhc3M9XCJ3ZWVrLWRheS13ZWF0aGVyLWljb25cIlxuICAgICAgICAgICAgICBzcmM9XCJpbWFnZXMvd2VhdGhlci1pbWFnZXMtZmlsbGVkLyR7ZWxlbWVudC5pY29ufS5zdmdcIlxuICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PiAgICBcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwid2Vlay1kYXktdGVtcGVyYXR1cmVcIj48c3VwPiZ1YXJyOzwvc3VwPiR7ZWxlbWVudC5tYXhUZW1wZXJhdHVyZX3CsDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3ZWVrLW5pZ2h0LXRlbXBlcmF0dXJlXCI+PHN1cD4mZGFycjs8L3N1cD4ke2VsZW1lbnQubWluVGVtcGVyYXR1cmV9wrA8L2Rpdj4gICAgICAgICAgICAgICAgXG4gICAgICAgIDwvZGl2PmAgICAgICAgICAgICAgICAgIFxuICAgIH0pO1xuXG4gICAgd2Vla1dlYXRoZXJJbmZvQ29udGFpbmVyLmNoaWxkcmVuWzBdLnN0eWxlLmJvcmRlciA9ICdub25lJztcbn1cblxuZXhwb3J0IGNvbnN0IHJlbmRlclRvZGF5V2VhdGhlckluZm9DYXJkID0gKHdlYXRoZXIpID0+IHtcbiAgICBjb25zdCB0b2RheVdlYXRoZXJJbmZvQ2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RheS1pbmZvLWNhcmQnKTtcbiAgICB0b2RheVdlYXRoZXJJbmZvQ2FyZC5pbm5lckhUTUwgPSAnJztcbiAgICBcbiAgICBjb25zdCBtYWluV2VhdGhlckluZm9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYWluV2VhdGhlckluZm9EaXYuY2xhc3NMaXN0LmFkZCgndG9kYXktd2VhdGhlci1tYWluLWluZm8nKTtcbiAgICBtYWluV2VhdGhlckluZm9EaXYuaW5uZXJIVE1MID0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwibG9jYXRpb24tbmFtZVwiPiR7d2VhdGhlci5sb2NhdGlvbn08L2Rpdj4gICAgICAgICAgICAgICAgICAgXG4gICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL3dlYXRoZXItaW1hZ2VzLWZpbGxlZC8ke3dlYXRoZXIuaWNvbn0uc3ZnXCI+ICAgICAgIFxuICAgICAgICA8ZGl2IGNsYXNzPVwidG9kYXktdGVtcGVyYXR1cmVcIj4ke3dlYXRoZXIudGVtcGVyYXR1cmV9wrA8L2Rpdj4gICAgICAgICAgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0b2RheS1jb25kaXRpb25zXCI+JHt3ZWF0aGVyLmNvbmRpdGlvbnN9PC9kaXY+ICAgICAgIFxuICAgIGA7IFxuICAgIFxuICAgIGNvbnN0IGFkZGl0aW9uYWxXZWF0aGVySW5mb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFkZGl0aW9uYWxXZWF0aGVySW5mb0Rpdi5jbGFzc0xpc3QuYWRkKCd0b2RheS13ZWF0aGVyLWV4dHJhLWluZm8nKTtcbiAgICBhZGRpdGlvbmFsV2VhdGhlckluZm9EaXYuaW5uZXJIVE1MID0gYFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRhdGUtd3JhcFwiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL2RhdGUuc3ZnXCI+IFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXRlXCI+JHt3ZWF0aGVyLmRhdGV9PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aW1lLXdyYXBcIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltYWdlcy90aW1lLnN2Z1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aW1lXCI+JHt3ZWF0aGVyLnRpbWV9PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaHVtaWRpdHktd3JhcFwiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL3dlYXRoZXItaW1hZ2VzLWxpbmVkL2h1bWlkaXR5LnN2Z1wiPiAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImh1bWlkaXR5XCI+JHt3ZWF0aGVyLmh1bWlkaXR5fSU8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIndpbmQtd3JhcFwiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL3dlYXRoZXItaW1hZ2VzLWxpbmVkL3dpbmQuc3ZnXCI+ICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIndpbmRcIj48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN1bnJpc2Utd3JhcFwiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL3dlYXRoZXItaW1hZ2VzLWxpbmVkL3N1bnJpc2Uuc3ZnXCI+ICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN1bnJpc2VcIj4ke3dlYXRoZXIuc3VucmlzZX08L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN1bnNldC13cmFwXCI+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWFnZXMvd2VhdGhlci1pbWFnZXMtbGluZWQvc3Vuc2V0LnN2Z1wiPiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdW5zZXRcIj4ke3dlYXRoZXIuc3Vuc2V0fTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICA8L2Rpdj5cbiAgICBgO1xuICAgIFxuICAgIGNvbnN0IGhvdXJseVdlYXRoZXJJbmZvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaG91cmx5V2VhdGhlckluZm9Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnaG91cmx5LXdlYXRoZXItaW5mby1jb250YWluZXInKTtcblxuICAgIGNvbnN0IHNsaWRlcldyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBcbiAgICBob3VybHlXZWF0aGVySW5mb0NvbnRhaW5lci5pbm5lckhUTUwgPSByZW5kZXJTbGlkZXJOYXZpZ2F0aW9uUGFuZWwoKTtcbiAgICBob3VybHlXZWF0aGVySW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZChzbGlkZXJXcmFwKTtcblxuICAgIHNsaWRlcldyYXAuY2xhc3NMaXN0LmFkZCgnc2xpZGVyLXdyYXAnKTtcbiAgICBzbGlkZXJXcmFwLmlubmVySFRNTCA9IHJlbmRlclNsaWRlcigpOyAgIFxuXG4gICAgdG9kYXlXZWF0aGVySW5mb0NhcmQuYXBwZW5kKG1haW5XZWF0aGVySW5mb0RpdiwgYWRkaXRpb25hbFdlYXRoZXJJbmZvRGl2LCBob3VybHlXZWF0aGVySW5mb0NvbnRhaW5lcik7XG4gICAgXG4gICAgZGlzcGxheVRpbWUoKTtcbiAgICByZW5kZXJIb3VybHlXZWF0aGVySW5mbyh3ZWF0aGVyKTtcbiAgICByZW5kZXJXaW5kU3BlZWQod2VhdGhlci53aW5kU3BlZWQpO1xuICAgIGFkZEV2ZW50TGlzdGVuZXJUb1NsaWRlcigpO1xuXG4gICAgcmV0dXJuIHRvZGF5V2VhdGhlckluZm9DYXJkO1xufVxuXG5jb25zdCByZW5kZXJIb3VybHlXZWF0aGVySW5mbyA9ICh3ZWF0aGVyKSA9PiB7XG4gICAgY29uc3Qgc2xpZGVyQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZXItY29udGVudCcpO1xuXG4gICAgd2VhdGhlci5ob3VybHlGb3JlY2FzdC5tYXAoKGhvdXIpID0+IHsgICAgICAgXG4gICAgICAgIHNsaWRlckNvbnRlbnQuaW5uZXJIVE1MICs9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImhvdXJseS13ZWF0aGVyLWNvbHVtblwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJob3VybHktd2VhdGhlci10aW1lXCI+JHtob3VyLnRpbWV9PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImhvdXJseS13ZWF0aGVyLWltYWdlXCI+XG4gICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBjbGFzcz1cImhvdXJseS13ZWF0aGVyLWltYWdlXCJcbiAgICAgICAgICAgICAgc3JjPVwiaW1hZ2VzL3dlYXRoZXItaW1hZ2VzLWxpbmVkLyR7aG91ci5pY29ufS5zdmdcIlxuICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PiAgICBcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaG91cmx5LXdlYXRoZXItdGVtcGVyYXR1cmVcIj4ke2hvdXIudGVtcGVyYXR1cmV9wrA8L2Rpdj4gICAgICAgICAgICAgICBcbiAgICAgICAgPC9kaXY+YCAgICAgICAgIFxuICAgIH0pO1xufVxuXG5jb25zdCByZW5kZXJTbGlkZXIgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGAgICAgICAgIFxuICAgICAgICA8ZGl2IGNsYXNzPVwic2xpZGVyLWNvbnRlbnRcIj48L2Rpdj4gICAgICAgICAgICAgICAgXG4gICAgYDtcbn1cblxuY29uc3QgcmVuZGVyU2xpZGVyTmF2aWdhdGlvblBhbmVsID0gKCkgPT4ge1xuICAgIHJldHVybiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJuYXYtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8YnV0dG9uIGlkPVwiYnV0dG9uLXByZXZpb3VzXCI+PC9idXR0b24+ICAgICAgICAgICBcbiAgICAgICAgICAgIDxidXR0b24gaWQ9XCJidXR0b24tbmV4dFwiPjwvYnV0dG9uPiAgICAgICAgICAgIFxuICAgICAgICA8L2Rpdj4gXG4gICAgYFxufVxuXG5jb25zdCByZW5kZXJXaW5kU3BlZWQgPSAod2luZFNwZWVkKSA9PiB7XG4gICAgY29uc3Qgd2luZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aW5kJyk7XG4gICAgY29uc3QgdW5pdHNDaGVja2JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51bml0cy1jaGVja2JveCcpO1xuICAgIGNvbnN0IHVuaXQgPSB1bml0c0NoZWNrYm94LmNoZWNrZWQgPyAnbXBoJyA6ICdrbS9oJztcblxuICAgIHdpbmQuaW5uZXJIVE1MID0gd2luZFNwZWVkICsgdW5pdDtcbn1cblxuY29uc3QgZGlzcGxheVRpbWUgPSAoKSA9PiB7XG4gICAgY29uc3QgdGltZSA9IG5ldyBEYXRlKCkudG9Mb2NhbGVUaW1lU3RyaW5nKG5hdmlnYXRvci5sYW5ndWFnZSwge1xuICAgICAgICBob3VyOiBcIjItZGlnaXRcIixcbiAgICAgICAgbWludXRlOiBcIjItZGlnaXRcIixcbiAgICAgICAgaG91cjEyOiBmYWxzZSxcbiAgICB9KTtcbiAgIFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aW1lJykuaW5uZXJIVE1MID0gdGltZTtcbiAgICBzZXRUaW1lb3V0KGRpc3BsYXlUaW1lLCAxMDAwKTtcbn1cblxuXG5jb25zdCBhZGRFdmVudExpc3RlbmVyVG9TbGlkZXIgPSAoKSA9PiB7XG4gICAgY29uc3Qgc2xpZGVyQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2xpZGVyLWNvbnRlbnRcIik7XG4gICAgY29uc3QgYnV0dG9uTmV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnV0dG9uLW5leHRcIik7XG4gICAgY29uc3QgYnV0dG9uUHJldmlvdXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ1dHRvbi1wcmV2aW91c1wiKTsgICAgXG5cbiAgICBsZXQgY3VycmVudEluZGV4ID0gMDtcblxuICAgIGNvbnN0IHNsaWRlID0gKGluZGV4KSA9PiB7ICAgXG4gICAgICAgIGlmIChpbmRleCA8IDApIHtcbiAgICAgICAgICAgIGluZGV4ID0gMiAtMTsgICAgICAgIFxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChpbmRleCA+PSAyKSB7XG4gICAgICAgICAgICBpbmRleCA9IDA7ICAgICAgICBcbiAgICAgICAgfTsgICAgIFxuICAgICAgICBcbiAgICAgICAgc2xpZGVyQ29udGVudC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgtJHsoaW5kZXggLyAyKSAqIDEwMH0lKWA7XG4gICAgICAgIGN1cnJlbnRJbmRleCA9IGluZGV4OyAgIFxuICAgIH07XG5cbiAgICBidXR0b25OZXh0Lm9uY2xpY2sgPSAoKSA9PiB7ICAgICAgICAgICBcbiAgICAgICAgc2xpZGUoY3VycmVudEluZGV4ICsgMSk7XG4gICAgfTtcblxuICAgIGJ1dHRvblByZXZpb3VzLm9uY2xpY2sgPSAoKSA9PiB7ICAgXG4gICAgICAgIHNsaWRlKGN1cnJlbnRJbmRleCAtIDEpO1xuICAgIH07XG59XG5cbmV4cG9ydCBjb25zdCBsb2FkaW5nID0gKHN0YXRlKSA9PiB7XG4gICAgY29uc3QgbG9hZGluZ1NwaW5uZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9hZGVyJyk7XG5cbiAgICBpZiAoc3RhdGUgPT09ICdzdGFydGVkJykge1xuICAgICAgbG9hZGluZ1NwaW5uZXIuY2xhc3NMaXN0LmFkZCgnbG9hZGVyLWFjdGl2ZScpOyAgICAgXG4gICAgfSBlbHNlIHtcbiAgICAgIGxvYWRpbmdTcGlubmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2xvYWRlci1hY3RpdmUnKTtcbiAgICB9XG59XG5cblxuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0ICYmIGRvY3VtZW50LmN1cnJlbnRTY3JpcHQudGFnTmFtZS50b1VwcGVyQ2FzZSgpID09PSAnU0NSSVBUJylcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgZ2V0V2VhdGhlciB9IGZyb20gJy4vbW9kdWxlcy9nZXRXZWF0aGVyJztcblxuY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtZm9ybScpO1xuXG5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHVzZXJJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtaW5wdXQnKTtcbiAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZXJyb3ItbWVzc2FnZScpO1xuICAgICAgXG4gICAgaWYgKCFpc1ZhbGlkKHVzZXJJbnB1dC52YWx1ZSkpIHsgICAgICAgIFxuICAgICAgICBlcnJvck1lc3NhZ2UuaW5uZXJUZXh0ID0gXCJQbGVhc2UgZW50ZXIgYSBsb2NhdGlvblwiO1xuICAgICAgICBlcnJvck1lc3NhZ2UuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gZXJyb3JNZXNzYWdlLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpLCAzMDAwKTtcblxuICAgICAgICByZXR1cm47XG4gICAgfTtcblxuICAgIGdldFdlYXRoZXIodXNlcklucHV0LnZhbHVlKTtcbiAgICB1c2VySW5wdXQudmFsdWUgPSAnJztcbn0pO1xuXG5jb25zdCB1bml0Q2hlY2tib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudW5pdHMtY2hlY2tib3gnKTtcblxudW5pdENoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRMb2NhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2NhdGlvbi1uYW1lJyk7XG4gICAgXG4gICAgZ2V0V2VhdGhlcihjdXJyZW50TG9jYXRpb24uaW5uZXJUZXh0KTtcbn0pO1xuXG5jb25zdCBpc1ZhbGlkID0gKHVzZXJJbnB1dCkgPT4geyAgICAgXG4gICAgaWYgKHVzZXJJbnB1dCA9PT0gXCJcIikge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlOyAgIFxufVxuXG5nZXRXZWF0aGVyKFwiRHVibGluXCIpO1xuXG5cblxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==