<template>
    <div class="div-box">
        <!-- #region lazy -->
        <p>Message is: {{ msg }}</p>
        <input v-model.lazy="msg" />
        <!-- #endregion lazy -->

        <!-- #region number -->
        <p>Age is: {{ age }}</p>
        <input v-model.number="age" />
        <!-- #endregion number -->

        <!-- #region trim -->
        <p>Trim Value is: --{{ val }}--</p>
        <input v-model.trim="val" />
        <!-- #endregion trim -->
    </div>
</template>

<script setup>
import { ref } from 'vue'
const msg = ref('');
const age = ref(0);
const val = ref('');
</script>