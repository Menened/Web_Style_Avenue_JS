import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

// Импорт глобальных стилей
import './assets/style.css'

// Импорт компонентов страниц
import Home from './views/Home.vue'
import About from './views/About.vue'
import Location from './views/Location.vue'
import Table from './views/Table.vue'
import Store from './views/Store.vue'

// Настройка маршрутизации
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/location', component: Location },
    { path: '/table', component: Table },
    { path: '/store', component: Store }
  ]
})

// Создание и монтирование приложения
const app = createApp(App)
app.use(router)
app.mount('#app') 