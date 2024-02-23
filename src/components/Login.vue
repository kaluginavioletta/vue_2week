<template>
<h1>Login</h1>
  <form class="login" @submit.prevent="login">
    <div class="form-group">
      <label>User name</label>
      <input type="text" required v-model="username">
    </div>

    <div class="form-group">
      <label>Password</label>
      <input type="password" required v-model="password">
    </div>
    <button type="submit" class="btn">Login</button>
  </form>
</template>

<script>
export default {
  data() { 
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      const userData = {
        username: this.username,
        password: this.password,
      };

      this.$store
        .dispatch(AUTH_REQUEST, userData)
        .then(() => this.$router.push("/"));
    },
  },
};
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
