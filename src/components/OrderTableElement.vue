<template>
  <div class="table-element">
    <ul id="flavors-list">
      <li v-if="flavorsList.length === 0">None</li>
      <li v-else v-for="flavor in flavorsList" :key="flavor.id">
        {{ flavor.itemName }}
      </li>
    </ul>
    <ul id="toppings-list">
      <li v-if="toppingsList.length === 0">None</li>
      <li v-else v-for="topping in toppingsList" :key="topping.id">
        {{ topping.itemName }}
      </li>
    </ul>
    <p>{{ `$${cost.toFixed(2)} USD` }}</p>
  </div>
</template>

<script>
export default {
  name: "OrderTableElement",
  props: {
    flavorsList: Array,
    toppingsList: Array,
    cost: Number,
  },
};
</script>

<style scoped>
.table-element {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  font-size: 0.9em;
  padding: 0.2em 0.5em;
  background-color: var(--secondary-bg-color);
  border-bottom: 1px solid rgba(66, 66, 66, 0.2);
}

.table-element p {
  margin: 0;
}

.table-element ul {
  margin: 0;
  padding: 0;
}

.table-element li {
  list-style-type: none;
}
</style>
