<template>
    <div class="div-box">
        <h1>v-slot 指令: 具名插槽</h1>
        <BaseLayout>
            <template v-slot:header>
                Header content
            </template>

            <template v-slot:default>
                Default slot content
            </template>

            <template v-slot:footer>
                Footer content
            </template>
        </BaseLayout>
    </div>
</template>

<script setup lang="ts">
import BaseLayout from './BaseLayout.vue';
</script>