<template>
    <div class="div-box">
        <h1>v-for Directive with Iterable</h1>
        <ul>
            <li v-for="item in set">{{ item }}</li>
        </ul>

        <ul>
            <li v-for="item in map">{{ item[0] }}: {{ item[1] }}</li>
        </ul>
    </div>
</template>

<script setup lang="ts">
const set = new Set(['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5']);

const map = new Map([
    ["key1", "val1"],
    ["key2", "val2"],
    ["key3", "val3"],
    ["key4", "val4"],
    ["key5", "val5"]
]);
</script>