<template>
    <!-- #region v-text -->
    <span v-text="msg"></span>
    <!-- 等同于 -->
    <span>{{ msg }}</span>
    <!-- #endregion v-text -->
</template>

<script setup>
const msg = 'Hello Vue 3.0'
</script>