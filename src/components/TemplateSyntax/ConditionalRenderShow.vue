<template>
    <div class="div-box">
        <!--  v-show  -->
        <h1 v-show="ok">Hello, Vue 3!</h1>
    </div>
</template>

<script setup lang="ts">
const ok = true;
</script>