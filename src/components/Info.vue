<template>
  <section class="info">
    <router-link to="/" class="logo">
      <svg
        class="raspberry-pie-logo"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 31.809 33.207"
      >
        <g id="raspberry-pie-logo" transform="translate(-164.532 -78.247)">
          <path
            id="pie-crust"
            d="M2.532,7.377S4.73,3.1,11.523.616a20.367,20.367,0,0,1,12.1-.828L34.341,16.732V32.454L2.532,23.1Z"
            transform="translate(162 79)"
            fill="#292929"
          />
          <path
            id="pie-fill"
            d="M-18.3-7.877,10,.311V11.2L-18.3,3.011Z"
            transform="translate(186.341 96.856)"
            fill="#f11256"
          />
        </g>
      </svg>
      Raspberry<span>Pie</span>
    </router-link>
    <div class="wrapper">
      <div class="feature">
        <p class="title">Phone:</p>
        <p class="description">+09 290 603 2022</p>
      </div>
      <div class="feature">
        <p class="title">Schedule:</p>
        <p class="description">
          9:00 AM to 5:00 PM in weekdays<br />9:00 AM to 3:00 PM in saturdays
        </p>
      </div>
      <div class="feature">
        <p class="title">Address:</p>
        <p class="description">
          WestPoint Shopping Centre Shop 1702 Fresh Food, 17 Patrick Street
          Blacktown NSW 2148
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Info",
};
</script>

<style scoped>
section.info {
  position: absolute;
  width: calc(100% - 4em);
  left: 0;
  padding: 2em;
  margin-top: 4em;
  background-color: var(--secondary-bg-color);
  text-align: center;
}

section.info .title {
  margin: 0;
  margin-top: 1em;
}

section.info .description {
  font-size: 0.8em;
  margin: 0;
  color: var(--description-txt-color);
}

@media only screen and (min-width: 680px) {
  section.info {
    width: calc(100% - 11em);
    padding: 2em 5.5em;
  }
}

@media only screen and (min-width: 920px) {
  .wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>