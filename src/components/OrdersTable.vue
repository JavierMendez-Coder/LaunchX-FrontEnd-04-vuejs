<template>
  <div class="table-headers">
    <p>Flavor(s)</p>
    <p>Topping(s)</p>
    <p>Cost</p>
  </div>
  <OrderTableElement
    v-for="order in this.$store.state.orders"
    :key="order"
    :flavorsList="order.flavors"
    :toppingsList="order.toppings"
    :cost="order.total"
  />
</template>

<script>
import OrderTableElement from "./OrderTableElement.vue";

export default {
  name: "OrdersTable",
  components: {
    OrderTableElement,
  },
  created() {
    console.log(this.$store.state.orders);
  },
};
</script>

<style scoped>
.table-headers {
  display: grid;
  grid-template-columns: 2fr 2fr 1fr;
  padding: 0.2em 0.5em;
  font-size: 0.9em;
  font-weight: bold;
}

.table-headers p {
  margin: 0;
}
</style>