<template>
  <div class="shadow-md rounded-md p-8">

    <div class="flex justify-between mt-4">
        <span>Date:</span>
        <span>{{date}}</span>
    </div>

    <div class="flex justify-between mt-4">
        <span>Type:</span>
        <span :class="type == 'DEPOSIT'? 'bg-green-600 p-2  rounded-lg': type == 'WITHDRAWAL'? 'bg-red-600 p-2 rounded-lg': type == 'TRANSFER' ? 'bg-pink-500 p-2 rounded-lg': 'bg-white p-2 rounded-lg' ">{{type}}</span>
    </div>
    <div class="flex justify-between mt-4">
        <span>Amount:</span>
        <span>${{amount}}</span>
    </div>
    <div class="flex justify-between mt-4">
        <span>Account:</span>
        <span>{{account}}</span>
    </div>
  </div>
</template>

<script>
export default {
    name: "Transaction",
    props: ["date", "type", "amount", "account"]
}
</script>

<style>

</style>