<template>
  <NavBar />
  <main class="flex gap-4 flex-col sm:flex-row items-center sm:items-start">
    <Home class="hidden sm:block" />
    <div class="w-full">
      <router-view/>
    </div>

  </main>
</template>

<script>

import {useUserStore} from "./store/user";
import Home from "./components/Home.vue";
import NavBar from "./components/NavBar.vue";
import data from "./data.json";


export default {
  name: 'App',
  components: {
    Home,
    NavBar
  },
  setup(){
    const store = useUserStore();

    // mock user data
    const user = data.login;
    // update the app state
    // this should be done in the submit button handler on the login page
    store.loginUser(user);

    return {
      user: store.user
    }
  }
}
</script>

<style>
#app {}
</style>
