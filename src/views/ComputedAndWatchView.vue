<template>
  <ComputedBasic />
  <ComputedWritable />
  <WatchBasic />
  <WatchRef />
  <WatchGetter />
  <WatchArr />
  <WatchDeep />
</template>

<script setup>
import ComputedBasic from '@/components/ComputedAndWatch/ComputedBasic.vue'
import ComputedWritable from '@/components/ComputedAndWatch/ComputedWritable.vue'
import WatchArr from '@/components/ComputedAndWatch/WatchArr.vue'
import WatchBasic from '@/components/ComputedAndWatch/WatchBasic.vue'
import WatchDeep from '@/components/ComputedAndWatch/WatchDeep.vue'
import WatchGetter from '@/components/ComputedAndWatch/WatchGetter.vue'
import WatchRef from '@/components/ComputedAndWatch/WatchRef.vue'
</script>
