<template>
    <div class="div-box">
        <!-- 单行文本框 -->
        <p>Single Line Message is: {{ singleLineMsg }}</p>
        <input v-model="singleLineMsg" placeholder="edit me" />

        <!-- 多行文本框 -->
        <p style="white-space: pre-line;">Multiple Line Message is: {{ multipleLinesMsg }}</p>
        <textarea v-model="multipleLinesMsg" placeholder="add multiple lines"></textarea>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const singleLineMsg = ref('');
const multipleLinesMsg = ref('');
</script>