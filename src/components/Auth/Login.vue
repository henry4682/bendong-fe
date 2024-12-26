<template>
    <div class="">
        <h1>Login page</h1>
        <button @click="handleLogIn">Login</button>
    </div>
</template>
<script>

import { useRouter } from 'vue-router';
import { useAuthStore } from '../../store';

export default{
    name: 'Login',
    setup () {
        const authStore = useAuthStore();
        const router = useRouter();

        const handleLogIn = () => {
            // 假資料
            const user = {
                name: 'Henry',
                email: 'henry@gamil.com',
            }
            authStore.login(user);
            console.log('Logged in user:', authStore.user);
            // router.push('/')
        }
        return { handleLogIn }
    },

}
</script>