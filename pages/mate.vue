<template>
    <!-- <Title>snow-title</Title> -->
    <div>
        snow-title
    </div>
</template>

<script setup lang="ts">
useHead({
    title: 'snow-title-2',
    meta: [
        { name: 'description', content: 'snow-desc'},
        { name: 'keywords', content: 'snow-kw'}
    ]
})
definePageMeta({
    layout: 'layout-snow'
})
const router = useRoute()
function enableLayout () {
    router.meta.layout = "layout-snow"
}
</script>

<style scoped>
</style>
