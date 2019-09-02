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
  var items = _ref.items,
      GetIT = _ref.GetIT;
  console.log("items", items);

  var itemHandler = function itemHandler(item) {
    console.log("ITEM Value");
    GetIT(items);
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "collection",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, items.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: item,
      className: "collection-item",
      onClick: itemHandler(item._id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, item.driver_id);
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ListItems);

/***/ })

})
//# sourceMappingURL=index.js.4e91689b2e99ae9cc06c.hot-update.js.map