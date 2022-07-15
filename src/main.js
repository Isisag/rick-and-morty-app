import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// createApp(App).use(store).use(router).mount('#app')
// .use(BootstrapVue)


const app = createApp(App)
app.use(store)
app.use(router)
app.mount('#app')





// ====================================
// import Vue from 'vue'
// import App from './App.vue'
// import router from './router'
// import store from './store'

// new Vue({
//     router,
//     store,
//     render: h=> h(App)
// }).mount('#app')