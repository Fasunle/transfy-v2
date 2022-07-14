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
      <span>{{store.user.username}}</span>
      <div class="ml-4">
        <img class="w-16 h-16 rounded-full p-4" src="./assets/user.png" alt="User">
      </div>
    </div>
  </nav>
  <router-view/>
</template>

<script>

import {useUserStore} from "./store";

export default {
  name: 'App',
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
