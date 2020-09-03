<template>
  <v-container class="pa-0">
    <base-subheading>On Instagram</base-subheading>

    <v-row>
      <v-col
        v-for="(post, i) in posts"
        :key="i"
        cols="4"
      >
        <base-card
          :href="post.href"
          color="grey lighten-2"
          height="88"
          tag="a"
        >
          <v-img
            v-if="post.src"
            src="https://images.unsplash.com/photo-1518893063132-36e46dbe2428?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=375&q=80"
            height="100%"
          />
        </base-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    components:{
      BaseSubheading: () => import('./base/Subheading'),
      BaseCard: () => import('./base/Card'),
    },
    name: 'Instagram',

    data: () => ({
      posts: [
        { src: 'adventurealtitude.jpg' },
        { src: 'garden.jpg' },
        { src: 'pigduck.jpg' },
        { src: 'rain.jpg' },
        { src: 'spices.jpg' },
        { src: 'sunset.jpg' },
      ],
    }),
  }
</script>
