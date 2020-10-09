<template>
  <div class="lazyer-total-wrapper">
    <span ref="lazyerSpanElement">
      <slot name="title"/>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-xiala"></use>
      </svg>
    </span>
    <main ref="lazyerMainElement">
      <component v-for="item in contents" :is="item"
                 :key="item.props.key"
                 :ref="el=>{itemRefs.push(el)}"
      />
    </main>
  </div>
</template>

<script lang="ts">
import {ref, onMounted, onBeforeUpdate, computed} from "vue";
import LazyerMenuItem from "./LazyerMenuItem.vue";

export default {
  setup(props, context) {
    const contents = computed(() => context.slots.content());
    const lazyerMainElement = ref(null);
    const lazyerSpanElement = ref(null);
    let itemRefs = [];
    let height = 0;
    const bindEvents=(target)=>{
      target.value.addEventListener("mouseover", () => {
        lazyerMainElement.value.style.height = height + "px";
      });
      target.value.addEventListener("mousedown", () => {
        lazyerMainElement.value.style.height = height + "px";
      });
      target.value.addEventListener("mouseout", () => {
        lazyerMainElement.value.style.height = 0 + "px";
      });    }
    onMounted(() => {
      itemRefs.forEach(e => {
        height += e.$el.offsetHeight;
      });
      bindEvents(lazyerSpanElement)
      bindEvents(lazyerMainElement)
      contents.value.forEach((content) => {
        if (content.type !== LazyerMenuItem) {
          throw new Error("dropdown只能包含menuItem!");
        }
      });
      onBeforeUpdate(() => {
        itemRefs = [];
      });
    });
    return {
      contents, itemRefs, lazyerMainElement, lazyerSpanElement
    };
  }
};
</script>

<style lang="scss" scoped>
@import './helper.scss';

.lazyer-total-wrapper {
  position: relative;
}

span {
  color: $button-color-blue;
  cursor: pointer;

  .icon {
    margin-left: 3px;
  }

  &:active, &:hover {
    & {
      color: lighten($button-color-blue, 10%);
    }
  }
}

main {
  width: fit-content;
  background: #ffffff;
  box-shadow: 0 0 3px #d9d9d9,
  0 0 3px #ffffff;
  color: #9c9c9c;
  transition: height linear 250ms;
  position: absolute;
  z-index: 1;
  cursor: pointer;
  border-radius: 4px;
  line-height: 32px;
  overflow: hidden;
  height: 0;
}
</style>