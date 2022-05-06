<template>
  <div class="table-headers">
    <p>Flavor(s)</p>
    <p>Topping(s)</p>
    <p>Cost</p>
  </div>
  <div class="wrapper">
    <OrderTableElement
      v-for="order in this.$store.state.orders"
      :key="order"
      :flavorsList="order.flavors"
      :toppingsList="order.toppings"
      :cost="order.total"
    />
  </div>
</template>

<script>
import OrderTableElement from "./OrderTableElement.vue";

export default {
  name: "OrdersTable",
  components: {
    OrderTableElement,
  },
};
</script>

<style scoped>
.table-headers {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 0.2em 0.5em;
  font-size: 0.9em;
  font-weight: bold;
}

.table-headers p {
  margin: 0;
}

.wrapper {
  height: 50vh;
  overflow: auto;
  overflow-y: overlay;
}

.wrapper::-webkit-scrollbar {
  width: 1em;
}

.wrapper::-webkit-scrollbar-thumb {
  background-color: var(--description-txt-color);
  border-radius: 3em;
  border: 0.4em solid rgba(0, 0, 0, 0);
  background-clip: padding-box;
}

@media only screen and (min-width: 920px) {
  .wrapper {
    height: 56.8vh;
  }
}

@media only screen and (min-width: 920px) {
  .wrapper {
    height: 56.8vh;
  }
}

@media only screen and (min-width: 1011px) {
  .wrapper {
    height: 58.6vh;
  }
}
</style>
