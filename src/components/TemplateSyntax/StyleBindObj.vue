<template>
    <div class="div-box">
        <!-- 内联字面量: camelCase （推荐）-->
        <div :style="{ color: 'red', fontSize: '20px' }">Style Bind Obj Literal</div>

        <!-- 内联字面量：kebab-case -->
        <div :style="{ 'background-color': 'yellow', 'font-size': '20px' }">Style Bind Obj Literal</div>

        <!-- 内联对象 -->
        <div :style="styleObj">Style Bind Obj</div>
    </div>
</template>

<script setup lang="ts">
const styleObj = {
    color: "red",
    fontSize: "20px"
}
</script>