(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/publication/TableInfo.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/publication/TableInfo.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {},
  props: ["userDataTable", "times"],
  data: function data() {
    return {};
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/publication/TableInfo.vue?vue&type=template&id=65b370c4&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/publication/TableInfo.vue?vue&type=template&id=65b370c4& ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "full-width mt-3 m-auto d-flex justify-center flex-wrap" },
    [
      _c(
        "v-col",
        {
          staticClass: "d-flex justify-center flex-wrap",
          staticStyle: { width: "100%" },
          attrs: { cols: "12" }
        },
        [
          _c("v-simple-table", {
            staticStyle: { width: "100%" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function() {
                  return [
                    _c("thead", [
                      _c("tr", [
                        _c("th", { staticClass: "text-left" }, [
                          _vm._v("Informacion Detallada")
                        ]),
                        _vm._v(" "),
                        _c("th", { staticClass: "text-left" })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("tbody", [
                      _c("tr", [
                        _c("td", [_vm._v("Domicilio")]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(
                            _vm._s(
                              _vm.userDataTable.delivery == 1 ? "Si" : "No"
                            )
                          )
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("tbody", [
                      _c("tr", [
                        _c("td", [_vm._v("Tiene Sitio")]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(
                            _vm._s(
                              _vm.userDataTable.have_site == 1 ? "Si" : "No"
                            )
                          )
                        ])
                      ])
                    ]),
                    _c("tbody", [
                      _c("tr", [
                        _c("td", [_vm._v("Telefono")]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(
                            _vm._s(_vm.userDataTable.phone == 1 ? "Si" : "No")
                          )
                        ])
                      ])
                    ]),
                    _c("tbody", [
                      _c("tr", [
                        _c("td", [_vm._v("Whatsapp")]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(
                            _vm._s(
                              _vm.userDataTable.whatsapp == 1 ? "Si" : "No"
                            )
                          )
                        ])
                      ])
                    ]),
                    _c("tbody", [
                      _c("tr", [
                        _c("td", [_vm._v("Perfil verificado")]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(
                            _vm._s(_vm.userDataTable.status == 1 ? "Si" : "No")
                          )
                        ])
                      ])
                    ]),
                    _c("tbody", [
                      _c("tr", [
                        _c("td", [_vm._v("Edad")]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(_vm.userDataTable.years))])
                      ])
                    ]),
                    _c("tbody", [
                      _c("tr", [
                        _c("td", [_vm._v("Hotario")]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(
                            _vm._s(
                              _vm.userDataTable.delivery == 1 ? "Si" : "No"
                            )
                          )
                        ])
                      ])
                    ]),
                    _c("tbody", [
                      _c("tr", [
                        _c("td", [_vm._v("Dias")]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(
                            _vm._s(
                              _vm.userDataTable.delivery == 1 ? "Si" : "No"
                            )
                          )
                        ])
                      ])
                    ])
                  ]
                },
                proxy: true
              }
            ])
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/publication/TableInfo.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/publication/TableInfo.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TableInfo_vue_vue_type_template_id_65b370c4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TableInfo.vue?vue&type=template&id=65b370c4& */ "./resources/js/components/publication/TableInfo.vue?vue&type=template&id=65b370c4&");
/* harmony import */ var _TableInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TableInfo.vue?vue&type=script&lang=js& */ "./resources/js/components/publication/TableInfo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TableInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TableInfo_vue_vue_type_template_id_65b370c4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TableInfo_vue_vue_type_template_id_65b370c4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/publication/TableInfo.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/publication/TableInfo.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/publication/TableInfo.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TableInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./TableInfo.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/publication/TableInfo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TableInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/publication/TableInfo.vue?vue&type=template&id=65b370c4&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/publication/TableInfo.vue?vue&type=template&id=65b370c4& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TableInfo_vue_vue_type_template_id_65b370c4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./TableInfo.vue?vue&type=template&id=65b370c4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/publication/TableInfo.vue?vue&type=template&id=65b370c4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TableInfo_vue_vue_type_template_id_65b370c4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TableInfo_vue_vue_type_template_id_65b370c4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);