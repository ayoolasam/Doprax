<template>
  <div class="w-full h-full flex flex-col gap-8">
    <div class="flex flex-col gap-4">
      <h1 class="font-semibold text-[15.3px]">Resource Configuration</h1>
      <p class="font-normal text-[11.9px] title">
        Configure the compute resources for your service.
      </p>
    </div>
    <div class="flex flex-col gap-4">
      <h1 class="font-semibold text-[15.3px]">Instance Type</h1>
      <p class="font-normal text-[11.9px] title">
        Select the type of instance that best fits your workload
      </p>
    </div>
    <div
      v-for="(check, index) in checkList"
      :key="index"
      class="flex gap-4 items-center"
    >
      <input
        type="radio"
        v-model="instanceType"
        :value="check.title"
        
        class="h-[16px] w-[16px] cursor-pointer focus:outline-none"
      />
      <div class="flex flex-col cursor-pointer gap-2" @click="instanceType = check.title">
        <p class="text-[11.9px] font-medium">{{ check.title }}</p>
        <p class="title font-normal text-[11.9px]">{{ check.description }}</p>
      </div>
    </div>
    <div
      class="justify-between grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-8 xl:px-8"
    >
      <div
        v-for="(memory, index) in memories"
        :key="index"
        class="flex flex-col gap-4"
      >
        <label class="font-medium text-[11.9px] flex gap-4"
          >{{ memory.title }} <span style="color: red">*</span></label
        >
        <input
          type="text"
          v-model="resources[memory.value]"
           @blur="markTouched(memory.value)"
          
          :class="[
      'h-[20px] xl:w-[299px] md:w-[299px] bg-white border-b-[1px] shadow-xs focus:outline-none px-4 rounded-md',
      touched[memory.value] && !resources[memory.value] ? 'border-red-500' : 'border-[#F5F5F5]'
    ]"
        />
        <span
    v-if="touched[memory.value] && !resources[memory.value]"
    class="text-red-500 text-[11px]"
  >
    This field is required
  </span>
      </div>
    </div>
    <div class="py-4 flex justify-between border-t-[2px] border-[#f2f2f2] mt-8">
    <button
     @click="navigateBack"
      class="border-[1px] bg-[#F3F4F6] hover:bg-[#F3F4F6] disabled:text-[#D1D5DA] focus:outline-none focus:shadow-[0px_4px_10px_#00000000] text-center h-[38px] rounded-md w-[67px] font-normal text-[11.9px] border-[#D1D5DB]"
    >
      Back
    </button>
  
    <button
  :disabled="!instanceType  || !resources.vCPU  || !resources.memory || !resources.storage"
      @click="saveStepTwo"
      class="border-[1px] disabled:bg-[#0050FF1A] disabled:border-[1px] disabled:border-[#00000000] text-center h-[38px] rounded-md focus:border-[2px] focus:border-[#DAE5FF] hover:bg-[#0854FD] w-[67px] font-normal disabled:text-[] text-[11.9px] text-white bg-[#2563EB]"
    >
      Next
    </button>
   
  </div>
  </div>
</template>

<script setup>
import { ref ,reactive} from "vue";
import { useServicesStore } from "@/stores/index";

const servicesStore = useServicesStore();
const emit = defineEmits(["next",'back'])
const instanceType = ref(null);
const resources = ref({
  vCPU: "",
  memory: "",
  storage: "",
});
const checkList = [
  {
    title: "Standard(General Purpose)",
    description: "Balanced compute, memory, and networking",
  },
  {
    title: "Compute Optimized",
    description: "High performance processors",
  },
  {
    title: "Memory Optimized",
    description: "Fast performance for memory-intensive workloads",
  },
  {
    title: "Storage Optimized",
    description: "Low latency, high disk throughput",
  },
];
const memories = [
  {
    title: "vCPU",
    value: "vCPU",
  },
  {
    title: "Memory (GB)",
    value: "memory",
  },
  {
    title: "Storage (GB)",
    value: "storage",
  },
];

const touched = reactive({});

const markTouched = (key) => {
  touched[key] = true;
};

const navigateBack = () => {
  emit("back");
};

const saveStepTwo = () => {
  emit("next",3)
  servicesStore.setInstanceType(instanceType.value);
  servicesStore.updateResources(resources.value);
};


</script>

<style lang="scss" scoped></style>
