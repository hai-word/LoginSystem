<script setup>
import {userStore} from "../store/index.js";
const userAuthorization = userStore();
function logout(){
  userAuthorization.userLogin(false);
}
</script>

<template>
  <h2>显示啊</h2>
  <h1>我已经登陆了</h1>
  <router-link to="/login" @click="logout">退出登陆</router-link>
</template>

<style>

</style>