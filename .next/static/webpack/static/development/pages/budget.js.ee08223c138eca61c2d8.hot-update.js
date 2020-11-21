webpackHotUpdate("static\\development\\pages\\budget.js",{

/***/ "./pages/budget.js":
/*!*************************!*\
  !*** ./pages/budget.js ***!
  \*************************/
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
/* harmony import */ var _components_Budget_BudgetComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Budget/BudgetComponent */ "./components/Budget/BudgetComponent.js");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! nookies */ "./node_modules/nookies/dist/index.js");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/baseUrl */ "./utils/baseUrl.js");


var _jsxFileName = "C:\\Users\\phili\\Documents\\Coding\\MERN\\11.20.20MERN\\MERN\\pages\\budget.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;
 //import CartItemList from "../components/Cart/CartItemList";
//import CartSummary from "../components/Cart/CartSummary";






function Budget(_ref) {
  var budgets = _ref.budgets,
      user = _ref.user;
  console.log(budget);
  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Segment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx(_components_Budget_BudgetComponent__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }));
}

Budget.getInitialProps =
/*#__PURE__*/
function () {
  var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ctx) {
    var _parseCookies, token, url, payload, response;

    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _parseCookies = Object(nookies__WEBPACK_IMPORTED_MODULE_5__["parseCookies"])(ctx), token = _parseCookies.token; //redundant securtity layer

            if (token) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return", {
              budgets: []
            });

          case 3:
            url = "".concat(_utils_baseUrl__WEBPACK_IMPORTED_MODULE_7__["default"], "/api/budget");
            payload = {
              headers: {
                Authorization: token
              }
            };
            _context.next = 7;
            return axios__WEBPACK_IMPORTED_MODULE_6___default.a.get(url, payload);

          case 7:
            response = _context.sent;
            return _context.abrupt("return", {
              budgets: response.data
            });

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Budget);

/***/ })

})
//# sourceMappingURL=budget.js.ee08223c138eca61c2d8.hot-update.js.map