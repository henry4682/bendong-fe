<template>
    <ul>
        <li v-if="authStore.isLoggedIn">
            <RouterLink to="/" >Home Page</RouterLink>
        </li>
        <li v-if="!authStore.isLoggedIn">
            <RouterLink to="/Login" >Login</RouterLink>
        </li>
        <li v-if="authStore.isLoggedIn">
            <button @click="handleLogout" >Logout</button>
        </li>
    </ul>
</template> 
<script>

import { useRouter } from 'vue-router';
import { useAuthStore } from '../../store';

  export default {
    name: 'Navbar',
    setup() {
        const authStore = useAuthStore();
        const router = useRouter();

        const handleLogout = () => {
            authStore.logout();
            router.push('/Login');
        }

        return { authStore, handleLogout }
    },
  };
</script>
<style>
ul {
    background-color: aquamarine;
    display: flex;
}
</style>