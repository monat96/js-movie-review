/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/common.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/common.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/search_button.png */ \"./src/images/search_button.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n  box-sizing: border-box !important;\n}\n\nbody {\n  font-size: 14px;\n  background-color: #222222;\n  color: #fff;\n}\n\na {\n  color: inherit;\n  text-decoration: none;\n}\n\nbutton {\n  cursor: pointer;\n}\n\n#app {\n  padding-bottom: 48px;\n}\n\n*:focus {\n  outline: none;\n}\n.item-view,\n.item-test {\n  width: 100%;\n}\n\n.item-view {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 1200px;\n  margin: 0 auto;\n}\n\n.item-view h2 {\n  font-size: 2rem;\n  font-weight: bold;\n  user-select: none;\n}\n\n/* https://andrew.hedges.name/experiments/aspect_ratio/ */\n\n.item-list {\n  display: grid;\n  margin: 48px 0;\n  grid-template-columns: repeat(4, 180px);\n  grid-column-gap: 160px;\n  grid-row-gap: 48px;\n}\n\n.item-card {\n  display: flex;\n  flex-direction: column;\n}\n\n.item-thumbnail {\n  border-radius: 8px;\n  width: 180px;\n  height: 270px;\n  background-size: contain;\n}\n\n.item-title {\n  margin-top: 16px;\n  font-size: 1.2rem;\n  font-weight: bold;\n}\n\n.item-score {\n  margin-top: 16px;\n  font-size: 1.2rem;\n}\n\n.item-score::after {\n  margin-left: 8px;\n}\n\n.item-title.skeleton::after,\n.item-score.skeleton::after {\n  font-size: 0;\n  content: \"loading\";\n}\n\n.full-width {\n  width: 100%;\n}\n\n.last-item {\n  margin-top: 48px;\n}\n\nbutton.btn {\n  border: 0;\n  border-radius: 8px;\n  height: 30px;\n  color: #fff;\n}\n\nbutton.primary {\n  background: #f33f3f;\n}\n\n.item-card .skeleton {\n  background: linear-gradient(-90deg, #aaa, #f0f0f0, #aaa, #f0f0f0);\n  background-size: 400%;\n  animation: skeleton-animation 5s infinite ease-out;\n  border-radius: 8px;\n}\n\n@keyframes skeleton-animation {\n  0% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0% 50%;\n  }\n}\nheader {\n  width: 100%;\n  min-width: 1200px;\n  height: 72px;\n  background-color: #222;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 20px;\n  border-bottom: 1px solid white;\n  margin-bottom: 48px;\n}\n\nheader h1 {\n  cursor: pointer;\n  user-select: none;\n  font-size: 2rem;\n  font-weight: bold;\n  letter-spacing: -0.1rem;\n  color: #f33f3f;\n}\n\nheader > .search-box {\n  background: #fff;\n  padding: 8px;\n  border-radius: 4px;\n}\n\nheader .search-box > input {\n  border: 0;\n}\n\nheader .search-box > .search-button {\n  width: 14px;\n  border: 0;\n  text-indent: -1000rem;\n  background: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) transparent no-repeat 0 1px;\n  background-size: contain;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://js-movie-review/./src/css/common.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/index.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/index.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_common_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./common.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/common.css\");\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./reset.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/reset.css\");\n// Imports\n\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_common_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://js-movie-review/./src/css/index.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/reset.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/reset.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* http://meyerweb.com/eric/tools/css/reset/\n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font: inherit;\n  font-size: 100%;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \"\";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://js-movie-review/./src/css/reset.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://js-movie-review/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://js-movie-review/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://js-movie-review/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/css/index.css":
/*!***************************!*\
  !*** ./src/css/index.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/index.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://js-movie-review/./src/css/index.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://js-movie-review/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://js-movie-review/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://js-movie-review/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://js-movie-review/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://js-movie-review/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://js-movie-review/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/app.js */ \"./src/js/app.js\");\n/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/index.css */ \"./src/css/index.css\");\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const root = document.getElementById(\"root\");\n  root.appendChild(document.createElement(\"movie-app\"));\n});\n\n\n//# sourceURL=webpack://js-movie-review/./src/index.js?");

/***/ }),

