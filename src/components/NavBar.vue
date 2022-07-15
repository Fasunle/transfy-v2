<template>
  <header>
    <nav class="p-4 flex justify-between max-w-screen-lg mx-auto">

        <div class="flex place-items-center place-content-between">
            <div class="w-8 h-8 p-2 flex place-content-center sm:hidden">
                <img v-if="closeMenu" @click="toggle" src="../assets/menu-icon.svg" alt="menu hamburger icon">
                <img v-else @click="toggle" src="../assets/close-icon.svg" alt="close menu icon">
            </div>
            <h1>Transfy</h1>
        </div>

        <ul class="hidden sm:flex w-2/3 justify-around items-center">
            <li class="p-2">
                <router-link to="/">Dashboard</router-link>
            </li>
            <li class="p-2">
                <router-link to="/login">Login</router-link>
            </li>
            <li class="p-2">
                <router-link to="/logout">Logout</router-link>
            </li>
        </ul>
        <div class="w-12 h-12">
            <img class="rounded-full" src="../assets/user.png" alt="Current User">
        </div>
    </nav>
    <!-- display this on smaller screen -->
    <nav  :class="closeMenu && 'hidden'">
        <ul class="text-center my-4 font-medium sm:hidden">
            <li class="mt-4 p-2">
                <router-link to="/">Dashboard</router-link>
            </li>
            <li class="mt-4 p-2">
                <router-link to="/login">Login</router-link>
            </li>
            <li class="mt-4 p-2">
                <router-link to="/logout">Logout</router-link>
            </li>
        </ul>
    </nav>
  </header>
</template>

<script>
    export default {
        name: "NavBar",
        data(){
            return {
                closeMenu: false
            }
        },
        methods: {
            toggle(){
                this.closeMenu = !this.closeMenu;
            }
        }
    }
</script>