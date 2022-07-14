<template>
  <main class="grid grid-cols-1 md:grid-cols-12 md:grid-rows-6 gap-8 p-8">
    <div class="md:col-span-3 md:row-span-full shadow-lg rounded-md py-4 px-8 h-min">
      <UserProfile :user="user"/>
    </div>

    <div class="md:col-start-4 md:row-start-2 md:row-span-full md:col-end-13 shadow-lg rounded-md p-4">
      <h2 class="text-center font-bold text-xl my-4">Transaction History</h2>

      <div class="grid md:grid-cols-2 gap-4">
        <Transaction 
        v-for="tnx in transactions" 
        :key="tnx.id" 
        :account="tnx.account"
        :amount="tnx.amount"
        :type="tnx.type"
        :date="tnx.date"
      />
      </div>
    </div>

    <div class="md:col-start-4 md:col-end-13 shadow-lg rounded-md p-4">
      
    </div>
    
  </main>
</template>

<script>
import Transaction from './Transaction.vue';
import UserProfile from './UserProfile.vue';
import { useUserStore } from "../store";

export default {
  name: "Dashboard",
  components: {
    "Transaction": Transaction,
    "UserProfile": UserProfile
  },
  data(){
    return {
      transactions: [
        {
          id: 1,
          date: "12-06-2022",
          amount: 400,
          account: "1635-624-6743",
          type: "DEPOSIT"
        },
        {
          id: 2,
          date: "12-06-2022",
          amount: 100,
          account: "1635-624-6743",
          type: "WITHDRAWAL"
        },
        {
          id: 3,
          date: "12-06-2022",
          amount: 4000,
          account: "1635-624-6743",
          type: "TRANSFER"
        },
        {
          id: 4,
          date: "12-06-2022",
          amount: 900,
          account: "1635-624-6743",
          type: "DEPOSIT"
        },
      ]
    }
  },
  setup(){
      const store = useUserStore();

      return {
          user: store.user
      }
  }
}
</script>

<style scope>
  main{
    min-height: calc(100vh - 64px);
  }
</style>