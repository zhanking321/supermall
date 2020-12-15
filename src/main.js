import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mitt from 'mitt'
import FastClick from 'fastclick'

const app = createApp(App)
app.use(router).use(store).mount('#app')

// 事件总线
app.config.globalProperties.$bus = new mitt()

// 解决移动端300ms点击延迟
FastClick.attach(document.body)