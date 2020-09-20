(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["videos"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/videosView.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/videosView.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue2_dropzone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue2-dropzone */ "./node_modules/vue2-dropzone/dist/vue2Dropzone.js");
/* harmony import */ var vue2_dropzone__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue2_dropzone__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue2_dropzone_dist_vue2Dropzone_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue2-dropzone/dist/vue2Dropzone.min.css */ "./node_modules/vue2-dropzone/dist/vue2Dropzone.min.css");
/* harmony import */ var vue2_dropzone_dist_vue2Dropzone_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue2_dropzone_dist_vue2Dropzone_min_css__WEBPACK_IMPORTED_MODULE_2__);


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


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    vueDropzone: vue2_dropzone__WEBPACK_IMPORTED_MODULE_1___default.a,
    VideoPlayer: function VideoPlayer() {
      return __webpack_require__.e(/*! import() */ 4).then(__webpack_require__.bind(null, /*! ../components/VideoPlayer.vue */ "./resources/js/components/VideoPlayer.vue"));
    }
  },
  data: function data() {
    return {
      dropzoneOptions: {
        url: '/api/upload/video',
        thumbnailHeight: 150,
        maxFilesize: 5,
        headers: {
          "X-CSRF-TOKEN": document.querySelector('meta[name="csrf-token"]').content
        },
        dictDefaultMessage: "Click para buscar un video o arrastre aqui"
      },
      list: [],
      busy: false,
      showing: false,
      selected: {}
    };
  },
  created: function created() {
    this.getVideos();
  },
  watch: {},
  destroyed: function destroyed() {},
  computed: {
    player: function player() {
      var player = this.$refs.video_player.player;
      return player;
    }
  },
  methods: {
    cleanFiles: function cleanFiles() {
      this.$refs.myVueDropzone.removeAllFiles();
      this.getVideos();
    },
    getVideos: function getVideos() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var url, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.busy = true;
                url = '/api/user-videos';
                _context.prev = 2;
                _context.next = 5;
                return axios.get(url);

              case 5:
                response = _context.sent;
                _this.list = response.data.list;
                _context.next = 12;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](2);
                ErrorHandler.render(_context.t0);

              case 12:
                _this.busy = false;

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2, 9]]);
      }))();
    },
    toPlay: function toPlay(v) {
      var _this2 = this;

      this.selected = v;
      this.$nextTick(function () {
        _this2.showing = true;
      });
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
    "v-container",
    { attrs: { fluid: "" } },
    [
      _c(
        "v-row",
        { attrs: { justify: "center" } },
        [
          _c("h4", { staticClass: "text-h4" }, [_vm._v("Mis Videos")]),
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
          )
        ],
        1
      ),
      _vm._v(" "),
      _vm.busy
        ? _c(
            "v-row",
            { attrs: { justify: "center" } },
            [
              _c(
                "v-col",
                { attrs: { cols: "12", sm: "8", md: "6" } },
                [
                  _c("v-progress-linear", {
                    attrs: { color: "primary", indeterminate: "" }
                  })
                ],
                1
              )
            ],
            1
          )
        : _c(
            "v-row",
            { attrs: { justify: "center" } },
            _vm._l(_vm.list, function(v, i) {
              return _c(
                "v-col",
                { key: i, attrs: { cols: "6", sm: "4", md: "2" } },
                [
                  _c("v-hover", {
                    scopedSlots: _vm._u(
                      [
                        {
                          key: "default",
                          fn: function(ref) {
                            var hover = ref.hover
                            return [
                              _c(
                                "v-card",
                                {
                                  staticClass: "portrait",
                                  staticStyle: { cursor: "pointer" },
                                  attrs: { height: "200" },
                                  on: {
                                    click: function($event) {
                                      return _vm.toPlay(v)
                                    }
                                  }
                                },
                                [
                                  _c("v-img", {
                                    attrs: {
                                      src:
                                        "/uploads/images/" +
                                        v.image_path +
                                        ".png",
                                      height: "100%",
                                      width: "100%"
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
                                                  staticClass:
                                                    "fill-height ma-0",
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
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "v-overlay",
                                    { attrs: { absolute: "", value: hover } },
                                    [
                                      _c(
                                        "v-icon",
                                        {
                                          staticClass: "material-icons",
                                          attrs: { color: "primary", large: "" }
                                        },
                                        [
                                          _vm._v(
                                            "\n                                play_circle_outline\n                            "
                                          )
                                        ]
                                      )
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ]
                          }
                        }
                      ],
                      null,
                      true
                    )
                  })
                ],
                1
              )
            }),
            1
          ),
      _vm._v(" "),
      _c("VideoPlayer", {
        attrs: { showing: _vm.showing, item: _vm.selected },
        on: {
          close: function($event) {
            _vm.showing = false
          }
        }
      })
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