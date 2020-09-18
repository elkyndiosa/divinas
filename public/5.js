(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Feed.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Feed.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      return Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(2)]).then(__webpack_require__.bind(null, /*! ../components/FeedCard */ "./resources/js/components/FeedCard.vue"));
    }
  },
  data: function data() {
    return {
      layout: [1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3],
      publications: [],
      status: false,
      scroller: {
        page: 1,
        last_page: 0,
        getting: false,
        ready: false
      },
      weekGirl: {
        busy: false,
        data: {}
      },
      barrio: null,
      city: null,
      cities: {
        busy: false,
        list: []
      },
      servicesSelect: [],
      services: {
        busy: false,
        list: []
      },
      ageList: [{
        text: 'Entre 18 y 25',
        value: '18-25'
      }, {
        text: 'Entre 26 y 35',
        value: '26-35'
      }, {
        text: 'Entre 36 y 45',
        value: '36-45'
      }],
      age: null,
      price: null,
      priceList: [{
        text: 'Entre 10 y 30',
        value: '10-30'
      }, {
        text: 'Entre 30 y 70',
        value: '30-70'
      }, {
        text: 'Entre 70 y 100',
        value: '70-100'
      }, {
        text: 'Entre 100 y 120',
        value: '100-120'
      }],
      busy: false
    };
  },
  computed: {
    noGet: function noGet() {
      var scroll = this.scroller;
      if (scroll.getting || scroll.ready) return true;
      return false;
    },
    barrios: function barrios() {
      var index = _.findIndex(this.cities.list, {
        'id': this.city
      });

      var city = this.cities.list[index];
      if (city) return city.barrios;
      return [];
    },
    isHome: function isHome() {
      if (this.$router.history.current.name == "favorites") {
        return false;
      } else if (this.$router.history.current.name == "home") {
        return true;
      }
    },
    week: function week() {
      var data = {
        name: this.weekGirl.data.name,
        description: this.weekGirl.data.description,
        uuid: this.weekGirl.data.uuid
      };

      if (this.weekGirl.data.imgages_path) {
        data.image = JSON.parse(this.weekGirl.data.imgages_path)[0];
      }

      return data;
    }
  },
  created: function created() {
    this.getWeek();
    this.getCitiesList();
    this.getServices();
  },
  methods: {
    getPublications: function getPublications() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var url, params, _this$publications, response, list;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.scroller.getting = true;
                url = '/api/publication';
                _context.next = 4;
                return _this.getParams();

              case 4:
                params = _context.sent;
                _context.prev = 5;
                _context.next = 8;
                return axios.get(url, {
                  params: params
                });

              case 8:
                response = _context.sent;
                list = response.data.list;

                (_this$publications = _this.publications).push.apply(_this$publications, _toConsumableArray(list.data));

                _this.scroller.last_page = list.last_page;
                _this.scroller.page += 1;

                if (list.current_page >= list.last_page) {
                  _this.scroller.ready = true;
                }

                _context.next = 19;
                break;

              case 16:
                _context.prev = 16;
                _context.t0 = _context["catch"](5);
                console.log(_context.t0);

              case 19:
                _this.scroller.getting = false;

              case 20:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[5, 16]]);
      }))();
    },
    search: function search() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this2.scroller.ready = true;
                _this2.publications = [];
                _this2.scroller.page = 1;

                _this2.$vuetify.goTo(9999, 10);

                _this2.$nextTick(function () {
                  _this2.scroller.ready = false;
                });

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    getWeek: function getWeek() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var url, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _this3.weekGirl.busy = true;
                url = '/api/get-week';
                _context3.prev = 2;
                _context3.next = 5;
                return axios.get(url);

              case 5:
                response = _context3.sent;
                _this3.weekGirl.data = response.data.week;
                _context3.next = 12;
                break;

              case 9:
                _context3.prev = 9;
                _context3.t0 = _context3["catch"](2);
                console.log(_context3.t0.response.data);

              case 12:
                _this3.weekGirl.busy = false;

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
                console.log(_context4.t0);

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
                console;

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
    addFavorities: function addFavorities(uuid) {
      this.$emit("addFavorities", uuid);
    },
    getParams: function getParams() {
      var params = {
        page: this.scroller.page
      };
      if (this.status) params.status = this.status;
      if (this.age) params.age = this.age;
      if (this.city) params.city = this.city;
      if (this.barrio) params.barrio = this.barrio;
      if (this.price) params.price = this.price;
      if (this.servicesSelect.length > 0) params.services = _.join(this.servicesSelect, '-');
      return params;
    },
    showWeek: function showWeek() {
      var uuid = this.week.uuid;
      this.$router.push("/publication/" + uuid);
    }
  },
  watch: {}
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
        { attrs: { justify: "center" } },
        [
          _c("v-col", { attrs: { cols: "12" } }, [_vm._t("default")], 2),
          _vm._v(" "),
          _c(
            "v-col",
            { staticClass: "d-flex justify-center", attrs: { cols: "12" } },
            [
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
            ]
          ),
          _vm._v(" "),
          _vm.isHome
            ? _c(
                "v-col",
                { attrs: { cols: "12", sm: "10", md: "8" } },
                [
                  _c(
                    "v-form",
                    {
                      on: {
                        submit: function($event) {
                          $event.preventDefault()
                          return _vm.search($event)
                        }
                      }
                    },
                    [
                      _c(
                        "v-row",
                        { attrs: { justify: "center" } },
                        [
                          _c(
                            "v-col",
                            { attrs: { cols: "12", md: "6" } },
                            [
                              _c("v-select", {
                                attrs: {
                                  items: _vm.cities.list,
                                  "item-text": "name",
                                  "item-value": "id",
                                  label: "Ciudad",
                                  readonly: _vm.cities.busy,
                                  loading: _vm.cities.busy,
                                  outlined: "",
                                  "hide-details": "",
                                  dense: ""
                                },
                                model: {
                                  value: _vm.city,
                                  callback: function($$v) {
                                    _vm.city = $$v
                                  },
                                  expression: "city"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12", md: "6" } },
                            [
                              _c("v-select", {
                                attrs: {
                                  items: _vm.barrios,
                                  "item-text": "name",
                                  "item-value": "id",
                                  readonly: _vm.cities.busy,
                                  loading: _vm.cities.busy,
                                  "no-data-text":
                                    "No hay barrio para la ciudad seleccionada.",
                                  label: "Barrio",
                                  "hide-details": "",
                                  outlined: "",
                                  dense: ""
                                },
                                model: {
                                  value: _vm.barrio,
                                  callback: function($$v) {
                                    _vm.barrio = $$v
                                  },
                                  expression: "barrio"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12", md: "6" } },
                            [
                              _c("v-select", {
                                attrs: {
                                  "hide-details": "",
                                  dense: "",
                                  outlined: "",
                                  label: "Edad",
                                  items: _vm.ageList
                                },
                                model: {
                                  value: _vm.age,
                                  callback: function($$v) {
                                    _vm.age = $$v
                                  },
                                  expression: "age"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12", sm: "6" } },
                            [
                              _c("v-select", {
                                attrs: {
                                  "hide-details": "",
                                  dense: "",
                                  outlined: "",
                                  label: "Precio",
                                  items: _vm.priceList
                                },
                                model: {
                                  value: _vm.price,
                                  callback: function($$v) {
                                    _vm.price = $$v
                                  },
                                  expression: "price"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12", sm: "8" } },
                            [
                              _c("v-select", {
                                attrs: {
                                  "hide-details": "",
                                  outlined: "",
                                  chips: "",
                                  multiple: "",
                                  dense: "",
                                  "item-text": "name",
                                  "item-value": "id",
                                  label: "Servicios",
                                  items: _vm.services.list,
                                  loading: _vm.services.busy,
                                  readonly: _vm.services.busy
                                },
                                model: {
                                  value: _vm.servicesSelect,
                                  callback: function($$v) {
                                    _vm.servicesSelect = $$v
                                  },
                                  expression: "servicesSelect"
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
                                attrs: { label: "Solo prefiles verificados" },
                                model: {
                                  value: _vm.status,
                                  callback: function($$v) {
                                    _vm.status = $$v
                                  },
                                  expression: "status"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            {
                              staticClass: "d-flex pa-0 mb-8",
                              attrs: { cols: "12" }
                            },
                            [
                              _c(
                                "v-btn",
                                {
                                  staticClass:
                                    "px-16 py-4 ma-auto text-subtitle-2",
                                  attrs: {
                                    color: "primary",
                                    large: "",
                                    rounded: "",
                                    type: "submit",
                                    disabled: _vm.scroller.getting,
                                    loading: _vm.scroller.getting
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                          Filtrar\n                      "
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
            : _vm._e(),
          _vm._v(" "),
          _vm.isHome
            ? _c(
                "v-col",
                { attrs: { cols: "12", md: "10" } },
                [
                  _c(
                    "v-toolbar",
                    { attrs: { flat: "", dense: "" } },
                    [
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c("v-toolbar-title", { staticClass: "text-h4" }, [
                        _vm._v(
                          "\n                  Chica de la Semana\n              "
                        )
                      ]),
                      _vm._v(" "),
                      _c("v-spacer")
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _vm.weekGirl.busy
                    ? _c(
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
                                  _c("v-skeleton-loader", {
                                    staticClass: "mx-auto",
                                    attrs: { type: "image" }
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
                            { attrs: { cols: "12", md: "6" } },
                            [
                              _c(
                                "v-card",
                                { attrs: { flat: "" } },
                                [
                                  _c("v-skeleton-loader", {
                                    staticClass: "mx-auto",
                                    attrs: { type: "article", height: "100" }
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
                    : _c(
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
                                  _c("v-img", {
                                    staticClass: "grey lighten-2",
                                    attrs: {
                                      src: "/uploads/images/" + _vm.week.image,
                                      "aspect-ratio": "1",
                                      width: "500",
                                      height: "400"
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
                                      false,
                                      4034393411
                                    )
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
                            { attrs: { cols: "12", md: "6" } },
                            [
                              _c(
                                "v-card",
                                { attrs: { flat: "" } },
                                [
                                  _c(
                                    "v-card-title",
                                    { staticClass: "text-h5" },
                                    [
                                      _vm._v(
                                        "\n                          " +
                                          _vm._s(_vm.week.name) +
                                          "\n                      "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("v-card-text", [
                                    _c(
                                      "p",
                                      {
                                        staticClass:
                                          "black--text text-none text-justify text-body-1",
                                        staticStyle: { "line-height": "25px" }
                                      },
                                      [
                                        _vm._v(
                                          "\n                              " +
                                            _vm._s(_vm.week.description) +
                                            "\n                          "
                                        )
                                      ]
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "v-card-actions",
                                    [
                                      _c("v-spacer"),
                                      _vm._v(" "),
                                      _c(
                                        "v-btn",
                                        {
                                          attrs: { color: "primary" },
                                          on: { click: _vm.showWeek }
                                        },
                                        [
                                          _vm._v(
                                            "\n                              Ver\n                          "
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
                  _c("v-divider", { staticClass: "my-4" })
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _c("v-col", { attrs: { cols: "12" } }, [
            _c(
              "div",
              {
                directives: [
                  {
                    name: "infinite-scroll",
                    rawName: "v-infinite-scroll",
                    value: _vm.getPublications,
                    expression: "getPublications"
                  }
                ],
                attrs: {
                  id: "scroller",
                  "infinite-scroll-disabled": "noGet",
                  "infinite-scroll-distance": "100"
                }
              },
              [
                _c(
                  "v-row",
                  _vm._l(_vm.publications, function(item, index) {
                    return _c("feed-card", {
                      key: index,
                      attrs: { size: 3, value: item },
                      on: {
                        addFavorities: _vm.addFavorities,
                        reload: _vm.getPublications
                      }
                    })
                  }),
                  1
                ),
                _vm._v(" "),
                !_vm.scroller.getting && _vm.publications.length == 0
                  ? _c("v-row", { attrs: { justify: "center" } }, [
                      _c("h4", { staticClass: "text-h4" }, [
                        _vm._v(
                          "\n                  No hay resultados\n              "
                        )
                      ])
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.scroller.getting
                  ? _c(
                      "v-row",
                      { staticClass: "mt-4", attrs: { justify: "center" } },
                      [
                        _c("v-progress-circular", {
                          attrs: {
                            size: "70",
                            width: "7",
                            color: "secondary",
                            indeterminate: ""
                          }
                        })
                      ],
                      1
                    )
                  : _vm._e()
              ],
              1
            )
          ])
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