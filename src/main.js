import Vue from 'vue'
import VueCompositionAPI, { createApp, h } from '@vue/composition-api'

import App from './App.vue'
import store from './store'
Vue.use(VueCompositionAPI)

console.log('🚀 ~ createApp', createApp)
const app = createApp({
  store,
  render: () => h(App)
})

app.mount('#app')
