import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import eComponents from './components/swiper/index'

createApp(App)
  .use(router)
  // .use(eComponents)
  .mount('#app')
