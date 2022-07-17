<template>
  <div class="max-w-xs shadow p-4 text-sm">

    <div class="flex justify-between mt-2">
      <h2 class="text-base">Status</h2>
      <p class="p-1 px-2 rounded text-lg font-mono" :class="info.status == 'completed' ? 'bg-green-600 text-white': info.status == 'processing' ? 'bg-pink-400 text-gray-700': 'bg-red-400 text-gray-700'">{{info.status}}</p>
    </div>

    <div class="flex justify-between mt-2">
      <h2 class="text-base">Type</h2>
      <p class="text-lg font-mono" :class="info.type == 'received' ? 'text-green-600': info.type == 'bwr' ? 'text-pink-500': info.type == 'failed' ? 'text-red-800': info.type == 'deposit' ? 'text-pink-500': 'text-blue-700'">{{info.type}}</p>
    </div>

    <div class="flex justify-between mt-2">
      <h2 class="text-base">Commission</h2>
      <p>{{info.commission}}</p>
    </div>

    <div class="flex justify-between mt-2">
      <h2 class="text-base">Amount</h2>
      <p>{{info.currency_code}} {{info.amount}}</p>
    </div>

    <div class="flex justify-between mt-2">
      <h2 class="text-base">Date</h2>
      <p>{{info.created_at}}</p>
    </div>

    <div class="flex justify-between mt-2">
      <h2 class="text-base">Email</h2>
      <p>{{info.email}}</p>
    </div>

    <div class="mt-2">
      <h2 class="text-base">Description</h2>
      <p class="mt-2">{{info.description}}</p>
    </div>

    
  </div>
</template>

<script>
export default {
  props: ["info"]

}
</script>

<style>

</style>