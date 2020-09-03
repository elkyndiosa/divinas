(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["favorites"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/favorites.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/favorites.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    FeedCard: function FeedCard() {
      return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.bind(null, /*! ../components/FeedCard */ "./resources/js/components/FeedCard.vue"));
    }
  },
  data: function data() {
    return {
      publications: []
    };
  },
  created: function created() {
    this.publications = this.$store.state.favorities;
  },
  destroyed: function destroyed() {},
  computed: {
    issetFavorite: function issetFavorite() {
      var favorties = this.$store.state.favorities;

      if (favorties.length >= 1) {
        return true;
      }

      return false;
    }
  },
  methods: {// removeFavorities(uuid) {
    //   var favorities = this.$store.state.favorities;
    //   var a = favorities.indexOf(uuid);
    //   favorities.splice(a, 1);
    //   const parsed = JSON.stringify(this.$store.state.favorities);
    //   localStorage.favorities = parsed;
    //   let url = "/api/decrement/favorites/" + this.value.user.uuid;
    //   axios
    //     .get(url)
    //     .then((response) => {
    //       console.log(response);
    //     })
    //     .catch((rerro) => {
    //       console.log(error);
    //     });
    // },
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/favorites.vue?vue&type=template&id=f4cce084&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/favorites.vue?vue&type=template&id=f4cce084& ***!
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
    "div",
    [
      _c("h4", { staticClass: "text-center text-h4 mt-16 pt-10" }, [
        _vm._v("Tus publicaciones favoritas")
      ]),
      _vm._v(" "),
      _vm.issetFavorite
        ? _c(
            "v-row",
            _vm._l(_vm.publications, function(item, index) {
              return _c("feed-card", {
                key: index,
                attrs: { size: 3, value: item },
                on: { addFavorities: _vm.addFavorities }
              })
            }),
            1
          )
        : _c("v-row", { staticClass: "pa-0" }, [
            _c("h4", { staticClass: "text-center" }, [
              _vm._v(
                "No tienes publicaciones favoritas! vuelve a la pagina inicial y agrega!"
              )
            ])
          ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/favorites.vue":
/*!******************************************!*\
  !*** ./resources/js/pages/favorites.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _favorites_vue_vue_type_template_id_f4cce084___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./favorites.vue?vue&type=template&id=f4cce084& */ "./resources/js/pages/favorites.vue?vue&type=template&id=f4cce084&");
/* harmony import */ var _favorites_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./favorites.vue?vue&type=script&lang=js& */ "./resources/js/pages/favorites.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _favorites_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _favorites_vue_vue_type_template_id_f4cce084___WEBPACK_IMPORTED_MODULE_0__["render"],
  _favorites_vue_vue_type_template_id_f4cce084___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/favorites.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/favorites.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/pages/favorites.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_favorites_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./favorites.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/favorites.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_favorites_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/favorites.vue?vue&type=template&id=f4cce084&":
/*!*************************************************************************!*\
  !*** ./resources/js/pages/favorites.vue?vue&type=template&id=f4cce084& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_favorites_vue_vue_type_template_id_f4cce084___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./favorites.vue?vue&type=template&id=f4cce084& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/favorites.vue?vue&type=template&id=f4cce084&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_favorites_vue_vue_type_template_id_f4cce084___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_favorites_vue_vue_type_template_id_f4cce084___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);