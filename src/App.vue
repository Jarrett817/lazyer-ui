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
        const menuVisible = ref(false)
        provide('xxx', menuVisible)
    }
};
</script>
