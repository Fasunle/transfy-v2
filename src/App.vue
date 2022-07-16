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

export default {
  name: 'App',
  components: {
    Home,
    NavBar
  },
  setup(){
    const store = useUserStore();

    // mock user data
    const user = {
                id: "1",
                session_id_status: "logged",
                username: "jagjeet-singh",
                name: "Jagjeet Singh Admin",
                email: "jagjeet@njgraphica.com",
                mobile_number: "8972198798",
                gender: "male",
                date_of_birth: "1994-12-22",
                mobile_number_verified_at: null,
                email_verified_at: "2021-07-02 13:35:42",
                country_name: "Nigeria",
                country_id: "1",
                currency_name: "Nigerian Naira",
                currency_code: "NGN",
                country_code: "NG",
                is_suspended: "no",
                created_at: "2019-04-09 23:34:50",
                updated_at: "2022-07-06 15:56:50"
            }
    // update the app state
    // this should be done in the submit button handler on the login page
    store.loginUser(user);

    return {
      store
    }
  }
}
</script>

<style>
#app {}
</style>
