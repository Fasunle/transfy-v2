<template>
  <div class="max-w-xs shadow p-4 text-sm">

    <div class="flex justify-between mt-2">
      <h2 class="text-base">Status</h2>
      <p class="p-1 px-2 rounded text-lg font-mono" :class="order.status == 'completed' ? 'bg-green-600 text-white': order.status == 'processing' ? 'bg-pink-400 text-gray-700': 'bg-red-400 text-gray-700'">{{order.status}}</p>
    </div>

    <div class="flex justify-between mt-2">
      <h2 class="text-base">Type</h2>
      <p class="text-lg font-mono" :class="order.type == 'received' ? 'text-green-600': order.type == 'bwr' ? 'text-pink-500': order.type == 'failed' ? 'text-red-800': order.type == 'deposit' ? 'text-pink-500': 'text-blue-700'">{{order.type}}</p>
    </div>

    <div class="flex justify-between mt-2">
      <h2 class="text-base">Commission</h2>
      <p>{{order.commission}}</p>
    </div>

    <div class="flex justify-between mt-2">
      <h2 class="text-base">Amount</h2>
      <p>{{order.currency_code}} {{order.amount}}</p>
    </div>

    <div class="flex justify-between mt-2">
      <h2 class="text-base">Date</h2>
      <p>{{order.created_at}}</p>
    </div>

    <div class="flex justify-between mt-2">
      <h2 class="text-base">Email</h2>
      <p>{{order.email}}</p>
    </div>

    <div class="mt-2">
      <h2 class="text-base">Description</h2>
      <p class="mt-2">{{order.description}}</p>
    </div>

    
  </div>
</template>

<script>
export default {
  props: ["order"]

}
</script>

<style>

</style>