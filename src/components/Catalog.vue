<script>
import store from "@/store";
export default {
  computed: {
    store() {
      return store
    }
  },
  methods:{
    addToCart(product) {
      this.$store.commit('addProductToCart', product);
    },
  },
  mounted() {
    if (localStorage.token !== undefined && localStorage.token !== null) {
      store.state.user_token = localStorage.token;
    }
    this.$store.commit('getProducts');
  },
}
</script>

<template>
  <h1>Catalog</h1>
  <div id="catalog">
    <div class="products">
      <div class="product_item" v-for="item in this.store.state.products">
        <h2>{{ item.name }}</h2>
        <p>{{ item.description }}</p>
        <strong>{{ item.price }} rub.</strong>
        <button class="add_btn" @click="addToCart(item)">Add to cart</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
#catalog{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.products{
  display: grid;
  grid-template-columns: repeat(5, 200px);
  gap: 90px;
}
.product_item{
  width: 220px;
  background-color: #ddc6ff;
  border-radius: 5px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
}
.product_item:hover{
  transform: translateY(-5px);
}
.product_item h2{
  margin: 0 0 10px;
}
.product_item p{
  margin: 5px 0;
}
.add_btn{
  width: 200px;
  background-color: #5941d4;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
}
.product_item button:hover{
  background-color: #30229b;
}
</style>