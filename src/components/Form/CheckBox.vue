<template>
    <div class="div-box">
        <!-- 单一复选框，绑定布尔值 -->
        <input type="checkbox" id="checkbox" v-model="checked" />
        <label for="checkbox">{{ checked }}</label>

        <!-- 多个复选框，绑定数组 -->
        <div>Checked names: {{ checkedNames }}</div>

        <input type="checkbox" id="jack" value="Jack" v-model="checkedNames" />
        <label for="jack">Jack</label>

        <input type="checkbox" id="john" value="John" v-model="checkedNames" />
        <label for="john">John</label>

        <input type="checkbox" id="mike" value="Mike" v-model="checkedNames" />
        <label for="mike">Mike</label>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const checked = ref(false);
const checkedNames = ref([]);
</script>