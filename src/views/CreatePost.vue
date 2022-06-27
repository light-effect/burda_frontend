<template>
  <v-container>
    <v-row>
      <v-col>
        <v-alert v-if="popup !== null" :value="popup.show" :color="popup.color" :type="popup.type" transition="scale-transition">
          {{ popup.message }}
        </v-alert>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col xs="12" sm="12" md="12" lg="6" xl="6">
        <v-card>
          <v-card-title>Create post</v-card-title>

          <v-card-text>
            <v-form>
              <v-text-field v-model="post.title" :disabled="disabled" label="Title" required/>

              <v-textarea v-model="post.content" :disabled="disabled" label="Content" required></v-textarea>

              <v-btn class="mr-4" color="success" :disabled="disabled" @click="submit">Submit</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

import httpClient from '@/client/httpClient'
import {defineComponent} from 'vue'
import PostService from '@/service/PostService'

export default defineComponent({
  name: 'CreatePost',
  inject: ['httpClient'],
  data() {
    return {
      disabled: false,
      popup: null,
      post: {
        title: null,
        content: null,
      }
    };
  },
  methods: {
    async submit() {
      this.disabled = true;

      const postService = new PostService(this.httpClient);
      const result = await postService.createPost(this.post);

      if (result === true) {
        this.popup = {
          show: true,
          message: 'Success',
          type: 'success',
          color: 'green',
        }

        setTimeout(() => window.location.href = '/', 3000);

        return;
      }

      this.popup = {
        show: true,
        message: 'Cant create post',
        type: 'error',
        color: 'red',
      };

      this.disabled = false;

      setTimeout(() => this.popup.show = false, 3000);
    }
  }
});
</script>
