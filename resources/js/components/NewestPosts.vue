<template>
  <v-container class="pa-0">
    <base-subheading>Newest Blog Posts</base-subheading>

    <v-row
      v-for="(article, i) in articles.slice(11, 14)"
      :key="i"
      align="center"
      class="mb-2"
    >
      <v-col
        class="d-flex"
        cols="12"
      >
        <v-img
          src="https://images.unsplash.com/photo-1518893063132-36e46dbe2428?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=375&q=80"
          class="mr-3"
          height="36"
          max-width="36"
        />

        <div>
          <div class="subheading">
            Article Title
          </div>

          <div class="caption">
            Date
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  // Utilities
var articles= require('./data/articles.json');


  export default {
    components:{
      BaseSubheading: () => import('./base/Subheading'),
    },
    name: 'NewestPosts',
    data: () => ({
      articles: articles
    }),

    computed: {},
  }
</script>
