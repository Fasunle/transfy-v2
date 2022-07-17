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
  import data from "../../data.json";


  export default {
      components: { Info },
      setup() {
          const store = useStore();
          //   fetch data from API
          const info_obj = data["get-info"];
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