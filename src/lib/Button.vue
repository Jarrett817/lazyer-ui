<template>
<!--<div :size="size">-->
<button class="banana-button" :class="{[`theme-${theme}`]:theme}">
    <!-- <button v-bind="$attrs">-->
    <!--插槽传值 -->
    <slot />
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
export default {
    // 防止定义在button外层元素
    inheritAttrs: false,
    props: {
        theme: {
            type: String,
            default: "button"
        }
    },
    setup(props, context) {
        // const {
        //     size,
        //     ...rest
        // } = context.attrs;
        // return {
        //     size,
        //     rest,
        // };
    },
};
</script>

<style lang="scss">
$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$blue: #40a9ff;
$radius: 4px;

.banana-button {
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
    border-radius: $radius;
    box-shadow: 0 1px 0 fade-out(black, 0.95);

    &+& {
        margin-left: 8px;
    }

    &:hover,
    &:focus {
        color: $blue;
        border-color: $blue;
    }

    &:focus {
        outline: none;
    }

    &::-moz-focus-inner {
        border: 0;
    }
}
</style>
