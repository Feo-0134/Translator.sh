import Vue from 'vue'
import App from './App.vue'
import Video from 'video.js'
import 'video.js/dist/video-js.css'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false
Vue.prototype.$video = Video

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
