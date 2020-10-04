<template>
  <button ref="lazyerButtonEl" class="lazyer-button" :class="classes">
    <!-- <button v-bind="$attrs">-->
    <span v-if="loading" class="lazyer-loadingIndicator"></span>
    <slot/>
    <div class="rippleWrapper" v-if="ripple">
      <Ripple/>
    </div>
  </button>
</template>

/*
默认所有属性绑定到根元素
可以使用inheritAttrs:false取消默认绑定
使用$attrs或者context.attrs获取所有属性
使用v-bind="$attrs"可以批量绑定属性
使用const{size,..rest}=context.attrs将拿到的属性分开，用到了es6剩余操作符
*/
/*
attr和props区别：
props要先声明props:{
size:String
}
而attrs不用先声明
props不包含事件，attrs包含
在props中没有声明的属性，会跑到attrs里
props支持string以外的类型，attrs只有string
props需要
*/

<script lang="ts">
import {
  computed, onMounted, ref
} from "vue";
import Ripple from "./Ripple.vue";

export default {
  components: {Ripple},
  // 防止定义在button外层元素
  inheritAttrs: true,
  props: {
    ripple: {
      type: Boolean,
      default: false
    },
    theme: {
      type: String,
      default: "button",
    },
    size: {
      type: String,
      default: "normal",
    },
    level: {
      type: String,
      default: "normal",
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const {
      theme,
      size,
      level
    } = props;
    const lazyerButtonEl = ref(null);
    onMounted(() => {
      if (props.loading) {
        lazyerButtonEl.value.disabled = true;
      }
    });
    const classes = computed(() => {
      return {
        [`lazyer-theme-${theme}`]: theme,
        [`lazyer-size-${size}`]: size,
        [`lazyer-level-${level}`]: level,
      };
    });
    return {
      classes, lazyerButtonEl
    };
  },
};
</script>

<style lang="scss" scoped>
@import "helper.scss";

$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$grey: grey;


.rippleWrapper {
  position: absolute;
  height: 100%;
  width: 100%;
}

.lazyer-button {
  height: $h;
  padding: 0 12px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background: white;
  color: $color;
  border: 1px solid $border-color;
  border-radius: 16px;
  box-shadow: 0 1px 0 fade-out(black, 0.95);
  transition: background 250ms;
  position: relative;
  overflow: hidden;

  & + & {
    margin-left: 8px;
  }

  &:hover,
  &:focus {
    color: $button-color-blue;
    border-color: $button-color-blue;
  }

  &:focus {
    outline: none;
  }

  &::-moz-focus-inner {
    border: 0;
  }


  &.lazyer-size-big {
    font-size: 24px;
    height: 48px;
    padding: 0 16px;
    border-radius: 32px;
  }

  &.lazyer-size-small {
    font-size: 12px;
    height: 20px;
    padding: 0 4px;
  }

  &.lazyer-theme-button {
    &[disabled] {
      cursor: not-allowed;
      opacity: 0.5;
      color: $grey;

      &:hover {
        border-color: $grey;
      }
    }

    &.lazyer-level-main {
      background: $button-bg-blue;
      color: $button-color-blue;
      border-color:transparent;

      &:hover,
      &:focus {
        background: darken($button-bg-blue, 10%);
      }
    }

    &.lazyer-level-danger {
      background: $button-bg-red;
      border-color: transparent;
      color: $button-color-red;

      &:hover,
      &:focus {
        background: darken($button-bg-red, 10%);
      }
    }
  }

  &.lazyer-theme-link {
    border-color: transparent;
    box-shadow: none;
    color: $button-color-blue;

    &:hover,
    &:focus {
      color: lighten($button-color-blue, 15%);
    }

    &.lazyer-level-danger {
      color: $button-color-red;

      &:hover,
      &:focus {
        color: lighten($button-color-red, 15%);
      }
    }
  }

  &.lazyer-theme-text {
    border-color: transparent;
    box-shadow: none;
    color: inherit;

    &:hover,
    &:focus {
      background: darken(white, 5%);
    }

    &.lazyer-level-main {
      color: $button-color-blue;

      &:hover,
      &:focus {
        background:$button-bg-blue;
        color: darken($button-color-blue, 10%);
      }
    }

    &.lazyer-level-danger {
      color: $button-color-red;

      &:hover,
      &:focus {
        background: $button-bg-red;
        color: darken($button-color-red, 10%);
      }
    }
  }

  &.lazyer-theme-link,
  &.lazyer-theme-text {
    &[disabled] {
      cursor: not-allowed;
      opacity: 0.5;
    }
  }

  > .lazyer-loadingIndicator {
    width: 14px;
    height: 14px;
    display: inline-block;
    margin-right: 4px;
    border-radius: 7px;
    border-color: $button-color-blue $button-color-blue $button-color-blue transparent;
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


</style>
