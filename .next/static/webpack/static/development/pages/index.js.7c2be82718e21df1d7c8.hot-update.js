webpackHotUpdate("static/development/pages/index.js",{

/***/ "./store.js":
/*!******************!*\
  !*** ./store.js ***!
  \******************/
/*! exports provided: actionTypes, reducer, getTransaction, getTransactionDetails, initializeStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionTypes", function() { return actionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTransaction", function() { return getTransaction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTransactionDetails", function() { return getTransactionDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeStore", function() { return initializeStore; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ "./node_modules/redux-devtools-extension/index.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");




var exampleInitialState = {
  transactions: [],
  payload: {
    name: "",
    paymentMode: "",
    amount: ""
  },
  success: false
};
var actionTypes = {
  GET_TRANSACTION: "GET_TRANSACTION",
  GET_TRANSACTION_DETAILS: "GET_TRANSACTION_DETAILS",
  GET_PAYLOAD: "GET_PAYLOAD"
}; // REDUCERS

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : exampleInitialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  console.log("ACTION", action.type);

  switch (action.type) {
    case actionTypes.GET_TRANSACTION:
      return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state, {
        transactions: action.data
      }, {
        success: true
      });

    case actionTypes.GET_TRANSACTION_DETAILS:
      return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state, {
        center: {
          lat: action.data.latitude,
          lng: action.data.latitude
        }
      }, {
        success: true
      });

    default:
      return state;
  }
}; // ACTIONS

var getTransaction = function getTransaction(data) {
  return {
    type: actionTypes.GET_TRANSACTION,
    data: data
  };
};
var getTransactionDetails = function getTransactionDetails(data) {
  return {
    type: actionTypes.GET_TRANSACTION_DETAILS,
    data: data
  };
};
function initializeStore() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : exampleInitialState;
  return Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])(reducer, initialState, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_1__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_3__["default"])));
}

/***/ })

})
//# sourceMappingURL=index.js.7c2be82718e21df1d7c8.hot-update.js.map