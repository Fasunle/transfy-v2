<template>
    <div class="p-4">
        <h1 class="text-center text-3xl font-sans font-medium my-4">Dashboard</h1>

        <div class="dashboard grid sm:grid-cols-12 sm:grid-rows-6 gap-4">

            <div class="sm:col-start-1 sm:col-span-4 sm:row-span-full px-4 max-h-full overflow-y-scroll snap-center">
                <h2 class="text-center text-xl font-sans font-medium sticky top-0 bg-white py-4">Orders</h2>

                <Order
                    v-for="order in orders"
                    :key="order.id"
                    :order="order"
                    class="mx-auto"
                />
            </div>
            <div class="sm:col-start-5 sm:col-span-full sm:row-span-full rounded shadow px-4 max-h-full overflow-y-scroll snap-center">
                

                
            </div>

        </div>
    </div>
</template>

<script>
import {useStore} from '@/store';
import Order from './Order.vue';
import {orders, } from "../../data.json";


export default {
    components: { Order },
    setup(){

        const store = useStore()

        // fetch orders and update global state
        store.setOrders(orders);

        return {
            orders: store.orders
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