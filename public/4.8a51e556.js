(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/publication/ImageComponent.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/publication/ImageComponent.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {},
  props: ["search", "uuid", "userData", "dash"],
  data: function data() {
    return {
      images: [],
      imagesArray: [],
      dialog: false,
      indexImage: 0
    };
  },
  mounted: function mounted() {
    switch (this.search) {
      case "allUser":
        this.getImages();
        break;

      case "publication":
        this.getImagesPublication();
        break;

      default:
        break;
    }
  },
  computed: {},
  methods: {
    openCarousel: function openCarousel(index) {
      this.indexImage = index;
      this.dialog = true;
    },
    redirectWhatsapp: function redirectWhatsapp(whatsapp) {
      window.open("https://api.whatsapp.com/send?phone=" + whatsapp + "&text=Hola,%20vi%20tu%20anuncio%20en%20www.divinasprepagos.com,%20quisiera%20conocerte!", '_blank');
    },
    getImagesPublication: function getImagesPublication() {
      var _this = this;

      setTimeout(function () {
        var url = "/api/images/publication/" + _this.uuid;
        axios.get(url).then(function (response) {
          _this.images = response.data;

          _this.getImagesArray(_this.images);
        })["catch"](function (error) {
          console.log(error);
        });
      }, 1000);
    },
    getImages: function getImages() {
      var _this2 = this;

      var url = "/api/images";
      axios.get(url).then(function (response) {
        _this2.images = response.data;

        _this2.getImagesArray(_this2.images);
      })["catch"](function (error) {
        console.log(error);
      });
    },
    getImagesArray: function getImagesArray(objectImage) {
      for (var index = 0; index < objectImage.length; index++) {
        this.imagesArray.push(objectImage[index].path);
      }
    },
    destroy: function destroy(uuid) {
      var _this3 = this;

      var url = "/api/destroy/images/" + uuid;
      axios.get(url).then(function (response) {
        for (var index = 0; index < _this3.images.length; index++) {
          if (_this3.images[index].uuid == uuid) {
            _this3.images.splice(index, 1);
          }
        }
      })["catch"](function (error) {
        console.log(error);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/publication/ImageComponent.vue?vue&type=template&id=08146850&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/publication/ImageComponent.vue?vue&type=template&id=08146850& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
      _vm.images.length >= 1
        ? _c(
            "v-col",
            {
              staticClass: "d-flex justify-center flex-wrap",
              staticStyle: { "max-width": "100%" },
              attrs: { cols: "12" }
            },
            _vm._l(_vm.images, function(item, index) {
              return _c(
                "v-col",
                { key: index, attrs: { cols: "6", sm: "4", md: "3", lg: "2" } },
                [
                  _c("v-card", {
                    staticClass: "portrait",
                    attrs: {
                      img: "/uploads/images/" + item.path,
                      height: "150"
                    },
                    on: {
                      click: function($event) {
                        return _vm.openCarousel(index)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _vm.user != null && _vm.user.id == item.user_id
                    ? _c(
                        "v-col",
                        {
                          staticClass: "d-flex justify-center",
                          attrs: { cols: "12" }
                        },
                        [
                          _c(
                            "v-btn",
                            {
                              staticStyle: { "margin-bottom": "15px" },
                              attrs: { small: "", color: "primary" },
                              on: {
                                click: function($event) {
                                  return _vm.destroy(item.uuid)
                                }
                              }
                            },
                            [
                              _vm._v("\n          Eliminar\n          "),
                              _c("v-icon", { staticClass: "material-icons" }, [
                                _vm._v("delete")
                              ])
                            ],
                            1
                          )
                        ],
                        1
                      )
                    : _vm._e()
                ],
                1
              )
            }),
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { "max-width": "700px" },
          model: {
            value: _vm.dialog,
            callback: function($$v) {
              _vm.dialog = $$v
            },
            expression: "dialog"
          }
        },
        [
          _c(
            "v-card",
            { attrs: { elevation: "0", width: "100%" } },
            [
              _c(
                "v-carousel",
                {
                  attrs: {
                    "hide-delimiter-background": "",
                    "delimiter-icon": "minus",
                    height: "400"
                  },
                  model: {
                    value: _vm.indexImage,
                    callback: function($$v) {
                      _vm.indexImage = $$v
                    },
                    expression: "indexImage"
                  }
                },
                _vm._l(_vm.imagesArray, function(slide, i) {
                  return _c("v-carousel-item", {
                    key: i,
                    attrs: { src: "/uploads/images/" + slide }
                  })
                }),
                1
              ),
              _vm._v(" "),
              _c(
                "v-list",
                { attrs: { "two-line": "" } },
                [
                  _vm.userData
                    ? _c(
                        "v-list-item",
                        [
                          _c(
                            "v-list-item-avatar",
                            [
                              _c("v-img", {
                                attrs: {
                                  src:
                                    "/uploads/images/" +
                                    _vm.userData.image_profile
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-list-item-content",
                            [
                              _c("v-list-item-title", [
                                _vm._v(_vm._s(_vm.userData.name))
                              ]),
                              _vm._v(" "),
                              _c("v-list-item-subtitle", [_vm._v("Disponible")])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("v-spacer"),
                          _vm._v(" "),
                          _c(
                            "v-list-item-action",
                            [
                              _c(
                                "v-btn",
                                {
                                  staticClass: "ml-4",
                                  attrs: { color: "success" },
                                  on: {
                                    click: function($event) {
                                      return _vm.redirectWhatsapp(
                                        _vm.userData.whatsapp
                                      )
                                    }
                                  }
                                },
                                [_vm._v("Whatsapp")]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    : _vm._e()
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

/***/ "./resources/js/components/publication/ImageComponent.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/publication/ImageComponent.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ImageComponent_vue_vue_type_template_id_08146850___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ImageComponent.vue?vue&type=template&id=08146850& */ "./resources/js/components/publication/ImageComponent.vue?vue&type=template&id=08146850&");
/* harmony import */ var _ImageComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ImageComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/publication/ImageComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ImageComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ImageComponent_vue_vue_type_template_id_08146850___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ImageComponent_vue_vue_type_template_id_08146850___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/publication/ImageComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/publication/ImageComponent.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/publication/ImageComponent.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ImageComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/publication/ImageComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/publication/ImageComponent.vue?vue&type=template&id=08146850&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/publication/ImageComponent.vue?vue&type=template&id=08146850& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageComponent_vue_vue_type_template_id_08146850___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ImageComponent.vue?vue&type=template&id=08146850& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/publication/ImageComponent.vue?vue&type=template&id=08146850&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageComponent_vue_vue_type_template_id_08146850___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageComponent_vue_vue_type_template_id_08146850___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);