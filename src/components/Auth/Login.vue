<template>
    <div class="login">
        <h1>會員登入</h1>
        <div>
            <label for="email" >帳號：<span v-if="warningInfo.account !== ''">{{ warningInfo.account }}</span></label><input v-model="authData.account" type="email" placeholder="輸入帳號">
        </div>
        <div>
            <label for="password" >密碼：<span v-if="warningInfo.password !== ''">{{ warningInfo.password }}</span></label><input v-model="authData.password" type="password" placeholder="輸入密碼">
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
        const warningInfo = reactive({
            account: "",
            password: "",
        });

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        const handleLogIn = () => {
            warningInfo.account = '';
            warningInfo.password = '';
            if (authData.account !== 'henry@email.com') {
                warningInfo.account = "帳號錯誤"
            }
            if (!emailRegex.test(authData.account)) {
                warningInfo.account = "格式錯誤"
            }
            if (authData.password !== '123') {
                warningInfo.password = "密碼錯誤"
            }

            if (warningInfo.account === '' && warningInfo.password === '') {
                authStore.login(authData);
            }
            console.log('Logged in user:', authStore.user);
            router.push('/')
        }
        return { handleLogIn, authData, warningInfo }
    },

}
</script>
<style>
.login {
  width: 50%;
  height: 80vh;
  max-width: 400px; /* 设置最大宽度，避免在小屏幕上过宽 */
  padding: 20px;
  border: 2px solid #007bff; /* 使用更具语义的蓝色 */
  border-radius: 5px;
  background-color: #f8f9fa; /* 添加浅灰色背景 */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* 添加阴影 */
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

    label {
        margin-bottom: 5px;
        display: block; 
    }
    span {
        color: red;
    }

    input {
        width: 100%;
        padding: 10px;
        margin-bottom: 15px;
        border: 1px solid #ced4da;
        border-radius: 3px;
    }

    button {
        background-color: #007bff;
        color: #fff;
        border: none;
        padding: 10px 20px;
        border-radius: 3px;
        cursor: pointer;
    }
}
</style>