(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["videos"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/videosView.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/videosView.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue2_dropzone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue2-dropzone */ "./node_modules/vue2-dropzone/dist/vue2Dropzone.js");
/* harmony import */ var vue2_dropzone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue2_dropzone__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue2_dropzone_dist_vue2Dropzone_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue2-dropzone/dist/vue2Dropzone.min.css */ "./node_modules/vue2-dropzone/dist/vue2Dropzone.min.css");
/* harmony import */ var vue2_dropzone_dist_vue2Dropzone_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue2_dropzone_dist_vue2Dropzone_min_css__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
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
    Videos: function Videos() {
      return Promise.resolve().then(function webpackMissingModule() { var e = new Error("Cannot find module '../components/publication/VideosComponent.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; });
    },
    vueDropzone: vue2_dropzone__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  data: function data() {
    return {
      dropzoneOptions: {
        url: '/api/upload/image',
        thumbnailHeight: 150,
        maxFilesize: 2,
        headers: {
          "X-CSRF-TOKEN": document.querySelector('meta[name="csrf-token"]').content
        },
        dictDefaultMessage: "Click para buscar una imagen o arrastre aqui"
      },
      galleryKey: 0
    };
  },
  created: function created() {},
  destroyed: function destroyed() {},
  computed: {},
  methods: {
    cleanFiles: function cleanFiles() {
      this.$refs.myVueDropzone.removeAllFiles(); //   this.galleryKey += 1;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/videosView.vue?vue&type=template&id=35b32474&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/videosView.vue?vue&type=template&id=35b32474& ***!
  \********************************************************************************************************************************************************************************************************/
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
    { staticClass: "mt-16 pt-16 d-flex justify-center flex-wrap" },
    [
      _c("h4", { staticClass: "text-h4 text-center font-weight-bold" }, [
        _vm._v("Mis Videos")
      ]),
      _vm._v(" "),
      _c(
        "v-col",
        { attrs: { cols: "12" } },
        [
          _c("vue-dropzone", {
            ref: "myVueDropzone",
            attrs: { id: "dropzone", options: _vm.dropzoneOptions },
            on: {
              "vdropzone-success": function($event) {
                return _vm.cleanFiles()
              }
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "transition",
        { attrs: { name: "slide-image", mode: "out-in" } },
        [
          _c("videos", {
            key: _vm.galleryKey,
            attrs: { dash: "true", userData: _vm.user, search: "allUser" }
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

/***/ "./resources/js/pages/videosView.vue":
/*!*******************************************!*\
  !*** ./resources/js/pages/videosView.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _videosView_vue_vue_type_template_id_35b32474___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./videosView.vue?vue&type=template&id=35b32474& */ "./resources/js/pages/videosView.vue?vue&type=template&id=35b32474&");
/* harmony import */ var _videosView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./videosView.vue?vue&type=script&lang=js& */ "./resources/js/pages/videosView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _videosView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _videosView_vue_vue_type_template_id_35b32474___WEBPACK_IMPORTED_MODULE_0__["render"],
  _videosView_vue_vue_type_template_id_35b32474___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/videosView.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/videosView.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/pages/videosView.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_videosView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./videosView.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/videosView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_videosView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/videosView.vue?vue&type=template&id=35b32474&":
/*!**************************************************************************!*\
  !*** ./resources/js/pages/videosView.vue?vue&type=template&id=35b32474& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_videosView_vue_vue_type_template_id_35b32474___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./videosView.vue?vue&type=template&id=35b32474& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/videosView.vue?vue&type=template&id=35b32474&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_videosView_vue_vue_type_template_id_35b32474___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_videosView_vue_vue_type_template_id_35b32474___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);