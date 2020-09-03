<template>
  <div class="w-100">
      <h2 class="primary--text text-center font-weight-bold">Crear Cuenta</h2>
      <form
        action="singup_form"
        method="POST"
        class="mt-8 px-2 px-md-8 w-100 d-flex flex-column justify-center flex-wrap"
      >
      
       <validation-provider rules="required|max:64" v-slot="{ errors }">
         <v-text-field
           v-model="singup_form.name_field.value"
          label="Nombre"
          prepend-inner-icon="person"
          dense
          hide-details
          single-line
          filled
          style="width: 75%"
          class="ma-auto"
        ></v-text-field>
        <div class="content-error text-center">
          <span class="error-details" style="lineHeigth: 1">{{errors[0]}}</span>
        </div>
      </validation-provider>
         <validation-provider rules="required|max:64" v-slot="{ errors }">
        <v-text-field
          v-model="singup_form.email_field.value"
          label="Correo electronico"
          prepend-inner-icon="email"
          dense
          single-line
          filled
          hide-details
          style="width: 75%"
          class="ma-auto"
        ></v-text-field>
        <div class="content-error text-center">
          <span class="error-details" style="lineHeigth: 1">{{errors[0]}}</span>
        </div>
      </validation-provider>
        
         <validation-provider rules="required|min:8" v-slot="{ errors }">
        <v-text-field
          v-model="singup_form.password_field.value"
          label="Contraseña"
          prepend-inner-icon="lock"
          :append-icon="showPassword ? 'visibility' : 'visibility_off'"
          :type="showPassword ? 'text' : 'password'"
          @click:append="showPassword = !showPassword"
          single-line
          hide-details
          filled
          dense
          style="width: 75%"
          class="ma-auto"
        ></v-text-field>
        <div class="content-error text-center">
          <span class="error-details" style="lineHeigth: 1">{{errors[0]}}</span>
        </div>
      </validation-provider>
          <v-select
            filled
            dense
            hide-details
            prepend-inner-icon="person_outline"
            :items="items"
            item-text="label"
            item-value="value"
            v-model="singup_form.type.value"
            label="Tipo de usuario"
            style="width: 75%"
            class="ma-auto"
          ></v-select>
        <v-checkbox
          class="mt-2 ma-auto mb-0"
          hide-details
          v-model="singup_form.remember_check.value"
          label="Recuerdame"
        ></v-checkbox>
        <v-card-actions class="mt-6">
          <v-btn
            color="primary"
            @click="register()"
            dark
            large
            class="text-capitalize px-12 py-4 ma-auto"
            rounded
          ><v-icon left class="material-icons">check</v-icon>Registrarse</v-btn>
        </v-card-actions>
      </form>
  </div>
</template>
<script>
import { ValidationProvider, extend } from "vee-validate";
import { required, max, min } from "vee-validate/dist/rules";

extend("required", {
  ...required,
  message: "Este campo es requerido",
});
extend("max", {
  validate(value, args) {
    return value.length <= args.length;
  },
  params: ["length"],
  message: "Tu nombre debe tener menos de {length} caracteres",
});
extend("min", {
  validate(value, args) {
    return value.length >= args.length;
  },
  params: ["length"],
  message: "Tu contrseña debe tener mas de {length} caracteres",
});
export default {
  components:{
    ValidationProvider,
  },
  data() {
    return {
      items:[{'label': 'Visitante', 'value': 3},{'label': 'Quiero publicar', 'value': 2}],
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
      type:{
        value: 3
      }
    },
    };
  },
  created() {

  },
  methods: {
      register(){
          this.$emit("register", this.singup_form);
      }
  },
};
</script>
