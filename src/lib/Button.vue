<template>
<div :size="size">
    <button v-bind="rest">
        <!-- <button v-bind="$attrs">-->
        <!--插槽传值 -->
        <slot />
    </button>
</div>
</template>

<script lang="ts">
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
export default {
    // 防止定义在button外层元素
    inheritAttrs: false,
    setup(props, context) {
        const {
            size,
            ...rest
        } = context.attrs;
        return {
            size,
            rest,
        };
    },
};
</script>
