import { defineStore } from "pinia";


export const useStore = defineStore("main", {
    // user state
    state: () => {
        return {
            countries: []
        }
    },
    actions: {
        setCountries(countries){
            this.countries = countries;
        }
    }
});