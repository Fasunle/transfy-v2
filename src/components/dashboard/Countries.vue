<template>
  <div class="p-4 pb-16 px-28">
    <h1 class="text-center font-semibold text-2xl my-4">Countries</h1>

    <div class="grid grid-cols-3 gap-8 overflow-auto">
      <Country 
        v-for="country in countries" 
        :key="country.id" 
        :country="country"
      />
    </div>
  </div>
</template>

<script>
import { useStore } from '@/store';
import Country from './Country.vue';
export default {
    components: { Country },
    setup(){

      const store = useStore();

      const countries = [
    {
        "id": "1",
        "name": "Nigeria",
        "code": "NG",
        "phone_number_digits": "10",
        "phone_code": "+234",
        "currency_code": "NGN",
        "currency_name": "Nigerian Naira",
        "status": "active",
        "created_at": "2021-07-01 21:52:07",
        "updated_at": "2021-07-07 12:24:44"
    },
    {
        "id": "2",
        "name": "Kenya",
        "code": "KE",
        "phone_number_digits": "9",
        "phone_code": "+254",
        "currency_code": "KES",
        "currency_name": "Kenyan Shilling",
        "status": "active",
        "created_at": "2021-06-28 23:08:49",
        "updated_at": "2021-08-27 14:08:10"
    },
    {
        "id": "3",
        "name": "South Africa",
        "code": "ZA",
        "phone_number_digits": "9",
        "phone_code": "+27",
        "currency_code": "ZAR",
        "currency_name": "South African Rand",
        "status": "active",
        "created_at": "2021-07-08 13:46:54",
        "updated_at": "2022-07-06 08:57:15"
    },
    {
        "id": "5",
        "name": "Rwanda",
        "code": "RW",
        "phone_number_digits": "9",
        "phone_code": "+250",
        "currency_code": "RWF",
        "currency_name": "Rwandan franc",
        "status": "active",
        "created_at": "2021-07-08 13:52:41",
        "updated_at": "2021-08-28 12:44:43"
    },
    {
        "id": "7",
        "name": "Ghana",
        "code": "GH",
        "phone_number_digits": "9",
        "phone_code": "+233",
        "currency_code": "GHS",
        "currency_name": "Ghanaian cedi",
        "status": "active",
        "created_at": "2021-10-19 22:52:29",
        "updated_at": "2021-11-20 10:44:08"
    },
    {
        "id": "8",
        "name": "Cameroon",
        "code": "CM",
        "phone_number_digits": "9",
        "phone_code": "+237",
        "currency_code": "XAF",
        "currency_name": "Central African CFA franc",
        "status": "active",
        "created_at": "2021-10-19 22:52:30",
        "updated_at": "2021-11-20 10:44:09"
    },
    {
        "id": "9",
        "name": "Cote D'Ivoire",
        "code": "CI",
        "phone_number_digits": "10",
        "phone_code": "+225",
        "currency_code": "XOF",
        "currency_name": "West African CFA franc",
        "status": "active",
        "created_at": "2022-06-06 22:28:45",
        "updated_at": "2022-06-06 22:37:25"
    },
    {
        "id": "12",
        "name": "Senegal",
        "code": "SN",
        "phone_number_digits": "9",
        "phone_code": "+221",
        "currency_code": "XOF-SN",
        "currency_name": "West African CFA franc Senegal",
        "status": "disabled",
        "created_at": "2022-06-18 14:09:26",
        "updated_at": "2022-06-18 14:09:26"
    },
    {
        "id": "13",
        "name": "Benin",
        "code": "BJ",
        "phone_number_digits": "9",
        "phone_code": "+229",
        "currency_code": "XOF-BJ",
        "currency_name": "West African CFA franc Benin",
        "status": "disabled",
        "created_at": "2022-06-22 21:54:56",
        "updated_at": "2022-06-22 21:54:56"
    }    
]

      store.setCountries(countries);

      return {
        countries: store.countries
      }
    }
}
</script>

<style>

</style>