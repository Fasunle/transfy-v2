<template>
  <div class="p-4 md:pb-16">
    <h1 class="text-center text-3xl font-sans font-medium my-4">Information</h1>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4 overflow-auto justify-center">
      <Info
        v-for="info in infos"
        :key="info.id"
        :info="info"
      />
    </div>
  </div>
</template>

<script>
  import { useStore } from '@/store';
  import Info from './Info.vue';


  export default {
      components: { Info },
      setup() {
          const store = useStore();
          // fetch data from API
          const info_obj = {
              "0": {
                  "id": "17",
                  "ip": "127.0.0.1",
                  "country_id": "2",
                  "currency_code": "KES",
                  "description": "Deposit of  500.00 credits from Bank Transfer Payment",
                  "user_id": "1",
                  "email": "jagjeet@njgraphica.com",
                  "amount": "500.00",
                  "commission": "0.00",
                  "status": "completed",
                  "type": "deposit",
                  "created_at": "2021-08-09 04:55:59",
                  "updated_at": "2021-08-09 04:55:59"
              },
              "1": {
                  "id": "18",
                  "ip": "127.0.0.1",
                  "country_id": "2",
                  "currency_code": "KES",
                  "description": "KES  100.00 into KES 100 was withdrawn to 8799878799 - , Kenya Commercial Bank Limited",
                  "user_id": "1",
                  "email": "jagjeet@njgraphica.com",
                  "amount": "100.00",
                  "commission": "10.00",
                  "status": "processing",
                  "type": "bwr",
                  "created_at": "2021-08-09 04:56:42",
                  "updated_at": "2021-08-09 04:56:42"
              },
              "2": {
                  "id": "19",
                  "ip": "127.0.0.1",
                  "country_id": "2",
                  "currency_code": "KES",
                  "description": "KES  110.00 into KES 110 was withdrawn to 8799878799 - , Kenya Commercial Bank Limited",
                  "user_id": "1",
                  "email": "jagjeet@njgraphica.com",
                  "amount": "110.00",
                  "commission": "11.00",
                  "status": "completed",
                  "type": "bwr",
                  "created_at": "2021-08-09 04:58:05",
                  "updated_at": "2021-08-28 19:48:48"
              },
              "3": {
                  "id": "20",
                  "ip": "127.0.0.1",
                  "country_id": "2",
                  "currency_code": "KES",
                  "description": "KES  101.00 into KES 101 was withdrawn to 446556465 - , Kenya Commercial Bank Limited",
                  "user_id": "1",
                  "email": "jagjeet@njgraphica.com",
                  "amount": "101.00",
                  "commission": "10.10",
                  "status": "completed",
                  "type": "bwr",
                  "created_at": "2021-08-09 05:03:42",
                  "updated_at": "2021-08-28 19:48:37"
              },
              "4": {
                  "id": "21",
                  "ip": "127.0.0.1",
                  "country_id": "2",
                  "currency_code": "KES",
                  "description": "Deposit of  1,001.00 credits from Bank Transfer Payment",
                  "user_id": "1",
                  "email": "jagjeet@njgraphica.com",
                  "amount": "1001.00",
                  "commission": "0.00",
                  "status": "completed",
                  "type": "deposit",
                  "created_at": "2021-08-09 05:07:50",
                  "updated_at": "2021-10-06 14:19:44"
              },
              "5": {
                  "id": "25",
                  "ip": "154.28.188.240",
                  "country_id": "1",
                  "currency_code": "NGN",
                  "description": "Received of amount  400.00 from Emmanuel Ogidi (partner@swap.ng)",
                  "user_id": "1",
                  "email": "jagjeet@njgraphica.com",
                  "amount": "400.00",
                  "commission": "0.00",
                  "status": "completed",
                  "type": "received",
                  "created_at": "2021-08-09 12:05:09",
                  "updated_at": "2021-08-09 12:05:09"
              },
              "6": {
                  "id": "30",
                  "ip": "210.89.58.11",
                  "country_id": "2",
                  "currency_code": "KES",
                  "description": "KES  100.00 into NGN 400 was withdrawn to 0760085310 - EMMANUEL TOCHI OGIDI, ACCESS BANK",
                  "user_id": "1",
                  "email": "jagjeet@njgraphica.com",
                  "amount": "100.00",
                  "commission": "80.00",
                  "status": "completed",
                  "type": "withdraw",
                  "created_at": "2021-08-09 22:32:12",
                  "updated_at": "2021-08-09 22:32:13"
              },
              "7": {
                  "id": "65",
                  "ip": "169.159.94.123",
                  "country_id": "1",
                  "currency_code": "NGN",
                  "description": "Received of amount  3,631.00 from Emmanuel Ogidi (partner@swap.ng)",
                  "user_id": "1",
                  "email": "jagjeet@njgraphica.com",
                  "amount": "3631.00",
                  "commission": "0.00",
                  "status": "completed",
                  "type": "received",
                  "created_at": "2021-09-03 21:42:55",
                  "updated_at": "2021-09-03 21:42:56"
              },
              "8": {
                  "id": "184",
                  "ip": "210.89.58.11",
                  "country_id": "2",
                  "currency_code": "KES",
                  "description": "KES  100.00 into KES 100 was withdrawn to 45654654654 - Okkk, Kenya Commercial Bank Limited",
                  "user_id": "1",
                  "email": "jagjeet@njgraphica.com",
                  "amount": "100.00",
                  "commission": "0.00",
                  "status": "processing",
                  "type": "bwr",
                  "created_at": "2021-09-06 06:49:44",
                  "updated_at": "2021-09-06 06:49:47"
              },
              "9": {
                  "id": "185",
                  "ip": "210.89.58.11",
                  "country_id": "2",
                  "currency_code": "KES",
                  "description": "KES  100.00 into KES 100 was withdrawn to 1 - s, Kenya Commercial Bank Limited",
                  "user_id": "1",
                  "email": "jagjeet@njgraphica.com",
                  "amount": "100.00",
                  "commission": "0.00",
                  "status": "processing",
                  "type": "bwr",
                  "created_at": "2021-09-06 07:50:13",
                  "updated_at": "2021-09-06 07:50:17"
              },
              "10": {
                  "id": "186",
                  "ip": "210.89.58.11",
                  "country_id": "2",
                  "currency_code": "KES",
                  "description": "KES  100.00 into KES 100 was withdrawn to 22 - 22qqq, Kenya Commercial Bank Limited",
                  "user_id": "1",
                  "email": "jagjeet@njgraphica.com",
                  "amount": "100.00",
                  "commission": "0.00",
                  "status": "processing",
                  "type": "bwr",
                  "created_at": "2021-09-06 07:55:33",
                  "updated_at": "2021-09-06 07:55:36"
              },
              "11": {
                  "id": "187",
                  "ip": "210.89.58.11",
                  "country_id": "2",
                  "currency_code": "KES",
                  "description": "KES  100.00 into KES 100 was withdrawn to 289119010 - hello, Kenya Commercial Bank Limited",
                  "user_id": "1",
                  "email": "jagjeet@njgraphica.com",
                  "amount": "100.00",
                  "commission": "0.00",
                  "status": "failed",
                  "type": "bwr",
                  "created_at": "2021-09-06 08:08:07",
                  "updated_at": "2021-09-06 20:12:04"
              },
              "12": {
                  "id": "2910",
                  "ip": "160.152.17.123",
                  "country_id": "2",
                  "currency_code": "KES",
                  "description": "Received of amount  1,000.00 from Emmanuel Ogidi (partner@swap.ng)",
                  "user_id": "1",
                  "email": "jagjeet@njgraphica.com",
                  "amount": "1000.00",
                  "commission": "0.00",
                  "status": "completed",
                  "type": "received",
                  "created_at": "2021-10-08 18:09:49",
                  "updated_at": "2021-10-08 18:09:52"
              },
              "13": {
                  "id": "2919",
                  "ip": "210.89.58.107",
                  "country_id": "2",
                  "currency_code": "KES",
                  "description": "KES  100.00 into KES 100 was withdrawn to 987987987 - Kes test user, Kenya Commercial Bank Limited",
                  "user_id": "1",
                  "email": "jagjeet@njgraphica.com",
                  "amount": "100.00",
                  "commission": "0.00",
                  "status": "processing",
                  "type": "bwr",
                  "created_at": "2021-10-08 20:06:36",
                  "updated_at": "2021-10-08 20:06:38"
              },
              "14": {
                  "id": "2921",
                  "ip": "210.89.58.107",
                  "country_id": "2",
                  "currency_code": "KES",
                  "description": "KES  150.00 into KES 150 was withdrawn to 9876543210 - Kes mpesa user, MPESA",
                  "user_id": "1",
                  "email": "jagjeet@njgraphica.com",
                  "amount": "150.00",
                  "commission": "0.00",
                  "status": "processing",
                  "type": "bwr",
                  "created_at": "2021-10-08 20:10:26",
                  "updated_at": "2021-10-08 20:10:29"
              },
              "15": {
                  "id": "2928",
                  "ip": "160.152.18.249",
                  "country_id": "2",
                  "currency_code": "KES",
                  "description": "KES  150.00 into KES 150 was withdrawn to 8894994004 - Kenya USER, Jamii Bora Bank",
                  "user_id": "1",
                  "email": "jagjeet@njgraphica.com",
                  "amount": "150.00",
                  "commission": "0.00",
                  "status": "processing",
                  "type": "bwr",
                  "created_at": "2021-10-08 20:26:19",
                  "updated_at": "2021-10-08 20:26:22"
              },
              "16": {
                  "id": "7864",
                  "ip": "210.89.58.179",
                  "country_id": "2",
                  "currency_code": "KES",
                  "description": "KES  100.00 into KES 100 was withdrawn to 121115656 - suntest, MPESA.",
                  "user_id": "1",
                  "email": "jagjeet@njgraphica.com",
                  "amount": "100.00",
                  "commission": "0.00",
                  "status": "processing",
                  "type": "bwr",
                  "created_at": "2021-11-20 08:56:21",
                  "updated_at": "2021-11-20 08:56:24"
              },
              "17": {
                  "id": "7907",
                  "ip": "210.89.58.179",
                  "country_id": "2",
                  "currency_code": "KES",
                  "description": "Dear Jagjeet Singh Admin, Your manual bank transfer was completed. We've credited KES  100.00 from Manual to your Transfy account.",
                  "user_id": "1",
                  "email": "jagjeet@njgraphica.com",
                  "amount": "100.00",
                  "commission": "0.00",
                  "status": "completed",
                  "type": "deposit",
                  "created_at": "2021-11-20 13:32:46",
                  "updated_at": "2021-11-20 13:32:49"
              },
              "18": {
                  "id": "7913",
                  "ip": "210.89.58.179",
                  "country_id": "2",
                  "currency_code": "KES",
                  "description": "Dear Jagjeet Singh Admin, Your manual bank transfer was completed. We've credited KES  100.00 from Manual to your Transfy account.",
                  "user_id": "1",
                  "email": "jagjeet@njgraphica.com",
                  "amount": "100.00",
                  "commission": "0.00",
                  "status": "completed",
                  "type": "deposit",
                  "created_at": "2021-11-20 14:02:04",
                  "updated_at": "2021-11-20 14:02:07"
              },
              "19": {
                  "id": "7983",
                  "ip": "210.89.58.179",
                  "country_id": "3",
                  "currency_code": "ZAR",
                  "description": "Dear Jagjeet Singh Admin, Your manual bank transfer was completed. We've credited ZAR  100.00 from Manual to your Transfy account.",
                  "user_id": "1",
                  "email": "jagjeet@njgraphica.com",
                  "amount": "100.00",
                  "commission": "0.00",
                  "status": "completed",
                  "type": "deposit",
                  "created_at": "2021-11-21 13:49:44",
                  "updated_at": "2021-11-21 13:49:47"
              }
          };
          const info = Object.values(info_obj);
          store.setInfo(info);
          return {
              infos: store.info
          };
      }
  }
</script>

<style>

</style>