<template>
    <div class="div-box">
        <h1>v-for Directive with Array</h1>
        <ul>
            <li v-for="item in items">{{ item }}</li>
        </ul>

        <h1>v-for Directive with Array and Index</h1>
        <ul>
            <li v-for="(item, index) in items">{{ index + 1 }}. {{ item }}</li>
        </ul>
    </div>
</template>

<script setup lang="ts">
const items = [
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
    'Item 5'
];
</script>