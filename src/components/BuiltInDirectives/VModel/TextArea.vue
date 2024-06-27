<template>
    <div class="div-box">
        <h1>v-model 指令: textarea</h1>
        <p>v-model</p>
        <textarea v-model="message" placeholder="Enter message"></textarea>

        <p>Message is: -{{ message }}-</p>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const message = ref('');
</script>