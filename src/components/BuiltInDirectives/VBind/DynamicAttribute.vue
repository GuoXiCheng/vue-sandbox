<template>
    <div class="div-box">
        <h1>v-bind 指令: 动态 attribute</h1>

        <button v-bind:[key]="value">Dynamic Button</button>
        <!-- 缩写 -->
        <button :[key]="value">Dynamic Button</button>
        <p>当前按钮状态: <strong>{{ key === 'disabled' ? (value ? '禁用' : '启用') : '自定义样式' }}</strong></p>

        <button @click="disableButton">禁用</button>
        <button @click="enableButton">启用</button>
        <button @click="toggleStyle">应用红色文本</button>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const key = ref('disabled');
const value = ref<boolean | string>(true);

function disableButton() {
    key.value = 'disabled';
    value.value = true;
}

function enableButton() {
    key.value = 'disabled';
    value.value = false;
}

function toggleStyle() {
    key.value = 'style';
    value.value = 'color: red;';
}
</script>