import { createApp } from 'vue';
import {createPinia} from "pinia";
import App from './App.vue';
import "./assets/index.css";
import router from './router';

const pinia = createPinia();

createApp(App)
    .use(pinia)     // Pinia state management library
    .use(router)
    .mount('#app')
