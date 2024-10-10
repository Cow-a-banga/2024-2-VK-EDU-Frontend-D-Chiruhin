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
/******/ 	return __webpack_require__(__webpack_require__.s = "./chat/chat.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./chat/chat.css":
/*!***********************!*\
  !*** ./chat/chat.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./chat/chat.css?");

/***/ }),

/***/ "./chat/chat.js":
/*!**********************!*\
  !*** ./chat/chat.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _chat_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat.css */ \"./chat/chat.css\");\n/* harmony import */ var _chat_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chat_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/global.css */ \"./styles/global.css\");\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_global_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_reset_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/reset.css */ \"./styles/reset.css\");\n/* harmony import */ var _styles_reset_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_reset_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_account_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/account.css */ \"./styles/account.css\");\n/* harmony import */ var _styles_account_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_account_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_message_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/message.css */ \"./styles/message.css\");\n/* harmony import */ var _styles_message_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_message_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_header_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/header.css */ \"./styles/header.css\");\n/* harmony import */ var _styles_header_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_header_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _styles_status_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/status.css */ \"./styles/status.css\");\n/* harmony import */ var _styles_status_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_status_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _scripts_addMessageOnScreen__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../scripts/addMessageOnScreen */ \"./scripts/addMessageOnScreen.js\");\n/* harmony import */ var _scripts_scrollToTheBottom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../scripts/scrollToTheBottom */ \"./scripts/scrollToTheBottom.js\");\n/* harmony import */ var _scripts_localStorage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../scripts/localStorage */ \"./scripts/localStorage.js\");\nfunction _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(r, a) { if (r) { if (\"string\" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return \"Object\" === t && r.constructor && (t = r.constructor.name), \"Map\" === t || \"Set\" === t ? Array.from(r) : \"Arguments\" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }\nfunction _iterableToArray(r) { if (\"undefined\" != typeof Symbol && null != r[Symbol.iterator] || null != r[\"@@iterator\"]) return Array.from(r); }\nfunction _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }\nfunction _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }\n\n\n\n\n\n\n\n\n\n\nvar handleSubmit = function handleSubmit(event) {\n  event.preventDefault();\n  if (input.value !== '') {\n    var time = new Date().toLocaleTimeString([], {\n      hour: \"2-digit\",\n      minute: \"2-digit\"\n    });\n    var message = {\n      text: input.value,\n      name: \"Я\",\n      time: time\n    };\n    messages = [].concat(_toConsumableArray(messages), [message]);\n    Object(_scripts_addMessageOnScreen__WEBPACK_IMPORTED_MODULE_7__[\"addMessageOnScreen\"])(message, messagesContainer, true);\n    Object(_scripts_scrollToTheBottom__WEBPACK_IMPORTED_MODULE_8__[\"scrollToTheBottom\"])(messagesContainer);\n    input.value = '';\n  }\n};\nvar addAccountInfoOnScreen = function addAccountInfoOnScreen(username, image, accountContainer) {\n  var div_crop = document.createElement(\"div\");\n  div_crop.className = \"crop-container\";\n  var img_account = document.createElement(\"img\");\n  img_account.className = \"account__image\";\n  img_account.src = image;\n  var div_info = document.createElement(\"div\");\n  div_info.className = \"account__info\";\n  var div_name = document.createElement(\"div\");\n  div_name.className = \"account__name open-sans\";\n  div_name.innerText = username;\n  var div_time = document.createElement(\"div\");\n  div_time.className = \"account__last-time open-san\";\n  div_time.innerText = \"был(а) 2 часа назад\";\n  div_crop.appendChild(img_account);\n  div_info.appendChild(div_name);\n  div_info.appendChild(div_time);\n  accountContainer.appendChild(div_crop);\n  accountContainer.appendChild(div_info);\n};\nvar form = document.querySelector('form');\nvar input = document.querySelector('input');\nvar messagesContainer = document.querySelector('.messages');\nvar accountContainer = document.querySelector('.account');\nvar urlParams = new URLSearchParams(window.location.search);\nvar id = urlParams.get('id');\nform.addEventListener('submit', handleSubmit);\nwindow.addEventListener('beforeunload', function () {\n  if (chat !== undefined) {\n    Object(_scripts_localStorage__WEBPACK_IMPORTED_MODULE_9__[\"saveMessagesToStorage\"])(id, messages);\n  }\n});\nvar messages = Object(_scripts_localStorage__WEBPACK_IMPORTED_MODULE_9__[\"loadMessagesFromStorage\"])(id);\nvar chat = Object(_scripts_localStorage__WEBPACK_IMPORTED_MODULE_9__[\"getChatById\"])(id);\nif (chat === undefined) {\n  window.location.href = \"/\";\n}\naddAccountInfoOnScreen(chat.username, chat.image, accountContainer);\nObject(_scripts_addMessageOnScreen__WEBPACK_IMPORTED_MODULE_7__[\"addAllMessagesOnScreen\"])(messages, messagesContainer);\nObject(_scripts_scrollToTheBottom__WEBPACK_IMPORTED_MODULE_8__[\"scrollToTheBottom\"])(messagesContainer);\n\n//# sourceURL=webpack:///./chat/chat.js?");

