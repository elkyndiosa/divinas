<template>
  <div class="w-100">
      <h2 class="primary--text text-center font-weight-bold">Entrar a Divinas Prepagos</h2>
      <form
        action="login_form"
        method="POST"
        arial-label="Login"
        class="mt-8 px-2 px-md-8  w-100 d-flex flex-column justify-center flex-wrap"
      >

      <validation-provider rules="required|max:64" v-slot="{ errors }">
        <v-text-field
          v-model="login_form.email_field.value"
          :label="login_form.email_field.label"
          prepend-inner-icon="email"
          dense
          single-line
          filled
          hide-details
          style="width: 75%"
          class= "ma-auto"
        ></v-text-field>
        <div class="content-error text-center">
          <span class="error-details" style="lineHeigth: 1">{{errors[0]}}</span>
        </div>
      </validation-provider>
      <validation-provider rules="required|min:8" v-slot="{ errors }">
        <v-text-field
          v-model="login_form.password_field.value"
          :label="login_form.password_field.label"
          prepend-inner-icon="lock"
          :append-icon="showPassword ? 'visibility' : 'visibility_off'"
          :type="showPassword ? 'text' : 'password'"
          @click:append="showPassword = !showPassword"
          single-line
          filled
          hide-details
          dense
          style="width: 75%"
          class="ma-auto"
        ></v-text-field>
        <div class="content-error text-center">
          <span class="error-details" style="lineHeigth: 1">{{errors[0]}}</span>
        </div>
      </validation-provider>
        <v-btn color="white" elevation="0" small class="text-capitalize w-50 ma-auto">Olvido su contraseña?</v-btn>
        <v-checkbox
          class="mt-2 ma-auto mb-0"
          hide-details
          v-model="login_form.remember_check.value"
          label="Recuerdame"
        ></v-checkbox>
        <v-card-actions class="mt-6">
          <v-btn
            color="primary"
            @click="login"
            dark
            large
            class="text-capitalize px-12 py-4 ma-auto"
            rounded
          >Entrar</v-btn>
        </v-card-actions>
      </form>
  </div>
</template>
<script>
import { ValidationProvider, extend } from "vee-validate";
import { required, max, min } from "vee-validate/dist/rules";

extend("required", {
  ...required,
  message: "This field is required",
});
extend("max", {
  validate(value, args) {
    return value.length <= args.length;
  },
  params: ["length"],
  message: "The name must be less than {length} characters",
});
extend("min", {
  validate(value, args) {
    return value.length >= args.length;
  },
  params: ["length"],
  message: "The password must have more than {length} characters",
});
export default {
  components:{
    ValidationProvider,
  },
  data() {
    return {
      showPassword: false,
      login_form: {
        email_field: {
          value: "",
          label: "Correo electronico",
          type: "email",
        },
        password_field: {
          value: "",
          label: "Contraseña",
          type: "password",
        },
        remember_check: {
          value: false,
        },
      },
    };
  },
  methods: {
      login(){
          this.$emit("login", this.login_form);
      }
  },
};
</script>
