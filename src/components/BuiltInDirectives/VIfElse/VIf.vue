<template>
    <div class="div-box">
        <h1>v-if Directive</h1>
        <div v-if="isShow">Hello Vue 3.0</div>
        <button @click="isShow = !isShow">Toggle</button>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const isShow = ref(true);
</script>