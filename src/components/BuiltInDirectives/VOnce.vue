<template>
    <div class="div-box">
        <h1>v-once 指令</h1>
        <p v-once>{{ msg }}</p>
        <p>{{ msg }}</p>
        <button @click="changeMessage">Change Message</button>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const msg = ref('Hello Vue 3.0');

function changeMessage() {
    msg.value = 'Hello Vue 3.0 Changed';
};
</script>