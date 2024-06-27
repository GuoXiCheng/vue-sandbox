<template>
    <div class="div-box">
        <h1>v-model 指令: components</h1>
        <TextInput v-model="message" />
        <p>输入的消息是：{{ message }}</p>
    </div>
</template>

<script setup>
import TextInput from './TextInput.vue';
import { ref } from 'vue';

const message = ref('');
</script>