<template>
  <main class="grid grid-cols-12 grid-rows-6 gap-8 p-8">
    <div class="col-span-3 row-span-full shadow-lg rounded-md py-4 px-8">
      <h1 class="text-center font-bold text-2xl text-green-400 my-4">User Information</h1>

      <div class="flex justify-between">
        <p>Account Balance</p>
        <span>$90,000</span>
      </div>

      <div class="flex justify-between mt-4">
        <h2>Account Name</h2>
        <p>Kehinde Fasunle</p>
      </div>

      <div class="mt-4">
        <h2 class="text-lg text-emerald-500">Most Recent Transaction</h2>

        <div class="py-2">
          <div class="flex justify-around shadow-md rounded-lg p-2">
            <span class="bg-green-200 rounded-md p-2">DEPOSIT</span>
            <span class=" rounded-sm p-2">$200</span>
          </div>
          <div class="flex justify-around shadow-md rounded-lg p-2">
            <span class="bg-green-200 rounded-md p-2">DEPOSIT</span>
            <span class=" rounded-sm p-2">$200</span>
          </div>
          <div class="flex justify-around shadow-md rounded-lg p-2">
            <span class="bg-green-200 rounded-md p-2">DEPOSIT</span>
            <span class=" rounded-sm p-2">$200</span>
          </div>
        </div>
      </div>
    </div>

    <div class="col-start-4 row-start-2 row-span-full col-end-13 shadow-lg rounded-md p-4">
      <h2 class="text-center font-bold text-xl my-4">Transaction History</h2>

      <div class="grid grid-cols-2 gap-4">
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

    <div class="col-start-4 col-end-13 shadow-lg rounded-md p-4">
      
    </div>
    
  </main>
</template>

<script>
import Transaction from './Transaction.vue'
export default {
  name: "Dashboard",
  components: {
    "Transaction": Transaction
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
  }
}
</script>

<style scope>
  main{
    min-height: calc(100vh - 64px);
  }
</style>