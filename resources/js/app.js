require('./bootstrap');
window.Vue = require('vue').default;

/**
 * npm install laravel-mix@latest
 * npm install axios --save
 * npm install --save-dev vue@2
 * npm install vue-template-compiler vue-loader@^15.9.5 --save-dev --legacy-peer-deps
 * npm run dev
 * npm run watch
 */

Vue.component('example-component', require('./components/ExampleComponent.vue').default);

const app = new Vue({
    el: '#app',
});