<template>
    <div class="div-box">
        <h1>v-for Directive with Array and ID</h1>
        <ul>
            <li v-for="(item, index) in items" :key="item.id">{{ index + 1 }}. {{ item.name }}</li>
        </ul>
        <button @click="sort">Sort</button>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const items = ref([
    { id: 3, name: 'Item 3' },
    { id: 5, name: 'Item 5' },
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 4, name: 'Item 4' },
]);

function sort() {
    items.value.sort((a, b) => a.id - b.id);
}
</script>