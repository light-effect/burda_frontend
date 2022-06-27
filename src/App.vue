<template>
  <v-app>
    <v-app-bar color="primary">
      <v-app-bar-title>Burda</v-app-bar-title>

      <v-spacer></v-spacer>

      <v-btn href="/">
        Home
      </v-btn>
      <v-btn v-if="user === null" href="/sign-in">
        Sign-in
      </v-btn>
      <v-btn v-if="user === null" href="/sign-up">
        Sign-Up
      </v-btn>

      <v-btn v-if="user !== null" href="/create-post">
        Create post
      </v-btn>
      <v-btn v-if="user !== null" @click="logout">
        Logout
      </v-btn>
    </v-app-bar>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

import {mapActions, mapGetters} from 'vuex'
import PostService from '@/service/PostService'

export default {
  name: 'App',
  inject: ['httpClient'],
  computed: {
    ...mapGetters(['user', 'posts']),
  },
  methods: {
    ...mapActions(['setUser', 'setPosts']),
    logout() {
      this.httpClient.get('/logout').then(() => this.setUser(null));
    }
  },
  async mounted() {
    if (this.user === null) {
      this.httpClient.get('/user').then(response => {
        if (response.data.user !== null) {
          this.setUser(response.data)
        }
      });
    }

    if (this.posts.length === 0) {
      const postService = new PostService(this.httpClient);

      this.setPosts(await postService.getPosts());

    }
  }
}
</script>
