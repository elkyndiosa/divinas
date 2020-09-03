(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Feed.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Feed.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Feed",
  components: {
    FeedCard: function FeedCard() {
      return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.bind(null, /*! ../components/FeedCard */ "./resources/js/components/FeedCard.vue"));
    }
  },
  data: function data() {
    return {
      layout: [1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3],
      page: 1,
      publications: []
    };
  },
  computed: {
    pages: function pages() {
      return Math.ceil(this.articles.length / 11);
    },
    paginatedArticles: function paginatedArticles() {
      var start = (this.page - 1) * 11;
      var stop = this.page * 11;
      return this.articles.slice(start, stop);
    },
    isHome: function isHome() {
      if (this.$router.history.current.name == "favorites") {
        return false;
      } else if (this.$router.history.current.name == "home") {
        return true;
      }
    }
  },
  created: function created() {
    this.getPublications();
  },
  methods: {
    getPublications: function getPublications() {
      var _this = this;

      var url = '/api/publication/';
      axios.get(url).then(function (response) {
        _this.publications = response.data;
      })["catch"](function (error) {
        console.log(error.response.data);
      });
    },
    addFavorities: function addFavorities(uuid) {
      this.$emit("addFavorities", uuid);
    }
  },
  watch: {
    page: function page() {
      window.scrollTo(0, 0);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Feed.vue?vue&type=template&id=cfa144ee&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Feed.vue?vue&type=template&id=cfa144ee& ***!
  \*******************************************************************************************************************************************************************************************************/
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
          _c("v-col", { attrs: { cols: "12" } }, [_vm._t("default")], 2),
          _vm._v(" "),
          _c("v-col", { staticClass: "d-flex justify-center" }, [
            _c("h4", {
              staticClass: "text-center text-h4 full-width",
              domProps: {
                textContent: _vm._s(
                  _vm.isHome
                    ? "Las mejores prepagos de la ciudad"
                    : "Tus Favoritas"
                )
              }
            })
          ]),
          _vm._v(" "),
          _vm.isHome
            ? _c(
                "v-row",
                { staticClass: "d-flex justify-center px-4 px-md-14" },
                [
                  _c(
                    "v-col",
                    { staticClass: "d-flex", attrs: { cols: "12", sm: "6" } },
                    [
                      _c("v-select", {
                        attrs: {
                          "hide-details": "",
                          dense: "",
                          outlined: "",
                          label: "Barrio"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { staticClass: "d-flex", attrs: { cols: "12", sm: "6" } },
                    [
                      _c("v-select", {
                        attrs: {
                          "hide-details": "",
                          dense: "",
                          outlined: "",
                          label: "Edad"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { staticClass: "d-flex", attrs: { cols: "12", sm: "6" } },
                    [
                      _c("v-select", {
                        attrs: {
                          "hide-details": "",
                          dense: "",
                          outlined: "",
                          label: "Servicios"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { staticClass: "d-flex", attrs: { cols: "12", sm: "6" } },
                    [
                      _c("v-select", {
                        attrs: {
                          "hide-details": "",
                          dense: "",
                          outlined: "",
                          label: "Precio"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    {
                      staticClass: "d-flex justify-center pa-0",
                      attrs: { cols: "12" }
                    },
                    [
                      _c("v-checkbox", {
                        attrs: { label: "Solo prefiles verificados" }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { staticClass: "d-flex pa-0 mb-8", attrs: { cols: "12" } },
                    [
                      _c(
                        "v-btn",
                        {
                          staticClass:
                            "text-capitalize px-16 py-4 ma-auto text-subtitle-2",
                          attrs: {
                            color: "primary",
                            dark: "",
                            large: "",
                            rounded: ""
                          }
                        },
                        [_vm._v("Filtrar")]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _vm._l(_vm.publications, function(item, index) {
            return _c("feed-card", {
              key: index,
              attrs: { size: 3, value: item },
              on: { addFavorities: _vm.addFavorities }
            })
          })
        ],
        2
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Feed.vue":
/*!******************************************!*\
  !*** ./resources/js/components/Feed.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Feed_vue_vue_type_template_id_cfa144ee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Feed.vue?vue&type=template&id=cfa144ee& */ "./resources/js/components/Feed.vue?vue&type=template&id=cfa144ee&");
/* harmony import */ var _Feed_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Feed.vue?vue&type=script&lang=js& */ "./resources/js/components/Feed.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Feed_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Feed_vue_vue_type_template_id_cfa144ee___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Feed_vue_vue_type_template_id_cfa144ee___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Feed.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Feed.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/components/Feed.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Feed_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Feed.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Feed.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Feed_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Feed.vue?vue&type=template&id=cfa144ee&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/Feed.vue?vue&type=template&id=cfa144ee& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Feed_vue_vue_type_template_id_cfa144ee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Feed.vue?vue&type=template&id=cfa144ee& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Feed.vue?vue&type=template&id=cfa144ee&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Feed_vue_vue_type_template_id_cfa144ee___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Feed_vue_vue_type_template_id_cfa144ee___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);