<template>
  <div class="banana-tabs">
    <div class="banana-tabs-nav">
      <div class="banana-tabs-nav-item" v-for="(t,index) in titles" :key="index">{{ t }}</div>
    </div>
    <div class="banana-tabs-content">
      {{ current }}
      <Component class="banana-tabs-content-item" :is="c"></Component>
    </div>
  </div>
</template>

<script lang="ts">
import Tab from "./Tab.vue";
import {computed} from "vue";

export default {
  props: {
    selected: {
      type: String
    }
  },
  setup(props, context) {
    const defaults = context.slots.default();
    defaults.forEach((tag) => {
      if (tag.type !== Tab) {
        throw new Error("Tabs标签只能包含Tab");
      }
    });
    const current = computed(() => {
      console.log("重新 return");
      return defaults.filter((tag) => {
        return tag.props.title === props.selected;
      })[0];
    });

    const titles = defaults.map((tag) => {
      return tag.props.title;
    });
    const select = (title: string) => {
      context.emit("update:selected", title);
    };
    return {
      defaults,
      titles,
      current,
      select
    };
  }
};
</script>

<style lang="scss" scoped>
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.banana-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;

    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;

      &:first-child {
        margin-left: 0;
      }

      &.selected {
        color: $blue;
      }
    }
  }

  &-content {
    padding: 8px 0;
  }
}
</style>