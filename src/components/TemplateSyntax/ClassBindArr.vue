<template>
    <div class="div-box">
        <!-- 使用数组渲染多个 class -->
        <div :class="['class1', 'class2']">Class Bind Array</div>

        <!-- 使用三元表达式 -->
        <div :class="[isActive ? 'class1' : 'class2', 'errorClass']">Ternary Expression</div>

        <!-- 在数组中使用对象语法 -->
        <div :class="[{ [activeClass]: isActive }, 'errorClass']">Object Syntax</div>
    </div>
</template>

<script setup lang="ts">
const activeClass = "class1";
const isActive = true;
</script>

<style scoped>
.class1 {
    font-size: 20px;
    font-weight: bold;
}

.class2 {
    color: red;
}

.errorClass {
    background-color: yellow;
}
</style>