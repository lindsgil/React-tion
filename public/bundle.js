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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: Failed to load plugin promise: Cannot find module 'eslint-plugin-promise'\\nReferenced from: /Users/lindsaygilbert/Desktop/Sites/React-tion/.eslintrc.json\\n    at Function.Module._resolveFilename (module.js:469:15)\\n    at Function.resolve (internal/module.js:27:19)\\n    at Object.load (/Users/lindsaygilbert/Desktop/Sites/React-tion/node_modules/eslint/lib/config/plugins.js:134:29)\\n    at Array.forEach (native)\\n    at Object.loadAll (/Users/lindsaygilbert/Desktop/Sites/React-tion/node_modules/eslint/lib/config/plugins.js:162:21)\\n    at load (/Users/lindsaygilbert/Desktop/Sites/React-tion/node_modules/eslint/lib/config/config-file.js:541:21)\\n    at configExtends.reduceRight.e (/Users/lindsaygilbert/Desktop/Sites/React-tion/node_modules/eslint/lib/config/config-file.js:424:36)\\n    at Array.reduceRight (native)\\n    at applyExtends (/Users/lindsaygilbert/Desktop/Sites/React-tion/node_modules/eslint/lib/config/config-file.js:408:28)\\n    at Object.load (/Users/lindsaygilbert/Desktop/Sites/React-tion/node_modules/eslint/lib/config/config-file.js:566:22)\\n    at loadConfig (/Users/lindsaygilbert/Desktop/Sites/React-tion/node_modules/eslint/lib/config.js:63:33)\\n    at getLocalConfig (/Users/lindsaygilbert/Desktop/Sites/React-tion/node_modules/eslint/lib/config.js:130:29)\\n    at Config.getConfig (/Users/lindsaygilbert/Desktop/Sites/React-tion/node_modules/eslint/lib/config.js:260:26)\\n    at processText (/Users/lindsaygilbert/Desktop/Sites/React-tion/node_modules/eslint/lib/cli-engine.js:224:33)\\n    at CLIEngine.executeOnText (/Users/lindsaygilbert/Desktop/Sites/React-tion/node_modules/eslint/lib/cli-engine.js:754:26)\\n    at lint (/Users/lindsaygilbert/Desktop/Sites/React-tion/node_modules/eslint-loader/index.js:211:17)\\n    at Object.module.exports (/Users/lindsaygilbert/Desktop/Sites/React-tion/node_modules/eslint-loader/index.js:206:21)\");\n\n//////////////////\n// WEBPACK FOOTER\n// ./js/ClientApp.js\n// module id = 0\n// module chunks = 0\n\n//# sourceURL=webpack:///./js/ClientApp.js?");

/***/ })
/******/ ]);