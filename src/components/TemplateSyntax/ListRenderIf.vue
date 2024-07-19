<template>
    <div class="div-box">
        <template v-for="todo in todos">
            <li>
                <span v-if="todo.isComplete">✔️</span>
                <span v-else>❌</span>
                {{ todo.name }}
            </li>
        </template>
    </div>
</template>

<script setup lang="ts">
const todos = [
    { name: 'Learn Vue 3', isComplete: false },
    { name: 'Learn Vue Router', isComplete: true },
    { name: 'Learn Vuex', isComplete: false },
];
</script>