<template>
    <div>
        <h1>TypeSctipt</h1>
        <div>{{ age }}</div>
    </div>
</template>

<script setup lang="ts">
// 有明确的类型，即：number （数值类型）
let age: number = 20
</script>

<style scoped>
</style>