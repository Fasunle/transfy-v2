import { defineStore } from "pinia";


export const useStore = defineStore("main", {
    // user state
    state: () => {
        return {
            countries: [],
            info: []
        }
    },
    actions: {
        setCountries(countries){
            this.countries = countries;
        },
        setInfo(info){
            this.info = info;
        },
    }
});