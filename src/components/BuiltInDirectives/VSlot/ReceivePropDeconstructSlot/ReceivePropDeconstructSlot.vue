<template>
    <div class="div-box">
        <h1>v-slot 指令: 接收 prop 的默认插槽，并解构</h1>
        <Mouse v-slot="{ x, y }">
            <p>Mouse position: {{ x }}, {{ y }}</p>
        </Mouse>
    </div>
</template>

<script setup>
import Mouse from './Mouse.vue';
</script>