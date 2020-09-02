<template>
<!-- 组件内容展示-->
<router-view />
</template>

<script lang="ts">
import {
    ref,
    provide
} from 'vue';
export default {
    name: "App",
    setup() {
        const width = document.documentElement.clientWidth

        const menuVisible = ref(width <= 500 ? false : true)
        provide('menuVisible', menuVisible)
    }
};
</script>
