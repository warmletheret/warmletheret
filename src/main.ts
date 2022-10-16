/*
 * @Author: HopeNotDead 869132116@qq.com
 * @Date: 2022-10-16 23:18:59
 * @LastEditors: HopeNotDead 869132116@qq.com
 * @LastEditTime: 2022-10-17 00:42:35
 * @FilePath: \warmletheret\src\main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import './utils/rem'
// import eComponents from './components/swiper/index'

createApp(App)
  .use(router)
  // .use(eComponents)
  .mount('#app')
