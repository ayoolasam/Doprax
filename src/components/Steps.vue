<template>
  <div
    v-for="(step, index) in steps"
    :key="index"
    class="w-[207.75px] py-4 px-4 flex flex-col gap-2 text-[11.9px]   xl:border-t-[4px] xl:border-l-0 border-l-[4px]   leading-[20px]"
    :class="[  Number(step.stepNo) <= activeStep ? 'border-[#2563EB]' : 'border-[#E5E7EB]']" 
  >
    <p class="font-semibold text-[#2563EB]">Step {{ step.stepNo }}</p>
    <p class="font-semibold">{{ step.title }}</p>
    <p class="text-[#6B7280] font-normal">{{ step.description }}</p>
  </div>
</template>

<script setup>
const props = defineProps(["steps", "activeStep"]);
</script>

<style lang="scss" scoped></style>
