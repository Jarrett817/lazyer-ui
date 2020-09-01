<template>
<div>导航栏 |
    <router-link to="/">Frank</router-link>|
    <router-link to="xxx">Frank2</router-link>

    <hr>
    <!-- 组件内容展示-->
    <router-view />
</template>

<script>
export default {
    name: 'App'
}
</script>
