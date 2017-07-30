import Vue from 'vue';
import App from './App.vue';

window.ColorThemeEditor = (settings)=>{
    new Vue({
        el: '#app',
        render: h => h(App, {
            props:{ settings: settings }
        })
    });
};
