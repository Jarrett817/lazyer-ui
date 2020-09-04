// 先引入样式，后引入组件
import './lib/banana.scss'
import './index.scss'
import { createApp } from 'vue'
import App from './App.vue'

import { router } from './router'


const app=createApp(App)
app.use(router)
app.mount('#app')


