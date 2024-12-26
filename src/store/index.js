import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
    state: () => ({
        isAuthenticated: false,
        user: null,
    }),
    actions: {
        login(user) {
            this.isAuthenticated = true;
            this.user = user;
        },
        logout() {
            this.isAuthenticated = false;
            this.user = null;        
        },
    },
    getters:{
        isLoggedIn: (state) => state.isAuthenticated,
        getUser: (state) => state.user,
    },
    persist: true
});