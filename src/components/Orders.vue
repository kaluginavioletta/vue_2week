<script>
import store from "@/store";

export default {
  computed: {
    store() {
      return store
    }
  },
  mounted() {
    this.$store.commit('getOrders');
  },
  methods: {
    getOrderTotalPrice(order) {
      if (!order || !order.products) {
        return 0;
      }
      return order.products.reduce((total, product) => total + product.price * product.quantity, 0);
    },
  },
}
</script>

<template>
  <h1>My orders</h1>
  <div v-if="store.state.orderList.length > 0">
    <div id="orders">
      <div class="order" v-for="order in store.state.orderList" :key="order.id">
        <h2>Order #{{ order.id }}</h2>
        <p>List of goods in order:</p>
          <p v-for="item in order.products" :key="item">
          <h4>Product:</h4>
            <div class="prod_item">
              <p class="item">Product id: {{ item }}</p>
              <p class="item">Product Name: {{ this.store.state.products.find(p => p.id === item).name }}</p>
              <p>Price: {{ order.order_price }} rub.</p>
            </div>
          </p>
      </div>
    </div>
  </div>
  <div v-else>
    <h3>You don't have any orders yet</h3>
    <router-link to="/">Home</router-link>
  </div>
</template>

<style scoped>
#orders{
  display: grid;
  grid-template-columns: repeat(5, 200px);
  gap: 90px;
  align-content: center;
}

.order {
  width: 220px;
  background-color: #ddc6ff;
  border-radius: 5px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  margin-bottom: 30px;
}

.order:hover {
  transform: translateY(-5px);
}

.prod_item{
  margin-bottom: 30px;
}

.order h4 {
  text-decoration-line: underline;
}

.order h2 {
  margin: 0 0 10px;
}

.order p {
  margin: 10px;
}

.view_btn {
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 14px;
  margin: 0 10px;
}

.view_btn:hover {
  color: #f00;
}
</style>