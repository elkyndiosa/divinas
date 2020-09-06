(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["form-user"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/login-signup/LoginComponent.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/login-signup/LoginComponent.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vee_validate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vee-validate */ "./node_modules/vee-validate/dist/vee-validate.esm.js");
/* harmony import */ var vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vee-validate/dist/rules */ "./node_modules/vee-validate/dist/rules.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])("required", _objectSpread(_objectSpread({}, vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__["required"]), {}, {
  message: "This field is required"
}));
Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])("max", {
  validate: function validate(value, args) {
    return value.length <= args.length;
  },
  params: ["length"],
  message: "The name must be less than {length} characters"
});
Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])("min", {
  validate: function validate(value, args) {
    return value.length >= args.length;
  },
  params: ["length"],
  message: "The password must have more than {length} characters"
});
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    ValidationProvider: vee_validate__WEBPACK_IMPORTED_MODULE_0__["ValidationProvider"]
  },
  data: function data() {
    return {
      showPassword: false,
      login_form: {
        email_field: {
          value: "",
          label: "Correo electronico",
          type: "email"
        },
        password_field: {
          value: "",
          label: "Contraseña",
          type: "password"
        },
        remember_check: {
          value: false
        }
      }
    };
  },
  methods: {
    login: function login() {
      this.$emit("login", this.login_form);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/login-signup/SignupComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/login-signup/SignupComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vee_validate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vee-validate */ "./node_modules/vee-validate/dist/vee-validate.esm.js");
/* harmony import */ var vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vee-validate/dist/rules */ "./node_modules/vee-validate/dist/rules.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])("required", _objectSpread(_objectSpread({}, vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__["required"]), {}, {
  message: "Este campo es requerido"
}));
Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])("max", {
  validate: function validate(value, args) {
    return value.length <= args.length;
  },
  params: ["length"],
  message: "Tu nombre debe tener menos de {length} caracteres"
});
Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])("min", {
  validate: function validate(value, args) {
    return value.length >= args.length;
  },
  params: ["length"],
  message: "Tu contrseña debe tener mas de {length} caracteres"
});
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    ValidationProvider: vee_validate__WEBPACK_IMPORTED_MODULE_0__["ValidationProvider"]
  },
  data: function data() {
    return {
      items: [{
        'label': 'Visitante',
        'value': 3
      }, {
        'label': 'Quiero publicar',
        'value': 2
      }],
      showPassword: false,
      singup_form: {
        name_field: {
          value: "",
          type: "text"
        },
        email_field: {
          value: "",
          type: "email"
        },
        password_field: {
          value: "",
          type: "password"
        },
        remember_check: {
          value: false
        },
        type: {
          value: 3
        }
      }
    };
  },
  created: function created() {},
  methods: {
    register: function register() {
      this.$emit("register", this.singup_form);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/form-user.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/form-user.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_login_signup_LoginComponent_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/login-signup/LoginComponent.vue */ "./resources/js/components/login-signup/LoginComponent.vue");
/* harmony import */ var _components_login_signup_SignupComponent_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/login-signup/SignupComponent.vue */ "./resources/js/components/login-signup/SignupComponent.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    LoginComponent: _components_login_signup_LoginComponent_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    SignupComponent: _components_login_signup_SignupComponent_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: ["type"],
  name: "login-form",
  data: function data() {
    return {
      errorServer: "",
      snackbar: false,
      formLogin: true,
      formSignup: false,
      textTitle: 'Bienvenido de nuevo',
      textParr: 'Inicie sesión con su información personal.',
      textBtn: 'Registrarse',
      efect: false
    };
  },
  mounted: function mounted() {
    if (this.type != 'login') {
      this.changeForm();
    } else {
      this.formLogin = false;
      this.changeForm();
    }
  },
  methods: {
    changeForm: function changeForm() {
      var _this = this;

      if (this.formLogin) {
        this.formLogin = false;
        this.efect = true;
        setTimeout(function () {
          _this.efect = false;
          _this.formSignup = true;
          _this.textTitle = 'Hola, Amigo!', _this.textParr = 'Introduce tus datos personales y empieza el viaje con nosotros', _this.textBtn = 'Entrar';
        }, 500);
      } else {
        this.formSignup = false;
        this.efect = true;
        setTimeout(function () {
          _this.efect = false;
          _this.formLogin = true;
          _this.textTitle = 'Bienvenido de Nuevo', _this.textParr = 'Inicie sesión con su información personal.', _this.textBtn = 'Registrarse';
        }, 500);
      }
    },
    login: function login(loginData) {
      var _this2 = this;

      var url = "/login";
      var formData = new FormData();
      formData.append("email", loginData.email_field.value);
      formData.append("password", loginData.password_field.value);
      formData.append("remember", loginData.remember_check);
      axios.post(url, formData).then(function (response) {
        location.href = "/dashboard";
      })["catch"](function (error) {
        _this2.errorServer = "Incorrect data, please check!";
        _this2.snackbar = true;
        console.log(error.response.data);
      });
    },
    register: function register(signupData) {
      var _this3 = this;

      var url = "/register";
      var formData = new FormData();
      formData.append("name", signupData.name_field.value);
      formData.append("email", signupData.email_field.value);
      formData.append("password", signupData.password_field.value);
      formData.append("type", signupData.type.value);
      axios.post(url, formData).then(function (response) {
        location.href = "/dashboard";
      })["catch"](function (error) {
        _this3.errorServer = "Incorrect data, please check!";
        _this3.snackbar = true;
        console.log(error.response);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/form-user.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/form-user.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.card-login {\n  background-image: url(\"https://images.unsplash.com/photo-1518893063132-36e46dbe2428?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=375&q=80\");\n  background-color: transparent;\n  background-position: left;\n  background-repeat: no-repeat;\n  background-size: 50% 100%;\n  height: 100%;\n  width: 100%;\n  margin-top: 50px !important;\n}\n@media only screen and (min-width: 1450px) {\n.card-login {\n    margin-top: 30% !important;\n}\n}\n@media only screen and (max-width: 550px) {\n.card-login {\n    margin-top: 10px !important;\n    left: 0px;\n    background-image: none;\n}\n}\n.icon-login {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n}\n.v-input--selection-controls .v-input__slot > .v-label {\n  margin-bottom: 0px !important;\n}\n/* STYLES FOR EFECTS */\n.slide-login-enter-active, .slide-login-leave-active, .slide-signup-enter-active,\n.slide-signup-leave-active, .slide-text-enter-active, .slide-text-leave-active{\n  transition: all .5s;\n}\n.slide-login-leave-to{\n  transform: translateX(-100px);\n  opacity: 0;\n}\n.slide-signup-enter, .slide-login-enter{\n  transform: translateX(100px);\n  opacity: 0;\n}\n.slide-login-enter-to, .slide-login-leave{\n  opacity: 1;\n}\n.slide-signup-leave-to{\n  transform: translateX(-100px);\n  opacity: 0;\n}\n.slide-signup-enter-to, .slide-signup-leave{\n  opacity: 1;\n}\n.slide-text-leave-to{\n  transform: translateX(-50px);\n  opacity: 0;\n}\n.slide-text-enter{\n  transform: translateX(50px);\n  opacity: 0;\n}\n.slide-text-enter-to, .slide-text-leave{\n  opacity: 1;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/form-user.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/form-user.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./form-user.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/form-user.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/login-signup/LoginComponent.vue?vue&type=template&id=043ed3ac&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/login-signup/LoginComponent.vue?vue&type=template&id=043ed3ac& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "w-100" }, [
    _c("h2", { staticClass: "primary--text text-center font-weight-bold" }, [
      _vm._v("Entrar a Divinas Prepagos")
    ]),
    _vm._v(" "),
    _c(
      "form",
      {
        staticClass:
          "mt-8 px-2 px-md-8  w-100 d-flex flex-column justify-center flex-wrap",
        attrs: { action: "login_form", method: "POST", "arial-label": "Login" }
      },
      [
        _c("validation-provider", {
          attrs: { rules: "required|max:64" },
          scopedSlots: _vm._u([
            {
              key: "default",
              fn: function(ref) {
                var errors = ref.errors
                return [
                  _c("v-text-field", {
                    staticClass: "ma-auto",
                    staticStyle: { width: "75%" },
                    attrs: {
                      label: _vm.login_form.email_field.label,
                      "prepend-inner-icon": "email",
                      dense: "",
                      "single-line": "",
                      filled: "",
                      "hide-details": ""
                    },
                    model: {
                      value: _vm.login_form.email_field.value,
                      callback: function($$v) {
                        _vm.$set(_vm.login_form.email_field, "value", $$v)
                      },
                      expression: "login_form.email_field.value"
                    }
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "content-error text-center" }, [
                    _c(
                      "span",
                      {
                        staticClass: "error-details",
                        staticStyle: { lineHeigth: "1" }
                      },
                      [_vm._v(_vm._s(errors[0]))]
                    )
                  ])
                ]
              }
            }
          ])
        }),
        _vm._v(" "),
        _c("validation-provider", {
          attrs: { rules: "required|min:8" },
          scopedSlots: _vm._u([
            {
              key: "default",
              fn: function(ref) {
                var errors = ref.errors
                return [
                  _c("v-text-field", {
                    staticClass: "ma-auto",
                    staticStyle: { width: "75%" },
                    attrs: {
                      label: _vm.login_form.password_field.label,
                      "prepend-inner-icon": "lock",
                      "append-icon": _vm.showPassword
                        ? "visibility"
                        : "visibility_off",
                      type: _vm.showPassword ? "text" : "password",
                      "single-line": "",
                      filled: "",
                      "hide-details": "",
                      dense: ""
                    },
                    on: {
                      "click:append": function($event) {
                        _vm.showPassword = !_vm.showPassword
                      }
                    },
                    model: {
                      value: _vm.login_form.password_field.value,
                      callback: function($$v) {
                        _vm.$set(_vm.login_form.password_field, "value", $$v)
                      },
                      expression: "login_form.password_field.value"
                    }
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "content-error text-center" }, [
                    _c(
                      "span",
                      {
                        staticClass: "error-details",
                        staticStyle: { lineHeigth: "1" }
                      },
                      [_vm._v(_vm._s(errors[0]))]
                    )
                  ])
                ]
              }
            }
          ])
        }),
        _vm._v(" "),
        _c(
          "v-btn",
          {
            staticClass: "text-capitalize w-50 ma-auto",
            attrs: { color: "white", elevation: "0", small: "" }
          },
          [_vm._v("Olvido su contraseña?")]
        ),
        _vm._v(" "),
        _c("v-checkbox", {
          staticClass: "mt-2 ma-auto mb-0",
          attrs: { "hide-details": "", label: "Recuerdame" },
          model: {
            value: _vm.login_form.remember_check.value,
            callback: function($$v) {
              _vm.$set(_vm.login_form.remember_check, "value", $$v)
            },
            expression: "login_form.remember_check.value"
          }
        }),
        _vm._v(" "),
        _c(
          "v-card-actions",
          { staticClass: "mt-6" },
          [
            _c(
              "v-btn",
              {
                staticClass: "text-capitalize px-12 py-4 ma-auto",
                attrs: { color: "primary", dark: "", large: "", rounded: "" },
                on: { click: _vm.login }
              },
              [_vm._v("Entrar")]
            )
          ],
          1
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/login-signup/SignupComponent.vue?vue&type=template&id=90887146&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/login-signup/SignupComponent.vue?vue&type=template&id=90887146& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "w-100" }, [
    _c("h2", { staticClass: "primary--text text-center font-weight-bold" }, [
      _vm._v("Crear Cuenta")
    ]),
    _vm._v(" "),
    _c(
      "form",
      {
        staticClass:
          "mt-8 px-2 px-md-8 w-100 d-flex flex-column justify-center flex-wrap",
        attrs: { action: "singup_form", method: "POST" }
      },
      [
        _c("validation-provider", {
          attrs: { rules: "required|max:64" },
          scopedSlots: _vm._u([
            {
              key: "default",
              fn: function(ref) {
                var errors = ref.errors
                return [
                  _c("v-text-field", {
                    staticClass: "ma-auto",
                    staticStyle: { width: "75%" },
                    attrs: {
                      label: "Nombre",
                      "prepend-inner-icon": "person",
                      dense: "",
                      "hide-details": "",
                      "single-line": "",
                      filled: ""
                    },
                    model: {
                      value: _vm.singup_form.name_field.value,
                      callback: function($$v) {
                        _vm.$set(_vm.singup_form.name_field, "value", $$v)
                      },
                      expression: "singup_form.name_field.value"
                    }
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "content-error text-center" }, [
                    _c(
                      "span",
                      {
                        staticClass: "error-details",
                        staticStyle: { lineHeigth: "1" }
                      },
                      [_vm._v(_vm._s(errors[0]))]
                    )
                  ])
                ]
              }
            }
          ])
        }),
        _vm._v(" "),
        _c("validation-provider", {
          attrs: { rules: "required|max:64" },
          scopedSlots: _vm._u([
            {
              key: "default",
              fn: function(ref) {
                var errors = ref.errors
                return [
                  _c("v-text-field", {
                    staticClass: "ma-auto",
                    staticStyle: { width: "75%" },
                    attrs: {
                      label: "Correo electronico",
                      "prepend-inner-icon": "email",
                      dense: "",
                      "single-line": "",
                      filled: "",
                      "hide-details": ""
                    },
                    model: {
                      value: _vm.singup_form.email_field.value,
                      callback: function($$v) {
                        _vm.$set(_vm.singup_form.email_field, "value", $$v)
                      },
                      expression: "singup_form.email_field.value"
                    }
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "content-error text-center" }, [
                    _c(
                      "span",
                      {
                        staticClass: "error-details",
                        staticStyle: { lineHeigth: "1" }
                      },
                      [_vm._v(_vm._s(errors[0]))]
                    )
                  ])
                ]
              }
            }
          ])
        }),
        _vm._v(" "),
        _c("validation-provider", {
          attrs: { rules: "required|min:8" },
          scopedSlots: _vm._u([
            {
              key: "default",
              fn: function(ref) {
                var errors = ref.errors
                return [
                  _c("v-text-field", {
                    staticClass: "ma-auto",
                    staticStyle: { width: "75%" },
                    attrs: {
                      label: "Contraseña",
                      "prepend-inner-icon": "lock",
                      "append-icon": _vm.showPassword
                        ? "visibility"
                        : "visibility_off",
                      type: _vm.showPassword ? "text" : "password",
                      "single-line": "",
                      "hide-details": "",
                      filled: "",
                      dense: ""
                    },
                    on: {
                      "click:append": function($event) {
                        _vm.showPassword = !_vm.showPassword
                      }
                    },
                    model: {
                      value: _vm.singup_form.password_field.value,
                      callback: function($$v) {
                        _vm.$set(_vm.singup_form.password_field, "value", $$v)
                      },
                      expression: "singup_form.password_field.value"
                    }
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "content-error text-center" }, [
                    _c(
                      "span",
                      {
                        staticClass: "error-details",
                        staticStyle: { lineHeigth: "1" }
                      },
                      [_vm._v(_vm._s(errors[0]))]
                    )
                  ])
                ]
              }
            }
          ])
        }),
        _vm._v(" "),
        _c("v-select", {
          staticClass: "ma-auto",
          staticStyle: { width: "75%" },
          attrs: {
            filled: "",
            dense: "",
            "hide-details": "",
            "prepend-inner-icon": "person_outline",
            items: _vm.items,
            "item-text": "label",
            "item-value": "value",
            label: "Tipo de usuario"
          },
          model: {
            value: _vm.singup_form.type.value,
            callback: function($$v) {
              _vm.$set(_vm.singup_form.type, "value", $$v)
            },
            expression: "singup_form.type.value"
          }
        }),
        _vm._v(" "),
        _c("v-checkbox", {
          staticClass: "mt-2 ma-auto mb-0",
          attrs: { "hide-details": "", label: "Recuerdame" },
          model: {
            value: _vm.singup_form.remember_check.value,
            callback: function($$v) {
              _vm.$set(_vm.singup_form.remember_check, "value", $$v)
            },
            expression: "singup_form.remember_check.value"
          }
        }),
        _vm._v(" "),
        _c(
          "v-card-actions",
          { staticClass: "mt-6" },
          [
            _c(
              "v-btn",
              {
                staticClass: "text-capitalize px-12 py-4 ma-auto",
                attrs: { color: "primary", dark: "", large: "", rounded: "" },
                on: {
                  click: function($event) {
                    return _vm.register()
                  }
                }
              },
              [
                _c(
                  "v-icon",
                  { staticClass: "material-icons", attrs: { left: "" } },
                  [_vm._v("check")]
                ),
                _vm._v("Registrarse")
              ],
              1
            )
          ],
          1
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/form-user.vue?vue&type=template&id=6852ca1b&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/form-user.vue?vue&type=template&id=6852ca1b& ***!
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
    "v-app",
    [
      _c(
        "v-main",
        { staticClass: "mt-12 container-global ma-auto" },
        [
          _c(
            "v-container",
            { staticClass: "full-height", attrs: { fluid: "" } },
            [
              _c(
                "v-row",
                { attrs: { align: "center", justify: "center" } },
                [
                  _c(
                    "v-col",
                    { attrs: { cols: "12", md: "9" } },
                    [
                      _c(
                        "v-card",
                        {
                          staticClass:
                            "rounded-xl pa-0 d-flex justify-center flex-nowrap card-login",
                          staticStyle: { overflow: "hidden" },
                          attrs: { elevation: "4", "min-height": "550" }
                        },
                        [
                          _c(
                            "div",
                            {
                              staticClass:
                                "icon-login d-none d-md-flex justify-center flex-nowrap align-items-center "
                            },
                            [
                              _c("v-img", { attrs: { width: "30", src: "" } }),
                              _vm._v(" "),
                              _c(
                                "h3",
                                {
                                  staticClass: "text-caption white--text mb-0"
                                },
                                [_vm._v("DivinasPrepagos")]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "transition",
                            { attrs: { name: "slide-text", mode: "out-in" } },
                            [
                              _vm.efect == false
                                ? _c(
                                    "v-col",
                                    {
                                      staticClass:
                                        "py-0 px-4 d-none d-md-flex flex-column justify-center align-items-center text-center white--text",
                                      attrs: {
                                        cols: "5",
                                        height: "100%",
                                        width: "100%",
                                        "max-width": "100%"
                                      }
                                    },
                                    [
                                      _c("h4", {
                                        staticClass:
                                          "w-100 text-h4 font-weight-bold mb-7",
                                        domProps: {
                                          textContent: _vm._s(_vm.textTitle)
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("p", {
                                        staticClass: "w-100 ma-0 mb-8",
                                        domProps: {
                                          textContent: _vm._s(_vm.textParr)
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("v-btn", {
                                        staticClass:
                                          "text-capitalize px-10 py-4",
                                        attrs: {
                                          color: "white",
                                          outlined: "",
                                          dark: "",
                                          large: "",
                                          rounded: ""
                                        },
                                        domProps: {
                                          textContent: _vm._s(_vm.textBtn)
                                        },
                                        on: {
                                          click: function($event) {
                                            return _vm.changeForm()
                                          }
                                        }
                                      })
                                    ],
                                    1
                                  )
                                : _vm._e()
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            {
                              staticClass:
                                "rounded-0 px-0 py-6 px-md-8 py-md-8 white d-flex flex-column justify-center flex-wrap align-items-center",
                              attrs: {
                                cols: "12",
                                md: "7",
                                "max-width": "100%"
                              }
                            },
                            [
                              _c(
                                "transition",
                                {
                                  attrs: { name: "slide-login", mode: "out-in" }
                                },
                                [
                                  _vm.formLogin
                                    ? _c("login-component", {
                                        on: { login: _vm.login }
                                      })
                                    : _vm._e()
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "transition",
                                {
                                  attrs: {
                                    name: "slide-signup",
                                    mode: "out-in"
                                  }
                                },
                                [
                                  _vm.formSignup
                                    ? _c("signup-component", {
                                        on: { register: _vm.register }
                                      })
                                    : _vm._e()
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              staticClass:
                                "text-capitalize w-auto black--text d-block d-md-none font-weight-bold mr-8",
                              attrs: {
                                elevation: "0",
                                color: "white",
                                absolute: "",
                                light: "",
                                small: "",
                                bottom: "",
                                right: ""
                              },
                              on: {
                                click: function($event) {
                                  return _vm.changeForm()
                                }
                              }
                            },
                            [
                              _vm._v(_vm._s(_vm.textBtn)),
                              _c(
                                "v-icon",
                                {
                                  staticClass: "material-icons",
                                  attrs: { right: "" }
                                },
                                [_vm._v("arrow_forward")]
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
      _c(
        "v-snackbar",
        {
          attrs: { timeout: 6000 },
          model: {
            value: _vm.snackbar,
            callback: function($$v) {
              _vm.snackbar = $$v
            },
            expression: "snackbar"
          }
        },
        [
          _vm._v("\n    " + _vm._s(_vm.errorServer) + "\n    "),
          [
            _c(
              "v-btn",
              {
                attrs: { color: "pink", text: "" },
                on: {
                  click: function($event) {
                    _vm.snackbar = false
                  }
                }
              },
              [_vm._v("Close")]
            )
          ]
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

/***/ "./resources/js/components/login-signup/LoginComponent.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/login-signup/LoginComponent.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LoginComponent_vue_vue_type_template_id_043ed3ac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LoginComponent.vue?vue&type=template&id=043ed3ac& */ "./resources/js/components/login-signup/LoginComponent.vue?vue&type=template&id=043ed3ac&");
/* harmony import */ var _LoginComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LoginComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/login-signup/LoginComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _LoginComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LoginComponent_vue_vue_type_template_id_043ed3ac___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LoginComponent_vue_vue_type_template_id_043ed3ac___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/login-signup/LoginComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/login-signup/LoginComponent.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/login-signup/LoginComponent.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./LoginComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/login-signup/LoginComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/login-signup/LoginComponent.vue?vue&type=template&id=043ed3ac&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/login-signup/LoginComponent.vue?vue&type=template&id=043ed3ac& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginComponent_vue_vue_type_template_id_043ed3ac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./LoginComponent.vue?vue&type=template&id=043ed3ac& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/login-signup/LoginComponent.vue?vue&type=template&id=043ed3ac&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginComponent_vue_vue_type_template_id_043ed3ac___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginComponent_vue_vue_type_template_id_043ed3ac___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/login-signup/SignupComponent.vue":
/*!******************************************************************!*\
  !*** ./resources/js/components/login-signup/SignupComponent.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SignupComponent_vue_vue_type_template_id_90887146___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SignupComponent.vue?vue&type=template&id=90887146& */ "./resources/js/components/login-signup/SignupComponent.vue?vue&type=template&id=90887146&");
/* harmony import */ var _SignupComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SignupComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/login-signup/SignupComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SignupComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SignupComponent_vue_vue_type_template_id_90887146___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SignupComponent_vue_vue_type_template_id_90887146___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/login-signup/SignupComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/login-signup/SignupComponent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/login-signup/SignupComponent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SignupComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SignupComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/login-signup/SignupComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SignupComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/login-signup/SignupComponent.vue?vue&type=template&id=90887146&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/login-signup/SignupComponent.vue?vue&type=template&id=90887146& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SignupComponent_vue_vue_type_template_id_90887146___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./SignupComponent.vue?vue&type=template&id=90887146& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/login-signup/SignupComponent.vue?vue&type=template&id=90887146&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SignupComponent_vue_vue_type_template_id_90887146___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SignupComponent_vue_vue_type_template_id_90887146___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/form-user.vue":
/*!******************************************!*\
  !*** ./resources/js/pages/form-user.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _form_user_vue_vue_type_template_id_6852ca1b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-user.vue?vue&type=template&id=6852ca1b& */ "./resources/js/pages/form-user.vue?vue&type=template&id=6852ca1b&");
/* harmony import */ var _form_user_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form-user.vue?vue&type=script&lang=js& */ "./resources/js/pages/form-user.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _form_user_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form-user.vue?vue&type=style&index=0&lang=css& */ "./resources/js/pages/form-user.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _form_user_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _form_user_vue_vue_type_template_id_6852ca1b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _form_user_vue_vue_type_template_id_6852ca1b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/form-user.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/form-user.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/pages/form-user.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_user_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./form-user.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/form-user.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_user_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/form-user.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************!*\
  !*** ./resources/js/pages/form-user.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_form_user_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./form-user.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/form-user.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_form_user_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_form_user_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_form_user_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_form_user_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_form_user_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/pages/form-user.vue?vue&type=template&id=6852ca1b&":
/*!*************************************************************************!*\
  !*** ./resources/js/pages/form-user.vue?vue&type=template&id=6852ca1b& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form_user_vue_vue_type_template_id_6852ca1b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./form-user.vue?vue&type=template&id=6852ca1b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/form-user.vue?vue&type=template&id=6852ca1b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form_user_vue_vue_type_template_id_6852ca1b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form_user_vue_vue_type_template_id_6852ca1b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);