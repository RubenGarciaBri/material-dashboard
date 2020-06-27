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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass/main.scss */ "./sass/main.scss");
/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sass_main_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./sass/main.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./sass/main.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ":root {\n  --sidebar-bg: #fff;\n  --sidebar-heading: #ccc;\n  --sidebar-subheading: #ccc;\n  --sidebar-list-item: #333;\n  --sidebar-list-item-bg: #bbb; }\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0; }\n\nbody {\n  font-family: 'Roboto',\r sans-serif;\n  -webkit-font-smoothing: antialiased;\n  line-height: 1.7; }\n\nhtml {\n  font-size: 62.5%; }\n  html.transition,\n  html.transition *,\n  html.transition *:before,\n  html.transition *:after {\n    transition: all .5s !important;\n    transition-delay: 0 !important; }\n\nul {\n  list-style: none; }\n\na {\n  text-decoration: none;\n  font-size: 1.8rem; }\n\n.btn {\n  display: inline-block;\n  font-weight: bold;\n  padding: 15px 45px;\n  border-radius: 3px; }\n\na {\n  color: #333; }\n\n.main-container {\n  max-width: 120rem;\n  margin: 0 auto; }\n\n.fa-icon {\n  display: inline-block; }\n\ninput[type=\"submit\"] {\n  font-weight: 700;\n  letter-spacing: 1px;\n  border: none;\n  cursor: pointer;\n  outline: none; }\n\ninput, textarea, select {\n  outline: none; }\n\ntextarea {\n  font-family: inherit; }\n\nbutton {\n  outline: none;\n  cursor: pointer; }\n\n.shadow-xxs {\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24); }\n\n.shadow-xs {\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23); }\n\n.shadow-s {\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23); }\n\n.shadow-m {\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22); }\n\n.shadow-deep-s {\n  box-shadow: 0px 25px 47px rgba(0, 0, 0, 0.075); }\n\n.shadow-deep-m {\n  box-shadow: 20px 47px 107px rgba(0, 0, 0, 0.098); }\n\n.mb-xxxs {\n  margin-bottom: .5rem; }\n\n.mb-xxs {\n  margin-bottom: 1rem; }\n\n.mb-xs {\n  margin-bottom: 1.5rem; }\n\n.mb-s {\n  margin-bottom: 2.5rem; }\n\n.mb-m {\n  margin-bottom: 3.5rem; }\n\n.mb-l {\n  margin-bottom: 5rem; }\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-weight: 700;\n  line-height: 1.3;\n  color: #333; }\n\nh1 {\n  font-size: 4.5rem; }\n\nh2 {\n  font-size: 3.6rem; }\n\nh3 {\n  font-size: 2.8rem; }\n\nh4 {\n  font-size: 2.2rem; }\n\nh5 {\n  font-size: 2rem; }\n\nh6 {\n  font-size: 1.6rem; }\n\np {\n  padding: 10px 0;\n  font-size: 1.6rem;\n  font-weight: 300;\n  color: #333; }\n\n.faqAccordion {\n  text-align: left; }\n  .faqAccordion .faqAccordion-tab {\n    margin-bottom: 2rem; }\n  .faqAccordion__btn {\n    display: block;\n    width: 100%;\n    padding: 2.5rem 3.5rem;\n    background-color: #eee;\n    color: #777;\n    font-weight: 600;\n    border: none;\n    font-size: 1.6rem;\n    text-align: left;\n    transition: all .2s;\n    border-radius: .3rem;\n    position: relative; }\n    .faqAccordion__btn-icon {\n      font-size: 2rem;\n      position: absolute;\n      top: 50%;\n      transform: translateY(-50%);\n      right: 2.5rem; }\n  .faqAccordion__content {\n    background-color: #fff;\n    overflow: hidden;\n    max-height: 0;\n    transition: all .2s; }\n    .faqAccordion__content-text {\n      padding: 2rem 3.5rem; }\n\n.modal-bg {\n  width: 100%;\n  height: 100vh;\n  position: fixed;\n  top: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(0, 0, 0, 0.7);\n  visibility: hidden;\n  opacity: 0;\n  transition: visibility 0s, opacity .3s; }\n  .modal-bg--active {\n    visibility: visible;\n    opacity: 1; }\n  .modal-bg .modal {\n    max-width: 90rem;\n    height: 80%;\n    background: #fff;\n    border-radius: .5rem;\n    position: relative;\n    overflow-y: scroll;\n    visibility: hidden; }\n    .modal-bg .modal--active {\n      visibility: visible; }\n    .modal-bg .modal__heading {\n      font-size: 2rem;\n      font-weight: 500; }\n    .modal-bg .modal__separator {\n      border-top: 2px solid #f5f5f5;\n      width: 100%;\n      margin-top: .5rem; }\n    .modal-bg .modal__input {\n      padding: .7rem 1.2rem;\n      font-size: 1.6rem;\n      border: 1px solid #bbb;\n      border-radius: .3rem;\n      width: 100%;\n      color: #bbb; }\n    .modal-bg .modal__tip {\n      display: inline-block;\n      font-size: 1.4rem;\n      font-weight: 300;\n      color: #bbb;\n      line-height: 1.2; }\n    .modal-bg .modal__profile-pic {\n      width: 11rem;\n      display: inline-block;\n      border-radius: 50%; }\n    .modal-bg .modal__btn {\n      padding: 1rem 3.2rem;\n      cursor: pointer;\n      border: 0;\n      display: block;\n      border-radius: .3rem;\n      color: #fff;\n      background: #536dfe;\n      font-weight: 600;\n      border: 2px solid #536dfe;\n      transition: all .2s; }\n      .modal-bg .modal__btn:hover {\n        background: #3a57fe;\n        border: 2px solid #3a57fe; }\n      .modal-bg .modal__btn--danger {\n        background: #d9534f;\n        border: 2px solid #d9534f;\n        color: #fff; }\n        .modal-bg .modal__btn--danger:hover {\n          background: #d43f3a;\n          border: 2px solid #d43f3a; }\n      .modal-bg .modal__btn--simple {\n        background: #fff;\n        border: 2px solid #fff;\n        color: #777; }\n        .modal-bg .modal__btn--simple:hover {\n          background: #777;\n          border: 2px solid #777;\n          color: #fff; }\n    .modal-bg .modal__grid {\n      display: grid;\n      grid-template-columns: 2fr 4fr;\n      grid-template-rows: 1fr; }\n      .modal-bg .modal__grid-left {\n        background: #f5f5f5; }\n        .modal-bg .modal__grid-left__top {\n          padding: 5rem 3.5rem 2.5rem 3.5rem;\n          text-align: center; }\n          .modal-bg .modal__grid-left__top-img {\n            width: 7.5rem;\n            border-radius: 50%; }\n          .modal-bg .modal__grid-left__top-welcome {\n            font-size: 1.6rem;\n            display: inline-block; }\n        .modal-bg .modal__grid-left__bottom {\n          padding-bottom: 10rem; }\n          .modal-bg .modal__grid-left__bottom-list__item a i {\n            margin-right: 1.5rem; }\n          .modal-bg .modal__grid-left__bottom-list__item a {\n            font-size: 1.4rem;\n            font-weight: 500;\n            padding: 1.5rem 1.5rem;\n            display: inline-block;\n            width: 100%;\n            transition: all .2s; }\n            .modal-bg .modal__grid-left__bottom-list__item a:hover {\n              background: #bbb; }\n          .modal-bg .modal__grid-left__bottom-list__item--active a {\n            background: #bbb; }\n      .modal-bg .modal__grid-main {\n        padding: 3.5rem 5rem;\n        background: #fff;\n        position: relative; }\n\n.card {\n  background-color: #fff;\n  border-radius: .5rem;\n  overflow: hidden;\n  padding: 2.5rem;\n  position: relative; }\n  .card__icon {\n    position: absolute;\n    top: 2.5rem;\n    right: 3.5rem;\n    display: inline-block;\n    font-size: 1.6rem; }\n  .card__heading {\n    font-weight: 500;\n    margin-bottom: .8rem;\n    text-transform: capitalize; }\n  .card__subheading {\n    font-weight: 400;\n    text-transform: capitalize; }\n  .card .card-1__heading {\n    margin-bottom: 2.5rem; }\n  .card .card-2__bottom-list {\n    margin-top: 2em;\n    position: relative; }\n    .card .card-2__bottom-list__row {\n      display: flex;\n      align-items: center;\n      position: relative; }\n      .card .card-2__bottom-list__row:not(:last-child) {\n        margin-bottom: 1.7rem; }\n      .card .card-2__bottom-list__row-icon {\n        position: absolute;\n        top: 50%;\n        right: .5rem;\n        transform: translateY(-50%);\n        font-size: 2.2rem;\n        color: #536dfe; }\n      .card .card-2__bottom-list__row-left__img {\n        width: 4rem;\n        border-radius: 50%; }\n      .card .card-2__bottom-list__row-right {\n        padding-left: 1.5rem; }\n        .card .card-2__bottom-list__row-right__name {\n          font-size: 1.6rem;\n          font-weight: 400; }\n        .card .card-2__bottom-list__row-right__date {\n          font-size: 1.4rem;\n          font-weight: 300; }\n\n.floating {\n  position: fixed;\n  bottom: 3.2rem;\n  right: 2.5rem;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end; }\n  .floating__card {\n    max-width: 30rem;\n    background-color: #fff;\n    padding: 2.2rem 1.7rem;\n    border-radius: .5rem;\n    overflow: hidden;\n    margin-bottom: 1.5rem;\n    text-align: center;\n    border-top: 0.6rem solid #536dfe;\n    visibility: hidden;\n    opacity: 0;\n    transition: visibility 0s, opacity .3s;\n    position: relative; }\n    .floating__card--visible {\n      visibility: visible;\n      opacity: 1; }\n    .floating__card__close {\n      position: absolute;\n      top: 1rem;\n      right: 1.5rem;\n      font-size: 1.8rem;\n      color: #bbb; }\n    .floating__card-img {\n      width: 7rem;\n      height: 7rem;\n      border-radius: 50%; }\n    .floating__card-text {\n      font-size: 1.8rem;\n      text-transform: capitalize;\n      font-weight: 700; }\n      .floating__card-text span {\n        font-size: 1.6rem;\n        color: #ccc;\n        font-weight: 400;\n        text-transform: none; }\n    .floating__card-form {\n      width: 100%; }\n      .floating__card-form__input[type=\"text\"] {\n        font-size: 1.6rem;\n        border: none;\n        border-bottom: 2px solid whitesmoke;\n        padding: 0;\n        margin-top: 1.5rem;\n        margin-bottom: 2.5rem;\n        outline: none;\n        padding: .5rem 0 .5rem 0px;\n        width: 100%; }\n        .floating__card-form__input[type=\"text\"]::placeholder {\n          color: #ccc; }\n        .floating__card-form__input[type=\"text\"]:focus {\n          border-bottom: 2px solid #ccc; }\n      .floating__card-form__textarea {\n        font-family: inherit;\n        font-size: 1.6rem;\n        border: none;\n        border-bottom: 2px solid whitesmoke;\n        padding: 0;\n        margin-bottom: 2rem;\n        outline: none;\n        padding: .5rem 0 .5rem 0px;\n        width: 100%; }\n        .floating__card-form__textarea::placeholder {\n          color: #ccc; }\n        .floating__card-form__textarea:focus {\n          border-bottom: 2px solid #ccc; }\n      .floating__card-form__submit {\n        display: block;\n        width: 100%;\n        text-transform: uppercase;\n        font-size: 1.4rem;\n        padding: 1.5rem 4.5rem;\n        border-radius: .3rem;\n        background-color: #536dfe;\n        color: #fff; }\n  .floating__btn {\n    background-color: #536dfe;\n    border-radius: 50%;\n    width: 5.6rem;\n    height: 5.6rem;\n    overflow: hidden;\n    z-index: 1000;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    transition: all .2s; }\n    .floating__btn:hover {\n      background-color: #3a57fe; }\n    .floating__btn-icon {\n      text-align: center;\n      display: inline-block;\n      color: #fff;\n      font-size: 2rem; }\n\n.main-grid {\n  display: grid;\n  grid-template-columns: 2fr 10fr;\n  grid-template-rows: 1fr;\n  height: 100vh; }\n\n.dashboard .header {\n  padding-bottom: 15rem;\n  background: linear-gradient(to right, #e91e63, #9c27b0); }\n\n.dashboard .navbar {\n  padding: 0 2.5rem;\n  background: linear-gradient(to right, #e91e63, #9c27b0); }\n  .dashboard .navbar__wrapper {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 0; }\n  .dashboard .navbar__search {\n    position: relative; }\n    .dashboard .navbar__search-input {\n      background-color: rgba(255, 255, 255, 0.2);\n      border: none;\n      padding: 1.2rem 1rem 1.2rem 6.5rem;\n      width: 50rem;\n      border-radius: 25rem;\n      outline: none;\n      margin: 0;\n      height: auto;\n      font-size: 1.6rem;\n      letter-spacing: 1px;\n      text-transform: capitalize; }\n      .dashboard .navbar__search-input:focus {\n        border: 0;\n        box-shadow: none;\n        background-color: #fff;\n        box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.12); }\n        .dashboard .navbar__search-input:focus::placeholder {\n          color: #333; }\n      .dashboard .navbar__search-input::placeholder {\n        color: #fff; }\n    .dashboard .navbar__search-label {\n      position: absolute;\n      top: .8rem;\n      left: 2.5rem; }\n      .dashboard .navbar__search-label i {\n        color: #fff; }\n  .dashboard .navbar__list {\n    display: flex;\n    padding: 1.5rem 0; }\n    .dashboard .navbar__list-item:not(:last-child) a {\n      margin-right: 2.2rem; }\n    .dashboard .navbar__list-item a {\n      display: inline-block;\n      padding: .5rem .5rem;\n      color: #fff; }\n    .dashboard .navbar__list-item__img {\n      width: 30px;\n      border-radius: 50%;\n      display: inline; }\n      .dashboard .navbar__list-item__img-status {\n        position: absolute;\n        bottom: 15px;\n        right: 5px;\n        width: 10px;\n        height: 10px;\n        border-radius: 50%;\n        border: 1px solid #fff;\n        background-color: #6adb84;\n        display: inline-block; }\n    .dashboard .navbar__list-item__icon {\n      font-size: 2rem; }\n      .dashboard .navbar__list-item__icon-bell {\n        position: relative; }\n        .dashboard .navbar__list-item__icon-bell span {\n          position: absolute;\n          display: inline-block;\n          top: -1.3rem;\n          right: -1rem;\n          color: #fff;\n          background-color: #E91E63;\n          border-radius: 50%;\n          padding: .3rem;\n          font-size: 1.4rem; }\n    .dashboard .navbar__list-item--relative a {\n      position: relative; }\n\n.dashboard .dashboard-grid {\n  position: relative;\n  top: -150px;\n  display: grid;\n  padding: 2.5rem;\n  gap: 2.5rem;\n  grid-template-columns: repeat(12, 1fr); }\n\n.sidebar {\n  background-color: var(--sidebar-bg);\n  overflow: hidden; }\n  .sidebar[data-theme=\"dark\"] {\n    --sidebar-bg: #222; }\n  .sidebar__list-heading, .sidebar__bottom-heading {\n    font-size: 1.4rem;\n    font-weight: 400;\n    text-transform: uppercase;\n    padding: 1.3rem 2.5rem;\n    color: blue; }\n  .sidebar__list-item {\n    position: relative; }\n    .sidebar__list-item--active {\n      background: #f5f5f5; }\n    .sidebar__list-item a {\n      display: block;\n      position: relative;\n      padding: 1.3rem 2.5rem;\n      font-size: 1.4rem;\n      color: #333;\n      font-weight: 500;\n      transition: .2s; }\n      .sidebar__list-item a:hover {\n        background: #f5f5f5; }\n      .sidebar__list-item a i {\n        margin-right: 20px;\n        font-size: 1.8rem; }\n    .sidebar__list-item__badge {\n      color: #fff;\n      background: #64DD17;\n      position: absolute;\n      top: 50%;\n      right: 2.5rem;\n      transform: translateY(-50%);\n      display: inline-block;\n      font-size: 1.1rem;\n      padding: 0.1rem .8rem;\n      border-radius: .3rem; }\n    .sidebar__list-item--pro a {\n      background: linear-gradient(to right, #E91E63, #9C27B0);\n      display: inline-block;\n      padding: 1.5rem 3.5rem;\n      margin-left: 2.5rem;\n      border-radius: 25rem;\n      margin-top: 2.5rem;\n      color: #fff;\n      transition: .2s; }\n      .sidebar__list-item--pro a:hover {\n        background: linear-gradient(to right, #cf1454, #822193); }\n  .sidebar__top-wrapper {\n    padding: 17px 25px;\n    border-bottom: 2px solid #f5f5f5; }\n  .sidebar__bottom-subheading {\n    font-size: 1.4rem;\n    font-weight: 400;\n    display: inline-block;\n    padding: 0 2.5rem .5rem 2.5rem;\n    color: #a2a2a2; }\n  .sidebar__bottom-gradientList {\n    display: flex;\n    padding: 0 0 1.5rem 2.5rem; }\n    .sidebar__bottom-gradientList__item {\n      width: 2.5rem;\n      height: 2.5rem;\n      display: inline-block;\n      border-radius: 50%;\n      cursor: pointer; }\n      .sidebar__bottom-gradientList__item:not(:last-child) {\n        margin-right: 1.2rem; }\n      .sidebar__bottom-gradientList__item--1 {\n        background-image: linear-gradient(to right, #e91e63, #9c27b0); }\n      .sidebar__bottom-gradientList__item--2 {\n        background-image: linear-gradient(to right, #fa709a, #fee140); }\n      .sidebar__bottom-gradientList__item--3 {\n        background-image: linear-gradient(to right, #667eea, #764ba2); }\n      .sidebar__bottom-gradientList__item--4 {\n        background-image: linear-gradient(to right, #37ecba, #72afd3); }\n      .sidebar__bottom-gradientList__item--5 {\n        background-image: linear-gradient(to right, #48c6ef, #6f86d6); }\n      .sidebar__bottom-gradientList__item--6 {\n        background-image: linear-gradient(to right, #c471f5, #fa71cd); }\n  .sidebar__bottom-inputWrapper {\n    padding-left: 2.5rem; }\n  .sidebar__bottom-input {\n    position: relative;\n    width: 4rem;\n    height: 2rem;\n    -webkit-appearance: none;\n    background: #c6c6c6;\n    border-radius: 2rem;\n    transition: .3s;\n    outline: none;\n    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);\n    cursor: pointer; }\n    .sidebar__bottom-input:checked {\n      background-color: #03a9f4; }\n      .sidebar__bottom-input:checked:before {\n        left: 2rem; }\n    .sidebar__bottom-input:before {\n      content: '';\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 2rem;\n      height: 2rem;\n      border-radius: 2rem;\n      background: #fff;\n      transform: scale(1.1);\n      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);\n      transition: .3s; }\n\n.footer {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background: linear-gradient(to right, #E91E63, #9C27B0);\n  padding: 1.7rem 2.5rem; }\n  .footer__heading {\n    color: #fff;\n    font-size: 1.6rem;\n    font-weight: 500; }\n  .footer__icon {\n    color: #FF1744; }\n\n.dashboard--calendar .calendar-hero {\n  text-align: center; }\n  .dashboard--calendar .calendar-hero__heading {\n    margin-top: 5rem;\n    color: #fff; }\n  .dashboard--calendar .calendar-hero__subheading {\n    color: rgba(255, 255, 255, 0.7);\n    font-size: 1.8rem;\n    margin-bottom: 2.5rem; }\n\n.dashboard--calendar .calendar-section .calendar {\n  display: flex; }\n  .dashboard--calendar .calendar-section .calendar__day {\n    background-color: #ccc;\n    border: 2px solid #ccc;\n    text-align: center;\n    padding: 5rem; }\n\n.dashboard--knowledge .header {\n  padding-bottom: 47rem; }\n\n.dashboard--knowledge .support-container {\n  position: relative;\n  top: -42rem;\n  padding: 0 1.5rem; }\n\n.dashboard--knowledge .support-hero {\n  text-align: center;\n  color: #fff; }\n  .dashboard--knowledge .support-hero__heading {\n    color: #fff; }\n  .dashboard--knowledge .support-hero__subheading {\n    color: rgba(255, 255, 255, 0.7);\n    font-size: 1.8rem;\n    margin-bottom: 1.5rem; }\n  .dashboard--knowledge .support-hero__searchBox {\n    display: flex;\n    width: 100%;\n    justify-content: center;\n    align-items: stretch; }\n    .dashboard--knowledge .support-hero__searchBox-input {\n      padding: 1.5rem 2.5rem;\n      width: 50%;\n      font-size: 1.8rem;\n      border: none;\n      border-top-left-radius: .3rem;\n      border-bottom-left-radius: .3rem;\n      font-weight: 300; }\n      .dashboard--knowledge .support-hero__searchBox-input::placeholder {\n        color: #bbb; }\n    .dashboard--knowledge .support-hero__searchBox-btn {\n      background-color: #111;\n      color: #fff;\n      border: none;\n      padding: 0 3.5rem;\n      font-size: 1.6rem;\n      border-top-right-radius: .3rem;\n      border-bottom-right-radius: .3rem;\n      outline: none;\n      font-weight: 600;\n      cursor: pointer;\n      transition: all .2s; }\n      .dashboard--knowledge .support-hero__searchBox-btn:hover {\n        background-color: #536dfe; }\n\n.dashboard--knowledge .support-cards {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  margin-top: 12rem; }\n  .dashboard--knowledge .support-cards .cardSupport {\n    background-color: #fff;\n    padding: 6rem 4.5rem;\n    border-radius: .3rem;\n    text-align: center;\n    transition: all .3s; }\n    .dashboard--knowledge .support-cards .cardSupport--1 {\n      border-top: solid 6px #1DE9B6; }\n    .dashboard--knowledge .support-cards .cardSupport--2 {\n      border-top: solid 6px #FFC400; }\n    .dashboard--knowledge .support-cards .cardSupport--3 {\n      border-top: solid 6px #FF1744; }\n    .dashboard--knowledge .support-cards .cardSupport:hover {\n      transform: translateY(-1.3rem); }\n    .dashboard--knowledge .support-cards .cardSupport:not(:last-child) {\n      margin-right: 4rem; }\n    .dashboard--knowledge .support-cards .cardSupport__icon {\n      display: inline-block;\n      font-size: 5rem;\n      margin-bottom: 3rem; }\n      .dashboard--knowledge .support-cards .cardSupport__icon--1 {\n        color: #1DE9B6; }\n      .dashboard--knowledge .support-cards .cardSupport__icon--2 {\n        color: #FFC400; }\n      .dashboard--knowledge .support-cards .cardSupport__icon--3 {\n        color: #FF1744; }\n    .dashboard--knowledge .support-cards .cardSupport__text {\n      border-bottom: solid 2px #f5f5f5;\n      padding-bottom: 1.8rem;\n      margin-bottom: 3.1rem; }\n    .dashboard--knowledge .support-cards .cardSupport__link {\n      color: #fff;\n      padding: 1.2rem 3.1rem;\n      border-radius: .3rem;\n      font-size: 1.4rem;\n      font-weight: 600; }\n      .dashboard--knowledge .support-cards .cardSupport__link--1 {\n        background-color: #1DE9B6; }\n      .dashboard--knowledge .support-cards .cardSupport__link--2 {\n        background-color: #FFC400; }\n      .dashboard--knowledge .support-cards .cardSupport__link--3 {\n        background-color: #FF1744; }\n\n.dashboard--knowledge .support-faq {\n  text-align: center;\n  margin-top: 10rem;\n  margin-bottom: 7rem; }\n  .dashboard--knowledge .support-faq__heading {\n    margin-bottom: 3.5rem; }\n\n.dashboard--support .support-hero {\n  text-align: center; }\n  .dashboard--support .support-hero__heading {\n    margin-top: 5rem;\n    color: #fff; }\n  .dashboard--support .support-hero__subheading {\n    color: rgba(255, 255, 255, 0.7);\n    font-size: 1.8rem;\n    margin-bottom: 2.5rem; }\n\n.dashboard--support .support-form-section .support-form-card {\n  background-color: #fff;\n  display: flex;\n  width: 90%;\n  margin: 0 auto;\n  overflow: hidden;\n  border-radius: .3rem; }\n  .dashboard--support .support-form-section .support-form-card__left {\n    width: 66.66%;\n    padding: 5rem; }\n    .dashboard--support .support-form-section .support-form-card__left-heading {\n      color: #E91E63;\n      margin-bottom: 3.5rem; }\n    .dashboard--support .support-form-section .support-form-card__left .support-form {\n      position: relative;\n      padding-bottom: 8.5rem; }\n      .dashboard--support .support-form-section .support-form-card__left .support-form__row {\n        display: flex;\n        align-items: center; }\n        .dashboard--support .support-form-section .support-form-card__left .support-form__row:not(:last-child) {\n          margin-bottom: 4rem; }\n      .dashboard--support .support-form-section .support-form-card__left .support-form__column {\n        width: 50%; }\n        .dashboard--support .support-form-section .support-form-card__left .support-form__column:first-child {\n          margin-right: 3.5rem; }\n        .dashboard--support .support-form-section .support-form-card__left .support-form__column--full {\n          width: 100%; }\n      .dashboard--support .support-form-section .support-form-card__left .support-form__btn {\n        position: absolute;\n        bottom: 0;\n        right: 0;\n        background-color: #536dfe;\n        border: none;\n        border-radius: 50%;\n        width: 5.6rem;\n        height: 5.6rem;\n        overflow: hidden;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        transition: all .2s; }\n        .dashboard--support .support-form-section .support-form-card__left .support-form__btn:hover {\n          background-color: #3a57fe; }\n        .dashboard--support .support-form-section .support-form-card__left .support-form__btn-icon {\n          text-align: center;\n          display: inline-block;\n          color: #fff;\n          font-size: 2rem; }\n      .dashboard--support .support-form-section .support-form-card__left .support-form label {\n        display: block;\n        font-size: 1.4rem;\n        font-weight: 500;\n        color: #c5c5c5;\n        margin-bottom: .7rem; }\n      .dashboard--support .support-form-section .support-form-card__left .support-form input,\n      .dashboard--support .support-form-section .support-form-card__left .support-form textarea {\n        font-size: 1.6rem;\n        border: none;\n        border-bottom: 2px solid #f5f5f5;\n        padding: 0rem 0 .7rem 0;\n        width: 100%; }\n      .dashboard--support .support-form-section .support-form-card__left .support-form select {\n        border: 0;\n        box-shadow: none;\n        appearance: none;\n        font-size: 1.4rem;\n        color: #c5c5c5; }\n        .dashboard--support .support-form-section .support-form-card__left .support-form select option {\n          border: 0; }\n        .dashboard--support .support-form-section .support-form-card__left .support-form select::-ms-expand {\n          display: none; }\n  .dashboard--support .support-form-section .support-form-card__right {\n    width: 33.33%;\n    background-color: #222;\n    color: #fff;\n    padding: 5rem; }\n    .dashboard--support .support-form-section .support-form-card__right-heading {\n      color: inherit;\n      margin-bottom: 5rem; }\n    .dashboard--support .support-form-section .support-form-card__right-list__item {\n      display: flex;\n      align-items: center; }\n      .dashboard--support .support-form-section .support-form-card__right-list__item:not(:last-child) {\n        margin-bottom: 3rem; }\n      .dashboard--support .support-form-section .support-form-card__right-list__item-left {\n        margin-right: 2.2rem;\n        text-align: center; }\n        .dashboard--support .support-form-section .support-form-card__right-list__item-left__icon {\n          font-size: 2rem;\n          opacity: .3;\n          display: inline-block; }\n          .dashboard--support .support-form-section .support-form-card__right-list__item-left__icon--1 {\n            margin-left: .1rem; }\n          .dashboard--support .support-form-section .support-form-card__right-list__item-left__icon--2 {\n            margin-left: .3rem; }\n      .dashboard--support .support-form-section .support-form-card__right-list__item-right__text {\n        font-size: 1.4rem;\n        font-weight: 300;\n        letter-spacing: 1px;\n        opacity: .8; }\n\n.dashboard--home .dashboard-grid {\n  grid-template-areas: \"card-1 card-1 card-1 card-1 card-1 card-1 card-1 card-4 card-4 card-4 card-4 card-4\"\r \"card-3 card-3 card-3 card-3 card-2 card-2 card-2 card-2 card-5 card-5 card-5 card-5\"; }\n\n.dashboard--home .card-1 {\n  grid-area: card-1; }\n\n.dashboard--home .card-2 {\n  grid-area: card-2; }\n\n.dashboard--home .card-3 {\n  grid-area: card-3; }\n\n.dashboard--home .card-4 {\n  grid-area: card-4; }\n\n.dashboard--home .card-5 {\n  grid-area: card-5; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./sass/main.scss":
/*!************************!*\
  !*** ./sass/main.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./sass/main.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ })

/******/ });
//# sourceMappingURL=main.js.map