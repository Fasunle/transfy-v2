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


export default {
    components: { Balance },
    setup(){

      const store = useStore();

      const balances = [
        {
            "id": "1",
            "holder_id": "1",
            "name": "KES Wallet",
            "slug": "KES",
            "description": null,
            "balance": "511932",
            "decimal_places": "2",
            "created_at": "2021-07-25 12:29:07",
            "updated_at": "2022-06-19 20:28:08"
        },
        {
            "id": "2",
            "holder_id": "1",
            "name": "NGN Wallet",
            "slug": "NGN",
            "description": null,
            "balance": "105765938",
            "decimal_places": "2",
            "created_at": "2021-07-25 12:29:07",
            "updated_at": "2022-07-01 01:07:46"
        },
        {
            "id": "3",
            "holder_id": "1",
            "name": "RWF Wallet",
            "slug": "RWF",
            "description": null,
            "balance": "0",
            "decimal_places": "2",
            "created_at": "2021-07-25 12:29:07",
            "updated_at": "2022-06-30 14:30:33"
        }
      ];

      store.setBalances(balances);

      return {
        balances: store.balances
      }
    }
}
</script>

<style>

</style>