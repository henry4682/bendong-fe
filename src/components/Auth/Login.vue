<template>
    <div class="login">
        <h1>會員登入</h1>
        <div>
            <label for="email" >帳號：</label><input v-model="authData.account" type="email" placeholder="輸入帳號">
        </div>
        <div>
            <label for="password" >密碼：</label><input v-model="authData.password" type="password" placeholder="輸入密碼">
        </div>
        <button @click="handleLogIn">登入</button>
    </div>
</template>
<script>

import { useRouter } from 'vue-router';
import { useAuthStore } from '../../store';
import { reactive } from 'vue';

export default{
    name: 'Login',
    setup () {
        const authStore = useAuthStore();
        const router = useRouter();
        const authData = reactive({
            account: "",
            password: ""
        });

        const handleLogIn = () => {

            authStore.login(authData);
            console.log('Logged in user:', authStore.user);
            router.push('/')
        }
        return { handleLogIn, authData }
    },

}
</script>
<style>
div{
    margin: 5px;
}
.login {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items:center;
    padding: 20px;
    border: 2px blue solid;
    border-radius: 5px;
}
</style>