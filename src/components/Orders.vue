<script>
export default {
  name: "Orders",
  computed: {
    store() {
      return store
    }
  },
  created() {
    this.$store.dispatch('loadOrders');
  },
}
</script>

<template>
  <h1>Заказы пользователя:</h1>
</template>

<style scoped>

</style>