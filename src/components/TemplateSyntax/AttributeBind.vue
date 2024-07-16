<template>
    <div class="div-box">
        <img v-bind:src="imgSrc" />

        <img :src="imgSrc" />

        <!-- 同名简写 vue3.4 以上 -->
        <img :src />

        <img v-bind:src />
    </div>
</template>

<script setup lang="ts">
const imgSrc = "https://img2.baidu.com/it/u=3027327506,3393866148&fm=253&fmt=auto&app=138&f=JPEG?w=130&h=170";

const src = "https://img0.baidu.com/it/u=1472956462,1218866004&fm=253&fmt=auto&app=120&f=JPEG?w=144&h=143"
</script>