/***/ }),

/***/ "./scripts/addMessageOnScreen.js":
/*!***************************************!*\
  !*** ./scripts/addMessageOnScreen.js ***!
  \***************************************/
/*! exports provided: addMessageOnScreen, addAllMessagesOnScreen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addMessageOnScreen\", function() { return addMessageOnScreen; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addAllMessagesOnScreen\", function() { return addAllMessagesOnScreen; });\nfunction _createForOfIteratorHelper(r, e) { var t = \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && \"number\" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t[\"return\"] || t[\"return\"](); } finally { if (u) throw o; } } }; }\nfunction _unsupportedIterableToArray(r, a) { if (r) { if (\"string\" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return \"Object\" === t && r.constructor && (t = r.constructor.name), \"Map\" === t || \"Set\" === t ? Array.from(r) : \"Arguments\" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }\nfunction _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }\nvar addMessageOnScreen = function addMessageOnScreen(message, messagesContainer) {\n  var isNew = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;\n  var div_message = document.createElement(\"div\");\n  div_message.className = \"message \".concat(isNew ? \"new-message\" : \"\", \" \").concat(message.name === 'Я' ? \"message-right\" : \"message-left\");\n  var div_text = document.createElement(\"div\");\n  div_text.className = \"message__text\";\n  div_text.innerText = message.text;\n  var div_bottom = document.createElement(\"div\");\n  div_bottom.className = \"message__bottom\";\n  var div_time = document.createElement(\"div\");\n  div_time.className = \"message__time\";\n  div_time.innerText = message.time;\n  div_bottom.appendChild(div_time);\n  if (message.name === 'Я') {\n    var span_done = document.createElement(\"span\");\n    span_done.className = \"material-icons message__status status\";\n    span_done.innerText = \"done_all\";\n    div_bottom.appendChild(span_done);\n  }\n  div_message.appendChild(div_text);\n  div_message.appendChild(div_bottom);\n  messagesContainer.appendChild(div_message);\n};\nvar addAllMessagesOnScreen = function addAllMessagesOnScreen(messages, messagesContainer) {\n  var _iterator = _createForOfIteratorHelper(messages),\n    _step;\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var message = _step.value;\n      addMessageOnScreen(message, messagesContainer);\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n};\n\n//# sourceURL=webpack:///./scripts/addMessageOnScreen.js?");

/***/ }),

/***/ "./scripts/localStorage.js":
/*!*********************************!*\
  !*** ./scripts/localStorage.js ***!
  \*********************************/
