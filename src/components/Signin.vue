<template>
  <div class="container mx-auto px-16 max-w-xl mt-8">
    
    <div class="flex place-content-center bg-black p-4">
      <img src="../assets/logo.png" alt="Logo">
    </div>

    <form class="grid shadow-2xl">

      <div class="mt-4">
        <label class="px-2" for="username">Username</label><br>
        <input 
          class="w-full p-2 mt-2 bg-gray-50" 
          v-model.trim="username"
          id="username"
          placeholder="John Doe"
        />
      </div>

      <div class="mt-4">
        <label class="px-2" for="password">Password</label><br>
        <input 
          class="w-full p-2 mt-2 bg-gray-50" 
          type="password" 
          id="password"
          v-model="password"
          placeholder="******"
        >
      </div>

      <button 
        class="w-full p-4 mt-4 bg-teal-400 text-white" 
        type="submit"
        @click="onSubmit"
      >Signin</button>

    </form>
  </div>
</template>

<script>
export default {
  name: "Signin",
  data(){
    return {
      username: "",
      password: ""
    }
  },
  methods: {
    onSubmit(e){
      e.preventDefault();
      // populate the global data
      console.log(this.$data);
    }
  }
}
</script>

<style>

</style>