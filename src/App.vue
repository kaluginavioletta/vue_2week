<template>
  <div class="home">
    <nav>
    <router-link to="/">Catalog</router-link>
    <router-link to="/cart">Cart</router-link>
    <router-link to="/orders">My orders</router-link>
    <router-link to="/register">Register</router-link>
    <router-link to="/login">Login</router-link>
    <p v-show="isLoggedIn"><router-link to="/">Logout</router-link></p>
  </nav>
  <router-view :cart="cart" @update:cart="cart = $event" />
  <router-view v-slot="{ Cart }">
    <component :is="Cart" v-if="Cart" />
  </router-view>
  </div>
</template>

<script>
import store from '@/store';
  export default {
    computed:{
    isLoggedIn() {
      console.log("isLoggedIn вызывается");
      return this.$store.state.user_token !== null;
    },
    store(){
      return store
    }
  },
  methods: {
    logout() {
      store.commit("logout");
    },
  },
}
</script>

<style>
body {
    background-color: rgb(227, 215, 250);
}
nav {
  background-color: rgb(181, 165, 245);
  border: 1px solid rgb(133, 141, 198);
}
nav a{
  color: #fff;
  text-decoration: none;
  margin: 0 10px;
  padding: 10px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}
nav a:hover{
  background-color: #a079ff;
}
nav a.router-link-exact-active{
  background-color: #9d75ff;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #7357d4;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #2320b9;
}
</style>
