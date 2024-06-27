<template>
    <div class="div-box">
        <h1>v-else 指令</h1>
        <div v-if="isShow">
            Now you see me
        </div>
        <div v-else>
            Now you don't
        </div>
        <button @click="toggle">Toggle</button>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const isShow = ref(true);

function toggle() {
    Math.random() > 0.5 ? isShow.value = true : isShow.value = false;
}
</script>