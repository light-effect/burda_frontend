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
          <v-card-title>Sign in</v-card-title>

          <v-card-text>
            <v-form>
              <v-text-field v-model="user.email" :disabled="disabled" label="E-mail" required/>

              <v-text-field type="password" :disabled="disabled" v-model="user.password"
                            label="Password" required/>

              <v-btn class="mr-4" color="success" :disabled="disabled" @click="submit">Sign in</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

import httpClient from '@/client/httpClient'
import {mapActions} from 'vuex'
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'SignIn',
  inject: ['httpClient'],
  data() {
    return {
      disabled: false,
      popup: null,
      user: {
        email: null,
        password: null,
      }
    };
  },
  methods: {
    ...mapActions(['setUser']),
    submit() {
      this.disabled = true;

      this.httpClient.post('/login', this.user).then(response => {
        this.setUser(response.data);

        this.popup = {
          show: true,
          message: 'Success',
          type: 'success',
          color: 'green',
        }

        setTimeout(() => window.location.href = '/', 3000);
      }).catch(exception => {
        this.popup = {
          show: true,
          message: exception,
          type: 'error',
          color: 'red',
        };

        this.disabled = false;

        setTimeout(() => this.popup.show = false, 3000);
      });
    }
  }
});
</script>
