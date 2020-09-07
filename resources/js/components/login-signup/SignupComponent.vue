<template>
  <div class="w-100">
      <h2 class="primary--text text-center font-weight-bold">Crear Cuenta</h2>
      <v-form
        ref="form"
        @submit.prevent="register"
        class="mt-8 px-2 px-md-8 w-100 d-flex flex-column justify-center flex-wrap"
      >
        <v-text-field
            v-model="singup_form.name_field.value"
            label="Nombre"
            prepend-inner-icon="person"
            :rules="singup_form.name_field.rules"
            dense
            single-line
            filled
            style="width: 75%"
            class="ma-auto"
        ></v-text-field>
        <v-text-field
            v-model="singup_form.email_field.value"
            :rules="singup_form.email_field.rules"
            label="Correo electronico"
            prepend-inner-icon="email"
            dense
            single-line
            filled
            style="width: 75%"
            class="ma-auto"
        ></v-text-field>
        <v-text-field
            v-model="singup_form.password_field.value"
            :rules="singup_form.password_field.rules"
            label="Contraseña"
            prepend-inner-icon="lock"
            :append-icon="showPassword ? 'visibility' : 'visibility_off'"
            :type="showPassword ? 'text' : 'password'"
            @click:append="showPassword = !showPassword"
            single-line
            filled
            dense
            style="width: 75%"
            class="ma-auto"
        ></v-text-field>
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
            type="submit"
            :disabled="sending"
            :loading="sending"
            large
            class="text-capitalize px-12 py-4 ma-auto"
            rounded
          ><v-icon left class="material-icons">check</v-icon>Registrarse</v-btn>
        </v-card-actions>
      </v-form>
  </div>
</template>
<script>
export default {
  props: {
      sending: Boolean
  },
  data() {
    return {
        items:[{'label': 'Visitante', 'value': 3},{'label': 'Quiero publicar', 'value': 2}],
        showPassword: false,
        singup_form: {
            name_field: {
                value: "",
                type: "text",
                rules: [
                    v => !!v || 'El nombre es requerido.',
                    v => v.length <= 64 || 'El nombre debe ser de 64 caracteres maximo.',
                ]
            },
            email_field: {
                value: "",
                type: "email",
                rules: [
                    v => !!v || 'El email es requerido.',
                    v => v.length <= 64 || 'El email debe ser de 64 caracteres maximo.',
                    v => /.+@.+\..+/.test(v) || 'Ingrese un email valido.',
                ]
            },
            password_field: {
                value: "",
                type: "password",
                rules: [
                    v => !!v || 'La contraseña es requerida.',
                    v => v.length >= 8 || 'La contraseña debe ser de almenos 8 caracteres.'
                ]
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
            if(this.$refs.form.validate()) {
                this.$emit("register", this.singup_form);
            }
      }
  },
};
</script>
