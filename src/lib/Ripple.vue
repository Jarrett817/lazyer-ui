<template>
  <template v-if="isMobile">
    <div class="lazyer-ripple-container" ref="lazyerRippleElement" @touchstart="showRipple">
    </div>
  </template>
  <template v-else>
    <div class="lazyer-ripple-container" ref="lazyerRippleElement" @mousedown="showRipple">
    </div>
  </template>
</template>

<script lang="ts">
import {computed, createApp, h, ref} from "vue";

export default {
  props: {},
  setup() {
    const lazyerRippleElement = ref(null);
    const isMobile = computed(() => {
      return !!navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);
    });
    const showRipple = (event) => {
      //创建一个span用来做波纹效果
      const divWidth = lazyerRippleElement.value.offsetWidth;
      const divHeight = lazyerRippleElement.value.offsetHeight;
      //获取元素的大小
      const pos = lazyerRippleElement.value.getBoundingClientRect();
      //获取点击坐标
      let clientX = 0;
      let clientY = 0;
      if (isMobile.value) {
        clientX = event.targetTouches[0].clientX;
        clientY = event.targetTouches[0].clientY;
      } else {
        clientX = event.clientX;
        clientY = event.clientY;
      }
      const x = clientX - pos.left - divWidth / 6;
      const y = clientY - pos.top - divHeight / 6;
      const style = `top:${y}px;left:${x}px;width:${divWidth / 3}px; height:${divHeight / 3}px;`;
      const ripple = createApp({
        render() {
          return h("span", {style}
          );
        }
      });
      ripple.mount(lazyerRippleElement.value);
      setTimeout(() => {
        //清除ripple
        ripple.unmount(lazyerRippleElement.value);
      }, 250);
    };
    return {
      showRipple, lazyerRippleElement, isMobile
    };
  }
};
</script>

<style lang="scss" scoped>
.lazyer-ripple-container {
  height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden;
  //禁止文本选择
  -webkit-user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -o-user-select: none;
  user-select: none;
  //加上v-deep才能选中动态生成的span
  & > ::v-deep(span) {
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    animation: lazyer-ripple 250ms;
    width: 10px;
    height: 10px;

    @keyframes lazyer-ripple {
      from {
        opacity: 1;
        transform: scale(0.5);
      }
      to {
        opacity: 0;
        transform: scale(9);
      }
    }
  }
}
</style>