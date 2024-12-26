<template>
    <ul>
        <li v-if="authStore.isLoggedIn">
            <RouterLink to="/" >Home Page</RouterLink>
        </li>
        <li v-if="!authStore.isLoggedIn">
            <RouterLink to="/Login" >Login</RouterLink>
        </li>
        <li v-if="authStore.isLoggedIn">
            <button @click="authStore.logout" >Logout</button>
        </li>
    </ul>
</template> 
<script>

import { useAuthStore } from '../../store';

  export default {
    name: 'Navbar',
    setup() {
        const authStore = useAuthStore();

        return { authStore }
    },
  };
</script>
<style>
ul {
    background-color: aquamarine;
    display: flex;
}
</style>