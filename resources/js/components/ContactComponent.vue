<template>
  <div class="full-width mt-12 m-auto d-flex justify-center">
    <v-col cols="12" md="9" lg="6" class="elevation-4 rounded-lg my-16 py-8 full-width m-auto d-flex justify-center flex-column">
      <h2 class="text-h4  black--text text-center full-width font-weight-bold">Formulario de contacto</h2>
      <form
        action="form"
        method="POST"
        class="full-width mt-8 px-2 px-md-8 full-width d-flex flex-column justify-center flex-wrap"
      >
        <validation-provider rules="required|max:64" v-slot="{ errors }">
          <v-text-field
            v-model="form.name"
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
            v-model="form.email"
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
        <validation-provider rules="required|max:14" v-slot="{ errors }">
          <v-text-field
            v-model="form.phone"
            label="Numero de telefono"
            prepend-inner-icon="phone"
            dense
            type="number"
            single-line
            filled
            hide-details
            style="width: 75%"
            class="ma-auto inputNumber"
          ></v-text-field>
          <div class="content-error text-center">
            <span class="error-details" style="lineHeigth: 1">{{errors[0]}}</span>
          </div>
        </validation-provider>
        <validation-provider rules="required|max:14" v-slot="{ errors }">
          <v-text-field
            v-model="form.whatsapp"
            label="Whatsapp"
            prepend-inner-icon="phone_iphone"
            single-line
            hide-details
            filled
            type="number"
            dense
            style="width: 75%"
            class="ma-auto inputNumber"
          ></v-text-field>
          <div class="content-error text-center">
            <span class="error-details" style="lineHeigth: 1">{{errors[0]}}</span>
          </div>
        </validation-provider>
        <validation-provider rules="required|max:14" v-slot="{ errors }">
          <v-textarea
            v-model="form.message"
            label="Escribe aqui lo que deseas enviarnos"
            single-line
            hide-details
            filled
            dense
            style="width: 75%"
            class="ma-auto"
          ></v-textarea>
          <div class="content-error text-center">
            <span class="error-details" style="lineHeigth: 1">{{errors[0]}}</span>
          </div>
        </validation-provider>
        <v-card-actions class="mt-6">
          <v-btn
            color="primary"
            @click="send()"
            dark
            large
            class="text-capitalize px-12 py-4 ma-auto"
            rounded
          >
            <v-icon left class="material-icons">check</v-icon>Enviar
          </v-btn>
        </v-card-actions>
      </form>
    </v-col>
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
  components: {
    ValidationProvider,
  },
  data() {
    return {
      showPassword: false,
      form: {
        name: "",
        email: "",
        phone: "",
        whatsapp: "",
        message: "",
        user_id: "",
      },
    };
  },
  created() {
    if (this.check) {
      console.log("usera active");
    }
    if (this.guest) {
      console.log("usera no/active");
    }
  },
  methods: {
    send() {},
  },
};
</script>
<style>
.inputNumber input[type='number'] {
    -moz-appearance:textfield;
}
.inputNumber input::-webkit-outer-spin-button,
.inputNumber input::-webkit-inner-spin-button {
    -webkit-appearance: none;
}

</style>