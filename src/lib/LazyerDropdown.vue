<template>
  <div class="lazyer-total-wrapper">
    <header>
      <slot name="title"/>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-xiala"></use>
      </svg>
    </header>
    <main>
      <component v-for="(item,index) in contents" :is="item"
                 :key="contents[index].props.key"
                 :ref="setItemRef"
      />
    </main>
  </div>
</template>

<script lang="ts">
import {ref, onMounted, onUpdated, onBeforeUpdate, computed} from "vue";
import LazyerMenuItem from "./LazyerMenuItem.vue";

export default {
  props: {
    key: {
      type: Number
    }
  },
  setup(props, context) {
    onMounted(() => {
      contents.value.forEach((content) => {
        if (content.type !== LazyerMenuItem) {
          throw new Error("dropdown只能包含menuItem!");
        }
      });
    });
    let height;
    let itemRefs = [];
    const setItemRef = e => {
      itemRefs.push(e);
      console.log(e)
      console.log(e.$el)
      console.log(e.$el.getBoundingClientRect())
    };
    onBeforeUpdate(() => {
      itemRefs = [];
    });
    onUpdated(() => {
      console.log(itemRefs);
    });

    const contents = computed(() => context.slots.content());
    return {
      contents, setItemRef, itemRefs
    };
  }
};
</script>

<style lang="scss" scoped>
@import './helper.scss';

.lazyer-total-wrapper {
  position: relative;

  &:active, &:hover {
    & main {
      //max-height: 9999px;
    }

    & header {
      color: lighten($button-color-blue, 10%);
    }
  }
}

header {
  color: $button-color-blue;
  cursor: pointer;

  .icon {
    margin-left: 3px;
  }

}

main {
  width: fit-content;
  background: #ffffff;
  box-shadow: 0 0 3px #d9d9d9,
  0 0 3px #ffffff;
  color: #9c9c9c;
  transition: max-height linear 250ms;
  position: absolute;
  z-index: 1;
  cursor: pointer;
  border-radius: 4px;
  line-height: 32px;
  overflow: hidden;
  max-height: 0;
}
</style>