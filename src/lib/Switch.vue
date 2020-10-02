<template>
  <button class="lazyer-switch" @click="toggle" :class="{'lazyer-checked':value}">
    <span></span>
  </button>
</template>

<script>
export default {
  props: {
    value: Boolean,
  },
  setup(props, context) {
    const toggle = () => {
      // 上下文对象添加input事件，传值可在子组件中用$event获取
      context.emit("update:value", !props.value);
    };
    return {
      toggle,
    };
  },
};
</script>

<style lang="scss">
@import "lazyer.scss";
$h: 22px;
$h2: $h - 4px;

.lazyer-switch {
  height: $h;
  width: $h * 2;
  border: none;
  background: #bfbfbf;
  border-radius: $h/2;
  position: relative;

  &:active {
    &::after {
      position: absolute;
      content: '';
      display: block;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      border-radius: $h/2;
      animation: lazyer-switch-ripple 500ms;

      @keyframes lazyer-switch-ripple {
        0% {
          opacity: 0;
          transform: scale(1);
          background:inherit;
        }
        100% {
          opacity: 1;
          transform: scale(1.4);
        }
      }
    }
  }

  > span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background: white;
    border-radius: $h/2;
    transition: all 250ms;
  }

  &.lazyer-checked {
    background: $main-blue;

    > span {
      left: calc(100% - #{$h2} - 2px);
    }
  }

  // 去除按钮周边的线
  &:focus {
    outline: none;
  }

  &:active {
    > span {
      width: $h2 + 4px;
    }
  }

  &.lazyer-checked:active {
    > span {
      width: $h2 + 4px;
      margin-left: -4px;
    }
  }
}
</style>
