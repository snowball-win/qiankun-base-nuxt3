<!-- 测试媒体查询 -->
<template>
    <div>
        <div>rem</div>
        <div class="div1">test</div>
        <div>测试</div>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
div{
    font-size: 16px
}
// 大于1000
@media screen and (min-width: 1000px) {
    html {
        font-size: 16px;
    }
    body {
        font-size: 16px;
    }
    div{
        font-size: 60PX;
        color: red;
    }
}
</style>
