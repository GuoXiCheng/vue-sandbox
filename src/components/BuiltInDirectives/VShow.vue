<template>
    <div class="div-box">
        <h1>v-show 指令</h1>
        <div v-show="isShow">Hello Vue 3.0</div>
        <button @click="isShow = !isShow">Toggle Show</button>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const isShow = ref(true);
</script>