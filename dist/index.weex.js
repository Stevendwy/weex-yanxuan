// { "framework": "Vue" }

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
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ({

/***/ 9:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/steven/Desktop/git/weex-yanxuan/.babelrc'\n    at Object.fs.openSync (fs.js:646:18)\n    at Object.fs.readFileSync (fs.js:551:33)\n    at ConfigChainBuilder.addConfig (/Users/steven/Desktop/git/weex-yanxuan/node_modules/_babel-core@6.26.0@babel-core/lib/transformation/file/options/build-config-chain.js:146:32)\n    at ConfigChainBuilder.findConfigs (/Users/steven/Desktop/git/weex-yanxuan/node_modules/_babel-core@6.26.0@babel-core/lib/transformation/file/options/build-config-chain.js:96:16)\n    at buildConfigChain (/Users/steven/Desktop/git/weex-yanxuan/node_modules/_babel-core@6.26.0@babel-core/lib/transformation/file/options/build-config-chain.js:61:13)\n    at OptionManager.init (/Users/steven/Desktop/git/weex-yanxuan/node_modules/_babel-core@6.26.0@babel-core/lib/transformation/file/options/option-manager.js:354:58)\n    at File.initOptions (/Users/steven/Desktop/git/weex-yanxuan/node_modules/_babel-core@6.26.0@babel-core/lib/transformation/file/index.js:212:65)\n    at new File (/Users/steven/Desktop/git/weex-yanxuan/node_modules/_babel-core@6.26.0@babel-core/lib/transformation/file/index.js:135:24)\n    at Pipeline.transform (/Users/steven/Desktop/git/weex-yanxuan/node_modules/_babel-core@6.26.0@babel-core/lib/transformation/pipeline.js:46:16)\n    at transpile (/Users/steven/Desktop/git/weex-yanxuan/node_modules/_babel-loader@6.4.1@babel-loader/lib/index.js:46:20)\n    at Object.module.exports (/Users/steven/Desktop/git/weex-yanxuan/node_modules/_babel-loader@6.4.1@babel-loader/lib/index.js:163:20)");

/***/ })

/******/ });