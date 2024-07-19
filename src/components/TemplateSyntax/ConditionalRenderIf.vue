<template>
    <div class="div-box">
        <!--  v-if  -->
        <h1 v-if="visible">You can see me</h1>

        <!--  v-else  -->
        <h1 v-if="visible">You can see me</h1>
        <h1 v-else>You can't see me</h1>

        <!--  v-else-if  -->
        <h1 v-if="type === 'A'">Type is A</h1>
        <h1 v-else-if="type === 'B'">Type is B</h1>
        <h1 v-else-if="type === 'C'">Type is C</h1>
        <h1 v-else>Not A/B/C</h1>


    </div>
</template>

<script setup lang="ts">
const visible = true;
const type = 'A';
</script>