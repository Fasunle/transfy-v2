<template>
  <header>
    <nav class="p-4 flex justify-between max-w-screen-lg mx-auto">

        <div class="flex place-items-center place-content-between">
            <div class="w-8 h-8 p-2 flex place-content-center sm:hidden">
                <img v-if="closeMenu" @click="toggle" src="../assets/menu-icon.svg" alt="menu hamburger icon">
                <img v-else @click="toggle" src="../assets/close-icon.svg" alt="close menu icon">
            </div>
            <h1 class="font-semibold text-3xl">Transfy</h1>
        </div>

        <ul class="hidden sm:flex w-1/4 justify-around items-center">
            <li class="p-2">
                <router-link to="/dashboard">Dashboard</router-link>
            </li>
            <li class="p-2" v-if="!isAuthenticated">
                <button @click="login">Login</button>
            </li>
            <li class="p-2" v-else>
                <button @click="logout">Logout</button>
            </li>
        </ul>
        <div class="w-12 h-12">
            <img class="rounded-full" v-if="user" :src="user?.picture" alt="Current User">
            <img class="rounded-full" v-else src="../assets/user.png" alt="No Current User">
        </div>
    </nav>
    <!-- display this on smaller screen -->
    <nav  :class="closeMenu && 'hidden'" class="absolute z-10 inset-0 top-20 bg-gray-50 sm:hidden">
        <ul class="text-center my-4 font-medium">
            <li class="mt-4 p-2">
                <router-link to="/dashboard">Dashboard</router-link>
            </li>
            <li class="mt-4 p-2"  v-if="!isAuthenticated">
                <button @click="login">Login</button>
            </li>
            <li class="mt-4 p-2" v-else>
                <button @click="logout">Logout</button>
            </li>

            <li class="mt-4 p-2">
                <router-link  to="/countries">Countries</router-link>
            </li>

            <li class="mt-4 p-2">
                <router-link  to="/balances">Balances</router-link>
            </li>

            <li class="mt-4 p-2">
                <router-link  to="/orders">Orders</router-link>
            </li>

            <li class="mt-4 p-2">
                <router-link  to="/get-info">Get-Info</router-link>
            </li>
        </ul>
    </nav>
  </header>
</template>

<script>
import { useAuth0 } from '@auth0/auth0-vue';
import { useUserStore } from '@/store/user';

    export default {
        name: "NavBar",
        data(){
            return {
                closeMenu: true
            }
        },
        setup(){

            const {isAuthenticated, loginWithRedirect, logout: logoutUser, user} = useAuth0();
            const store = useUserStore();

            return {
                loginWithRedirect, 
                logoutUser, 
                isAuthenticated,
                user,
                setUserAuth: store.setUserAuthenticated
            }
        },
        methods: {
            toggle(){
                this.closeMenu = !this.closeMenu;
                this.setUserAuth(true);
            },
            login(){
                this.loginWithRedirect();
            },
            logout(){
                this.logoutUser();
                this.setUserAuth(false);
            }
        }
    }
</script>