(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["PublicationEditPage"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./resources/js/pages/publications-edit/publications-edit.js?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./resources/js/pages/publications-edit/publications-edit.js?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************/
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



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    FeedCard: function FeedCard() {
      return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.bind(null, /*! ../../components/FeedCard.vue */ "./resources/js/components/FeedCard.vue"));
    },
    vueDropzone: vue2_dropzone__WEBPACK_IMPORTED_MODULE_1___default.a,
    VideoPlayer: function VideoPlayer() {
      return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ../../components/VideoPlayer.vue */ "./resources/js/components/VideoPlayer.vue"));
    }
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    var uuid = to.params.uuid;

    if (uuid) {
      next(function (vm) {
        return vm.getPublication(uuid);
      });
    } else {
      next({
        name: 'home'
      });
    }
  },
  data: function data() {
    return {
      imagesOption: {
        url: "/api/upload/image",
        thumbnailHeight: 150,
        maxFilesize: 2,
        headers: {
          "X-CSRF-TOKEN": document.querySelector('meta[name="csrf-token"]').content
        },
        dictDefaultMessage: "Click para buscar una imagen o arrastre aqui"
      },
      videosOptions: {
        url: '/api/upload/video',
        thumbnailHeight: 150,
        maxFilesize: 5,
        headers: {
          "X-CSRF-TOKEN": document.querySelector('meta[name="csrf-token"]').content
        },
        dictDefaultMessage: "Click para buscar un video o arrastre aqui"
      },
      busy: false,
      publications: {
        busy: false,
        list: []
      },
      step: 1,
      valid_step_1: false,
      valid_step_2: false,
      publication: {},
      from_menu: false,
      to_menu: false,
      dataAdd: {},
      servicesSelect: [],
      services: {
        busy: false,
        list: []
      },
      imagesSelect: [],
      images: {
        busy: false,
        list: []
      },
      videosSelect: [],
      videos: {
        busy: false,
        list: [],
        playing: false,
        selected: {}
      },
      cities: {
        busy: false,
        list: []
      },
      days: ["Lunes", "Martes", "Miercoles", "Jueves", "Vienes", "Sabado", "Domingo"],
      rules: [function (v) {
        return !!v || 'Este campo es requerido.';
      }]
    };
  },
  created: function created() {
    this.getCitiesList();
    this.getServices();
    this.getImages();
    this.getVideos();
  },
  computed: {
    barrios: function barrios() {
      var index = _.findIndex(this.cities.list, {
        'id': this.publication.city_id
      });

      var city = this.cities.list[index];
      if (city) return city.barrios;
      return [];
    },
    valid_step_3: function valid_step_3() {
      if (this.imagesSelect.length > 0) return true;
      return false;
    },
    valid_step_4: function valid_step_4() {
      if (this.videosSelect.length > 0) return true;
      return false;
    }
  },
  watch: {},
  methods: {
    getPublication: function getPublication(uuid) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var url, response, index, name;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.busy = true;
                url = "/api/publication/" + uuid;
                _context.prev = 2;
                _context.next = 5;
                return axios.get(url);

              case 5:
                response = _context.sent;
                _this.publication = response.data.publication;
                console.log(response.data.publication);

                for (index = 0; index < response.data.publication.services.length; index++) {
                  _this.servicesSelect.push(response.data.publication.services[index]);
                }

                _this.dataAdd.input_day = response.data.times.input_day;
                _this.dataAdd.output_day = response.data.times.output_day;
                _this.dataAdd.every_day = response.data.times.every_day;
                _this.dataAdd.input = response.data.times.input;
                _this.dataAdd.output = response.data.times.output;
                _this.dataAdd.every_single_day = response.data.times.every_single_day;
                console.log(JSON.parse(response.data.publication.imgages_path)[0]);

                _this.imagesSelect.push(JSON.parse(response.data.publication.imgages_path)[0]);

                _this.videosSelect.push(JSON.parse(response.data.publication.videos_path)[0]);

                name = response.data.publication.name;

                _this.$nextTick(function () {
                  document.title = 'Divinas Prepagos | Editar ' + name;
                });

                _context.next = 25;
                break;

              case 22:
                _context.prev = 22;
                _context.t0 = _context["catch"](2);
                ErrorHandler.render(_context.t0);

              case 25:
                _this.busy = false;

              case 26:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2, 22]]);
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
                _this2.images.busy = true;
                url = "/api/images";
                _context2.prev = 2;
                _context2.next = 5;
                return axios.get(url);

              case 5:
                response = _context2.sent;
                _this2.images.list = response.data;
                _context2.next = 12;
                break;

              case 9:
                _context2.prev = 9;
                _context2.t0 = _context2["catch"](2);
                ErrorHandler.render(_context2.t0);

              case 12:
                _this2.images.busy = false;

              case 13:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[2, 9]]);
      }))();
    },
    getVideos: function getVideos() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var url, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _this3.videos.busy = true;
                url = '/api/user-videos';
                _context3.prev = 2;
                _context3.next = 5;
                return axios.get(url);

              case 5:
                response = _context3.sent;
                _this3.videos.list = response.data.list;
                _context3.next = 12;
                break;

              case 9:
                _context3.prev = 9;
                _context3.t0 = _context3["catch"](2);
                ErrorHandler.render(_context3.t0);

              case 12:
                _this3.videos.busy = false;

              case 13:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[2, 9]]);
      }))();
    },
    getCitiesList: function getCitiesList() {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        var url, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _this4.cities.busy = true;
                url = "/api/cities";
                _context4.prev = 2;
                _context4.next = 5;
                return axios.get(url);

              case 5:
                response = _context4.sent;
                _this4.cities.list = response.data.cities;
                _context4.next = 12;
                break;

              case 9:
                _context4.prev = 9;
                _context4.t0 = _context4["catch"](2);
                ErrorHandler.render(_context4.t0);

              case 12:
                _this4.cities.busy = false;

              case 13:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[2, 9]]);
      }))();
    },
    getServices: function getServices() {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        var url, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _this5.services.busy = true;
                url = '/api/services';
                _context5.prev = 2;
                _context5.next = 5;
                return axios.get(url);

              case 5:
                response = _context5.sent;
                _this5.services.list = response.data.services;
                _context5.next = 12;
                break;

              case 9:
                _context5.prev = 9;
                _context5.t0 = _context5["catch"](2);
                ErrorHandler.render(_context5.t0);

              case 12:
                _this5.services.busy = false;

              case 13:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[2, 9]]);
      }))();
    },
    update: function update() {
      var _this6 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
        var data, url, response, msj;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _this6.busy = true;
                data = _this6.publication;
                data.dataAdd = _this6.dataAdd;
                data.services = _this6.servicesSelect;
                data.images = _this6.imagesSelect;
                data.videos = _this6.videosSelect;
                url = '/api/publication/' + _this6.publication.uuid;
                _context6.prev = 7;
                _context6.next = 10;
                return axios.put(url, data);

              case 10:
                response = _context6.sent;
                msj = response.data.message;
                NotificationHandler.simpleSuccess(msj);
                _this6.step = 1;
                _context6.next = 19;
                break;

              case 16:
                _context6.prev = 16;
                _context6.t0 = _context6["catch"](7);
                ErrorHandler.render(_context6.t0);

              case 19:
                _this6.busy = false;

              case 20:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, null, [[7, 16]]);
      }))();
    },
    removeService: function removeService(id) {
      var index = _.findIndex(this.servicesSelect, ['id', id]);

      this.servicesSelect.splice(index, 1);
    },
    imagesCleanFiles: function imagesCleanFiles() {
      this.$refs.imagesDropzone.removeAllFiles();
      this.getImages();
    },
    videosCleanFiles: function videosCleanFiles() {
      this.$refs.videosDropzone.removeAllFiles();
      this.getVideos();
    },
    selectVideo: function selectVideo(v) {
      var _this7 = this;

      this.videos.selected = v;
      this.$nextTick(function () {
        _this7.videos.playing = true;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/publications-edit/publications-edit.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/publications-edit/publications-edit.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__(/*! -!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!./publications-edit.scss */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./resources/js/pages/publications-edit/publications-edit.scss"), "");

// module
exports.push([module.i, "\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./resources/js/pages/publications-edit/publications-edit.scss":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./resources/js/pages/publications-edit/publications-edit.scss ***!
  \******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/publications-edit/publications-edit.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/publications-edit/publications-edit.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./publications-edit.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/publications-edit/publications-edit.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/publications-edit/publications-edit.vue?vue&type=template&id=000e9810&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/publications-edit/publications-edit.vue?vue&type=template&id=000e9810& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
    "v-row",
    { attrs: { justify: "center" } },
    [
      _c("v-col", { attrs: { cols: "12" } }, [
        _c("h1", { staticClass: "h1" }, [
          _vm._v("\n            Editar Publicacion\n        ")
        ])
      ]),
      _vm._v(" "),
      _c(
        "v-col",
        { attrs: { cols: "12" } },
        [
          _c(
            "v-stepper",
            {
              model: {
                value: _vm.step,
                callback: function($$v) {
                  _vm.step = $$v
                },
                expression: "step"
              }
            },
            [
              _c(
                "v-stepper-header",
                { attrs: { elevation: "0" } },
                [
                  _c(
                    "v-stepper-step",
                    {
                      attrs: {
                        complete: _vm.valid_step_1,
                        step: "1",
                        editable: ""
                      }
                    },
                    [
                      _vm._v(
                        "\n                    Datos Personales\n                "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("v-divider"),
                  _vm._v(" "),
                  _c(
                    "v-stepper-step",
                    {
                      attrs: {
                        complete: _vm.valid_step_2,
                        step: "2",
                        editable: _vm.valid_step_1
                      }
                    },
                    [
                      _vm._v(
                        "\n                    Servicios y Horarios\n                "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("v-divider"),
                  _vm._v(" "),
                  _c(
                    "v-stepper-step",
                    {
                      attrs: {
                        complete: _vm.valid_step_3,
                        step: "3",
                        editable: _vm.valid_step_1 && _vm.valid_step_2
                      }
                    },
                    [_vm._v("\n                    Imagenes\n                ")]
                  ),
                  _vm._v(" "),
                  _c("v-divider"),
                  _vm._v(" "),
                  _c(
                    "v-stepper-step",
                    {
                      attrs: {
                        complete: _vm.valid_step_4,
                        step: "4",
                        editable:
                          _vm.valid_step_1 &&
                          _vm.valid_step_2 &&
                          _vm.valid_step_3
                      }
                    },
                    [_vm._v("\n                    Videos\n                ")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-stepper-items",
                [
                  _c(
                    "v-stepper-content",
                    { attrs: { step: "1" } },
                    [
                      _c(
                        "v-form",
                        {
                          model: {
                            value: _vm.valid_step_1,
                            callback: function($$v) {
                              _vm.valid_step_1 = $$v
                            },
                            expression: "valid_step_1"
                          }
                        },
                        [
                          _c(
                            "v-card",
                            { attrs: { flat: "" } },
                            [
                              _c(
                                "v-card-text",
                                [
                                  _c(
                                    "v-row",
                                    [
                                      _c(
                                        "v-col",
                                        {
                                          attrs: {
                                            cols: "12",
                                            sm: "6",
                                            md: "4"
                                          }
                                        },
                                        [
                                          _c("v-text-field", {
                                            attrs: {
                                              label: "Nombre",
                                              rules: _vm.rules,
                                              outlined: "",
                                              dense: ""
                                            },
                                            model: {
                                              value: _vm.publication.name,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.publication,
                                                  "name",
                                                  $$v
                                                )
                                              },
                                              expression: "publication.name"
                                            }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        {
                                          attrs: {
                                            cols: "12",
                                            sm: "6",
                                            md: "4"
                                          }
                                        },
                                        [
                                          _c("v-text-field", {
                                            attrs: {
                                              label: "Alias",
                                              rules: _vm.rules,
                                              outlined: "",
                                              dense: ""
                                            },
                                            model: {
                                              value: _vm.publication.nikc,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.publication,
                                                  "nikc",
                                                  $$v
                                                )
                                              },
                                              expression: "publication.nikc"
                                            }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        {
                                          attrs: {
                                            cols: "12",
                                            sm: "6",
                                            md: "4"
                                          }
                                        },
                                        [
                                          _c(
                                            "v-row",
                                            { attrs: { justify: "center" } },
                                            [
                                              _c(
                                                "v-col",
                                                {
                                                  staticClass: "py-0",
                                                  attrs: { cols: "4" }
                                                },
                                                [
                                                  _c("v-text-field", {
                                                    attrs: {
                                                      label: "Edad",
                                                      type: "number",
                                                      rules: _vm.rules,
                                                      outlined: "",
                                                      dense: ""
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.publication.years,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.publication,
                                                          "years",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "publication.years"
                                                    }
                                                  })
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-col",
                                                {
                                                  staticClass: "py-0",
                                                  attrs: { cols: "4" }
                                                },
                                                [
                                                  _c("v-text-field", {
                                                    attrs: {
                                                      label: "Peso",
                                                      type: "number",
                                                      rules: _vm.rules,
                                                      outlined: "",
                                                      dense: ""
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.publication.weight,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.publication,
                                                          "weight",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "publication.weight"
                                                    }
                                                  })
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-col",
                                                {
                                                  staticClass: "py-0",
                                                  attrs: { cols: "4" }
                                                },
                                                [
                                                  _c("v-text-field", {
                                                    attrs: {
                                                      label: "Estatura",
                                                      type: "number",
                                                      rules: _vm.rules,
                                                      outlined: "",
                                                      dense: ""
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.publication.height,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.publication,
                                                          "height",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "publication.height"
                                                    }
                                                  })
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
                                        {
                                          attrs: {
                                            cols: "12",
                                            sm: "6",
                                            md: "4"
                                          }
                                        },
                                        [
                                          _c("v-text-field", {
                                            attrs: {
                                              label: "Correo electronico",
                                              outlined: "",
                                              dense: ""
                                            },
                                            model: {
                                              value: _vm.publication.email,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.publication,
                                                  "email",
                                                  $$v
                                                )
                                              },
                                              expression: "publication.email"
                                            }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        {
                                          attrs: {
                                            cols: "12",
                                            sm: "6",
                                            md: "4"
                                          }
                                        },
                                        [
                                          _c("v-text-field", {
                                            attrs: {
                                              label: "telefono",
                                              rules: _vm.rules,
                                              outlined: "",
                                              dense: ""
                                            },
                                            model: {
                                              value: _vm.publication.phone,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.publication,
                                                  "phone",
                                                  $$v
                                                )
                                              },
                                              expression: "publication.phone"
                                            }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        {
                                          attrs: {
                                            cols: "12",
                                            sm: "6",
                                            md: "4"
                                          }
                                        },
                                        [
                                          _c("v-text-field", {
                                            attrs: {
                                              label: "Whatsapp",
                                              rules: _vm.rules,
                                              outlined: "",
                                              dense: ""
                                            },
                                            model: {
                                              value: _vm.publication.whatsapp,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.publication,
                                                  "whatsapp",
                                                  $$v
                                                )
                                              },
                                              expression: "publication.whatsapp"
                                            }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        {
                                          attrs: { cols: "6", sm: "6", md: "4" }
                                        },
                                        [
                                          _c("v-select", {
                                            attrs: {
                                              items: _vm.cities.list,
                                              "item-text": "name",
                                              "item-value": "id",
                                              label: "Ciudad",
                                              readonly: _vm.cities.busy,
                                              loading: _vm.cities.busy,
                                              rules: _vm.rules,
                                              outlined: "",
                                              dense: ""
                                            },
                                            model: {
                                              value: _vm.publication.city_id,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.publication,
                                                  "city_id",
                                                  $$v
                                                )
                                              },
                                              expression: "publication.city_id"
                                            }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        {
                                          attrs: { cols: "6", sm: "6", md: "4" }
                                        },
                                        [
                                          _c("v-select", {
                                            attrs: {
                                              items: _vm.barrios,
                                              "item-text": "name",
                                              "item-value": "id",
                                              readonly: _vm.cities.busy,
                                              loading: _vm.cities.busy,
                                              rules: _vm.rules,
                                              label: "Barrio",
                                              outlined: "",
                                              dense: ""
                                            },
                                            model: {
                                              value: _vm.publication.barrio_id,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.publication,
                                                  "barrio_id",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "publication.barrio_id"
                                            }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        {
                                          staticClass:
                                            "text-h6 font-weight-bold",
                                          attrs: { cols: "12", md: "4" }
                                        },
                                        [
                                          _c(
                                            "v-row",
                                            { attrs: { justify: "center" } },
                                            [
                                              _c(
                                                "v-col",
                                                {
                                                  staticClass: "p-0",
                                                  attrs: { cols: "6" }
                                                },
                                                [
                                                  _c("v-checkbox", {
                                                    staticClass: "my-0",
                                                    attrs: {
                                                      label:
                                                        "Realiza Domicilios",
                                                      large: "",
                                                      outlined: "",
                                                      dense: ""
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.publication
                                                          .delivery,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.publication,
                                                          "delivery",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "publication.delivery"
                                                    }
                                                  })
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-col",
                                                {
                                                  staticClass: "p-0",
                                                  attrs: { cols: "6" }
                                                },
                                                [
                                                  _c("v-checkbox", {
                                                    staticClass: "my-0",
                                                    attrs: {
                                                      label: "Tiene Sitios",
                                                      large: "",
                                                      outlined: "",
                                                      dense: ""
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.publication
                                                          .have_site,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.publication,
                                                          "have_site",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "publication.have_site"
                                                    }
                                                  })
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
                                  ),
                                  _vm._v(" "),
                                  _c("v-divider")
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-card-actions",
                                [
                                  _c("v-spacer"),
                                  _vm._v(" "),
                                  _c(
                                    "v-btn",
                                    {
                                      attrs: {
                                        color: "primary",
                                        disabled: !_vm.valid_step_1,
                                        depressed: ""
                                      },
                                      on: {
                                        click: function($event) {
                                          _vm.step = 2
                                        }
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "\n                                    Siguiente\n                                "
                                      )
                                    ]
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
                  ),
                  _vm._v(" "),
                  _c(
                    "v-stepper-content",
                    { attrs: { step: "2" } },
                    [
                      _c(
                        "v-form",
                        {
                          model: {
                            value: _vm.valid_step_2,
                            callback: function($$v) {
                              _vm.valid_step_2 = $$v
                            },
                            expression: "valid_step_2"
                          }
                        },
                        [
                          _c(
                            "v-card",
                            { attrs: { flat: "" } },
                            [
                              _c(
                                "v-card-text",
                                [
                                  _c(
                                    "v-row",
                                    [
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "12", md: "6" } },
                                        [
                                          _c(
                                            "v-card",
                                            { attrs: { flat: "" } },
                                            [
                                              _c(
                                                "v-card-text",
                                                [
                                                  _c("v-text-field", {
                                                    attrs: {
                                                      label: "Precio por hora",
                                                      type: "number",
                                                      rules: _vm.rules,
                                                      outlined: "",
                                                      dense: ""
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.publication.price,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.publication,
                                                          "price",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "publication.price"
                                                    }
                                                  }),
                                                  _vm._v(" "),
                                                  _c("v-autocomplete", {
                                                    attrs: {
                                                      label: "Servicios",
                                                      items: _vm.services.list,
                                                      loading:
                                                        _vm.services.busy,
                                                      readonly:
                                                        _vm.services.busy,
                                                      "item-value": "id",
                                                      chips: "",
                                                      multiple: "",
                                                      outlined: "",
                                                      large: ""
                                                    },
                                                    scopedSlots: _vm._u([
                                                      {
                                                        key: "selection",
                                                        fn: function(data) {
                                                          return [
                                                            _c(
                                                              "v-chip",
                                                              _vm._b(
                                                                {
                                                                  attrs: {
                                                                    "input-value":
                                                                      data.selected,
                                                                    close: ""
                                                                  },
                                                                  on: {
                                                                    "click:close": function(
                                                                      $event
                                                                    ) {
                                                                      return _vm.removeService(
                                                                        data
                                                                          .item
                                                                          .id
                                                                      )
                                                                    }
                                                                  }
                                                                },
                                                                "v-chip",
                                                                data.attrs,
                                                                false
                                                              ),
                                                              [
                                                                _vm._v(
                                                                  _vm._s(
                                                                    data.item
                                                                      .name
                                                                  )
                                                                )
                                                              ]
                                                            )
                                                          ]
                                                        }
                                                      },
                                                      {
                                                        key: "item",
                                                        fn: function(data) {
                                                          return [
                                                            [
                                                              _c(
                                                                "v-list-item-content",
                                                                [
                                                                  _c(
                                                                    "v-list-item-title",
                                                                    {
                                                                      domProps: {
                                                                        innerHTML: _vm._s(
                                                                          data
                                                                            .item
                                                                            .name
                                                                        )
                                                                      }
                                                                    }
                                                                  )
                                                                ],
                                                                1
                                                              )
                                                            ]
                                                          ]
                                                        }
                                                      }
                                                    ]),
                                                    model: {
                                                      value: _vm.servicesSelect,
                                                      callback: function($$v) {
                                                        _vm.servicesSelect = $$v
                                                      },
                                                      expression:
                                                        "servicesSelect"
                                                    }
                                                  }),
                                                  _vm._v(" "),
                                                  _c("v-textarea", {
                                                    attrs: {
                                                      label:
                                                        "Descripcion y Detalles",
                                                      rules: _vm.rules,
                                                      outlined: ""
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.publication
                                                          .description,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.publication,
                                                          "description",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "publication.description"
                                                    }
                                                  })
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
                                        { attrs: { cols: "12", md: "6" } },
                                        [
                                          _c(
                                            "v-card",
                                            {
                                              staticClass: "mt-4",
                                              attrs: { outlined: "" }
                                            },
                                            [
                                              _c("v-card-title", [
                                                _vm._v(
                                                  "\n                                                Horario:\n                                            "
                                                )
                                              ]),
                                              _vm._v(" "),
                                              _c(
                                                "v-card-text",
                                                [
                                                  _c(
                                                    "v-row",
                                                    [
                                                      _c(
                                                        "v-col",
                                                        {
                                                          attrs: {
                                                            cols: "12",
                                                            sm: "6"
                                                          }
                                                        },
                                                        [
                                                          _c("v-select", {
                                                            attrs: {
                                                              items: _vm.days,
                                                              rules: _vm.rules,
                                                              label: "De",
                                                              outlined: "",
                                                              dense: ""
                                                            },
                                                            model: {
                                                              value:
                                                                _vm.dataAdd
                                                                  .input_day,
                                                              callback: function(
                                                                $$v
                                                              ) {
                                                                _vm.$set(
                                                                  _vm.dataAdd,
                                                                  "input_day",
                                                                  $$v
                                                                )
                                                              },
                                                              expression:
                                                                "dataAdd.input_day"
                                                            }
                                                          }),
                                                          _vm._v(" "),
                                                          _c("v-select", {
                                                            attrs: {
                                                              items: _vm.days,
                                                              rules: _vm.rules,
                                                              label: "A",
                                                              outlined: "",
                                                              dense: ""
                                                            },
                                                            model: {
                                                              value:
                                                                _vm.dataAdd
                                                                  .output_day,
                                                              callback: function(
                                                                $$v
                                                              ) {
                                                                _vm.$set(
                                                                  _vm.dataAdd,
                                                                  "output_day",
                                                                  $$v
                                                                )
                                                              },
                                                              expression:
                                                                "dataAdd.output_day"
                                                            }
                                                          }),
                                                          _vm._v(" "),
                                                          _c("v-checkbox", {
                                                            staticClass:
                                                              "text-h6 font-weight-bold",
                                                            attrs: {
                                                              label:
                                                                "Todos los dias"
                                                            },
                                                            model: {
                                                              value:
                                                                _vm.dataAdd
                                                                  .every_day,
                                                              callback: function(
                                                                $$v
                                                              ) {
                                                                _vm.$set(
                                                                  _vm.dataAdd,
                                                                  "every_day",
                                                                  $$v
                                                                )
                                                              },
                                                              expression:
                                                                "dataAdd.every_day"
                                                            }
                                                          })
                                                        ],
                                                        1
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "v-col",
                                                        {
                                                          attrs: {
                                                            cols: "12",
                                                            sm: "6"
                                                          }
                                                        },
                                                        [
                                                          _c(
                                                            "v-menu",
                                                            {
                                                              ref: "from_menu",
                                                              attrs: {
                                                                "close-on-content-click": false,
                                                                "return-value":
                                                                  _vm.dataAdd
                                                                    .input,
                                                                transition:
                                                                  "scale-transition",
                                                                "offset-y": "",
                                                                "max-width":
                                                                  "290px",
                                                                "min-width":
                                                                  "290px"
                                                              },
                                                              on: {
                                                                "update:returnValue": function(
                                                                  $event
                                                                ) {
                                                                  return _vm.$set(
                                                                    _vm.dataAdd,
                                                                    "input",
                                                                    $event
                                                                  )
                                                                },
                                                                "update:return-value": function(
                                                                  $event
                                                                ) {
                                                                  return _vm.$set(
                                                                    _vm.dataAdd,
                                                                    "input",
                                                                    $event
                                                                  )
                                                                }
                                                              },
                                                              scopedSlots: _vm._u(
                                                                [
                                                                  {
                                                                    key:
                                                                      "activator",
                                                                    fn: function(
                                                                      ref
                                                                    ) {
                                                                      var on =
                                                                        ref.on
                                                                      var attrs =
                                                                        ref.attrs
                                                                      return [
                                                                        _c(
                                                                          "v-text-field",
                                                                          _vm._g(
                                                                            _vm._b(
                                                                              {
                                                                                attrs: {
                                                                                  label:
                                                                                    "Desde",
                                                                                  readonly:
                                                                                    "",
                                                                                  rules:
                                                                                    _vm.rules,
                                                                                  outlined:
                                                                                    "",
                                                                                  dense:
                                                                                    ""
                                                                                },
                                                                                model: {
                                                                                  value:
                                                                                    _vm
                                                                                      .dataAdd
                                                                                      .input,
                                                                                  callback: function(
                                                                                    $$v
                                                                                  ) {
                                                                                    _vm.$set(
                                                                                      _vm.dataAdd,
                                                                                      "input",
                                                                                      $$v
                                                                                    )
                                                                                  },
                                                                                  expression:
                                                                                    "dataAdd.input"
                                                                                }
                                                                              },
                                                                              "v-text-field",
                                                                              attrs,
                                                                              false
                                                                            ),
                                                                            on
                                                                          )
                                                                        )
                                                                      ]
                                                                    }
                                                                  }
                                                                ]
                                                              ),
                                                              model: {
                                                                value:
                                                                  _vm.from_menu,
                                                                callback: function(
                                                                  $$v
                                                                ) {
                                                                  _vm.from_menu = $$v
                                                                },
                                                                expression:
                                                                  "from_menu"
                                                              }
                                                            },
                                                            [
                                                              _vm._v(" "),
                                                              _vm.from_menu
                                                                ? _c(
                                                                    "v-time-picker",
                                                                    {
                                                                      attrs: {
                                                                        "full-width":
                                                                          ""
                                                                      },
                                                                      model: {
                                                                        value:
                                                                          _vm
                                                                            .dataAdd
                                                                            .input,
                                                                        callback: function(
                                                                          $$v
                                                                        ) {
                                                                          _vm.$set(
                                                                            _vm.dataAdd,
                                                                            "input",
                                                                            $$v
                                                                          )
                                                                        },
                                                                        expression:
                                                                          "dataAdd.input"
                                                                      }
                                                                    },
                                                                    [
                                                                      _c(
                                                                        "v-spacer"
                                                                      ),
                                                                      _vm._v(
                                                                        " "
                                                                      ),
                                                                      _c(
                                                                        "v-btn",
                                                                        {
                                                                          attrs: {
                                                                            outlined:
                                                                              "",
                                                                            text:
                                                                              "",
                                                                            color:
                                                                              "primary"
                                                                          },
                                                                          on: {
                                                                            click: function(
                                                                              $event
                                                                            ) {
                                                                              _vm.from_menu = false
                                                                            }
                                                                          }
                                                                        },
                                                                        [
                                                                          _vm._v(
                                                                            "Cancelar"
                                                                          )
                                                                        ]
                                                                      ),
                                                                      _vm._v(
                                                                        " "
                                                                      ),
                                                                      _c(
                                                                        "v-btn",
                                                                        {
                                                                          attrs: {
                                                                            color:
                                                                              "primary"
                                                                          },
                                                                          on: {
                                                                            click: function(
                                                                              $event
                                                                            ) {
                                                                              return _vm.$refs.from_menu.save(
                                                                                _vm
                                                                                  .dataAdd
                                                                                  .input
                                                                              )
                                                                            }
                                                                          }
                                                                        },
                                                                        [
                                                                          _vm._v(
                                                                            "OK"
                                                                          )
                                                                        ]
                                                                      )
                                                                    ],
                                                                    1
                                                                  )
                                                                : _vm._e()
                                                            ],
                                                            1
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "v-menu",
                                                            {
                                                              ref: "to_menu",
                                                              attrs: {
                                                                "close-on-content-click": false,
                                                                "return-value":
                                                                  _vm.dataAdd
                                                                    .output,
                                                                transition:
                                                                  "scale-transition",
                                                                "offset-y": "",
                                                                "max-width":
                                                                  "290px",
                                                                "min-width":
                                                                  "290px"
                                                              },
                                                              on: {
                                                                "update:returnValue": function(
                                                                  $event
                                                                ) {
                                                                  return _vm.$set(
                                                                    _vm.dataAdd,
                                                                    "output",
                                                                    $event
                                                                  )
                                                                },
                                                                "update:return-value": function(
                                                                  $event
                                                                ) {
                                                                  return _vm.$set(
                                                                    _vm.dataAdd,
                                                                    "output",
                                                                    $event
                                                                  )
                                                                }
                                                              },
                                                              scopedSlots: _vm._u(
                                                                [
                                                                  {
                                                                    key:
                                                                      "activator",
                                                                    fn: function(
                                                                      ref
                                                                    ) {
                                                                      var on =
                                                                        ref.on
                                                                      var attrs =
                                                                        ref.attrs
                                                                      return [
                                                                        _c(
                                                                          "v-text-field",
                                                                          _vm._g(
                                                                            _vm._b(
                                                                              {
                                                                                attrs: {
                                                                                  label:
                                                                                    "Hasta las",
                                                                                  readonly:
                                                                                    "",
                                                                                  rules:
                                                                                    _vm.rules,
                                                                                  outlined:
                                                                                    "",
                                                                                  dense:
                                                                                    ""
                                                                                },
                                                                                model: {
                                                                                  value:
                                                                                    _vm
                                                                                      .dataAdd
                                                                                      .output,
                                                                                  callback: function(
                                                                                    $$v
                                                                                  ) {
                                                                                    _vm.$set(
                                                                                      _vm.dataAdd,
                                                                                      "output",
                                                                                      $$v
                                                                                    )
                                                                                  },
                                                                                  expression:
                                                                                    "dataAdd.output"
                                                                                }
                                                                              },
                                                                              "v-text-field",
                                                                              attrs,
                                                                              false
                                                                            ),
                                                                            on
                                                                          )
                                                                        )
                                                                      ]
                                                                    }
                                                                  }
                                                                ]
                                                              ),
                                                              model: {
                                                                value:
                                                                  _vm.to_menu,
                                                                callback: function(
                                                                  $$v
                                                                ) {
                                                                  _vm.to_menu = $$v
                                                                },
                                                                expression:
                                                                  "to_menu"
                                                              }
                                                            },
                                                            [
                                                              _vm._v(" "),
                                                              _vm.to_menu
                                                                ? _c(
                                                                    "v-time-picker",
                                                                    {
                                                                      attrs: {
                                                                        "full-width":
                                                                          ""
                                                                      },
                                                                      model: {
                                                                        value:
                                                                          _vm
                                                                            .dataAdd
                                                                            .output,
                                                                        callback: function(
                                                                          $$v
                                                                        ) {
                                                                          _vm.$set(
                                                                            _vm.dataAdd,
                                                                            "output",
                                                                            $$v
                                                                          )
                                                                        },
                                                                        expression:
                                                                          "dataAdd.output"
                                                                      }
                                                                    },
                                                                    [
                                                                      _c(
                                                                        "v-spacer"
                                                                      ),
                                                                      _vm._v(
                                                                        " "
                                                                      ),
                                                                      _c(
                                                                        "v-btn",
                                                                        {
                                                                          attrs: {
                                                                            outlined:
                                                                              "",
                                                                            text:
                                                                              "",
                                                                            color:
                                                                              "primary"
                                                                          },
                                                                          on: {
                                                                            click: function(
                                                                              $event
                                                                            ) {
                                                                              _vm.to_menu = false
                                                                            }
                                                                          }
                                                                        },
                                                                        [
                                                                          _vm._v(
                                                                            "Cancelar"
                                                                          )
                                                                        ]
                                                                      ),
                                                                      _vm._v(
                                                                        " "
                                                                      ),
                                                                      _c(
                                                                        "v-btn",
                                                                        {
                                                                          attrs: {
                                                                            color:
                                                                              "primary"
                                                                          },
                                                                          on: {
                                                                            click: function(
                                                                              $event
                                                                            ) {
                                                                              return _vm.$refs.to_menu.save(
                                                                                _vm
                                                                                  .dataAdd
                                                                                  .output
                                                                              )
                                                                            }
                                                                          }
                                                                        },
                                                                        [
                                                                          _vm._v(
                                                                            "OK"
                                                                          )
                                                                        ]
                                                                      )
                                                                    ],
                                                                    1
                                                                  )
                                                                : _vm._e()
                                                            ],
                                                            1
                                                          ),
                                                          _vm._v(" "),
                                                          _c("v-checkbox", {
                                                            staticClass:
                                                              "text-h6 font-weight-bold",
                                                            attrs: {
                                                              label:
                                                                "Todo el dia"
                                                            },
                                                            model: {
                                                              value:
                                                                _vm.dataAdd
                                                                  .every_single_day,
                                                              callback: function(
                                                                $$v
                                                              ) {
                                                                _vm.$set(
                                                                  _vm.dataAdd,
                                                                  "every_single_day",
                                                                  $$v
                                                                )
                                                              },
                                                              expression:
                                                                "dataAdd.every_single_day"
                                                            }
                                                          })
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
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c("v-divider")
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-card-actions",
                                [
                                  _c("v-spacer"),
                                  _vm._v(" "),
                                  _c(
                                    "v-btn",
                                    {
                                      attrs: {
                                        color: "primary",
                                        disabled: !_vm.valid_step_2,
                                        depressed: ""
                                      },
                                      on: {
                                        click: function($event) {
                                          _vm.step = 3
                                        }
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "\n                                    Siguiente\n                                "
                                      )
                                    ]
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
                  ),
                  _vm._v(" "),
                  _c(
                    "v-stepper-content",
                    { attrs: { step: "3" } },
                    [
                      _c(
                        "v-card",
                        [
                          _c(
                            "v-card-text",
                            [
                              _c(
                                "v-row",
                                [
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "12" } },
                                    [
                                      _c("vue-dropzone", {
                                        ref: "imagesDropzone",
                                        attrs: {
                                          id: "images-dropzone",
                                          options: _vm.imagesOption
                                        },
                                        on: {
                                          "vdropzone-success": function(
                                            $event
                                          ) {
                                            return _vm.imagesCleanFiles()
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
                              !_vm.images.busy && _vm.images.list.length == 0
                                ? _c(
                                    "v-row",
                                    [
                                      _c(
                                        "v-col",
                                        {
                                          staticClass:
                                            "text-center text-h4 font-weight-bold",
                                          attrs: { cols: "12" }
                                        },
                                        [
                                          _vm._v(
                                            "\n                                    No hay imagenes guardadas.\n                                "
                                          )
                                        ]
                                      )
                                    ],
                                    1
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.images.busy
                                ? _c(
                                    "v-row",
                                    [
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "12" } },
                                        [
                                          _c("v-progress-linear", {
                                            attrs: {
                                              indeterminate: "",
                                              color: "primary"
                                            }
                                          })
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _c(
                                "v-slide-group",
                                {
                                  attrs: { multiple: "" },
                                  model: {
                                    value: _vm.imagesSelect,
                                    callback: function($$v) {
                                      _vm.imagesSelect = $$v
                                    },
                                    expression: "imagesSelect"
                                  }
                                },
                                _vm._l(_vm.images.list, function(img, i) {
                                  return _c("v-slide-item", {
                                    key: i,
                                    staticClass: "mr-4 py-4",
                                    attrs: { color: "dark", value: img.path },
                                    scopedSlots: _vm._u(
                                      [
                                        {
                                          key: "default",
                                          fn: function(ref) {
                                            var active = ref.active
                                            var toggle = ref.toggle
                                            return [
                                              _c(
                                                "v-card",
                                                {
                                                  attrs: {
                                                    width: "150",
                                                    height: "200",
                                                    elevation: "6"
                                                  },
                                                  on: { click: toggle }
                                                },
                                                [
                                                  _c("v-img", {
                                                    attrs: {
                                                      src:
                                                        "/uploads/images/" +
                                                        img.path,
                                                      width: "100%",
                                                      height: "100%"
                                                    }
                                                  }),
                                                  _vm._v(" "),
                                                  _c(
                                                    "v-overlay",
                                                    {
                                                      attrs: {
                                                        value: active,
                                                        color:
                                                          "rgba(0, 0, 0, 1)",
                                                        absolute: ""
                                                      }
                                                    },
                                                    [
                                                      _c(
                                                        "v-icon",
                                                        {
                                                          attrs: {
                                                            color: "primary",
                                                            large: ""
                                                          }
                                                        },
                                                        [
                                                          _vm._v(
                                                            "\n                                                check_circle_outline\n                                            "
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
                                }),
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("v-divider"),
                          _vm._v(" "),
                          _c(
                            "v-card-actions",
                            [
                              _c("v-spacer"),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                {
                                  staticClass: "mr-0 text-capitalize",
                                  attrs: {
                                    color: "primary",
                                    disabled: !_vm.valid_step_3,
                                    depressed: ""
                                  },
                                  on: {
                                    click: function($event) {
                                      _vm.step = 4
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                                Siguiente\n                            "
                                  )
                                ]
                              )
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
                    "v-stepper-content",
                    { attrs: { step: "4" } },
                    [
                      _c(
                        "v-card",
                        [
                          _c(
                            "v-card-text",
                            [
                              _c(
                                "v-row",
                                [
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "12" } },
                                    [
                                      _c("vue-dropzone", {
                                        ref: "videosDropzone",
                                        attrs: {
                                          id: "videos-dropzone",
                                          options: _vm.videosOptions
                                        },
                                        on: {
                                          "vdropzone-success": function(
                                            $event
                                          ) {
                                            return _vm.videosCleanFiles()
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
                              !_vm.videos.busy && _vm.videos.list.length == 0
                                ? _c(
                                    "v-row",
                                    [
                                      _c(
                                        "v-col",
                                        {
                                          staticClass:
                                            "text-center text-h4 font-weight-bold",
                                          attrs: { cols: "12" }
                                        },
                                        [
                                          _vm._v(
                                            "\n                                    No hay videos guardados.\n                                "
                                          )
                                        ]
                                      )
                                    ],
                                    1
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.videos.busy
                                ? _c(
                                    "v-row",
                                    [
                                      _c(
                                        "v-col",
                                        {
                                          attrs: {
                                            cols: "12",
                                            sm: "8",
                                            md: "6"
                                          }
                                        },
                                        [
                                          _c("v-progress-linear", {
                                            attrs: {
                                              indeterminate: "",
                                              color: "primary"
                                            }
                                          })
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _c(
                                "v-slide-group",
                                {
                                  staticClass: "py-4",
                                  attrs: { multiple: "" },
                                  model: {
                                    value: _vm.videosSelect,
                                    callback: function($$v) {
                                      _vm.videosSelect = $$v
                                    },
                                    expression: "videosSelect"
                                  }
                                },
                                _vm._l(_vm.videos.list, function(v, i) {
                                  return _c("v-slide-item", {
                                    key: i,
                                    staticClass: "mr-4",
                                    attrs: { color: "dark", value: v.id },
                                    scopedSlots: _vm._u(
                                      [
                                        {
                                          key: "default",
                                          fn: function(ref) {
                                            var active = ref.active
                                            var toggle = ref.toggle
                                            return [
                                              _c(
                                                "v-card",
                                                {
                                                  attrs: {
                                                    width: "200",
                                                    height: "200",
                                                    tile: "",
                                                    elevation: "6"
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "v-img",
                                                    {
                                                      staticStyle: {
                                                        cursor: "pointer"
                                                      },
                                                      attrs: {
                                                        src:
                                                          "/uploads/images/" +
                                                          v.image_path +
                                                          ".png",
                                                        width: "100%",
                                                        height: "70%"
                                                      },
                                                      on: { click: toggle }
                                                    },
                                                    [
                                                      _c(
                                                        "v-overlay",
                                                        {
                                                          attrs: {
                                                            value: active,
                                                            color:
                                                              "rgba(0, 0, 0, 1)",
                                                            absolute: ""
                                                          }
                                                        },
                                                        [
                                                          _c(
                                                            "v-icon",
                                                            {
                                                              attrs: {
                                                                color:
                                                                  "primary",
                                                                large: ""
                                                              }
                                                            },
                                                            [
                                                              _vm._v(
                                                                "\n                                                    check_circle_outline\n                                                "
                                                              )
                                                            ]
                                                          )
                                                        ],
                                                        1
                                                      )
                                                    ],
                                                    1
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "v-card-actions",
                                                    [
                                                      _c("v-spacer"),
                                                      _vm._v(" "),
                                                      _c(
                                                        "v-btn",
                                                        {
                                                          attrs: { icon: "" },
                                                          on: {
                                                            click: function(
                                                              $event
                                                            ) {
                                                              return _vm.selectVideo(
                                                                v
                                                              )
                                                            }
                                                          }
                                                        },
                                                        [
                                                          _c(
                                                            "v-icon",
                                                            {
                                                              attrs: {
                                                                color: "primary"
                                                              }
                                                            },
                                                            [
                                                              _vm._v(
                                                                "\n                                                    play_arrow\n                                                "
                                                              )
                                                            ]
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
                                            ]
                                          }
                                        }
                                      ],
                                      null,
                                      true
                                    )
                                  })
                                }),
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("v-divider"),
                          _vm._v(" "),
                          _c(
                            "v-card-actions",
                            [
                              _c("v-spacer"),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                {
                                  staticClass: "mr-0 text-capitalize",
                                  attrs: {
                                    color: "primary",
                                    disabled: _vm.busy || !_vm.valid_step_4,
                                    loading: _vm.busy,
                                    depressed: ""
                                  },
                                  on: { click: _vm.update }
                                },
                                [
                                  _vm._v(
                                    "\n                                Actualizar\n                            "
                                  )
                                ]
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
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("VideoPlayer", {
        attrs: { showing: _vm.videos.playing, item: _vm.videos.selected },
        on: {
          close: function($event) {
            _vm.videos.playing = false
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

/***/ "./resources/js/pages/publications-edit/publications-edit.js?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/pages/publications-edit/publications-edit.js?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_publications_edit_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!./publications-edit.js?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./resources/js/pages/publications-edit/publications-edit.js?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_publications_edit_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/publications-edit/publications-edit.vue":
/*!********************************************************************!*\
  !*** ./resources/js/pages/publications-edit/publications-edit.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _publications_edit_vue_vue_type_template_id_000e9810___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./publications-edit.vue?vue&type=template&id=000e9810& */ "./resources/js/pages/publications-edit/publications-edit.vue?vue&type=template&id=000e9810&");
/* harmony import */ var _publications_edit_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./publications-edit.js?vue&type=script&lang=js& */ "./resources/js/pages/publications-edit/publications-edit.js?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _publications_edit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./publications-edit.vue?vue&type=style&index=0&lang=css& */ "./resources/js/pages/publications-edit/publications-edit.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _publications_edit_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _publications_edit_vue_vue_type_template_id_000e9810___WEBPACK_IMPORTED_MODULE_0__["render"],
  _publications_edit_vue_vue_type_template_id_000e9810___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/publications-edit/publications-edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/publications-edit/publications-edit.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/pages/publications-edit/publications-edit.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_publications_edit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./publications-edit.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/publications-edit/publications-edit.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_publications_edit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_publications_edit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_publications_edit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_publications_edit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_publications_edit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/pages/publications-edit/publications-edit.vue?vue&type=template&id=000e9810&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/pages/publications-edit/publications-edit.vue?vue&type=template&id=000e9810& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_publications_edit_vue_vue_type_template_id_000e9810___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./publications-edit.vue?vue&type=template&id=000e9810& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/publications-edit/publications-edit.vue?vue&type=template&id=000e9810&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_publications_edit_vue_vue_type_template_id_000e9810___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_publications_edit_vue_vue_type_template_id_000e9810___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);