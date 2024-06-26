<template>
    <div class="div-box">
        <h1>v-cloak Directive</h1>
        <p v-cloak>{{ msg }}</p>
    </div>
</template>

<script setup lang="ts">
const msg = 'Hello Vue 3.0';
</script>

<style scoped>
[v-cloak] {
    display: none;
}
</style>