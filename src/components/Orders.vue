<template>
    <div>
      <h1>Оформленные заказы</h1>
      <ul>
        <li v-for="order in orders" :key="order.id">
          {{ order.date }} - {{ order.totalPrice }}
          <ul>
            <li v-for="product in order.products" :key="product.id">
              {{ product.name }} - {{ product.quantity }} x {{ product.price }}
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    computed: {
      orders() {
        return this.$store.state.orders;
      },
    },
  };
  </script>