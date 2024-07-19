<template>
    <div class="div-box">
        <!--  v-for in -->
        <ul>
            <li v-for="(item, index) in items" :key="item.id">
                {{ item.text }} - {{ index }}
            </li>
        </ul>

        <!-- v-for of -->
        <ul>
            <li v-for="item of items" :key="item.id">
                {{ item.text }}
            </li>
        </ul>

        <!-- v-for destructuring -->
        <ul>
            <li v-for="({ id, text }, index) in items" :key="id">
                {{ text }} - {{ index }}
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
const items = [
    { id: 1, text: 'Item 1' },
    { id: 2, text: 'Item 2' },
    { id: 3, text: 'Item 3' },
    { id: 4, text: 'Item 4' },
    { id: 5, text: 'Item 5' },
];
</script>