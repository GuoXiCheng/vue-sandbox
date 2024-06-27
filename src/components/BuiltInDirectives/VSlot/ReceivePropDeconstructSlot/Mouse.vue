<template>
    <div @mousemove="updateMousePosition" style="height: 25vh">
        <slot :x="mouseX" :y="mouseY"></slot>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const mouseX = ref(0);
const mouseY = ref(0);

const updateMousePosition = (event) => {
    mouseX.value = event.clientX;
    mouseY.value = event.clientY;
}
</script>