<template>
  <div class="lazyer-tabs">
    <div class="lazyer-tabs-nav" ref="container">
      <div class="lazyer-tabs-nav-item"
           :class="{selected: t===selected}"
           v-for="(t,index) in titles" :key="index"
           @click="select(t)"
           :ref="el=>{if(t===selected) selectedItem=el}"
      >{{ t }}
      </div>
      <div class="lazyer-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="lazyer-tabs-content">
      <component class="lazyer-tabs-content-item"
                 :is="current" :key="current.props.title"></component>
    </div>
  </div>
</template>

<script lang="ts">
import Tab from "./LazyerTabsItem.vue";
import {computed, ref, watchEffect, onMounted} from "vue";

export default {
  props: {
    selected: {
      type: String
    }
  },

  setup(props, context) {
    const selectedItem = ref<HTMLDivElement>(null);
    const indicator = ref<HTMLDivElement>(null);
    const container = ref<HTMLDivElement>(null);
    onMounted(() => {
      watchEffect(() => {
        const {width} = selectedItem.value.getBoundingClientRect();
        indicator.value.style.width = width + "px";
        const {
          left: left1
        } = container.value.getBoundingClientRect();
        const {
          left: left2
        } = selectedItem.value.getBoundingClientRect();
        const left = left2 - left1;
        indicator.value.style.left = left + "px";
      }, {flush: "post"});
    });
    const defaults = context.slots.default();
    defaults.forEach((tag) => {
      if (tag.type !== Tab) {
        throw new Error("Tabs标签只能包含Tab!");
      }
    });
    const current = computed(() => {
      return defaults.find((tag) => {
        return tag.props.title === props.selected;
      });
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
      select,
      current,
      selectedItem,
      indicator,
      container,
    };
  }
};
</script>

<style lang="scss" scoped>
@import "helper.scss";

$blue: $button-color-blue;
$color: #333;
$border-color: #d9d9d9;
.lazyer-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    position: relative;

    &-indicator {
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      width: 100px;
      transition: all 250ms;
    }

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