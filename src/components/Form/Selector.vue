<template>
    <div class="div-box">
        <!-- 单选 -->
        <div>Selected: {{ selected }}</div>

        <select v-model="selected">
            <option disabled value="">Please select one</option>
            <option>A</option>
            <option>B</option>
            <option>C</option>
        </select>

        <!-- 多选 -->
        <div>Selected: {{ multipleSelected }}</div>

        <select v-model="multipleSelected" multiple>
            <option>A</option>
            <option>B</option>
            <option>C</option>
        </select>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const selected = ref();
const multipleSelected = ref([]);
</script>