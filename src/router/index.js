
import { createRouter, createWebHistory } from "vue-router";
import Signin from "@/components/Signin.vue";
import Dashboard from "@/components/Dashboard.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: Dashboard
    },
    {
        path: "/signin",
        name: "Sign in",
        component: Signin
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});


export default router;