
import { createRouter, createWebHistory } from "vue-router";
import Signin from "@/components/Signin.vue";
import Balances from "@/components/dashboard/Balances.vue";
import Countries from "@/components/dashboard/Countries.vue";
import Orders from "@/components/dashboard/Orders.vue";
import GetInfo from "@/components/dashboard/GetInfo.vue";
import Dashboard from "@/components/dashboard";

const routes = [
    {
        path: "/signin",
        name: "Sign in",
        component: Signin
    },
    {
        path: "/dashboard",
        alias: "/",
        name: "Dashboard",
        component: Dashboard
    },
    {
        path: "/countries",
        name: "Countries",
        component: Countries
    },
    {
        path: "/orders",
        name: "Orders",
        component: Orders
    },
    {
        path: "/get-info",
        name: "Get Info",
        component: GetInfo
    },
    {
        path: "/balances",
        name: "Balances",
        component: Balances
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});


export default router;