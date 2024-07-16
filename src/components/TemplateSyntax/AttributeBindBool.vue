<template>
    <div class="div-box">
        <button :disabled="!isButtonDisabled">启用按钮</button>

        <button :disabled="isButtonDisabled">禁用按钮</button>
    </div>
</template>

<script setup lang="ts">
const isButtonDisabled = true;
</script>