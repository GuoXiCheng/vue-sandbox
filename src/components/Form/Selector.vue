<template>
    <div class="div-box">
        <div>Selected: {{ selected }}</div>

        <select v-model="selected">
            <option disabled value="">Please select one</option>
            <option>A</option>
            <option>B</option>
            <option>C</option>
        </select>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const selected = ref();
</script>