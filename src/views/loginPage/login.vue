<script setup>
import {userStore} from "../../store/index.js";
const userAuthorization = userStore();
function LoginBut(){
  userAuthorization.userLogin(true)
  if(userAuthorization.authorization){
    console.log('密码正确！');
  }
  console.log(userAuthorization.authorization)
}
</script>

<template>
  <h1>我是登录页</h1>
  <button class="but" @click="LoginBut">输入账号正确</button>
  <router-link to="/basicLayouts" class="login">登陆！</router-link>
</template>

<style scoped>

.login {
  width: 20vh;
  height: 20vh;
  background-color: rgba(0, 128, 255, 0.85);
  color: white;
}
.but{
  margin-bottom: 5vh;
}
</style>