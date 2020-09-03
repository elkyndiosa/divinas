(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FormPublication.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FormPublication.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    ImageSelect: function ImageSelect() {
      return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ../components/ImagesSelect.vue */ "./resources/js/components/ImagesSelect.vue"));
    }
  },
  data: function data() {
    return {
      dialogSelectImagePublication: false,
      data: {
        description: '',
        price: '',
        images: [],
        videos: []
      }
    };
  },
  methods: {
    restartData: function restartData() {
      this.data = {
        description: '',
        price: '',
        images: [],
        videos: []
      };
    },
    savePublication: function savePublication() {
      var _this = this;

      var url = '/api/publication';
      axios.post(url, this.data).then(function (response) {
        _this.restartData();

        _this.$emit("updatePublication");

        console.log(response);
      })["catch"](function (error) {
        console.log(error);
      });
    },
    updateImageProfile: function updateImageProfile() {
      this.$emit("updateImageProfile", this.imageSelect);
    },
    selectImagePrimaryPublication: function selectImagePrimaryPublication(imagenPath) {
      this.data.images = imagenPath;
      this.dialogSelectImagePublication = false;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FormPublication.vue?vue&type=template&id=20cc79a6&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FormPublication.vue?vue&type=template&id=20cc79a6& ***!
  \******************************************************************************************************************************************************************************************************************/
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
    "v-container",
    [
      _c(
        "v-form",
        [
          _c(
            "v-container",
            { staticClass: "py-0" },
            [
              _c(
                "v-row",
                [
                  _c(
                    "v-col",
                    {
                      staticClass: "ma-auto d-flex justify-center",
                      attrs: { cols: "12" }
                    },
                    [
                      _c(
                        "v-col",
                        { attrs: { cols: "12", md: "6" } },
                        [
                          _c("v-textarea", {
                            staticClass: "purple-input",
                            attrs: {
                              label: "Sobre mi",
                              value:
                                "Soy una persona muy apasionada por complacer..."
                            },
                            model: {
                              value: _vm.data.description,
                              callback: function($$v) {
                                _vm.$set(_vm.data, "description", $$v)
                              },
                              expression: "data.description"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    {
                      staticClass: "ma-auto d-flex justify-center",
                      attrs: { cols: "12" }
                    },
                    [
                      _c(
                        "v-col",
                        {
                          staticClass: "ma-auto",
                          attrs: { cols: "12", md: "6" }
                        },
                        [
                          _c("v-text-field", {
                            staticClass: "purple-input",
                            attrs: { type: "number", label: "Precio" },
                            model: {
                              value: _vm.data.price,
                              callback: function($$v) {
                                _vm.$set(_vm.data, "price", $$v)
                              },
                              expression: "data.price"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { staticClass: "ma-auto", attrs: { cols: "12" } },
                    [
                      _c(
                        "v-col",
                        {
                          staticClass: "ma-auto d-flex justify-center",
                          attrs: { cols: "12", md: "6" }
                        },
                        [
                          _c(
                            "v-btn",
                            {
                              staticClass: "mr-0 text-capitalize",
                              attrs: { color: "primary", outlined: "" },
                              on: {
                                click: function($event) {
                                  _vm.dialogSelectImagePublication = true
                                }
                              }
                            },
                            [
                              _c(
                                "v-icon",
                                {
                                  staticClass: "material-icons",
                                  attrs: { left: "" }
                                },
                                [_vm._v("cloud_upload")]
                              ),
                              _vm._v(" Imagen Principal")
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { staticClass: "text-right", attrs: { cols: "12" } },
                    [
                      _c(
                        "v-btn",
                        {
                          staticClass: "mr-0 text-capitalize",
                          attrs: { color: "primary" },
                          on: {
                            click: function($event) {
                              return _vm.savePublication()
                            }
                          }
                        },
                        [_vm._v("Guardar")]
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-dialog",
                {
                  attrs: { "max-width": "800" },
                  model: {
                    value: _vm.dialogSelectImagePublication,
                    callback: function($$v) {
                      _vm.dialogSelectImagePublication = $$v
                    },
                    expression: "dialogSelectImagePublication"
                  }
                },
                [
                  _c(
                    "image-select",
                    {
                      attrs: { type: "publication" },
                      on: {
                        selectImagePrimaryPublication:
                          _vm.selectImagePrimaryPublication
                      }
                    },
                    [_vm._v(">")]
                  )
                ],
                1
              )
            ],
            1
          )
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

/***/ "./resources/js/components/FormPublication.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/FormPublication.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormPublication_vue_vue_type_template_id_20cc79a6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormPublication.vue?vue&type=template&id=20cc79a6& */ "./resources/js/components/FormPublication.vue?vue&type=template&id=20cc79a6&");
/* harmony import */ var _FormPublication_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormPublication.vue?vue&type=script&lang=js& */ "./resources/js/components/FormPublication.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FormPublication_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormPublication_vue_vue_type_template_id_20cc79a6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FormPublication_vue_vue_type_template_id_20cc79a6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/FormPublication.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/FormPublication.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/FormPublication.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormPublication_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./FormPublication.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FormPublication.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormPublication_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/FormPublication.vue?vue&type=template&id=20cc79a6&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/FormPublication.vue?vue&type=template&id=20cc79a6& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormPublication_vue_vue_type_template_id_20cc79a6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./FormPublication.vue?vue&type=template&id=20cc79a6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FormPublication.vue?vue&type=template&id=20cc79a6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormPublication_vue_vue_type_template_id_20cc79a6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormPublication_vue_vue_type_template_id_20cc79a6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);