import Vue from 'vue'
import App from './app.vue'

// let app1 = new Vue({
//     el: '.app',
//     data: {
//         name: 'TypeScript'
//     },
//     template: `<h1>Hello {{ name }}</h1>`
// });

// let app2 = new Vue({
//     el: '.app',
//     components: {
//         Hello
//     },
//     template: `<hello />`
// });

new Vue(App).$mount('#app')
