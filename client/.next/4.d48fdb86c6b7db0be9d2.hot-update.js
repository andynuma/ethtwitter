webpackHotUpdate(4,{

/***/ "./web3/provider.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return eth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getInstance; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_web3__ = __webpack_require__("../node_modules/web3/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_web3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_web3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_truffle_contract__ = __webpack_require__("../node_modules/truffle-contract/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_truffle_contract___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_truffle_contract__);



var provider = function provider() {
  //if the user has MetaMask:
  if (typeof web3 != 'undefined') {
    return web3.currentProvider;
  } else {
    console.error("You need to install Metamask for this app to work!");
  }
};

var eth = new __WEBPACK_IMPORTED_MODULE_0_web3___default.a(provider()).eth;
var getInstance = function getInstance(artifact) {
  var contractObj = __WEBPACK_IMPORTED_MODULE_1_truffle_contract___default()(artifact);
  contractObj.setProvider(provider());
  return contractObj.deployed();
};

/***/ }),

/***/ "./web3/users.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getUserInfo; });
/* unused harmony export createUser */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("../node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__provider__ = __webpack_require__("./web3/provider.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__artifacts_UserStorage_json__ = __webpack_require__("./web3/artifacts/UserStorage.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__artifacts_UserStorage_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__artifacts_UserStorage_json__);


function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }



var getUserInfo =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(userId) {
    var storage, profile;
    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return Object(__WEBPACK_IMPORTED_MODULE_1__provider__["b" /* getInstance */])(__WEBPACK_IMPORTED_MODULE_2__artifacts_UserStorage_json___default.a);

          case 2:
            storage = _context.sent;
            _context.next = 5;
            return storage.profiles.call(userId);

          case 5:
            profile = _context.sent;
            return _context.abrupt("return", profile);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function getUserInfo(_x) {
    return _ref.apply(this, arguments);
  };
}();
var createUser =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee2(username) {
    var controller, addresess, result;
    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return Object(__WEBPACK_IMPORTED_MODULE_1__provider__["b" /* getInstance */])(UserController);

          case 2:
            controller = _context2.sent;
            _context2.next = 5;
            return __WEBPACK_IMPORTED_MODULE_1__provider__["a" /* eth */].getAccounts();

          case 5:
            addresess = _context2.sent;
            _context2.next = 8;
            return controller.createUser(username, {
              from: addresses[0]
            });

          case 8:
            result = _context2.sent;
            return _context2.abrupt("return", result);

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function createUser(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

/***/ })

})
//# sourceMappingURL=4.d48fdb86c6b7db0be9d2.hot-update.js.map