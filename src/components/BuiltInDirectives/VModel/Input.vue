<template>
    <div class="div-box">
        <h1>v-model 指令: input</h1>
        <p>v-model</p>
        <input v-model="message" placeholder="Enter message" />

        <p>v-model.lazy: 失去焦点或按下回车触发</p>
        <input v-model.lazy="message" placeholder="Enter message" />

        <p>v-model.number: 将输入的合法字符串转为数字</p>
        <input v-model.number="message" placeholder="Enter number" />

        <p>v-model.trim: 去除输入的首尾空格</p>
        <input v-model.trim="message" placeholder="Enter message" />

        <p>Message is: -{{ message }}-</p>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const message = ref('');
</script>