module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Charts/BudgetUsageGraph.js":
/*!***********************************************!*\
  !*** ./components/Charts/BudgetUsageGraph.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_google_charts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-google-charts */ "react-google-charts");
/* harmony import */ var react_google_charts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_google_charts__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\phili\\Documents\\Coding\\MERN\\11.20.20MERN\\MERN\\components\\Charts\\BudgetUsageGraph.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function BudgetUsageGraph() {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx(react_google_charts__WEBPACK_IMPORTED_MODULE_1___default.a // width={'500px'}
  // height={'300px'}
  , {
    chartType: "BarChart",
    loader: __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, "Loading Bar Chart"),
    diffdata: {
      old: [["Category", "Dollars"], ["Housing", 1000], ["Food", 300], ["Utilities", 175], ["Shopping", 50], ["Dept Payment", 150]],
      new: [["Category", "Dollars"], ["Housing", 800], ["Food", 200], ["Utilities", 150], ["Shopping", 100], ["Dept Payment", 50]]
    },
    options: {
      title: 'Budget Usage By Category',
      legend: 'none',
      colors: ['#4db994', 'black']
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (BudgetUsageGraph);

/***/ }),

/***/ "./components/Charts/Piechart.js":
/*!***************************************!*\
  !*** ./components/Charts/Piechart.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_google_charts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-google-charts */ "react-google-charts");
/* harmony import */ var react_google_charts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_google_charts__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\phili\\Documents\\Coding\\MERN\\11.20.20MERN\\MERN\\components\\Charts\\Piechart.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Piechart() {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx(react_google_charts__WEBPACK_IMPORTED_MODULE_1___default.a // width={'500px'}
  // height={'300px'}
  , {
    chartType: "PieChart",
    loader: __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, "Loading Pie Chart"),
    data: [['Category', 'Dollars'], ['Housing', 800], ['Food', 200], ['Utilities', 150], ['Shopping', 100], ['Dept Payment', 50]],
    options: {
      title: "Spending Breakdown",
      legend: 'none'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Piechart);

/***/ }),

/***/ "./components/Summary/SummaryComponent.js":
/*!************************************************!*\
  !*** ./components/Summary/SummaryComponent.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Charts_Piechart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Charts/Piechart.js */ "./components/Charts/Piechart.js");
/* harmony import */ var _Charts_BudgetUsageGraph_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Charts/BudgetUsageGraph.js */ "./components/Charts/BudgetUsageGraph.js");
var _jsxFileName = "C:\\Users\\phili\\Documents\\Coding\\MERN\\11.20.20MERN\\MERN\\components\\Summary\\SummaryComponent.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function Summary() {
  return __jsx("div", {
    className: "Summary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "Summary"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx(_Charts_Piechart_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Table"], {
    responsive: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("thead", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "#"), __jsx("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Name"), __jsx("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Date"), __jsx("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Amount"))), __jsx("tbody", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "1"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "Town & Country"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "10/16/2020"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "$85.21")), __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "2"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "Car Payment"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "10/01/2020"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "$350"))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx(_Charts_BudgetUsageGraph_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (Summary);

/***/ }),

/***/ "./pages/summary.js":
/*!**************************!*\
  !*** ./pages/summary.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Summary_SummaryComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Summary/SummaryComponent */ "./components/Summary/SummaryComponent.js");
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/baseUrl */ "./utils/baseUrl.js");
var _jsxFileName = "C:\\Users\\phili\\Documents\\Coding\\MERN\\11.20.20MERN\\MERN\\pages\\summary.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
 //import CartItemList from "../components/Cart/CartItemList";
//import CartSummary from "../components/Cart/CartSummary";


 //import SummaryList from "../components/Index/SummaryList";




function Summary() {
  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_0__["Segment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx(_components_Summary_SummaryComponent__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }));
} // function Home({ products }) {
//   return <ProductList products={products} />;
// }
// Summary.getInitialProps = async () => {
//   const url = `${baseUrl}/api/summary`;
//   // fetch data on server
//   const response = await axios.get(url);
//   // return response data as an object
//   return { summary: response.data };
//   // note: this object will be merged with existing props
// };


/* harmony default export */ __webpack_exports__["default"] = (Summary);

/***/ }),

/***/ "./utils/baseUrl.js":
/*!**************************!*\
  !*** ./utils/baseUrl.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const baseUrl =  false ? undefined : "http://localhost:3000";
/* harmony default export */ __webpack_exports__["default"] = (baseUrl);

/***/ }),

/***/ 4:
/*!********************************!*\
  !*** multi ./pages/summary.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\phili\Documents\Coding\MERN\11.20.20MERN\MERN\pages\summary.js */"./pages/summary.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "react-google-charts":
/*!**************************************!*\
  !*** external "react-google-charts" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-google-charts");

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ })

/******/ });
//# sourceMappingURL=summary.js.map