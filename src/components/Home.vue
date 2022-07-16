<template>
  <aside>
      <nav>
        <ul class="sidebar pl-4 pt-16 w-32 flex flex-col h-64 justify-start items-center text-gray-600">

          <li class="p-2 mt-2 bg-yellow-300 hover:bg-yellow-400 w-full rounded-md"><router-link to="/dashboard">Dashboard</router-link></li>

          <li class="p-2 mt-2 bg-yellow-300 hover:bg-yellow-400 w-full rounded-md"><router-link  to="/countries">Countries</router-link></li>

          <li class="p-2 mt-2 bg-yellow-300 hover:bg-yellow-400 w-full rounded-md"><router-link  to="/balances">Balances</router-link></li>

          <li class="p-2 mt-2 bg-yellow-300 hover:bg-yellow-400 w-full rounded-md"><router-link  to="/orders">Orders</router-link></li>

          <li class="p-2 mt-2 bg-yellow-300 hover:bg-yellow-400 w-full rounded-md"><router-link  to="/get-info">Get-Info</router-link></li>
        </ul>
      </nav>
    </aside>
</template>


<script>
export default {
    name: "Home"
}
</script>

<style scoped>
  .sidebar{
    min-height: calc(100vh - 80px);
  }
</style>