<template>
  <v-navigation-drawer
    id="core-navigation-drawer"
    v-model="drawer"
    dark
    src="/images/background-drawer.jpeg"
    app
    permanent
    clipped
    :expand-on-hover="$vuetify.breakpoint.mdAndUp"
    :mini-variant="!$vuetify.breakpoint.mdAndUp"
    width="300"
  >
    <template v-slot:img="props">
      <v-img
        :gradient="`to bottom, ${barColor}`"
        v-bind="props"
      />
    </template>

    <v-divider class="mb-1" />

    <v-list
      dense
      nav
    >
      <v-list-item class="pl-0">
        <v-list-item-avatar
          class="align-self-center"
          color="white"
        >
          <v-img
            :src="'/uploads/images/'+user.image_profile"
            width="100%"
            height="100%"
            contain
          />
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title
            class="text-subtitle-1"
            v-text="user.name"
          />
        </v-list-item-content>

      </v-list-item>
    </v-list>

    <v-divider class="mb-2" />

    <v-list
        dense

      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :to="item.to"
          class="pl-0"
        >
          <v-list-item-icon>
            <v-icon class="material-icons">{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

  </v-navigation-drawer>
</template>

<script>

  export default {
    props: {
      expandOnHover: {
        type: Boolean,
        default: false,
      },
    },

    data: () => ({
      mini: false,
      items: [
        {
          title: 'Estadisticas',
          icon: 'dashboard',
          to: '/dashboard',
        },
        {
          title: 'Cuenta',
          icon: 'account_circle',
          to: '/account',
        },
        {
          title: 'Anuncios',
          icon: 'campaign',
          to: '/publications',
        },
        {
          title: 'Imagenes',
          icon: 'collections',
          to: '/images/upload',
        },
        {
          title: 'Videos',
          icon: 'video_library',
          to: '/videos',
        },

      ],
        barColor: 'rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)',
        barImage: 'https://demos.creative-tim.com/material-dashboard/assets/img/sidebar-1.jpg',
        drawer: true,
    }),

    computed: {

      computedItems () {
        return this.items
      },
      profile () {
        return {
          avatar: true,
          title: 'tesxt prefil',
        }
      },
    },

    methods: {

    },
  }
</script>

<style lang="sass">
  @import '~vuetify/src/styles/tools/_rtl.sass'

  #core-navigation-drawer
    .v-list-group__header.v-list-item--active:before
      opacity: .24

    .v-list-item
      &__icon--text,
      &__icon:first-child
        justify-content: center
        text-align: center
        width: 20px

        +ltr()
          margin-right: 24px
          margin-left: 12px !important

        +rtl()
          margin-left: 24px
          margin-right: 12px !important

    .v-list--dense
      .v-list-item
        &__icon--text,
        &__icon:first-child
          margin-top: 10px

    .v-list-group--sub-group
      .v-list-item
        +ltr()
          padding-left: 8px

        +rtl()
          padding-right: 8px

      .v-list-group__header
        +ltr()
          padding-right: 0

        +rtl()
          padding-right: 0

        .v-list-item__icon--text
          margin-top: 19px
          order: 0

        .v-list-group__header__prepend-icon
          order: 2

          +ltr()
            margin-right: 8px

          +rtl()
            margin-left: 8px
</style>
