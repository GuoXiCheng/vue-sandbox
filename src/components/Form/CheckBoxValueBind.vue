<template>
    <div class="div-box">
        <input type="checkbox" id="checkbox" :true-value="dynamicTrueValue" :false-value="dynamicFalseValue"
            v-model="toggle" />
        <label for="checkbox">{{ toggle }}</label>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const dynamicFalseValue = 'no';
const dynamicTrueValue = 'yes';
const toggle = ref(dynamicFalseValue);
</script>