<template>
  <div class="main">
      <LoginComp></LoginComp>
      <!-- <div id="nav">
      <router-link to="/detail">登录</router-link> |
      <router-link to="/register">注册</router-link>
    </div> -->
  </div>
</template>

<script>
import LoginComp from '@/components/LoginComp.vue'
export default {
    name:'Login',
    components:{
      LoginComp
    }
}
</script>

<style scoped>
.main {
  height: 100%;
}
</style>