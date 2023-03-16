<template>
    <div>
        <h1>user-id:{{$route.params.id}}</h1>
        <h1>user-name:{{$route.query.name}}</h1>
    </div>
</template>

<script setup lang="ts">
    const route = useRoute()
    console.log(route.params, route.query)
</script>

<style scoped>
</style>