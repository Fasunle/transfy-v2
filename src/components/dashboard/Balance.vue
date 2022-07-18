<template>
  <div class="max-w-xs shadow p-4 text-sm">

    <div class="flex justify-between items-center mt-2">
      <h2 class="text-base">Wallet Name</h2>
      <p class="font-mono font-light text-sm">{{balance.name}}</p>
    </div>

    <div class="flex justify-between items-center mt-2">
      <h2 class="text-base">Balance</h2>
      <p class="text-lg font-mono p-1 px-2 text-center rounded text-gray-600" :class="balance.balance >= 1000000 ? 'bg-green-400': balance.balance >= 500000 ? 'bg-blue-200': balance.balance >= 250000 ? 'bg-pink-500': 'bg-red-400'">{{balance.slug}} {{balance.balance}}</p>
    </div>

    <div class="flex justify-between items-center mt-2">
      <h2 class="text-base">Created At</h2>
      <p>{{balance.created_at}}</p>
    </div>

    <div class="flex justify-between items-center mt-2">
      <h2 class="text-base">Updated At</h2>
      <p>{{balance.updated_at}}</p>
    </div>
    
    <div class="mt-2" v-if="balance.description">
      <h2 class="text-base">Description</h2>
      <p class="mt-2">{{balance.description}}</p>
    </div>

    
  </div>
</template>

<script>
export default {
  props: ["balance"]

}
</script>

<style>

</style>