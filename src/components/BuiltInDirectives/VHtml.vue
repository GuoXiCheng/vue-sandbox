<template>
    <div class="div-box">
        <h1>v-html 指令</h1>
        <div v-html="html"></div>
    </div>
</template>

<script setup>
const html = '<h2>Vue 3</h2>';
</script>