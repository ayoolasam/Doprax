<template>
  <div>
    <button  :class="` px-4 h-[38px] w-[94px] text-center rounded-md flex items-center justify-center font-medium text-[11.9px] ${color}`">{{ title }}</button>
  </div>
</template>

<script setup>
const props = defineProps(["title","color"])

</script>

<style lang="scss" scoped>

</style>