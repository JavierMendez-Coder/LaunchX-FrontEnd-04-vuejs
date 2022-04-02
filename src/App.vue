<template>
  <router-view />
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap");

:root {
  --main-txt-color: #292929;
  --secondary-txt-color: white;
  --description-txt-color: #717171;
  --accent-color: #f11256;
  --secondary-color: #292929;
  --secondary-bg-color: #e4e4e4;
}

#app {
  font-family: Poppins, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--main-txt-color);
  margin: 1.5em;
}

a {
  text-decoration: none;
  font-size: 1.3rem;
}

.logo {
  color: var(--main-txt-color);
  font-weight: bold;
  display: flex;
  align-items: center;
}

.logo span {
  color: var(--accent-color);
}

.logo .raspberry-pie-logo {
  width: 1.4em;
  margin-right: 0.8em;
}

@media only screen and (min-width: 680px) {
  #app {
    margin: 1.5em 5em;
  }
}
</style>
