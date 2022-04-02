<template>
  <Navbar />
  <Hero />
  <Menu />
  <Info />
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Hero from "../components/Hero.vue";
import Menu from "../components/Menu.vue";
import Info from "../components/Info.vue";

export default {
  name: "HomeView",
  components: {
    Navbar,
    Hero,
    Menu,
    Info,
  },
};
</script>
