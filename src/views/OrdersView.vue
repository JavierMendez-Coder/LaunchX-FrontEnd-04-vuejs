<template>
  <Navbar />
  <h1>Orders page</h1>
  <OrdersTable />
  <Info />
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Info from "../components/Info.vue";
import OrdersTable from "../components/OrdersTable.vue";

export default {
  name: "OrdersView",
  components: {
    Navbar,
    Info,
    OrdersTable,
  },
};
</script>
