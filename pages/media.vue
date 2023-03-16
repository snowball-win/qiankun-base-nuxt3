<!-- 测试媒体查询 -->
<template>
    <div>
        <h1>media</h1>
        <div class="div1">test</div>
        <div class="div2">test2</div>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
// 小于1000
@media screen and (max-width: 1000px) {
    $FontSize: 30px;
    // 失败
    body {
        background-color: red;
    }
    // 成功
    h1{
        color: green;
    }
    // 成功
    .div1{
        font-size: $FontSize;
    }
    .div2{
        font-size: px2rem(60);
    }
}
// 1000到1500
@media screen and (min-width: 1000px) and (max-width: 1500px) {
    $FontSize: 50px;
    // 失败
    body {
        background-color: yellow;
    }
    // 成功
    h1{
        color: green;
    }
    // 成功
    .div1{
        font-size: $FontSize;
    }
    .div2{
        font-size: px2rem(100);
    }
}
</style>
