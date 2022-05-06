import { createStore } from "vuex";

export default createStore({
  state: {
    list: {
      flavors: [],
      toppings: [],
    },
    amount: {
      flavors: 0,
      toppings: 0,
      total: 0,
    },
    orders: [
    ],
  },
  getters: {},
  mutations: {
    saveSelectedItems(state, { list, listNo }) {
      if (listNo === 0) {
        state.list.flavors = Array.from(list);

        const priceList = state.list.flavors.map((item) => item.price);
        state.amount.flavors = priceList.reduce(
          (prevItem, currentItem) => prevItem + currentItem,
          0
        );
      } else {
        state.list.toppings = Array.from(list);

        const priceList = state.list.toppings.map((item) => item.price);
        state.amount.toppings = priceList.reduce(
          (prevItem, currentItem) => prevItem + currentItem,
          0
        );
      }
      state.amount.total = state.amount.flavors + state.amount.toppings;
    },
    addOrder(state) {
      const order = {
        flavors: Array.from(state.list.flavors),
        toppings: Array.from(state.list.toppings),
        total: state.amount.total + 30,
      }

      state.list.flavors = [];
      state.list.toppings = [];
      state.amount.flavors = 0;
      state.amount.toppings = 0;
      state.amount.total = 0;

      state.orders.push(order);
    },
  },
  actions: {},
  modules: {},
});
