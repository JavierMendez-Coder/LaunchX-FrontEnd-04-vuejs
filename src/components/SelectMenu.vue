<template>
  <div class="wrapper">
    <div class="header" :id="`${id}-header`" @click="clickHandler(this.id)">
      <p>
        List of <span>{{ listName }}</span>
      </p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 30 16"
      >
        <path
          :id="`${id}-arrow`"
          class="down"
          d="M13.541,1.556a2,2,0,0,1,2.918,0L26.843,12.632A2,2,0,0,1,25.384,16H4.616a2,2,0,0,1-1.459-3.368Z"
          fill="#f11256"
        />
      </svg>
    </div>
    <div class="body hide" :id="`${id}-body`">
      <SelectItem
        v-for="item in itemsList"
        :key="item.id"
        :id="item.id"
        :itemName="item.itemName"
        :price="item.price"
        @click="checkItem(item.id)"
      />
    </div>
  </div>
</template>

<script>
import SelectItem from "./SelectItem.vue";

export default {
  name: "SelectMenu",
  props: {
    id: String,
    listName: String,
    itemsList: Array,
  },
  components: {
    SelectItem,
  },
  methods: {
    checkItem(id) {
      const selectItem = document.getElementById(id);
      const checkbox = document.getElementById(`${id}cb`);
      if (selectItem.classList.contains("checked")) {
        selectItem.classList.remove("checked");
        checkbox.classList.remove("checked");
      } else {
        selectItem.classList.add("checked");
        checkbox.classList.add("checked");
      }
    },
    clickHandler(id) {
      const body = document.getElementById(`${id}-body`);
      const arrow= document.getElementById(`${id}-arrow`);
      if (body.classList.contains("hide")) {
        body.classList.remove("hide");
        arrow.classList.remove("down");
      } else {
        body.classList.add("hide");
        arrow.classList.add("down");
      }
    },
  },
  mounted() {
    this.itemsList.map((item) => {
      if (item.checked) {
        const selectItem = document.getElementById(item.id);
        selectItem.click();
      }
    });
  },
};
</script>

<style scoped>
.wrapper {
  overflow: hidden;
  margin: 1em;
  border-radius: 1em / 1em;
  box-shadow: 0.05em 0.1em 0.2em rgba(6, 6, 6, 0.25);
}

.header {
  padding: 0.7em 1.4em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}

.header p {
  margin: 0;
  font-size: 1.2rem;
  font-weight: bold;
}

.header span {
  color: var(--accent-color);
}

svg {
  width: 1em;
}

svg path {
  transform: none;
}

svg path.down {
  transform: translate(30px, 16px) rotate(180deg);
}

.body {
  height: 10em;
  margin-bottom: 1em;
  padding: 0.7em 1.4em;
  padding-right: 0;
  overflow-y: scroll;
  overflow-x: hidden;
}

.body.hide {
  display: none;
}

.body::-webkit-scrollbar {
  width: 1.4em;
}

.body::-webkit-scrollbar-thumb {
  background-color: var(--description-txt-color);
  border-radius: 2em;
  border: 0.6em solid rgba(0, 0, 0, 0);
  background-clip: padding-box;
}
</style>