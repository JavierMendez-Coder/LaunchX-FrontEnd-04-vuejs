<template>
  <div class="checkbox"></div>
</template>

<script>
export default {
  name: "Checkbox",
};
</script>

<style scoped>
.checkbox {
  width: 0.5em;
  height: 0.5em;
  margin-right: 0.6em;
  border: solid 0.15em var(--description-txt-color);
  border-radius: 0.25em;
}

.checked {
  background: var(--main-txt-color);
  border-color: var(--main-txt-color);
}
</style>