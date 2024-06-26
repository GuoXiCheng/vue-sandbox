<template>
    <div class="div-box">
        <h1>v-else-if Directive</h1>
        <div v-if="type === 'A'">
            A
        </div>
        <div v-else-if="type === 'B'">
            B
        </div>
        <div v-else-if="type === 'C'">
            C
        </div>
        <div v-else>
            Not A/B/C
        </div>
        <button @click="toggle">Toggle</button>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const type = ref('A');

function toggle() {
    switch (type.value) {
        case 'A':
            type.value = 'B';
            break;
        case 'B':
            type.value = 'C';
            break;
        case 'C':
            type.value = 'A';
            break;
    }
}
</script>