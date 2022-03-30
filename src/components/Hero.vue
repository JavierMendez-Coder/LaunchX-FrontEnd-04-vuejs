<template>
  <section class="hero">
    <div class="left-column">
      <p class="subhead">great pies made just for you</p>
      <h1>treat yourself with only the best</h1>
      <router-link class="cta-button" to="#menu">check our menu</router-link>
    </div>
    <div class="hero-img"></div>
  </section>
</template>

<script>
export default {
  name: "Hero",
};
</script>

<style scoped>
.hero-img {
  position: absolute;
  top: 4.5em;
  left: 0;
  background: url("../assets/side-pie-image.avif");
  background-size: cover;
  background-position-x: 0%;
  background-position-y: 20%;
  width: 100%;
  height: 91.1vh;
  z-index: -1;
  overflow: hidden;
}

h1 {
  font-size: 3rem;
  margin-top: -0.4em;
  margin-bottom: 0.6em;
  line-height: 3.8rem;
  text-transform: capitalize;
}

.subhead {
  font-size: 1.1rem;
  margin-top: 6em;
  font-weight: bold;
  color: var(--accent-color);
  text-transform: uppercase;
}

section.hero {
  color: var(--secondary-txt-color);
  height: 90vh;
}

section.hero .cta-button {
  padding: 0.6em 1em;
  color: var(--secondary-txt-color);
  background-color: var(--accent-color);
  border-radius: 12% / 50%;
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
}
</style>