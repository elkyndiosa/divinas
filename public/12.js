(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/publication/ImageComponent.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/publication/ImageComponent.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
      busy: false,
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
  watch: {
    images: function images(val) {
      this.imagesArray = _.map(val, 'path');
    },
    uuid: function uuid(val) {
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

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var url, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!_this.uuid) {
                  _context.next = 14;
                  break;
                }

                _this.busy = true;
                url = "/api/images/publication/" + _this.uuid;
                _context.prev = 3;
                _context.next = 6;
                return axios.get(url);

              case 6:
                response = _context.sent;
                _this.images = response.data;
                _context.next = 13;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](3);
                console.log(_context.t0);

              case 13:
                _this.busy = false;

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[3, 10]]);
      }))();
    },
    getImages: function getImages() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var url, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this2.busy = true;
                url = "/api/images";
                _context2.prev = 2;
                _context2.next = 5;
                return axios.get(url);

              case 5:
                response = _context2.sent;
                _this2.images = response.data;
                _context2.next = 12;
                break;

              case 9:
                _context2.prev = 9;
                _context2.t0 = _context2["catch"](2);
                console.log(_context2.t0);

              case 12:
                _this2.busy = false;

              case 13:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[2, 9]]);
      }))();
    },
    destroy: function destroy(uuid) {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var url, response, index;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _this3.busy = true;
                url = "/api/destroy/images/" + uuid;
                _context3.prev = 2;
                _context3.next = 5;
                return axios.get(url);

              case 5:
                response = _context3.sent;
                index = _.findIndex(_this3.images, {
                  'uuid': uuid
                });

                _this3.images.splice(index, 1);

                _context3.next = 13;
                break;

              case 10:
                _context3.prev = 10;
                _context3.t0 = _context3["catch"](2);
                console.log(_context3.t0);

              case 13:
                _this3.busy = false;

              case 14:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[2, 10]]);
      }))();
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
    "v-container",
    [
      _c(
        "v-row",
        [
          _vm.busy
            ? _c(
                "v-col",
                { attrs: { cols: "12" } },
                [
                  _c("v-progress-linear", {
                    attrs: { indeterminate: "", color: "primary" }
                  })
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.images.length >= 1
            ? _c(
                "v-col",
                { attrs: { cols: "12" } },
                [
                  _c(
                    "v-row",
                    { attrs: { justify: "center" } },
                    _vm._l(_vm.images, function(item, index) {
                      return _c(
                        "v-col",
                        {
                          key: index,
                          attrs: { cols: "6", sm: "4", md: "3", lg: "2" }
                        },
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
                                "v-btn",
                                {
                                  staticClass: "my-4",
                                  attrs: {
                                    small: "",
                                    color: "primary",
                                    disabled: _vm.busy,
                                    block: ""
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.destroy(item.uuid)
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                        Eliminar\n                        "
                                  ),
                                  _c(
                                    "v-icon",
                                    {
                                      staticClass: "material-icons",
                                      attrs: { small: "" }
                                    },
                                    [_vm._v("delete")]
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
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _c(
            "v-dialog",
            {
              attrs: { width: "700" },
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
                { attrs: { elevation: "0", height: "600" } },
                [
                  _c(
                    "v-carousel",
                    {
                      attrs: {
                        "hide-delimiter-background": "",
                        "delimiter-icon": "minus"
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
                        staticClass: "grey lighten-2",
                        attrs: {
                          src: "/uploads/images/" + slide,
                          "aspect-ratio": "1"
                        },
                        scopedSlots: _vm._u(
                          [
                            {
                              key: "placeholder",
                              fn: function() {
                                return [
                                  _c(
                                    "v-row",
                                    {
                                      staticClass: "fill-height ma-0",
                                      attrs: {
                                        align: "center",
                                        justify: "center"
                                      }
                                    },
                                    [
                                      _c("v-progress-circular", {
                                        attrs: {
                                          indeterminate: "",
                                          color: "grey lighten-5"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ]
                              },
                              proxy: true
                            }
                          ],
                          null,
                          true
                        )
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
                                    staticClass: "grey lighten-2",
                                    attrs: {
                                      src:
                                        "/uploads/images/" +
                                        _vm.userData.image_profile,
                                      "aspect-ratio": "1"
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
                                  _c("v-list-item-subtitle", [
                                    _vm._v("Disponible")
                                  ])
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