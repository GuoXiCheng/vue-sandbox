<template>
    <div class="div-box">
        <!--  v-for in -->
        <ul>
            <li v-for="(value, key) in myObject" :key="key">
                {{ key }}: {{ value }}
            </li>
        </ul>

        <!--  v-for in with index -->
        <ul>
            <li v-for="(value, key, index) in myObject" :key="key">
                {{ key }}: {{ value }} - {{ index }}
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
const myObject = {
    a: 1,
    b: 2,
    c: 3,
};
</script>