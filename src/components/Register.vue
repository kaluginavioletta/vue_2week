<template>
    <div>
      <h1>Регистрация</h1>
      <form @submit.prevent="register">
        <input v-model="name" type="text" placeholder="Имя" />
        <input v-model="email" type="email" placeholder="Email" />
        <input v-model="password" type="password" placeholder="Пароль" />
        <button type="submit">Зарегистрироваться</button>
      </form>
      <div v-if="error" class="error">{{ error }}</div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: '',
        email: '',
        password: '',
        error: '',
      };
    },
    methods: {
      async register() {
        try {
          await this.$store.dispatch('register', { name: this.name, email: this.email, password: this.password });
          this.$router.push('/login');
        } catch (error) {
          this.error = error.message;
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .error {
    color: red;
  }
  </style>