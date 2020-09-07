<template>
  <div class="w-100">
      <h2 class="primary--text text-center font-weight-bold">Entrar a Divinas Prepagos</h2>
      <v-form
        ref="form"
        @submit.prevent="login"
        class="mt-8 px-2 px-md-8  w-100 d-flex flex-column justify-center flex-wrap"
      >
        <v-text-field
          v-model="login_form.email_field.value"
          :label="login_form.email_field.label"
          prepend-inner-icon="email"
          dense
          single-line
          :rules="login_form.email_field.rules"
          filled
          style="width: 75%"
          class= "ma-auto"
        ></v-text-field>
        <v-text-field
          v-model="login_form.password_field.value"
          :label="login_form.password_field.label"
          :rules="login_form.password_field.rules"
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
        <v-btn color="white" elevation="0" small class="text-capitalize w-50 ma-auto">Olvido su contraseña?</v-btn>
        <v-checkbox
          class="mt-2 ma-auto mb-0"
          v-model="login_form.remember_check.value"
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
          >Entrar</v-btn>
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
      showPassword: false,
      login_form: {
        email_field: {
          value: "",
          label: "Correo electronico",
          type: "email",
          rules: [
              v => !!v || 'El email es requerido.',
          ]
        },
        password_field: {
          value: "",
          label: "Contraseña",
          type: "password",
          rules: [
              v => !!v || 'La contraseña es requerida.',
          ]
        },
        remember_check: {
          value: false,
        },
      },
    };
  },
  methods: {
      login(){
          if(this.$refs.form.validate()) {
            this.$emit("login", this.login_form);
          }
      }
  },
};
</script>
