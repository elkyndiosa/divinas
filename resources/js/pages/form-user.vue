<template>
      <v-container class="full-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" md="9">
            <v-card
              style="overflow: hidden;"
              class="rounded-xl pa-0 d-flex justify-center flex-nowrap card-login"
              elevation="4"
              min-height="550"
            >
              <div class="icon-login d-none d-md-flex justify-center flex-nowrap align-items-center ">
                <v-img
                  width="30"
                  src=""
                ></v-img>
                <h3 class="text-caption white--text mb-0">DivinasPrepagos</h3>
              </div>
              <transition name="slide-text" mode="out-in">

              <v-col
                cols="5"
                height="100%"
                width="100%"
                max-width="100%"
                v-if="efect == false"
                class="py-0 px-4 d-none d-md-flex flex-column justify-center align-items-center text-center white--text"
              >
                <h4 class="w-100 text-h4 font-weight-bold mb-7" v-text="textTitle"></h4>
                <p class="w-100 ma-0 mb-8" v-text="textParr"></p>
                <v-btn
                  color="white"
                  outlined
                  dark
                  large
                  class="text-capitalize px-10 py-4"
                  rounded
                  @click="changeForm()"
                  v-text="textBtn"
                ></v-btn>
              </v-col>
              </transition>
              <v-col
                cols="12" md="7"
                class="rounded-0 px-0 py-6 px-md-8 py-md-8 white d-flex flex-column justify-center flex-wrap align-items-center"
                max-width="100%"
              >
                <transition name="slide-login" mode="out-in">
                  <login-component :sending="busy" v-if="formLogin" @login="login"></login-component>
                </transition>
                <transition name="slide-signup" mode="out-in">
                  <signup-component :sending="busy" v-if="formSignup" @register="register"></signup-component>
                </transition>
              </v-col>
              <v-btn
                  elevation="0"
                  color="white"
                  absolute
                  light
                  small
                  bottom
                  right
                  class="text-capitalize w-auto black--text d-block d-md-none font-weight-bold mr-8"
                  @click="changeForm()"
                >{{textBtn}}<v-icon right class="material-icons">arrow_forward</v-icon></v-btn>
            </v-card>
          </v-col>
        </v-row>
        <v-snackbar v-model="snackbar" :timeout="6000">
            {{ errorServer }}
            <template>
                <v-btn color="pink" text @click="snackbar = false">Close</v-btn>
            </template>
        </v-snackbar>
    </v-container>
</template>

<script>
import LoginComponent from "../components/login-signup/LoginComponent.vue";
import SignupComponent from "../components/login-signup/SignupComponent.vue";

export default {
  components: {
    LoginComponent,
    SignupComponent,
  },
  props: ["type"],
  name: "login-form",
  data: () => ({
    busy: false,
    errorServer: "",
    snackbar: false,
    formLogin: true,
    formSignup: false,
    textTitle: 'Bienvenido de nuevo',
    textParr: 'Inicie sesión con su información personal.',
    textBtn: 'Registrarse',
    efect: false
  }),
  mounted() {
      if(this.type != 'login'){
        this.changeForm();
      }else{
        this.formLogin=false
        this.changeForm();
      }
  },
  methods: {
    changeForm(){
      if(this.formLogin){
        this.formLogin = false;
        this.efect = true;
        
        setTimeout(() => {
          this.efect = false;
          this.formSignup = true;
          this.textTitle= 'Hola, Amigo!',
          this.textParr= 'Introduce tus datos personales y empieza el viaje con nosotros',
          this.textBtn= 'Entrar'
        }, 500);
      }else{
        this.formSignup = false;
        this.efect = true;
        setTimeout(() => {
          this.efect = false;
          this.formLogin = true;
          this.textTitle= 'Bienvenido de Nuevo',
          this.textParr= 'Inicie sesión con su información personal.',
          this.textBtn= 'Registrarse'
        }, 500);
      }
    },
    async login(loginData) {
        this.busy = true
        let url = "/login";
        let formData = new FormData();
        formData.append("email", loginData.email_field.value);
        formData.append("password", loginData.password_field.value);
        formData.append("remember", loginData.remember_check);
        try {
            let response = await axios.post(url, formData)
            location.href = "/dashboard";
        } catch(error){
          this.errorServer = "Incorrect data, please check!";
          this.snackbar = true;
          console.log(error.response.data);
          this.busy = false
        };
    },
    async register(signupData) {
        this.busy = true
        let url = "/register";
        let formData = new FormData();
        formData.append("name", signupData.name_field.value);
        formData.append("email", signupData.email_field.value);
        formData.append("password", signupData.password_field.value);
        formData.append("type", signupData.type.value);
        try {
            let response = await axios.post(url, formData)
            location.href = "/dashboard";
        } catch(error) {
          this.errorServer = "Incorrect data, please check!";
          this.snackbar = true;
          console.log(error.response);
          this.busy = false
        };
    },
  },
};
</script>
<style>
.card-login {
  background-image: url("https://images.unsplash.com/photo-1518893063132-36e46dbe2428?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=375&q=80");
  background-color: transparent;
  background-position: left;
  background-repeat: no-repeat;
  background-size: 50% 100%;
  height: 100%;
  width: 100%;
  margin-top: 50px !important;
}
@media only screen and (min-width: 1450px) {
  .card-login {
    margin-top: 30% !important;
  }

}
@media only screen and (max-width: 550px) {
  .card-login {
    margin-top: 10px !important;
    left: 0px;
    background-image: none;
    }

}
.icon-login {
  position: absolute;
  top: 10px;
  left: 10px;
}
.v-input--selection-controls .v-input__slot > .v-label {
  margin-bottom: 0px !important;
}
/* STYLES FOR EFECTS */
.slide-login-enter-active, .slide-login-leave-active, .slide-signup-enter-active,
.slide-signup-leave-active, .slide-text-enter-active, .slide-text-leave-active{
  transition: all .5s;
}
.slide-login-leave-to{
  transform: translateX(-100px);
  opacity: 0;
}
.slide-signup-enter, .slide-login-enter{
  transform: translateX(100px);
  opacity: 0;
}
.slide-login-enter-to, .slide-login-leave{
  opacity: 1;
}
.slide-signup-leave-to{
  transform: translateX(-100px);
  opacity: 0;
}
.slide-signup-enter-to, .slide-signup-leave{
  opacity: 1;
}
.slide-text-leave-to{
  transform: translateX(-50px);
  opacity: 0;
}
.slide-text-enter{
  transform: translateX(50px);
  opacity: 0;
}
.slide-text-enter-to, .slide-text-leave{
  opacity: 1;
}

</style>
