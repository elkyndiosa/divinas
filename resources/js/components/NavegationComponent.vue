<template>
  <div>
    <nav>
      <div class="container-nav mx-auto">
        <v-app-bar
          fixed
          color="white"
          elevation="1"
          transition="fade-transition"
          class="px-0 px-sm-12 container-nav mx-auto"
          z-index="0"
          clipped-left
          app
        >
          <router-link :to="{name: 'home'}">
            <img
              height="60"
              width="200"
              src="images/logo.jpg"
            />
          </router-link>
          <v-spacer></v-spacer>
<!-- inicio -->
    <v-badge
        :content="favoritiesCount"
        :value="favoritiesCount"
        color="primary"
        overlap
      >
        <v-icon @click="redirectUrl('favorites')" color="red" class="material-icons">favorite</v-icon>
      </v-badge>
      <v-menu
       offset-y
       dark
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon class="material-icons">more_vert</v-icon>
          </v-btn>
        </template>

        <v-list>
          <div v-if="guest">
            <v-list-item
              v-for="(item, index) in manuGuest" :key="index"
              @click="redirectUrlPar(item.redirect)"
            >
              <v-list-item-title><v-icon left class="material-icons">{{item.icon}}</v-icon> {{item.name}}</v-list-item-title>
            </v-list-item>
          </div>
          <div v-if="check">

          <v-list-item
             @click="redirectUrl('dashboard')"
             v-if="isScort"
          >
            <v-list-item-title><v-icon left class="material-icons">dashboard</v-icon>Panel de Control</v-list-item-title>
          </v-list-item>
          <v-list-item
             @click="logout()"
          >
            <v-list-item-title><v-icon left class="material-icons">exit_to_app</v-icon>Salir</v-list-item-title>
          </v-list-item>
          </div>

        </v-list>
      </v-menu>
        </v-app-bar>
      </div>
    </nav>
    <!-- <v-navigation-drawer v-model="menu" v-if="menu" :right="true" absolute temporary dark>
      <v-list dense nav>
        <v-list-item v-if="guest">
          <v-list-item-content>
            <v-list-item-title>No has iniciado session</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
          <v-list-item two-line v-else>
          <v-list-item-avatar class="mr-3">
            <img src="/ninjacontrols/image/user-default.png" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title v-text="user.name"></v-list-item-title>
            <v-list-item-subtitle>{{user.role_id == 1 ? 'Free' : user.role_id == 2 ? 'Premium' : 'Admin'}}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item link @click="redirectUrl('home')" >
          <v-list-item-icon class="mr-3">
            <v-icon class="material-icons">home</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <div v-if="guest">
          <v-list-item  v-for="(item, index) in manuGuest" :key="index" link @click="redirectUrlPar(item.redirect)">
            <v-list-item-icon class="mr-3">
              <v-icon class="material-icons">{{item.icon}}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{item.name}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
           <v-list-item link @click="redirectUrl('dashboard')">
            <v-list-item-icon class="mr-3">
              <v-icon class="material-icons">dashboard</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Panel de control</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </div>
        <div v-else>
          <v-list-item  v-for="(item, index) in manuCheck" :key="index" link @click="redirectUrlPar(item.redirect)">
            <v-list-item-icon class="mr-3">
              <v-icon class="material-icons">{{item.icon}}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{item.name}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

        </div>
      </v-list>
    </v-navigation-drawer> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      menu: false,
      manuGuest: [
        {
          name: 'Entrar',
          redirect: 'login',
          icon: 'login'
        },
        {
          name: 'Registrarse',
          redirect: 'signup',
          icon: 'person_add_alt_1'
        },

      ],
      manuCheck:[
        {
          name: 'Panel de control',
          redirect: 'login',
          icon: 'login'
        },
        {
          name: 'Estadisticas',
          redirect: 'login',
          icon: 'login'
        },
        {
          name: 'Contactar',
          redirect: 'login',
          icon: 'login'
        },
        {
          name: 'Mis publicaciones',
          redirect: 'login',
          icon: 'login'
        },
        {
          name: 'Salir',
          redirect: 'logout',
          icon: 'person_add_alt_1'
        },
      ]
    };
  },
  methods: {
    openMenu() {
      this.menu = true;
    },
    redirectUrl(path) {
      if (this.$router.name !== path || path == "home") {
        this.$router.push({ name: path }).catch(() => {});
      }
    },
    redirectUrlPar(path) {
      if (this.$router.name !== path) {
        this.$router
          .push({ name: "form-user", params: { type: path } })
          .catch(() => {});
      }
    },
  },
  computed: {
    favoritiesCount(){
      return this.$store.state.favorities.length
    }
  },
   mounted() {
    if (localStorage.favorities && localStorage.favorities.length >= 1) {
        this.$store.state.favorities = JSON.parse(localStorage.favorities);
        console.log(this.$store.state.favorities)
    }
   }
};
</script>
<style>
.v-navigation-drawer--close {
  display: none;
}
.v-toolbar__content {
  max-width: 1500px;
  margin: auto;
}
</style>
