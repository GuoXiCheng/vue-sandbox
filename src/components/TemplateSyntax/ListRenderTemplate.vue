<template>
    <div class="div-box">
        <template v-for="item in items">
            <li>{{ item.role }}</li>
            <li>{{ item.msg }}</li>
        </template>
    </div>
</template>

<script setup lang="ts">
const items = [
    { role: 'Admin', msg: 'Welcome to the admin page' },
    { role: 'User', msg: 'Welcome to the user page' },
    { role: 'Guest', msg: 'Welcome to the guest page' },
];
</script>