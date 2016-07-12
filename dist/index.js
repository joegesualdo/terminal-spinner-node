module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _chalk = __webpack_require__(1);

	var _chalk2 = _interopRequireDefault(_chalk);

	var _hideTerminalCursor = __webpack_require__(2);

	var _hideTerminalCursor2 = _interopRequireDefault(_hideTerminalCursor);

	var _showTerminalCursor = __webpack_require__(3);

	var _showTerminalCursor2 = _interopRequireDefault(_showTerminalCursor);

	var _indentString = __webpack_require__(4);

	var _indentString2 = _interopRequireDefault(_indentString);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	// Constants
	var defaultFrames = ['⣾', '⣽', '⣻', '⢿', '⡿', '⣟', '⣯', '⣷'];
	var defaultColor = 'white';

	// Main

	var TerminalSpinner = function () {
	  function TerminalSpinner(_ref) {
	    var _ref$frames = _ref.frames;
	    var frames = _ref$frames === undefined ? defaultFrames : _ref$frames;
	    var _ref$text = _ref.text;
	    var text = _ref$text === undefined ? '' : _ref$text;
	    var _ref$indent = _ref.indent;
	    var indent = _ref$indent === undefined ? 2 : _ref$indent;
	    var _ref$interval = _ref.interval;
	    var interval = _ref$interval === undefined ? 80 : _ref$interval;
	    var _ref$color = _ref.color;
	    var color = _ref$color === undefined ? defaultColor : _ref$color;

	    _classCallCheck(this, TerminalSpinner);

	    this.text = text;
	    this.frames = frames;
	    this.onDone = function () {};
	    this.interval = interval;
	    this.intervalFn = undefined;
	    this.indent = indent;
	    this.color = color;
	  }

	  _createClass(TerminalSpinner, [{
	    key: 'on',
	    value: function on(type, fn) {
	      if (type === 'done') {
	        this.onDone = fn;
	      }
	    }
	  }, {
	    key: 'begin',
	    value: function begin() {
	      var _this = this;

	      return new Promise(function (resolve) {
	        (0, _hideTerminalCursor2.default)();
	        function onSigint() {
	          (0, _showTerminalCursor2.default)();
	          process.exit();
	        }
	        process.on('SIGINT', onSigint);
	        var count = 0;
	        _this.intervalFn = setInterval(function () {
	          process.stdout.clearLine();
	          process.stdout.cursorTo(0);
	          var color = _chalk2.default[_this.color] === undefined ? defaultColor : _this.color;
	          process.stdout.write((0, _indentString2.default)(_chalk2.default[color](_this.frames[count % _this.frames.length]) + ' ' + _this.text, _this.indent));
	          count++;
	        }, _this.interval);
	        resolve();
	      });
	    }
	  }, {
	    key: 'stop',
	    value: function stop() {
	      var _this2 = this;

	      return new Promise(function (resolve) {
	        clearInterval(_this2.intervalFn);
	        var finishedText = _this2.onDone();
	        process.stdout.clearLine();
	        process.stdout.cursorTo(0);
	        process.stdout.write(finishedText + '\n');
	        (0, _showTerminalCursor2.default)();
	        resolve();
	      });
	    }
	  }, {
	    key: 'changeText',
	    value: function changeText(text) {
	      this.text = text;
	    }
	  }]);

	  return TerminalSpinner;
	}();

	exports.default = TerminalSpinner;

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("chalk");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("hide-terminal-cursor");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("show-terminal-cursor");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports =
	/******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};

	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {

	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;

	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};

	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;

	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}


	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;

	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;

	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";

	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});

		var _assert = __webpack_require__(1);

		var _assert2 = _interopRequireDefault(_assert);

		var _isEmptyLine = __webpack_require__(2);

		var _isEmptyLine2 = _interopRequireDefault(_isEmptyLine);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		exports.default = function (str) {
		  var count = arguments.length <= 1 || arguments[1] === undefined ? 2 : arguments[1];
		  var character = arguments.length <= 2 || arguments[2] === undefined ? ' ' : arguments[2];

		  _assert2.default.type(str, 'string');
		  _assert2.default.type(character, 'string');

		  return str.split('\n').map(function (line) {
		    if ((0, _isEmptyLine2.default)(line)) return line;
		    return '' + character.repeat(count) + line;
		  }).join('\n');
		};

	/***/ },
	/* 1 */
	/***/ function(module, exports) {

		module.exports =
		/******/ (function(modules) { // webpackBootstrap
		/******/ 	// The module cache
		/******/ 	var installedModules = {};

		/******/ 	// The require function
		/******/ 	function __webpack_require__(moduleId) {

		/******/ 		// Check if module is in cache
		/******/ 		if(installedModules[moduleId])
		/******/ 			return installedModules[moduleId].exports;

		/******/ 		// Create a new module (and put it into the cache)
		/******/ 		var module = installedModules[moduleId] = {
		/******/ 			exports: {},
		/******/ 			id: moduleId,
		/******/ 			loaded: false
		/******/ 		};

		/******/ 		// Execute the module function
		/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

		/******/ 		// Flag the module as loaded
		/******/ 		module.loaded = true;

		/******/ 		// Return the exports of the module
		/******/ 		return module.exports;
		/******/ 	}


		/******/ 	// expose the modules object (__webpack_modules__)
		/******/ 	__webpack_require__.m = modules;

		/******/ 	// expose the module cache
		/******/ 	__webpack_require__.c = installedModules;

		/******/ 	// __webpack_public_path__
		/******/ 	__webpack_require__.p = "";

		/******/ 	// Load entry module and return exports
		/******/ 	return __webpack_require__(0);
		/******/ })
		/************************************************************************/
		/******/ ([
		/* 0 */
		/***/ function(module, exports) {

			"use strict";

			Object.defineProperty(exports, "__esModule", {
			  value: true
			});

			var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

			exports.default = {
			  type: function type(val, _type) {
			    if ((typeof val === "undefined" ? "undefined" : _typeof(val)) !== _type) {
			      throw new TypeError("Expected '" + val + "' to be a '" + _type + "', got '" + (typeof val === "undefined" ? "undefined" : _typeof(val)) + "'");
			    }
			  }
			};

		/***/ }
		/******/ ]);

	/***/ },
	/* 2 */
	/***/ function(module, exports) {

		module.exports =
		/******/ (function(modules) { // webpackBootstrap
		/******/ 	// The module cache
		/******/ 	var installedModules = {};

		/******/ 	// The require function
		/******/ 	function __webpack_require__(moduleId) {

		/******/ 		// Check if module is in cache
		/******/ 		if(installedModules[moduleId])
		/******/ 			return installedModules[moduleId].exports;

		/******/ 		// Create a new module (and put it into the cache)
		/******/ 		var module = installedModules[moduleId] = {
		/******/ 			exports: {},
		/******/ 			id: moduleId,
		/******/ 			loaded: false
		/******/ 		};

		/******/ 		// Execute the module function
		/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

		/******/ 		// Flag the module as loaded
		/******/ 		module.loaded = true;

		/******/ 		// Return the exports of the module
		/******/ 		return module.exports;
		/******/ 	}


		/******/ 	// expose the modules object (__webpack_modules__)
		/******/ 	__webpack_require__.m = modules;

		/******/ 	// expose the module cache
		/******/ 	__webpack_require__.c = installedModules;

		/******/ 	// __webpack_public_path__
		/******/ 	__webpack_require__.p = "";

		/******/ 	// Load entry module and return exports
		/******/ 	return __webpack_require__(0);
		/******/ })
		/************************************************************************/
		/******/ ([
		/* 0 */
		/***/ function(module, exports) {

			'use strict';

			Object.defineProperty(exports, "__esModule", {
			  value: true
			});

			var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

			var assert = {
			  type: function type(val, _type) {
			    if ((typeof val === 'undefined' ? 'undefined' : _typeof(val)) !== _type) {
			      throw new TypeError('Expected \'' + val + '\' to be a \'' + _type + '\', got \'' + (typeof val === 'undefined' ? 'undefined' : _typeof(val)) + '\'');
			    }
			  }
			};

			exports.default = function (str) {
			  assert.type(str, 'string');

			  var emptyCharacters = ['\n', ' '];

			  return str.split('').every(function (ch) {
			    return emptyCharacters.indexOf(ch) !== -1;
			  });
			};

		/***/ }
		/******/ ]);

	/***/ }
	/******/ ]);

/***/ }
/******/ ]);