/***/ "./src/js/apis/movie.js":
/*!******************************!*\
  !*** ./src/js/apis/movie.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchPopularMovies: () => (/* binding */ fetchPopularMovies)\n/* harmony export */ });\n/* harmony import */ var _utils_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/fetch */ \"./src/js/utils/fetch.js\");\n\n\nconst MOVIE_API = {\n  POPULAR: \"https://api.themoviedb.org/3/movie/popular\",\n};\n\nconst fetchPopularMovies = async (page = 1) => {\n  const request = {\n    url: MOVIE_API.POPULAR,\n    query: {\n      language: \"ko-kr\",\n      page,\n    },\n    headers: {\n      Authorization: `Bearer ${\"eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZmVhMzAxNWJhNWJiMTI1MmQ0MmM5YzAxZGJiOWFhZCIsInN1YiI6IjY2NTViZTZkYTJkOWFhNmQxY2EzNmI0ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LWF0rrm099gi0Cyk7TGPCXwKvmsfHg3afyW_r7519UI\"}`,\n    },\n  };\n  return await (0,_utils_fetch__WEBPACK_IMPORTED_MODULE_0__.createAPIRequest)(request);\n};\n\n\n//# sourceURL=webpack://js-movie-review/./src/js/apis/movie.js?");

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_layout_app_header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/layout/app-header.js */ \"./src/js/components/layout/app-header.js\");\n/* harmony import */ var _components_movie_movie_card_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/movie/movie-card.js */ \"./src/js/components/movie/movie-card.js\");\n/* harmony import */ var _components_movie_movie_list_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/movie/movie-list.js */ \"./src/js/components/movie/movie-list.js\");\n/* harmony import */ var _components_movie_movie_container_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/movie/movie-container.js */ \"./src/js/components/movie/movie-container.js\");\n/* harmony import */ var _utils_template_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/template.js */ \"./src/js/utils/template.js\");\n\n\n\n\n\n\n\nclass App extends HTMLElement {\n  constructor() {\n    super();\n    this.attachShadow({ mode: \"open\" });\n  }\n\n  connectedCallback() {\n    this.render();\n  }\n\n  render() {\n    this.shadowRoot.innerHTML = this.template();\n  }\n\n  template() {\n    return (0,_utils_template_js__WEBPACK_IMPORTED_MODULE_4__.html)`\n      <style>\n        * {\n          padding-bottom: 48px;\n        }\n      </style>\n      <app-header></app-header>\n      <main>\n        <movie-container></movie-container>\n      </main>\n    `;\n  }\n}\n\ncustomElements.define(\"movie-app\", App);\n\n\n//# sourceURL=webpack://js-movie-review/./src/js/app.js?");

/***/ }),

/***/ "./src/js/components/layout/app-header.js":
/*!************************************************!*\
  !*** ./src/js/components/layout/app-header.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _images_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../images/logo.png */ \"./src/images/logo.png\");\n/* harmony import */ var _utils_template_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/template.js */ \"./src/js/utils/template.js\");\n/* harmony import */ var _search_box_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search-box.js */ \"./src/js/components/layout/search-box.js\");\n\n\n\n\n\nclass AppHeader extends HTMLElement {\n  constructor() {\n    super();\n    this.attachShadow({ mode: \"open\" });\n  }\n\n  connectedCallback() {\n    this.render();\n  }\n\n  render() {\n    this.shadowRoot.innerHTML = (0,_utils_template_js__WEBPACK_IMPORTED_MODULE_1__.html)`\n      <style>\n        header {\n          height: 72px;\n          background-color: #222;\n          min-width: 1200px;\n          display: flex;\n          justify-content: space-between;\n          align-items: center;\n          padding: 0 20px;\n          border-bottom: 1px solid white;\n          margin-bottom: 48px;\n        }\n        header h1 {\n          cursor: pointer;\n          user-select: none;\n          font-size: 2rem;\n          font-weight: bold;\n          letter-spacing: -0.1rem;\n          color: #f33f3f;\n        }\n      </style>\n      <header>\n        <h1>\n          <img id=\"logo\" src=\"${_images_logo_png__WEBPACK_IMPORTED_MODULE_0__}\" alt=\"로고\" />\n        </h1>\n        <search-box></search-box>\n      </header>\n    `;\n  }\n}\n\ncustomElements.define(\"app-header\", AppHeader);\n\n\n//# sourceURL=webpack://js-movie-review/./src/js/components/layout/app-header.js?");

/***/ }),

