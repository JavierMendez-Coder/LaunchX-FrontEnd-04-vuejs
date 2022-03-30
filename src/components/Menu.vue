<template>
  <section class="menu">
    <img src="../assets/top-pie-image.png" alt="Top pie image" />
    <div class="right-column">
      <h2>Menu</h2>
      <p class="description">
        Our dishes are made with just the finest ingredients available on the
        market. We also make sure to add that homemade scent which makes
        everything better.
      </p>
      <p class="description">
        We count with a great variety of flavors and toppings which you can mix
        together.
      </p>
      <SelectMenu
        id="flavors-list"
        listName="Flavors"
        :itemsList="[
          { id: 'f0', checked: false, itemName: 'Raspberry', price: 8.5 },
          { id: 'f1', checked: true, itemName: 'Strawberry', price: 7.5 },
          { id: 'f2', checked: false, itemName: 'Apple', price: 4.5 },
          { id: 'f3', checked: false, itemName: 'Raspberry', price: 8.5 },
          { id: 'f4', checked: false, itemName: 'Strawberry', price: 7.5 },
          { id: 'f5', checked: false, itemName: 'Apple', price: 4.5 },
        ]"
      />

      <SelectMenu
        id="toppings-list"
        listName="Toppings"
        :itemsList="[
          { id: 't0', checked: false, itemName: 'Raspberry', price: 8.5 },
          { id: 't1', checked: true, itemName: 'Strawberry', price: 7.5 },
          { id: 't2', checked: false, itemName: 'Apple', price: 4.5 },
          { id: 't3', checked: false, itemName: 'Raspberry', price: 8.5 },
          { id: 't4', checked: false, itemName: 'Strawberry', price: 7.5 },
          { id: 't5', checked: false, itemName: 'Apple', price: 4.5 },
        ]"
      />
    </div>
  </section>
</template>

<script>
import SelectMenu from "./SelectMenu.vue";

export default {
  name: "Menu",
  components: {
    SelectMenu,
  },
};
</script>

<style scoped>
section.menu img {
  width: 100%;
  height: 11em;
  object-fit: cover;
  background-position-x: 30%;
}

h2 {
  font-weight: bold;
  font-size: 2.5rem;
  text-align: center;
  margin-top: -3em;
  margin-bottom: 2em;
  color: var(--secondary-txt-color);
  text-transform: uppercase;
  letter-spacing: 0.2em;
}

section.menu .description {
  line-height: 1.5rem;
  color: var(--description-txt-color);
}
</style>