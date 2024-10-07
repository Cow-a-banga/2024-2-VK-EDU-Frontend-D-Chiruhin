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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index/index.css":
/*!*************************!*\
  !*** ./index/index.css ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./index/index.css?");

/***/ }),

/***/ "./index/index.js":
/*!************************!*\
  !*** ./index/index.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./index/index.css\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/global.css */ \"./styles/global.css\");\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_global_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_reset_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/reset.css */ \"./styles/reset.css\");\n/* harmony import */ var _styles_reset_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_reset_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_header_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/header.css */ \"./styles/header.css\");\n/* harmony import */ var _styles_header_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_header_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_float_button_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/float-button.css */ \"./styles/float-button.css\");\n/* harmony import */ var _styles_float_button_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_float_button_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_chat_item_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/chat-item.css */ \"./styles/chat-item.css\");\n/* harmony import */ var _styles_chat_item_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_chat_item_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _styles_status_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/status.css */ \"./styles/status.css\");\n/* harmony import */ var _styles_status_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_status_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _scripts_localStorage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../scripts/localStorage */ \"./scripts/localStorage.js\");\n\n\n\n\n\n\n\n\nvar TEXT_MAX_LENGTH = 25;\nvar addChatOnScreen = function addChatOnScreen(lastMessage, img, chatContainer) {\n  var a_chat = document.createElement(\"a\");\n  a_chat.className = \"chat\";\n  a_chat.href = \"./chat/chat.html\";\n  var div_crop = document.createElement(\"div\");\n  div_crop.className = \"crop-container\";\n  var img_chat = document.createElement(\"img\");\n  img_chat.className = \"chat__image profile-image\";\n  img_chat.src = img;\n  var div_underline = document.createElement(\"div\");\n  div_underline.className = \"chat__underline\";\n  var div_main = document.createElement(\"div\");\n  div_main.className = \"chat__main\";\n  var div_name = document.createElement(\"div\");\n  div_name.className = \"chat__name\";\n  div_name.innerText = \"Дженнифер Эшли\";\n  var div_text = document.createElement(\"div\");\n  div_text.className = \"chat__text\";\n  div_text.innerText = lastMessage.text.length > TEXT_MAX_LENGTH ? \"\".concat(lastMessage.text.slice(0, TEXT_MAX_LENGTH), \"...\") : lastMessage.text;\n  var div_chat_side = document.createElement(\"div\");\n  div_chat_side.className = \"chat__side\";\n  var div_time = document.createElement(\"div\");\n  div_time.className = \"chat__time\";\n  div_time.innerText = lastMessage.time;\n  div_chat_side.appendChild(div_time);\n  if (lastMessage.name === 'Я') {\n    var div_status = document.createElement(\"div\");\n    div_status.className = \"material-icons status\";\n    div_status.innerText = \"done_all\";\n    div_chat_side.appendChild(div_status);\n  }\n  div_main.appendChild(div_name);\n  div_main.appendChild(div_text);\n  div_underline.appendChild(div_main);\n  div_underline.appendChild(div_chat_side);\n  div_crop.appendChild(img_chat);\n  a_chat.appendChild(div_crop);\n  a_chat.appendChild(div_underline);\n  chatContainer.appendChild(a_chat);\n};\nvar chatContainer = document.querySelector('.chats');\nvar data = Object(_scripts_localStorage__WEBPACK_IMPORTED_MODULE_7__[\"loadMessagesFromStorage\"])();\nvar lastMessage = data.length > 0 ? data[data.length - 1] : {\n  text: '',\n  name: '',\n  time: ''\n};\nfor (var i = 0; i < 12; i++) {\n  addChatOnScreen(lastMessage, \"https://randomfox.ca/images/\".concat(i + 1, \".jpg\"), chatContainer);\n}\n\n//# sourceURL=webpack:///./index/index.js?");

/***/ }),

/***/ "./scripts/localStorage.js":
/*!*********************************!*\
  !*** ./scripts/localStorage.js ***!
  \*********************************/
/*! exports provided: loadMessagesFromStorage, saveMessagesToStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadMessagesFromStorage\", function() { return loadMessagesFromStorage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"saveMessagesToStorage\", function() { return saveMessagesToStorage; });\nfunction _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(r, a) { if (r) { if (\"string\" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return \"Object\" === t && r.constructor && (t = r.constructor.name), \"Map\" === t || \"Set\" === t ? Array.from(r) : \"Arguments\" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }\nfunction _iterableToArray(r) { if (\"undefined\" != typeof Symbol && null != r[Symbol.iterator] || null != r[\"@@iterator\"]) return Array.from(r); }\nfunction _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }\nfunction _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }\nvar MESSAGES_STORAGE_KEY = \"MESSAGES\";\nvar loadMessagesFromStorage = function loadMessagesFromStorage() {\n  var json = localStorage.getItem(MESSAGES_STORAGE_KEY);\n  console.log(localStorage.getItem(MESSAGES_STORAGE_KEY));\n  console.log(json === null ? [] : JSON.parse(json));\n  var data = json === null ? [] : JSON.parse(json);\n\n  //Временно для демонстрации сообщений собеседника\n  if (data.length === 0 || data[0].name === 'Я') {\n    data = addInterlocutorMessages(data);\n  }\n  return data;\n};\nvar saveMessagesToStorage = function saveMessagesToStorage(data) {\n  localStorage.setItem(MESSAGES_STORAGE_KEY, JSON.stringify(data));\n};\nvar addInterlocutorMessages = function addInterlocutorMessages(data) {\n  var messages = [{\n    text: \"Привет!\",\n    name: \"Дженнифер Эшли\",\n    time: \"12:12\"\n  }, {\n    text: \"Как дела?\",\n    name: \"Дженнифер Эшли\",\n    time: \"12:12\"\n  }];\n  return [].concat(messages, _toConsumableArray(data));\n};\n\n//# sourceURL=webpack:///./scripts/localStorage.js?");

/***/ }),

/***/ "./styles/chat-item.css":
/*!******************************!*\
  !*** ./styles/chat-item.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./styles/chat-item.css?");

/***/ }),

/***/ "./styles/float-button.css":
/*!*********************************!*\
  !*** ./styles/float-button.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./styles/float-button.css?");

/***/ }),

/***/ "./styles/global.css":
/*!***************************!*\
  !*** ./styles/global.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./styles/global.css?");

/***/ }),

/***/ "./styles/header.css":
/*!***************************!*\
  !*** ./styles/header.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./styles/header.css?");

/***/ }),

/***/ "./styles/reset.css":
/*!**************************!*\
  !*** ./styles/reset.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./styles/reset.css?");

/***/ }),

/***/ "./styles/status.css":
/*!***************************!*\
  !*** ./styles/status.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./styles/status.css?");

/***/ })

/******/ });