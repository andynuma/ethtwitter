webpackHotUpdate(4,{

/***/ "../node_modules/truffle-contract/index.js":
/***/ (function(module, exports, __webpack_require__) {

var Schema = __webpack_require__("../node_modules/truffle-contract-schema/index.js");
var Contract = __webpack_require__("../node_modules/truffle-contract/contract.js");

var contract = function(options) {
  var binary = Schema.normalize(options || {});

  // Note we don't use `new` here at all. This will cause the class to
  // "mutate" instead of instantiate an instance.
  return Contract.clone(binary);
};

module.exports = contract;

if (typeof window !== "undefined") {
  window.TruffleContract = contract;
}


/***/ }),

/***/ "./web3/provider.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return eth; });
/* unused harmony export getInstance */
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

/***/ })

})
//# sourceMappingURL=4.6d6ad36a79bd1267707e.hot-update.js.map