<template>
    <VText />
    <VHtml />
    <VShow />
    <VIf />
    <VElse />
    <VElseIf />
    <VForArray />
    <VForObject />
    <VForStr />
    <VForNum />
    <VForIterable />
    <VForWithId />
    <VPre />
    <VOnce />
    <VCloak />
    <NamedSlot />
    <ReceivePropSlot />
    <ReceivePropDeconstructSlot />
    <Input />
    <Select />
    <TextArea />
    <TextInputApp />
    <DynamicAttribute />
</template>

<script setup lang="ts">
import VText from '@/components/BuiltInDirectives/VText.vue';
import VHtml from '@/components/BuiltInDirectives/VHtml.vue';
import VShow from '@/components/BuiltInDirectives/VShow.vue';
import VIf from '@/components/BuiltInDirectives/VIfElse/VIf.vue';
import VElse from '@/components/BuiltInDirectives/VIfElse/VElse.vue';
import VElseIf from '@/components/BuiltInDirectives/VIfElse/VElseIf.vue';
import VForArray from '@/components/BuiltInDirectives/VFor/VForArray.vue';
import VForObject from '@/components/BuiltInDirectives/VFor/VForObject.vue';
import VForStr from '@/components/BuiltInDirectives/VFor/VForStr.vue';
import VForNum from '@/components/BuiltInDirectives/VFor/VForNum.vue';
import VForIterable from '@/components/BuiltInDirectives/VFor/VForIterable.vue';
import VForWithId from '@/components/BuiltInDirectives/VFor/VForWithId.vue';
import VPre from '@/components/BuiltInDirectives/VPre.vue';
import VOnce from '@/components/BuiltInDirectives/VOnce.vue';
import VCloak from '@/components/BuiltInDirectives/VCloak.vue';
import NamedSlot from '@/components/BuiltInDirectives/VSlot/NamedSlot/NamedSlot.vue';
import ReceivePropSlot from '@/components/BuiltInDirectives/VSlot/ReceivePropSlot/ReceivePropSlot.vue';
import ReceivePropDeconstructSlot from '@/components/BuiltInDirectives/VSlot/ReceivePropDeconstructSlot/ReceivePropDeconstructSlot.vue';
import Input from '@/components/BuiltInDirectives/VModel/Input.vue';
import Select from '@/components/BuiltInDirectives/VModel/Select.vue';
import TextArea from '@/components/BuiltInDirectives/VModel/TextArea.vue';
import TextInputApp from '@/components/BuiltInDirectives/VModel/TextInputApp.vue';
import DynamicAttribute from '@/components/BuiltInDirectives/VBind/DynamicAttribute.vue';
</script>
