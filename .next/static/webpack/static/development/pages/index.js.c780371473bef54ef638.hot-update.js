webpackHotUpdate("static/development/pages/index.js",{

/***/ "./Components/GoogleMap/GoogleMap.jsx":
/*!********************************************!*\
  !*** ./Components/GoogleMap/GoogleMap.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! google-map-react */ "./node_modules/google-map-react/lib/index.js");
/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(google_map_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/nxgdev122/Documents/Anis/Personal/INT/Assignments-2/LogisticsNetwork/Components/GoogleMap/GoogleMap.jsx";


 //import { Test } from './GoogleMap.styles';

var GoogleMap = function GoogleMap(props) {
  var center = {
    lat: 1.371778,
    lng: 103.893059
  };
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      height: "100vh",
      width: "100%"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(google_map_react__WEBPACK_IMPORTED_MODULE_1___default.a, {
    bootstrapURLKeys: {
      key: "AIzaSyA16d9FJFh__vK04jU1P64vnEpPc3jenec"
    },
    defaultCenter: props.center,
    defaultZoom: props.zoom,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }));
};

GoogleMap.propTypes = {// bla: PropTypes.string,
};
GoogleMap.defaultProps = {
  center: {
    lat: 1.371778,
    lng: 103.893059
  },
  zoom: 18
};
/* harmony default export */ __webpack_exports__["default"] = (GoogleMap);

/***/ })

})
//# sourceMappingURL=index.js.c780371473bef54ef638.hot-update.js.map