/***/ "./src/js/components/layout/search-box.js":
/*!************************************************!*\
  !*** ./src/js/components/layout/search-box.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _images_search_button_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../images/search_button.png */ \"./src/images/search_button.png\");\n/* harmony import */ var _utils_template_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/template.js */ \"./src/js/utils/template.js\");\n\n\n\nclass SearchBox extends HTMLElement {\n  constructor() {\n    super();\n    this.attachShadow({ mode: \"open\" });\n    this.render();\n  }\n\n  connectedCallback() {\n    this.render();\n  }\n\n  render() {\n    this.shadowRoot.innerHTML = (0,_utils_template_js__WEBPACK_IMPORTED_MODULE_1__.html)`\n      <style>\n        .search-box {\n          background: #fff;\n          padding: 8px;\n          border-radius: 4px;\n        }\n\n        .search-box > input {\n          border: 0;\n        }\n\n        .search-box > .search-button {\n          width: 14px;\n          border: 0;\n          text-indent: -1000rem;\n          background: url(\"${_images_search_button_png__WEBPACK_IMPORTED_MODULE_0__}\") transparent no-repeat 0 1px;\n          background-size: contain;\n        }\n      </style>\n      <div class=\"search-box\">\n        <input type=\"text\" placeholder=\"검색어를 입력하세요.\" />\n        <button class=\"search-button\">검색</button>\n      </div>\n    `;\n  }\n}\n\ncustomElements.define(\"search-box\", SearchBox);\n\n\n//# sourceURL=webpack://js-movie-review/./src/js/components/layout/search-box.js?");

/***/ }),

/***/ "./src/js/components/movie/movie-card.js":
/*!***********************************************!*\
  !*** ./src/js/components/movie/movie-card.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _images_star_filled_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../images/star_filled.png */ \"./src/images/star_filled.png\");\n/* harmony import */ var _utils_template_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/template.js */ \"./src/js/utils/template.js\");\n\n\n\nconst BASE_URL = \"https://image.tmdb.org/t/p/w220_and_h330_face\";\n\nclass MovieCard extends HTMLElement {\n  static get observedAttributes() {\n    return [\"posterPath\", \"title\", \"voteAverage\", \"isLoading\"];\n  }\n\n  constructor() {\n    super();\n    this.attachShadow({ mode: \"open\" });\n  }\n\n  get posterPath() {\n    return this.getAttribute(\"posterPath\");\n  }\n\n  get title() {\n    return this.getAttribute(\"title\");\n  }\n\n  get voteAverage() {\n    return this.getAttribute(\"voteAverage\");\n  }\n\n  get isLoading() {\n    return this.getAttribute(\"isLoading\") === \"true\";\n  }\n\n  attributeChangedCallback(name, oldValue, newValue) {\n    if (oldValue !== newValue) {\n      this.render();\n    }\n  }\n\n  connectedCallback() {\n    this.render();\n  }\n\n  render() {\n    const state = {\n      posterPath: this.posterPath,\n      title: this.title,\n      voteAverage: this.voteAverage,\n      isLoading: this.isLoading,\n    };\n    this.shadowRoot.innerHTML = this.template(state);\n  }\n\n  template({ posterPath, title, voteAverage, isLoading }) {\n    return (0,_utils_template_js__WEBPACK_IMPORTED_MODULE_1__.html)`\n      <style>\n        .movie-card {\n          display: flex;\n          flex-direction: column;\n        }\n\n        .movie-thumbnail {\n          border-radius: 8px;\n          width: 180px;\n          height: 270px;\n          background-size: contain;\n        }\n\n        .movie-title {\n          margin-top: 16px;\n          font-size: 1.2rem;\n          font-weight: bold;\n        }\n\n        .movie-score {\n          margin-top: 16px;\n          font-size: 1.2rem;\n        }\n\n        .movie-score::after {\n          margin-left: 8px;\n        }\n\n        a {\n          color: inherit;\n          text-decoration: none;\n        }\n\n        .movie-title.skeleton::after,\n        .movie-score.skeleton::after {\n          font-size: 0;\n          content: \"loading\";\n        }\n\n        .movie-card .skeleton {\n          background: linear-gradient(-90deg, #aaa, #f0f0f0, #aaa, #f0f0f0);\n          background-size: 400%;\n          animation: skeleton-animation 5s infinite ease-out;\n          border-radius: 8px;\n        }\n\n        @keyframes skeleton-animation {\n          0% {\n            background-position: 0% 50%;\n          }\n          50% {\n            background-position: 100% 50%;\n          }\n          100% {\n            background-position: 0% 50%;\n          }\n        }\n      </style>\n      <li>\n        ${isLoading\n          ? (0,_utils_template_js__WEBPACK_IMPORTED_MODULE_1__.html)`\n              <div class=\"movie-card\">\n                <div class=\"movie-thumbnail skeleton\"></div>\n                <p class=\"movie-title skeleton\"></p>\n                <p class=\"movie-score skeleton\"></p>\n              </div>\n            `\n          : (0,_utils_template_js__WEBPACK_IMPORTED_MODULE_1__.html)`\n              <a href=\"#\">\n                <div class=\"movie-card\">\n                  <img\n                    class=\"movie-thumbnail\"\n                    src=\"${BASE_URL}/${posterPath}\"\n                    loading=\"lazy\"\n                    alt=\"${title}\"\n                  />\n                  <p class=\"movie-title\">${title}</p>\n                  <p class=\"movie-score\">\n                    <img src=\"${_images_star_filled_png__WEBPACK_IMPORTED_MODULE_0__}\" alt=\"별점\" />\n                    ${Number(voteAverage).toFixed(1)}\n                  </p>\n                </div>\n              </a>\n            `}\n      </li>\n    `;\n  }\n}\n\ncustomElements.define(\"movie-card\", MovieCard);\n\n\n//# sourceURL=webpack://js-movie-review/./src/js/components/movie/movie-card.js?");

