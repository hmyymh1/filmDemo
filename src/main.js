import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mock from './mock'


import axios from 'axios'
import VueAxios from 'vue-axios'


import BScroll from '@/components/BScroll'
import loading from '@/components/Loading'
import swiper from '@/components/swiper'

createApp(App)
    .use(store)
    .use(router)
    .use(mock)
    .use(VueAxios,axios)
    .component('bScroll',BScroll)
    .component('loading',loading)
    .component('swiper',swiper)
        .mount('#app')
