<template>
<h1>Registration</h1>
 <div class="register">
   <form @submit.prevent="store.commit('register')">
     <div class="form-group">
       <label for="name">Name</label>
       <input id="name" type="text" v-model="store.state.name" required autofocus class="form-control">
     </div>

     <div class="form-group">
       <label for="email">E-Mail Address</label>
       <input id="email" type="email" v-model="store.state.email" required class="form-control">
     </div>

     <div class="form-group">
       <label for="password">Password</label>
       <input id="password" type="password" v-model="store.state.password" required class="form-control">
     </div>
     <div>
       <button type="submit" class="btn">Зарегистрироваться</button>
     </div>
   </form>
 </div>
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
.register {
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

.form-control {
  width: 100%;
  padding: 5px;
  border: 1px solid #5941d4;
  border-radius: 5px;
}

.btn {
  width: 100%;
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