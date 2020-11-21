webpackHotUpdate("static\\development\\pages\\budget.js",{

/***/ "./pages/budget.js":
/*!*************************!*\
  !*** ./pages/budget.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _components_Budget_BudgetComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Budget/BudgetComponent */ "./components/Budget/BudgetComponent.js");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nookies */ "./node_modules/nookies/dist/index.js");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/baseUrl */ "./utils/baseUrl.js");
var _jsxFileName = "C:\\Users\\phili\\Documents\\Coding\\MERN\\11.20.20MERN\\MERN\\pages\\budget.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 //import CartItemList from "../components/Cart/CartItemList";
//import CartSummary from "../components/Cart/CartSummary";






function Budget(_ref) {
  var budget = _ref.budget,
      user = _ref.user;
  console.log(budget);
  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Segment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx(_components_Budget_BudgetComponent__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }));
}

var sendData = function sendData() {
  axios__WEBPACK_IMPORTED_MODULE_4___default.a;
}; // Budget.getInitialProps = async ctx => {
//   const {token} = parseCookies(ctx)
//   //redundant securtity layer
//   // if(!token){
//   //   result {empty: []}
//   // }
//   const url = `${baseUrl}/api/budget`
//   const payload = {headers: {Authorization: token }}
//   const response = await axios.get(url, payload)
//   console.log(response.data);
//   return {budget: response.data}
//}


/* harmony default export */ __webpack_exports__["default"] = (Budget);

/***/ })

})
//# sourceMappingURL=budget.js.2571ab86a97060ee6e9a.hot-update.js.map