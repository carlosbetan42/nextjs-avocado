"use strict";
(() => {
var exports = {};
exports.id = 614;
exports.ids = [614];
exports.modules = {

/***/ 582:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(854);
// import enablePublicAccess from "@cors";


const allAvos = async (request, response) => {
  //await enablePublicAccess(request, response);
  const db = new _database__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z();
  const allEntries = await db.getAll();
  const length = allEntries.length;
  response.statusCode = 200;
  response.setHeader("Content-type", "application/json");
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Methods", "GET");
  response.end(JSON.stringify({
    length,
    data: allEntries
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (allAvos);

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [854], () => (__webpack_exec__(582)));
module.exports = __webpack_exports__;

})();