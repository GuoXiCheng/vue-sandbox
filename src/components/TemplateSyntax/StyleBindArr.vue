<template>
    <div class="div-box">
        <!-- 内联数组 -->
        <div :style="[styleObj1, styleObj2]">Style Bind Arr</div>
    </div>
</template>

<script setup lang="ts">
const styleObj1 = {
    color: "red",
    fontSize: "20px"
}

const styleObj2 = {
    backgroundColor: "yellow",
    fontSize: "20px"
}
</script>