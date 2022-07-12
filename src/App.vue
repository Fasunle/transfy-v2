<template>
  <nav class="bg-teal-500 flex px-4 justify-between items-center">
    <h1 class="text-black text-3xl font-bold">Transfy</h1>
    <ul class="flex">
      <li class="bg-yellow-400 p-2 rounded-lg">
        <router-link to="/">Dashboard</router-link>
      </li>
      <li class="ml-4 bg-yellow-400 p-2 rounded-lg">
        <router-link to="/signin">Sign In</router-link>
      </li>
    </ul>

    <div class="flex items-center justify-center">
      <span>John Doe</span>
      <div class="ml-4">
        <img class="w-16 h-16 rounded-full p-4" src="./assets/user.png" alt="User">
      </div>
    </div>
  </nav>
  <router-view/>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
#app {}
</style>
