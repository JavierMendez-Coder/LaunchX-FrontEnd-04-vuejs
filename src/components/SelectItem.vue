<template>
  <div class="item" :id="id">
    <div class="wrapper">
      <Checkbox :id="`${id}cb`" />
      {{ itemName }}
    </div>
    ${{ price.toFixed(2) }}
  </div>
</template>

<script>
import Checkbox from "./Checkbox.vue";

export default {
  name: "SelectItem",
  props: {
    id: String,
    itemName: String,
    price: Number,
  },
  components: {
    Checkbox,
  },
};
</script>

<style scoped>
.item {
  display: flex;
  justify-content: space-between;
  margin: 0.4em 0;
  padding: 0.2em 1em;
  border-radius: 5em;
  color: var(--description-txt-color);
  cursor: pointer;
}

.item:hover {
  background-color: var(--secondary-bg-color);
}

.item.checked {
  background-color: var(--secondary-bg-color);
  color: var(--main-txt-color);
}

.wrapper {
  display: flex;
  align-items: center;
}
</style>