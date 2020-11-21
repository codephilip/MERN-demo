webpackHotUpdate("static\\development\\pages\\budget.js",{

/***/ "./components/Budget/BudgetComponent.js":
/*!**********************************************!*\
  !*** ./components/Budget/BudgetComponent.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
var _jsxFileName = "C:\\Users\\phili\\Documents\\Coding\\MERN\\11.20.20MERN\\MERN\\components\\Budget\\BudgetComponent.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function budgets() {
  return __jsx("div", {
    className: "Bu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("h1", {
    className: "ml-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "Budgets"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    className: "mt-3 ml-0 mr-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    onSubmit: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    sx: 2,
    controlId: "budgetForm.Type",
    inline: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "Budget type"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    as: "select",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("option", {
    value: "income",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Income"), __jsx("option", {
    value: "housing",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Housing"), __jsx("option", {
    value: "transportation",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Transportation"), __jsx("option", {
    value: "food",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Food"), __jsx("option", {
    value: "utilities",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Utilities"), __jsx("option", {
    value: "medical",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Medical/Healthcare"), __jsx("option", {
    value: "insurance",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Insurance"), __jsx("option", {
    value: "personal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "Personal"), __jsx("option", {
    value: "debt",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Debt Payments"), __jsx("option", {
    value: "entertainment",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "Entertainment"), __jsx("option", {
    value: "miscellaneous",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "Miscellaneous"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    sx: 7,
    controlId: "budgetForm.Name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "Budget Name"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    type: "text",
    placeholder: "Enter budget name here",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    sx: 1,
    controlId: "budgetForm.Amount",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "Budget Amount"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    type: "number",
    placeholder: "0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    id: "BudgetButton",
    variant: "primary",
    type: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "Submit"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    className: "mt-3 mr-0 ml-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "All budgets"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Table"], {
    responsive: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx("thead", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "#"), __jsx("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "Name"), __jsx("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "Spent"), __jsx("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "Bugeted"))), __jsx("tbody", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "1"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, "Grocceries"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, "$85.21"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "$200.00")), __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "2"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "Debt Payments"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, "$750.00"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "$1000.00"))))));
}

/* harmony default export */ __webpack_exports__["default"] = (budgets);

/***/ })

})
//# sourceMappingURL=budget.js.64128bef1f5caecdf04b.hot-update.js.map