<template>
    <div class="div-box">
        <p v-bind="objectOfAttrs">Attribute Bind Multiple Valued</p>
    </div>
</template>

<script setup lang="ts">
const objectOfAttrs = {
    id: 'id1',
    class: 'class1',
    style: 'color: red'
}
</script>

<style scoped>
.class1 {
    font-size: 20px;
    font-weight: bold;
}
</style>