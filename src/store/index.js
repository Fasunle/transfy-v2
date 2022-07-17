import { defineStore } from "pinia";


export const useStore = defineStore("main", {
    // user state
    state: () => {
        return {
            countries: [],
            info: [],
            balances: [],
            orders: [],
        }
    },
    actions: {
        setCountries(countries){
            this.countries = countries;
        },
        setInfo(info){
            this.info = info;
        },
        setOrders(orders){
            this.orders = orders;
        },
        setBalances(balances){
            this.balances = balances;
        },
    }
});