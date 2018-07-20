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
/******/ 	// object with all WebAssembly.instance exports
/******/ 	__webpack_require__.w = {};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./a.out.wasm":
/*!********************!*\
  !*** ./a.out.wasm ***!
  \********************/
/*! exports provided: ___errno_location, _fflush, _free, _malloc, _memcpy, _memset, _sbrk, dynCall_ii, dynCall_iiii, establishStackSpace, getTempRet0, runPostSets, setTempRet0, setThrew, stackAlloc, stackRestore, stackSave */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///./a.out.wasm?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _a_out_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./a.out.wasm */ \"./a.out.wasm\");\n// import { Universe } from \"./wasm_game_of_life\";\n// import { version } from \"./sqlite.wasm\";\n\n\nconsole.log(Object(_a_out_wasm__WEBPACK_IMPORTED_MODULE_0__[\"version\"])());\n\n// const CELL_SIZE = 5;\n// const GRID_COLOR = \"#CCCCCC\";\n// const DEAD_COLOR = \"#FFFFFF\";\n// const ALIVE_COLOR = \"#000000\";\n\n// // These must match `Cell::Alive` and `Cell::Dead` in `src/lib.rs`.\n// const DEAD = 0;\n// const ALIVE = 1;\n\n// const universe = Universe.new();\n// const width = universe.width();\n// const height = universe.height();\n\n// // Initialize the canvas with room for all of our cells and a 1px border\n// // around each of them.\n// const canvas = document.getElementById(\"game-of-life-canvas\");\n// canvas.height = (CELL_SIZE + 1) * height + 1;\n// canvas.width = (CELL_SIZE + 1) * width + 1;\n\n// const ctx = canvas.getContext('2d');\n\n// const renderLoop = () => {\n//   universe.tick();\n\n//   drawCells();\n//   drawGrid();\n\n//   requestAnimationFrame(renderLoop);\n// };\n\n// const drawGrid = () => {\n//   ctx.beginPath();\n//   ctx.lineWidth = 1 / window.devicePixelRatio;\n//   ctx.strokeStyle = GRID_COLOR;\n\n//   // Vertical lines.\n//   for (let i = 0; i <= width; i++) {\n//     ctx.moveTo(i * (CELL_SIZE + 1) + 1, 0);\n//     ctx.lineTo(i * (CELL_SIZE + 1) + 1, (CELL_SIZE + 1) * height + 1);\n//   }\n\n//   // Horizontal lines.\n//   for (let j = 0; j <= height; j++) {\n//     ctx.moveTo(0,                           j * (CELL_SIZE + 1) + 1);\n//     ctx.lineTo((CELL_SIZE + 1) * width + 1, j * (CELL_SIZE + 1) + 1);\n//   }\n\n//   ctx.stroke();\n// };\n\n// const getIndex = (row, column) => {\n//   return row * width + column;\n// };\n\n// const drawCells = () => {\n//   const cellsPtr = universe.cells();\n//   const cells = new Uint8Array(memory.buffer, cellsPtr, width * height);\n\n//   ctx.beginPath();\n\n//   for (let row = 0; row < height; row++) {\n//     for (let col = 0; col < width; col++) {\n//       const idx = getIndex(row, col);\n\n//       ctx.fillStyle = cells[idx] === DEAD\n//         ? DEAD_COLOR\n//         : ALIVE_COLOR;\n\n//       ctx.fillRect(\n//         col * (CELL_SIZE + 1) + 1,\n//         row * (CELL_SIZE + 1) + 1,\n//         CELL_SIZE,\n//         CELL_SIZE\n//       );\n//     }\n//   }\n\n//   ctx.stroke();\n// };\n\n// requestAnimationFrame(renderLoop);\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

/******/ });