<template>
  <NavBar />
  <main class="flex gap-4 flex-col sm:flex-row items-center sm:items-start">
    <Home class="hidden sm:block" />
    <div class="w-full">
      <router-view/>
    </div>

    <div class="place-self-center place-items-center p-4 mx-auto hidden">
      <h1 class="text-center  text-3xl font-serif font-semibold">Please Login to view your dashboard</h1>
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
      user: store.user,
      userAuth: store.userAuth
    }
  }
}
</script>

<style>
#app {}

/* 
 * https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_hide_scrollbar_keep_func
*/

 /* Hide scrollbar for Chrome, Safari and Opera */
.hide-scrollbar::-webkit-scrollbar {
    display: none;
}

.hide-scrollbar{
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
</style>
