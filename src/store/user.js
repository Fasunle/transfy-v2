import { defineStore } from "pinia";


export const useUserStore = defineStore("user", {
    // user state
    state: () => {
        return {
            user: {
                id: "",
                username: "",
                name: "",
                email: "",
                mobile_number: "",
                gender: "",
                date_of_birth: "",
                mobile_number_verified_at: null,
                email_verified_at: "",
                country_name: "",
                country_id: "",
                currency_name: "",
                currency_code: "",
                country_code: "",
                is_suspended: "",
                created_at: "",
                session_id_status: "",
                updated_at: ""
            },
            userAuth: false
        }
    },
    actions: {
        loginUser(user){
            this.user = user;
        },
        logoutUser(){
            this.user = {}
        },
        setUserAuthenticated(userAuth){
            this.userAuth = userAuth;
        }
    }
});