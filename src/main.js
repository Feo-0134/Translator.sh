import Vue from 'vue'
import App from './App.vue'
import Video from 'video.js'
import router from './router'
import 'video.js/dist/video-js.css'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false
Vue.prototype.$video = Video

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
