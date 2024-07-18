<template>
    <Interpolation />
    <AttributeBind />
    <AttributeBindBool />
    <AttributeBindMultipleValued />
    <ClassBindObj />
    <ClassBindArr />
    <StyleBindObj />
    <StyleBindArr />
</template>

<script setup>
import Interpolation from '@/components/TemplateSyntax/Interpolation.vue';
import AttributeBind from '@/components/TemplateSyntax/AttributeBind.vue';
import AttributeBindBool from '@/components/TemplateSyntax/AttributeBindBool.vue';
import AttributeBindMultipleValued from '@/components/TemplateSyntax/AttributeBindMultipleValued.vue';
import ClassBindObj from '@/components/TemplateSyntax/ClassBindObj.vue';
import ClassBindArr from '@/components/TemplateSyntax/ClassBindArr.vue';
import StyleBindObj from '@/components/TemplateSyntax/StyleBindObj.vue';
import StyleBindArr from '@/components/TemplateSyntax/StyleBindArr.vue';
</script>