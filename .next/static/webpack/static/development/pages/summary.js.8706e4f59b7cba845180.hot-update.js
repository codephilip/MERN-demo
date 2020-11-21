webpackHotUpdate("static\\development\\pages\\summary.js",{

/***/ "./pages/summary.js":
/*!**************************!*\
  !*** ./pages/summary.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _components_Summary_SummaryComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Summary/SummaryComponent */ "./components/Summary/SummaryComponent.js");
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/baseUrl */ "./utils/baseUrl.js");


var _jsxFileName = "C:\\Users\\phili\\Documents\\Coding\\MERN\\11.20.20MERN\\MERN\\pages\\summary.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;
 //import CartItemList from "../components/Cart/CartItemList";
//import CartSummary from "../components/Cart/CartSummary";




function Summary() {
  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Segment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx(_components_Summary_SummaryComponent__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }));
} // function Home({ products }) {
//   return <ProductList products={products} />;
// }


Summary.getInitialProps =
/*#__PURE__*/
Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var url, response;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          url = "".concat(_utils_baseUrl__WEBPACK_IMPORTED_MODULE_5__["default"], "/api/summary"); // fetch data on server

          _context.next = 3;
          return axios.get(url);

        case 3:
          response = _context.sent;
          return _context.abrupt("return", {
            summary: response.data
          });

        case 5:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));
/* harmony default export */ __webpack_exports__["default"] = (Summary);

/***/ })

})
//# sourceMappingURL=summary.js.8706e4f59b7cba845180.hot-update.js.map