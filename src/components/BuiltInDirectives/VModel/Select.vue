<template>
    <div class="div-box">
        <h1>v-model 指令: select</h1>
        <p>v-model</p>
        <select v-model="selected">
            <option disabled value="">Please select one</option>
            <option>A</option>
            <option>B</option>
            <option>C</option>
        </select>

        <p>Selected: -{{ selected }}-</p>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const selected = ref('');
</script>