<template>
  <div class="py-4 flex justify-between border-t-[2px] border-[#f2f2f2]">
    <button
      @click="back"
      :disabled="step === 1"
      class="border-[1px] bg-[#F3F4F6] hover:bg-[#F3F4F6] disabled:text-[#D1D5DA] focus:outline-none focus:shadow-[0px_4px_10px_#00000000] text-center h-[38px] rounded-md w-[67px] font-normal text-[11.9px] border-[#D1D5DB]"
    >
      Back
    </button>
    <button
    v-if="step === 4"
      @click="pushToDeployedPage"
      class="border-[1px] text-center h-[38px] rounded-md focus:border-[2px] focus:border-[#DAE5FF]  w-[67px] font-normal disabled:text-[] text-[11.9px] text-white bg-[#16A34A]"
    >
      Deploy
    </button>
    <button
    v-else
      @click="next"
      class="border-[1px] text-center h-[38px] rounded-md focus:border-[2px] focus:border-[#DAE5FF] hover:bg-[#0854FD] w-[67px] font-normal disabled:text-[] text-[11.9px] text-white bg-[#2563EB]"
    >
      Next
    </button>
   
  </div>
</template>

<script setup>
import MazBtn from "maz-ui/components/MazBtn";
import { useRouter } from "vue-router";
const emit = defineEmits(["next", "back", "step"]);
const props = defineProps(["step"]);




const router = useRouter()
const next = () => {
  emit("next");
};
const back = () => {
  emit("back");
};

const pushToDeployedPage = ()=>{
router.push("/deployed")
}
</script>

<style lang="scss" scoped></style>
