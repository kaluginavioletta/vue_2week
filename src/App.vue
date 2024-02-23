<template>
  <div class="home">
    <nav>
    <router-link to="/">Catalog</router-link> |
    <router-link to="/cart">Cart</router-link> |
    <router-link to="/orders">My orders</router-link> |
    <router-link to="/register">Register</router-link> |
    <router-link to="/login">Login</router-link>
    <p v-show="isLoggedIn"><router-link to="/">Logout</router-link></p>
  </nav>
  <router-view :cart="cart" @update:cart="cart = $event" />
  <router-view v-slot="{ ShoppingCart }">
    <component :is="ShoppingCart" v-if="ShoppingCart" />
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
