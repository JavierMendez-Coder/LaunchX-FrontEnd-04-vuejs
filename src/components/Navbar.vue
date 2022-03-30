<template>
  <div class="wrapper">
    <header>
      <router-link to="/" class="logo">
        <svg class="raspberry-pie-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31.809 33.207">
          <g id="raspberry-pie-logo" transform="translate(-164.532 -78.247)">
            <path id="pie-crust" d="M2.532,7.377S4.73,3.1,11.523.616a20.367,20.367,0,0,1,12.1-.828L34.341,16.732V32.454L2.532,23.1Z" transform="translate(162 79)" fill="#292929"/>
            <path id="pie-fill" d="M-18.3-7.877,10,.311V11.2L-18.3,3.011Z" transform="translate(186.341 96.856)" fill="#f11256"/>
          </g>
        </svg>
        Raspberry<span>Pie</span>
      </router-link>

      <nav>
        <svg class="close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.048 29.151">
          <g id="cross" transform="translate(-707 -57)">
            <rect id="diagonal-line-1" width="36" height="5" rx="2.5" transform="translate(707.057 82.615) rotate(-45)" fill="#292929"/>
            <rect id="diagonal-line-0" width="36" height="5" rx="2.5" transform="translate(710.536 57) rotate(45)" fill="#292929"/>
          </g>
        </svg>
        
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="#menu">Menu</router-link></li>
          <li><router-link to="/orders">Orders</router-link></li>
          <li>
            <router-link to="#menu" class="cta-button">Get a Treat</router-link>
          </li>
        </ul>
      </nav>

      <svg class="hamburger-menu" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33 29.174">
        <g id="hamburger-menu" transform="translate(-707 -57)">
          <rect id="bottom-line" width="19" height="5" rx="2.5" transform="matrix(1, -0.017, 0.017, 1, 707.958, 81.175)" fill="#292929"/>
          <rect id="middle-line" width="33" height="5" rx="2.5" transform="translate(707 69)" fill="#292929"/>
          <rect id="top-line" width="19" height="5" rx="2.5" transform="translate(720 57)" fill="#292929"/>
        </g>
      </svg>
    </header>
  </div>
</template>  

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
nav {
  position: fixed;
  right: 0;
  top: 0;
  background: var(--secondary-color);
  height: 100vh;
  width: 50%;
  z-index: 999;
  text-transform: uppercase;
  transform: translateX(100%);
  transition: transform .5s ease-in-out;
}

nav .close {
  float: right;  
  margin: 1.6em 2em;
  width: 1.8em;
  cursor: pointer;
}

nav .close g rect {
  fill: white;
}

nav ul {
  list-style-type: none;
  padding: 0;
  padding-top: 8em;
}

nav ul a {
  color: var(--secondary-txt-color);
  padding: .75em 2em;
  display: block;
}

nav ul a:hover {
  background-color: var(--accent-color);
}

header {
  display: flex;
  justify-content: space-between;
}

header .hamburger-menu {
  width: 1.8em;
  cursor: pointer;
}
</style>
