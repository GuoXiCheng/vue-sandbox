<template>
    <div class="div-box">
        <div>{{ msg }}</div>

        <div>{{ ok ? 'YES' : 'NO' }}</div>

        <div>{{ number + 1 }}</div>

        <div>{{ str.split('').reverse().join('') }}</div>

        <div>{{ formatDate(new Date) }}</div>
    </div>
</template>



<script setup lang="ts">

const msg = 'Hello, Vue 3!';

const ok = true;

const number = 123;

const str = "ABCDEF";

const formatDate = (date: Date) => {
    const pad = (n: number) => n.toString().padStart(2, '0');
    return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

</script>