<template>
    <div>
      <h1>Корзина</h1>
      <ul>
        <li v-for="(product, index) in cart" :key="product.id">
          {{ product.name }} - {{ product.price }} x {{ product.quantity }}
          <button @click="removeFromCart(index)">Удалить</button>
          <button @click="incrementQuantity(index)">+</button>
          <button @click="decrementQuantity(index)">-</button>
        </li>
      </ul>
      <button v-if="cart.length > 0" @click="placeOrder">Оформить заказ</button>
    </div>
  </template>
  
  <script>
  export default {
    computed: {
      cart() {
        return this.$store.state.cart;
      },
    },
    methods: {
      removeFromCart(index) {
        this.$store.commit('removeFromCart', index);
      },
      incrementQuantity(index) {
        this.$store.commit('incrementQuantity', index);
      },
      decrementQuantity(index) {
        this.$store.commit('decrementQuantity', index);
      },
      placeOrder() {
        this.$store.dispatch('placeOrder');
        },
    },
  };
  </script>