import { createApp } from 'vue';
import {createPinia} from "pinia";
import { createAuth0 } from '@auth0/auth0-vue';
import App from './App.vue';
import "./assets/index.css";
import router from './router';

const pinia = createPinia();
const auth = createAuth0({
    domain: process.env.VUE_APP_AUTH_DOMAIN,
    client_id: process.env.VUE_APP_CLIENT_ID,
    redirect_uri: window.location.origin
});

createApp(App)
    .use(auth)
    .use(pinia)     // Pinia state management library
    .use(router)
    .mount('#app')
