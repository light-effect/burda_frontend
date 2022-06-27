import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import {loadFonts} from './plugins/webfontloader'
import HttpClient from '@/client/HttpClient'

loadFonts()

createApp(App)
    .provide('httpClient', HttpClient)
    .use(router)
    .use(store)
    .use(vuetify)
    .mount('#app')
