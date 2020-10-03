<template>
  <button @click="toggle"  ref="lazyerSwitchButton"
          :class="['lazyer-switch',{'lazyer-checked':value},classes]">
    <span :class="theme?theme:'lazyer-dot'">
      <span v-if="theme&&!loading" class="arrow"> > </span>
      <span v-if="loading" class="lazyer-switch-loadingIndicator"></span>
    </span>
  </button>
</template>

<script lang="ts">
import {computed, onMounted, ref} from "vue";

export default {
  props: {
    value: Boolean,
    loading: {
      type: Boolean,
      default: false
    },
    theme: {
      type: String,
    }
  },
  setup(props, context) {
    const { loading, theme} = props;
    const toggle = () => {
      context.emit("update:value", !props.value);

    };
    const lazyerSwitchButton = ref(null);
    onMounted(() => {
      if (loading) {
        lazyerSwitchButton.value.disabled = true;
      }
    });
    const classes = computed(() => {
      return {
        [`lazyer-theme-${theme}`]: theme,
      };
    });
    return {
      toggle, lazyerSwitchButton, classes
    };
  },
};
</script>

<style lang="scss" scoped>
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

  &.lazyer-theme-trendy {
    background: $button-bg-blue;


    & > span.trendy {
      width: $h + 4px;
      height: $h;
      top: 0;
      left: 0;
      border-radius: $h;
      background: $button-color-blue;
      position: absolute;
      transition: width 1s;
      display: flex;
      justify-content: center;
      align-items: center;

      .arrow {
        color: white;
      }
    }

    &.lazyer-checked {
      background: $button-bg-blue;

      > span.trendy {
        width: $h*2;

        .arrow {
          transform: rotate(180deg);
        }
      }
    }

    .lazyer-switch-loadingIndicator {
      border-color: white transparent transparent transparent;
    }
  }

  & + & {
    margin-left: 8px;
  }

  &[disabled] {
    cursor: not-allowed;
  }

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
          background: inherit;
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
    display: flex;
    justify-content: center;
    align-items: center;

    .lazyer-switch-loadingIndicator {
      width: 14px;
      height: 14px;
      display: inline-block;
      border-radius: 7px;
      border-color: darkgrey transparent transparent transparent;
      border-style: solid;
      border-width: 2px;
      animation: lazyer-spin 1s infinite linear;
      @keyframes lazyer-spin {
        0% {
          transform: rotate(0deg)
        }
        100% {
          transform: rotate(360deg)
        }
      }
    }
  }

  &.lazyer-checked {
    background: $button-color-blue;

    > span.lazyer-dot {
      left: calc(100% - #{$h2} - 2px);
    }
  }

  // 去除按钮周边的线
  &:focus {
    outline: none;
  }

  &:active {
    > span.lazyer-dot {
      width: $h2 + 4px;
    }
  }

  &.lazyer-checked:active {
    > span.lazyer-dot {
      width: $h2 + 4px;
      margin-left: -4px;
    }
  }
}
</style>
