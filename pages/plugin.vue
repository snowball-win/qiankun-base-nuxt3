<template>
    <div>
        snow-plugin
    </div>
</template>

<script setup lang="ts">
const { $hello } = useNuxtApp()
console.log('9', $hello('world'))



definePageMeta({
    middleware: ["auth", "snow"]
})

</script>

<style scoped>
</style>
