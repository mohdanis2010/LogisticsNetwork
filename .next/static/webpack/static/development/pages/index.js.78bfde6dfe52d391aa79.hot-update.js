webpackHotUpdate("static/development/pages/index.js",{

/***/ "./Components/ListItems.js":
/*!*********************************!*\
  !*** ./Components/ListItems.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ "./Components/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/nxgdev122/Documents/Anis/Personal/INT/Assignments-2/LogisticsNetwork/Components/ListItems.js";



var ListItems = function ListItems(_ref) {
  var items = _ref.items;
  console.log("items", items);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "collection",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, items.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: item,
      className: "collection-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, item.driver_id);
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ListItems);

/***/ })

})
//# sourceMappingURL=index.js.78bfde6dfe52d391aa79.hot-update.js.map