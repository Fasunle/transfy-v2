<template>
  <div class="p-4">
    <h1 class="text-center text-3xl font-sans font-medium my-4">Balances</h1>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-2 overflow-auto justify-center">
      <Balance
        v-for="balance in balances"
        :key="balance.id"
        :balance="balance"
      />
    </div>
  </div>
</template>

<script>
import { useStore } from '@/store';
import Balance from "./Balance.vue";
import data from "../../data.json";


export default {
    components: { Balance },
    setup(){

      const store = useStore();

      const balances = data.balances;

      store.setBalances(balances);

      return {
        balances: store.balances
      }
    }
}
</script>

<style>

</style>