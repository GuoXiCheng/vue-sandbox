<template>
    <div class="div-box">
        <div>Picked: {{ pick }}</div>

        <input type="radio" id="one" v-model="pick" :value="first" />
        <label for="one">One</label>

        <input type="radio" id="two" v-model="pick" :value="second" />
        <label for="two">Two</label>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const pick = ref('');
const first = 'first';
const second = 'second';
</script>