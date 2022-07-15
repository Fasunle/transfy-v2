<template>
  <header>
    <nav class="p-4 flex justify-between">

        <div class="flex place-items-center place-content-between">
            <div class="w-8 h-8 p-2 flex place-content-center">
                <img src="../assets/menu-icon.svg" alt="menu icon">
            </div>
            <h1>Transfy</h1>
        </div>
        <ul class="hidden">
            <li>
                <router-link to="/">Dashboard</router-link>
            </li>
            <li>
                <router-link to="/login">Login</router-link>
            </li>
            <li>
                <router-link to="/logout">Logout</router-link>
            </li>
        </ul>
        <div class="w-12 h-12">
            <img class="rounded-full" src="../assets/user.png" alt="Current User">
        </div>
    </nav>
  </header>
</template>

<script>
    export default {
        name: "NavBar"
    }
</script>