/***/ }),

/***/ "./src/js/components/movie/movie-container.js":
/*!****************************************************!*\
  !*** ./src/js/components/movie/movie-container.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _apis_movie_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../apis/movie.js */ \"./src/js/apis/movie.js\");\n/* harmony import */ var _utils_template__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/template */ \"./src/js/utils/template.js\");\n/* harmony import */ var _movie_list_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./movie-list.js */ \"./src/js/components/movie/movie-list.js\");\n\n\n\n\nclass MovieContainer extends HTMLElement {\n  #page = 1;\n  #movies = [];\n  #isLoading = true;\n  #isEnded = false;\n\n  constructor() {\n    super();\n    this.attachShadow({ mode: \"open\" });\n  }\n\n  connectedCallback() {\n    this.render();\n    this.fetchMovies();\n  }\n\n  async fetchMovies() {\n    this.#isLoading = true;\n    this.updateMovieList();\n\n    (0,_apis_movie_js__WEBPACK_IMPORTED_MODULE_0__.fetchPopularMovies)(this.#page)\n      .then((data) => {\n        this.#movies = [...this.#movies, ...data.results];\n        this.#isEnded = this.#page === data.total_pages;\n      })\n      .catch((error) => {\n        alert(error);\n      })\n      .finally(() => {\n        this.#isLoading = false;\n        this.updateMovieList();\n        this.buttonCheckHandler();\n      });\n  }\n\n  clickHandler() {\n    if (this.#isLoading || this.#isEnded) {\n      return;\n    }\n    this.#page += 1;\n    this.fetchMovies();\n  }\n\n  buttonCheckHandler() {\n    const showMoreButton = this.shadowRoot.querySelector(\".show-more\");\n\n    if (!showMoreButton) {\n      return;\n    }\n\n    if (this.#isEnded) {\n      showMoreButton.style.display = \"none\";\n    }\n    if (!this.#isEnded) {\n      showMoreButton.style.display = \"block\";\n    }\n  }\n\n  updateMovieList() {\n    const movieList = this.shadowRoot.querySelector(\"movie-list\");\n    movieList.movies = this.#movies;\n    movieList.isLoading = this.#isLoading;\n  }\n\n  render() {\n    this.shadowRoot.innerHTML = this.template();\n    this.shadowRoot\n      .querySelector(\"button\")\n      .addEventListener(\"click\", () => this.clickHandler());\n  }\n\n  template() {\n    return (0,_utils_template__WEBPACK_IMPORTED_MODULE_1__.html)`\n      <style>\n        .movie-container {\n          width: 100%;\n        }\n\n        .movie-container {\n          display: flex;\n          flex-direction: column;\n          justify-content: center;\n          width: 1200px;\n          margin: 0 auto;\n        }\n\n        .movie-container h2 {\n          font-size: 2rem;\n          font-weight: bold;\n          user-select: none;\n        }\n        .full-width {\n          width: 100%;\n        }\n\n        button.btn {\n          border: 0;\n          border-radius: 8px;\n          height: 30px;\n          color: #fff;\n          cursor: pointer;\n        }\n        button.primary {\n          background: #f33f3f;\n        }\n      </style>\n      <section class=\"movie-container\">\n        <h2>지금 인기 있는 영화</h2>\n        <movie-list></movie-list>\n        <button class=\"btn primary full-width show-more\">더보기</button>\n      </section>\n    `;\n  }\n}\n\ncustomElements.define(\"movie-container\", MovieContainer);\n\n\n//# sourceURL=webpack://js-movie-review/./src/js/components/movie/movie-container.js?");

/***/ }),

