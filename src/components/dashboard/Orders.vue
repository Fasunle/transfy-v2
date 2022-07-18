<template>
  <div class="p-4 md:pb-16">
    <h1 class="text-center text-3xl font-sans font-medium my-4">Orders</h1>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4 overflow-auto justify-center">
      <Order
        v-for="order in orders"
        :key="order.id"
          :order="order"
      />
    </div>
  </div>
</template>

<script>
import { useStore } from '@/store';
import data from "../../data.json";
import Order from "./Order.vue";


export default {
    components: { Order },
    setup(){

      const store = useStore();

      const orders = data.orders;
      store.setOrders(orders);

      return {
        orders: store.orders
      }
    }
}
</script>

<style>

</style>