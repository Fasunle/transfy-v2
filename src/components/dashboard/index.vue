<template>
    <div class="p-4">
        <h1 class="text-center text-3xl font-sans font-medium my-4">Dashboard</h1>

        <div class="dashboard grid sm:grid-cols-12 sm:grid-rows-6 gap-4">

            <div class="sm:col-start-1 sm:col-span-4 sm:row-span-full px-4 max-h-full overflow-y-scroll snap-center hide-scrollbar">
                <h2 class="text-center text-xl font-sans font-medium sticky top-0 bg-white py-4">Orders</h2>

                <Order
                    v-for="order in orders"
                    :key="order.id"
                    :order="order"
                    class="mx-auto"
                />
            </div>
            <div class="sm:col-start-5 sm:col-span-full sm:row-span-full px-4 max-h-full overflow-y-scroll snap-center hide-scrollbar">
                <div class="">
                    <h2 class="text-center text-xl font-sans font-medium sticky top-0 bg-white py-4">Balance</h2>

                    <div class="grid lg:flex">
                        <Balance
                            v-for="balance in balances"
                            :key="balance"
                            :balance="balance"
                            class="mx-auto mb-4"
                        />
                    </div>

                </div>

                <div class="">
                    <h2 class="text-center text-xl font-sans font-medium sticky top-0 bg-white py-4">Countries</h2>

                    <div class="grid lg:grid-cols-2">
                        <Country 
                            v-for="country in countries" 
                            :key="country.id" 
                            :country="country"
                            class="mx-auto"
                        />
                    </div>

                </div>
            </div>

        </div>
    </div>
</template>

<script>
import {useStore} from '@/store';
import Order from './Order.vue';
import data from "../../data.json";
import Balance from './Balance.vue';
import Country from './Country.vue';


export default {
    components: { Order, Balance, Country },
    setup(){

        const store = useStore()

        // fetch data and update global state
        store.setOrders(data.orders);
        store.setBalances(data.balances);
        store.setCountries(data.countries);

        console.log(data.countries)


        return {
            orders: store.orders,
            balances: store.balances,
            countries: store.countries
        }
    }
}
</script>

<style scoped>
    .dashboard{
        min-height: calc(100vh - 12rem);
        max-height: calc(100vh - 12rem);
    }
</style>