/***/ "./src/js/components/movie/movie-list.js":
/*!***********************************************!*\
  !*** ./src/js/components/movie/movie-list.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_template_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/template.js */ \"./src/js/utils/template.js\");\n\n\nclass MovieList extends HTMLElement {\n  #movies = [];\n  #isLoading = true;\n\n  constructor() {\n    super();\n    this.attachShadow({ mode: \"open\" });\n  }\n\n  set movies(movies) {\n    this.#movies = movies;\n    this.render();\n  }\n\n  set isLoading(isLoading) {\n    this.#isLoading = isLoading;\n    this.render();\n  }\n\n  render() {\n    this.shadowRoot.innerHTML = this.template();\n  }\n\n  template() {\n    return (0,_utils_template_js__WEBPACK_IMPORTED_MODULE_0__.html)`\n      <style>\n        .movie-list {\n          display: grid;\n          margin: 48px 0;\n          grid-template-columns: repeat(4, 180px);\n          grid-column-gap: 160px;\n          grid-row-gap: 48px;\n        }\n\n        ul {\n          list-style: none;\n          padding: 0;\n        }\n      </style>\n      <ul class=\"movie-list\">\n        ${this.#isLoading\n          ? Array.from({ length: 20 })\n              .map(() => (0,_utils_template_js__WEBPACK_IMPORTED_MODULE_0__.html)` <movie-card isLoading=\"true\"></movie-card> `)\n              .join(\"\")\n          : this.#movies\n              .map(\n                (movie) => (0,_utils_template_js__WEBPACK_IMPORTED_MODULE_0__.html)`\n                  <movie-card\n                    posterPath=\"${movie.poster_path}\"\n                    title=\"${movie.title}\"\n                    voteAverage=\"${movie.vote_average}\"\n                    isLoading=\"false\"\n                  ></movie-card>\n                `,\n              )\n              .join(\"\")}\n      </ul>\n    `;\n  }\n}\n\ncustomElements.define(\"movie-list\", MovieList);\n\n\n//# sourceURL=webpack://js-movie-review/./src/js/components/movie/movie-list.js?");

/***/ }),

/***/ "./src/js/utils/fetch.js":
/*!*******************************!*\
  !*** ./src/js/utils/fetch.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createAPIRequest: () => (/* binding */ createAPIRequest)\n/* harmony export */ });\nfunction formatUrl(config) {\n  const { href, query } = config;\n  const searchParams = new URLSearchParams(query);\n\n  return `${href}?${searchParams.toString()}`;\n}\n\nfunction formatHeaders(headersRecord) {\n  const headers = new Headers();\n\n  headers.append(\"content-type\", \"application/json\");\n  Object.entries(headersRecord).forEach(([key, value]) => {\n    headers.append(key, value);\n  });\n  return headers;\n}\n\nasync function createAPIRequest(request) {\n  const response = await fetch(\n    formatUrl({\n      href: request.url,\n      query: request.query ?? {},\n    }),\n    {\n      method: request.method || \"GET\",\n      headers: formatHeaders(request.headers),\n      body: request.body,\n    },\n  ).catch((error) => {\n    throw new Error(\"Network error: \", error);\n  });\n\n  if (!response.ok) {\n    throw new Error(\"Http error: \", response.status);\n  }\n\n  const data = !response.body ? null : await response.json();\n  return data;\n}\n\n\n//# sourceURL=webpack://js-movie-review/./src/js/utils/fetch.js?");

/***/ }),

/***/ "./src/js/utils/template.js":
/*!**********************************!*\
  !*** ./src/js/utils/template.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   css: () => (/* binding */ css),\n/* harmony export */   html: () => (/* binding */ html)\n/* harmony export */ });\nconst html = String.raw;\nconst css = String.raw;\n\n\n//# sourceURL=webpack://js-movie-review/./src/js/utils/template.js?");

/***/ }),

/***/ "./src/images/logo.png":
/*!*****************************!*\
  !*** ./src/images/logo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2e162b4fefb34cd7ed8d.png\";\n\n//# sourceURL=webpack://js-movie-review/./src/images/logo.png?");

/***/ }),

/***/ "./src/images/search_button.png":
/*!**************************************!*\
  !*** ./src/images/search_button.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f1bd4269f4446ceae306.png\";\n\n//# sourceURL=webpack://js-movie-review/./src/images/search_button.png?");

/***/ }),

/***/ "./src/images/star_filled.png":
/*!************************************!*\
  !*** ./src/images/star_filled.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6328741810b732410eec.png\";\n\n//# sourceURL=webpack://js-movie-review/./src/images/star_filled.png?");

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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/js-movie-review/";
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;