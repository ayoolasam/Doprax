<template>
  <div class="bg-[#f9fafb] px-4 py-8">
    <div
      class="bg-white  w-full py-8 rounded-xl shadow-md p-8 flex flex-col gap-8"
    >
      <h1 class="font-medium text-[17px]">Edit Service Configuration</h1>
      <!-- Service Configuration -->
      <div class="flex flex-col gap-8">
        <div class="flex flex-col gap-12">
      <label class="font-medium text-[11.9px] flex gap-4">Service Name <span style="color: red;">*</span></label>
      <input type="text" class="border-b-[1px] focus:outline-none border-[#f2f2f2] xl:w-[70%]"/>
    </div>
    <div class="flex flex-col gap-2">
      <label class="font-medium text-[11.9px]">Description</label>
      <textarea type="text" class="border-b-[1px] focus:outline-none border-[#f2f2f2] xl:w-[70%]"/>
    </div>
    <div class="flex flex-col gap-2 w-full  md:w-[70%] sm:w-[70%]  xl:w-[70%]">
      <label class="font-medium text-[11.9px] flex gap-4">Region <span style="color: red;">*</span></label>
      <MazSelect
  v-model="selectedValues"
  :options="regionOptions"
  :label="label"
  multiple
  class="border-[0px]"
/>
</div>
      </div>


<!-- Resource Configuration -->
      <div class="mt-4 flex flex-col gap-4">
        <div class="flex flex-col gap-4">
      <h1 class="font-semibold text-[15.3px]">Resource Configuration</h1>
      <p class="font-normal text-[11.9px] title">Configure the compute resources for your service.</p>

    </div>
    <div class="flex flex-col gap-4">
      <h1 class="font-semibold text-[15.3px]">Instance Type</h1>
      <p class="font-normal text-[11.9px] title">Select the type of instance that best fits your workload</p>

    </div>
    <div v-for="(check,index) in checkList" :key="index" class="flex gap-4 items-center">
      <input type="radio" class="h-[16px] w-[16px]"/>
      <div class="flex flex-col gap-2">
        <p class="text-[11.9px] font-medium">{{ check.title }}</p>
        <p class="title font-normal text-[11.9px]">{{ check.description }}</p>
      </div>
    </div>
    <div class=" justify-between grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-8  mt-4">
      <div v-for="(memory,index) in memories" :key="index" class="flex flex-col gap-2">
        <label class="font-medium text-[11.9px] flex gap-4">{{ memory.title }} <span style="color: red;">*</span></label>
        <input type="text" class="h-[20px] xl:w-[299px] md:w-[299px] bg-white shadow-xs focus:outline-none px-4 rounded-md"/>
      </div>
    </div>
      </div> 



      <!-- Network Settings -->
       <div class="flex flex-col gap-4 mt-8">
        <div class="flex flex-col gap-4">
      <h1 class="font-semibold text-[15.3px]">Network Settings</h1>
      <p class="font-normal text-[11.9px] title">Configure the network settings for your cloud service</p>

    </div>
    <div class="flex justify-between flex-col xl:flex-row md:flex-row">
      <div class="flex flex-col flex-1 gap-4">
        <label class="font-medium text-[11.9px] flex gap-4">Virtual Private Cloud(VPC) <span style="color: red;">*</span></label>
        <input/>
      </div>
      <div class="flex flex-col flex-1 gap-4">
        <label class="font-medium text-[11.9px] flex gap-4">Subnet <span style="color: red;">*</span></label>
        <input/>
      </div>
     
      
    </div>
    <div class="flex gap-2 flex-col">
        <div class="flex gap-2 items-center">
          <input type="checkbox" class="w-[16px] h-[16px]"/>
          <p class="text-[#374151] font-normal text-[11.9px]">Assign public IP address</p>
        </div>
        <p class="title font-normal text-[11.9px]">Enable this to make your service accessible from the internet</p>
      </div>


      <div class="flex flex-col gap-4">
      <h1 class="font-semibold text-[15.3px]">Security Groups</h1>
      <p class="font-normal text-[11.9px] title">Select the security groups to apply to your service</p>

    </div>
    <div class="flex flex-col gap-4">
      <div class="flex gap-2 items-center">
          <input type="checkbox" class="w-[16px] h-[16px]"/>
          <p class="text-[#374151] font-normal text-[11.9px]">Web Traffic(80,443)</p>
        </div>
        <div class="flex gap-2 items-center">
          <input type="checkbox" class="w-[16px] h-[16px]"/>
          <p class="text-[#374151] font-normal text-[11.9px]">SSH Access (22)</p>
        </div>
        <div class="flex gap-2 items-center">
          <input type="checkbox" class="w-[16px] h-[16px]"/>
          <p class="text-[#374151] font-normal text-[11.9px]">Database (3306, 5432)</p>
        </div>
        <div class="flex gap-2 items-center">
          <input type="checkbox" class="w-[16px] h-[16px]"/>
          <p class="text-[#374151] font-normal text-[11.9px]">Internal Only</p>
        </div>

    </div>
       </div>



       <div class="py-4 flex justify-end gap-4 border-t-[2px] border-[#f2f2f2]">
    <button
     
      class="border-[1px] bg-[#F3F4F6] hover:bg-[#F3F4F6] disabled:text-[#D1D5DA] focus:outline-none focus:shadow-[0px_4px_10px_#00000000] text-center h-[38px] rounded-md w-[67px] font-normal text-[11.9px] border-[#D1D5DB]"
    >
      Cancel
    </button>
   
    <button
   
      class="border-[1px] text-center h-[38px] rounded-md focus:border-[2px] focus:border-[#DAE5FF] hover:bg-[#0854FD] px-4 font-normal text-[11.9px] text-white bg-[#2563EB]"
    >
      Save Changes
    </button>
   
  </div>
</div>

  </div>
</template>

<script setup>
 import MazSelect from 'maz-ui/components/MazSelect'
 import { ref } from 'vue'
 const label = ref("Usa oregon")
 const selectedValues =ref([])



  const regionOptions = [
  "Asia Pacific (Tokyo)",
  "North America (New York)",
  "Europe (London)",
  "South America (São Paulo)",
  "Australia (Sydney)",
  "Africa (Cape Town)"
]




const checkList = [
  {
title:"Standard(General Purpose)",
description:"Balanced compute, memory, and networking"
  },
  {
title:"Compute Optimized",
description:"High performance processors"
  },
  {
title:"Memory Optimized",
description:"Fast performance for memory-intensive workloads"
  },
  {
title:"Storage Optimized",
description:"Low latency, high disk throughput"
  },
]
const memories = [
  {
title:"vCPU",

  },
  {
title:"Memory (GB)",

  },
  {
title:"Storage (GB)",

  },
  
]



</script>

<style lang="scss" scoped>

</style>