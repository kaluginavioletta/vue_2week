<template>
  <h1>Login</h1>
    <form class="login" @submit.prevent="store.commit('login')">
      <div class="form-group">
        <label>Email</label>
        <input v-model="store.state.email" type="email" required>
      </div>
  
      <div class="form-group">
        <label>Password</label>
        <input v-model="store.state.password" type="password" required>
      </div>
      <button type="submit" class="btn">Login</button>
    </form>
    <router-link to="/">Home</router-link>
  </template>
  
  <script>
  import store from "@/store";
  export default {
    computed:{
      store(){
        return store
      }
    }
  }
  </script>
  
  <style scoped>
    
  .login {
    max-width: 400px;
    margin: 3% auto;
    padding: 20px;
    border: 1px solid #6e57e0;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    background-color: #ddc6ff;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  .login input,
  button {
    border: 1px solid black;
    border-radius: 5px;
  }
  hr {
    margin: 10px 0;
  }
  
  .btn {
    width: 30%;
    padding: 5px;
    background-color: #5941d4;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .btn:hover {
    background-color: #30229b;
  }
  
  </style>
  