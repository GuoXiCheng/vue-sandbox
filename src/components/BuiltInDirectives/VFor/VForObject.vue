<template>
    <div class="div-box">
        <h1>v-for Directive with Object</h1>
        <ul>
            <li v-for="(value, key) in person">{{ key }}: {{ value }}</li>
        </ul>

        <h1>v-for Directive with Object and Index</h1>
        <ul>
            <li v-for="(value, key, index) in person">{{ index + 1 }}. {{ key }}: {{ value }}</li>
        </ul>
    </div>
</template>

<script setup lang="ts">
const person = {
    name: 'John Doe',
    age: 30,
    email: 'xxx@email.com'
}
</script>