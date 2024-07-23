<template>
    <div class="div-box">
        <div>Selected: {{ selected.number }}</div>

        <select v-model="selected">
            <option disabled value="">Please select one</option>
            <option :value="{ number: 123 }">A</option>
            <option :value="{ number: 456 }">B</option>
            <option :value="{ number: 789 }">C</option>
        </select>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const selected = ref({ number: undefined });
</script>