/*! exports provided: loadChatsFromStorage, getChatById, getLastMessageByChatId, saveChatsToStorage, loadMessagesFromStorage, saveMessagesToStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadChatsFromStorage\", function() { return loadChatsFromStorage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getChatById\", function() { return getChatById; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getLastMessageByChatId\", function() { return getLastMessageByChatId; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"saveChatsToStorage\", function() { return saveChatsToStorage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadMessagesFromStorage\", function() { return loadMessagesFromStorage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"saveMessagesToStorage\", function() { return saveMessagesToStorage; });\nfunction _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(r, a) { if (r) { if (\"string\" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return \"Object\" === t && r.constructor && (t = r.constructor.name), \"Map\" === t || \"Set\" === t ? Array.from(r) : \"Arguments\" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }\nfunction _iterableToArray(r) { if (\"undefined\" != typeof Symbol && null != r[Symbol.iterator] || null != r[\"@@iterator\"]) return Array.from(r); }\nfunction _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }\nfunction _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }\nvar MESSAGES_STORAGE_KEY = \"MESSAGES\";\nvar CHATS_STORAGE_KEY = \"CHATS\";\nvar getChatKey = function getChatKey(id) {\n  return \"\".concat(MESSAGES_STORAGE_KEY, \"_\").concat(id);\n};\nvar loadChatsFromStorage = function loadChatsFromStorage() {\n  var json = localStorage.getItem(CHATS_STORAGE_KEY);\n  var data = json === null ? [] : JSON.parse(json);\n  return data;\n};\nvar getChatById = function getChatById(id) {\n  var num_id = Number(id);\n  var chats = loadChatsFromStorage();\n  return chats.find(function (x) {\n    return x.id === num_id;\n  });\n};\nvar getLastMessageByChatId = function getLastMessageByChatId(id) {\n  var messages = loadMessagesFromStorage(id);\n  return messages.length > 0 ? messages[messages.length - 1] : {\n    text: '',\n    name: '',\n    time: ''\n  };\n};\nvar saveChatsToStorage = function saveChatsToStorage(data) {\n  localStorage.setItem(CHATS_STORAGE_KEY, JSON.stringify(data));\n};\nvar loadMessagesFromStorage = function loadMessagesFromStorage(id) {\n  var json = localStorage.getItem(getChatKey(id));\n  var data = json === null ? [] : JSON.parse(json);\n\n  //Временно для демонстрации сообщений собеседника\n  if (data.length === 0 || data[0].name === 'Я') {\n    data = addInterlocutorMessages(id, data);\n  }\n  return data;\n};\nvar saveMessagesToStorage = function saveMessagesToStorage(id, data) {\n  localStorage.setItem(getChatKey(id), JSON.stringify(data));\n};\nvar addInterlocutorMessages = function addInterlocutorMessages(id, data) {\n  var messages = [{\n    text: \"Привет!\",\n    name: \"User \".concat(id),\n    time: \"12:12\"\n  }, {\n    text: \"Как дела?\",\n    name: \"User \".concat(id),\n    time: \"12:12\"\n  }];\n  return [].concat(messages, _toConsumableArray(data));\n};\n\n//# sourceURL=webpack:///./scripts/localStorage.js?");

/***/ }),

/***/ "./scripts/scrollToTheBottom.js":
/*!**************************************!*\
  !*** ./scripts/scrollToTheBottom.js ***!
  \**************************************/
/*! exports provided: scrollToTheBottom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"scrollToTheBottom\", function() { return scrollToTheBottom; });\nvar scrollToTheBottom = function scrollToTheBottom(container) {\n  container.scrollTop = container.scrollHeight;\n};\n\n//# sourceURL=webpack:///./scripts/scrollToTheBottom.js?");

/***/ }),

/***/ "./styles/account.css":
/*!****************************!*\
  !*** ./styles/account.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./styles/account.css?");

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

/***/ "./styles/message.css":
/*!****************************!*\
  !*** ./styles/message.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./styles/message.css?");

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