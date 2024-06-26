<template>
    <div class="div-box">
        <h1>v-text Directive</h1>
        <div v-text="msg"></div>
        <!-- 等同于 -->
        <div>{{ msg }}</div>
    </div>
</template>

<script setup lang="ts">
const msg = 'Hello Vue 3.0'
</script>