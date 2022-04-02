<template>
  <section class="menu">
    <div class="menu-img"></div>
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
          { id: 'f1', checked: false, itemName: 'Strawberry', price: 7.5 },
          { id: 'f2', checked: false, itemName: 'Apple', price: 4.5 },
          { id: 'f3', checked: false, itemName: 'Raspberry', price: 8.5 },
          { id: 'f4', checked: false, itemName: 'Strawberry', price: 7.5 },
          { id: 'f5', checked: false, itemName: 'Apple', price: 4.5 },
        ]"
        :listNo="0"
      />

      <SelectMenu
        id="toppings-list"
        listName="Toppings"
        :itemsList="[
          { id: 't0', checked: false, itemName: 'Raspberry', price: 8.5 },
          { id: 't1', checked: false, itemName: 'Strawberry', price: 7.5 },
          { id: 't2', checked: false, itemName: 'Apple', price: 4.5 },
          { id: 't3', checked: false, itemName: 'Raspberry', price: 8.5 },
          { id: 't4', checked: false, itemName: 'Strawberry', price: 7.5 },
          { id: 't5', checked: false, itemName: 'Apple', price: 4.5 },
        ]"
        :listNo="1"
      />

      <div class="wrapper">
        <p>
          Total Amount:
          <span>${{ (30 + $store.state.amount.total).toFixed(2) }}</span> USD
        </p>
      </div>
      <p class="note">Note: A pie has a base price of $30.00 USD.</p>
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
.menu-img {
  width: 100%;
  height: 11em;
  background: url("../assets/top-pie-image.png");
  background-size: cover;
  background-position-x: 0;
  background-position-y: 70%;
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

.wrapper {
  overflow: hidden;
  margin: 1em;
  border-radius: 1em / 1em;
  box-shadow: 0.05em 0.1em 0.2em rgba(6, 6, 6, 0.25);
}

.wrapper p {
  cursor: pointer;
  padding: 0.7em 1.4em;
  margin: 0;
  text-align: center;
  font-size: 1rem;
  font-weight: bold;
}

.wrapper span {
  color: var(--accent-color);
}

.note {
  color: var(--description-txt-color);
  text-align: center;
  font-size: 0.9rem;
}

@media only screen and (min-width: 920px) {
  .menu {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-top: -4em;
  }

  .menu-img {
    margin-left: -6em;
    width: calc(100% + 6em);
    height: 45em;
    object-fit: cover;
    background-position-x: 30%;
  }

  .right-column {
    margin-left: 3em;
  }

  h2 {
    margin-top: .5em;
    margin-bottom: .5em;
    color: var(--main-txt-color);
    text-align: center;
  }
}
</style>