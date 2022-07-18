<template>
  <div class="p-4 md:pb-16">
    <h1 class="text-center text-3xl font-sans font-medium my-4">Countries</h1>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4 overflow-auto justify-center">
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
import data from "../../data.json";


export default {
    components: { Country },
    setup(){

      const store = useStore();

      const countries = data.countries;

      store.setCountries(countries);

      return {
        countries: store.countries
      }
    }
}
</script>

<style>

</style>