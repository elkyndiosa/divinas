(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/home.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/home.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Banner: function Banner() {
      return __webpack_require__.e(/*! import() */ 11).then(__webpack_require__.bind(null, /*! ../components/home/Banner.vue */ "./resources/js/components/home/Banner.vue"));
    },
    About: function About() {
      return __webpack_require__.e(/*! import() */ 10).then(__webpack_require__.bind(null, /*! ../components/home/About.vue */ "./resources/js/components/home/About.vue"));
    },
    Articles: function Articles() {
      return __webpack_require__.e(/*! import() */ 4).then(__webpack_require__.bind(null, /*! ../components/home/Articles.vue */ "./resources/js/components/home/Articles.vue"));
    },
    // Social: () => import('../components/home/Social.vue'),
    // Subscribe: () => import('../components/home/Subscribe.vue'),
    FooterComponent: function FooterComponent() {
      return __webpack_require__.e(/*! import() */ 13).then(__webpack_require__.bind(null, /*! ../components/home/Footer.vue */ "./resources/js/components/home/Footer.vue"));
    }
  },
  data: function data() {
    return {
      alert: true
    };
  },
  created: function created() {},
  destroyed: function destroyed() {},
  computed: {},
  methods: {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/home.vue?vue&type=template&id=bb7a9770&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/home.vue?vue&type=template&id=bb7a9770& ***!
  \**************************************************************************************************************************************************************************************************/
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
    { staticClass: "mt-16" },
    [
      _c("banner"),
      _vm._v(" "),
      _c("articles"),
      _vm._v(" "),
      _c("about"),
      _vm._v(" "),
      _c("footer-component"),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { scrollable: "", persistent: "", "max-width": "600" },
          model: {
            value: _vm.alert,
            callback: function($$v) {
              _vm.alert = $$v
            },
            expression: "alert"
          }
        },
        [
          _c(
            "v-card",
            [
              _c(
                "v-card-title",
                {
                  staticClass: "headline grey lighten-2",
                  attrs: { fixed: "" }
                },
                [_vm._v("\n          Politicas de Pivacidad\n        ")]
              ),
              _vm._v(" "),
              _c("v-card-text", { staticClass: "mt-4" }, [
                _c("p", [
                  _vm._v(
                    "Tengo más de 18 años y tengo capacidad legal para visualizar la publicidad ofrecida en esta página."
                  )
                ]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "El usuario de la página de divinasprepago.com  entiende y acepta la responsabilidad por sus propias acciones y conductas, así como las de sus hijos menores transgresores por su no diligencia y cuido."
                  )
                ]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "Ingreso a la página de divinasprepago.com por mi decisión voluntaria y personal porque quiero ver la publicidad que en ella se publica y con mi declaración de voluntad, no considero ofensivas o lesivas las imágenes o mensajes que pudiera encontrar en la página de divinasprepago.com"
                  )
                ]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "Soy exclusivamente responsable y libero a la página de divinasprepago.com de toda responsabilidad relacionada con la exactitud, veracidad, fidelidad o legalidad del contenido de la publicidad."
                  )
                ]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "Los creadores y los propietarios de la página de divinaprepagos.com, aportan las normas aquí señaladas, liberándose así como consecuencia de acción u omisión de los usuarios, de toda obligación y/o responsabilidad legal."
                  )
                ]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "Usted está aceptando completamente estos términos, siendo la única prueba necesaria para ello su acceso, haciendo click aquí: "
                  )
                ])
              ]),
              _vm._v(" "),
              _c("v-divider"),
              _vm._v(" "),
              _c(
                "v-card-actions",
                { staticClass: "d-flex justify-center" },
                [
                  _c(
                    "v-btn",
                    {
                      staticClass: "primary text-none text-body-2",
                      attrs: { dark: "", text: "" },
                      on: {
                        click: function($event) {
                          _vm.alert = false
                        }
                      }
                    },
                    [_vm._v("\n            Acepto Terminos\n          ")]
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

/***/ "./resources/js/pages/home.vue":
/*!*************************************!*\
  !*** ./resources/js/pages/home.vue ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_vue_vue_type_template_id_bb7a9770___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.vue?vue&type=template&id=bb7a9770& */ "./resources/js/pages/home.vue?vue&type=template&id=bb7a9770&");
/* harmony import */ var _home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.vue?vue&type=script&lang=js& */ "./resources/js/pages/home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _home_vue_vue_type_template_id_bb7a9770___WEBPACK_IMPORTED_MODULE_0__["render"],
  _home_vue_vue_type_template_id_bb7a9770___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/home.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/home.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./resources/js/pages/home.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/home.vue?vue&type=template&id=bb7a9770&":
/*!********************************************************************!*\
  !*** ./resources/js/pages/home.vue?vue&type=template&id=bb7a9770& ***!
  \********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_template_id_bb7a9770___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./home.vue?vue&type=template&id=bb7a9770& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/home.vue?vue&type=template&id=bb7a9770&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_template_id_bb7a9770___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_template_id_bb7a9770___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);