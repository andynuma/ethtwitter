webpackHotUpdate(4,{

/***/ "./web3/users.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getUserInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createUser; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("../node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__provider__ = __webpack_require__("./web3/provider.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__artifacts_UserStorage_json__ = __webpack_require__("./web3/artifacts/UserStorage.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__artifacts_UserStorage_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__artifacts_UserStorage_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__artifacts_UserController_json__ = __webpack_require__("./web3/artifacts/UserController.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__artifacts_UserController_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__artifacts_UserController_json__);


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }




var _Web = Web3,
    hexToString = _Web.utils.hexToString;
var getUserInfo =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(userId) {
    var storage, _ref2, _ref3, id, username;

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
            _ref2 = _context.sent;
            _ref3 = _slicedToArray(_ref2, 2);
            id = _ref3[0];
            username = _ref3[1];
            return _context.abrupt("return", {
              id: parseInt(id),
              username: hexToString(username)
            });

          case 10:
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
  var _ref4 = _asyncToGenerator(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee2(username) {
    var controller, addresses, result;
    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return Object(__WEBPACK_IMPORTED_MODULE_1__provider__["b" /* getInstance */])(__WEBPACK_IMPORTED_MODULE_3__artifacts_UserController_json___default.a);

          case 2:
            controller = _context2.sent;
            _context2.next = 5;
            return __WEBPACK_IMPORTED_MODULE_1__provider__["a" /* eth */].getAccounts();

          case 5:
            addresses = _context2.sent;
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
    return _ref4.apply(this, arguments);
  };
}();

/***/ })

})
//# sourceMappingURL=4.bf0ea61c0aa2ed1f21a2.hot-update.js.map