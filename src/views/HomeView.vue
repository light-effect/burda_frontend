<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card v-for="post in posts" :key="post.id" class="mb-16">
          <v-card-header><strong>{{ post.title }}</strong></v-card-header>
          <v-card-content>{{ post.content }}</v-card-content>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

import { defineComponent } from 'vue'
import {mapGetters} from 'vuex'

export default defineComponent({
  name: 'HomeView',
  computed: {
    ...mapGetters(['posts']),
  }
});
</script>
