<template>
  <div class="w-80 shadow-lg p-4">
    <div class="flex justify-between mt-4">
        <h2>Name: {{country.name}}</h2>
        <p>code: {{country.code}}</p>
    </div>

    <div class="flex justify-between mt-4">
        <h2>Currency Name: {{country.currency_name}}</h2>
    </div>

    <div class="flex justify-between mt-4">
        <p>Currency Code: {{country.currency_code}}</p>
    </div>

    <div class="flex justify-between mt-4">
        <h2>Phone Code: {{country.phone_code}}</h2>
    </div>
    
    <div class="flex justify-between mt-4">
        <p>Phone digit: {{country.phone_number_digits}}</p>
    </div>
  </div>
</template>

<script>
export default {
    props: ["country"]

}
</script>

<style>

</style>