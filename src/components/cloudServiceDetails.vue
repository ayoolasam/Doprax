<template>
  <div
    class="fixed top-0 left-0 w-full h-full bg-[#00000066] z-[1000] flex xl:justify-end md:justify-end justify-center p-[20px] xl:p-0 items-center"
  >
    <div class="overflow-y-auto h-full w-[429px]">
      <div class="bg-[#FFFFFF] w-full px-4 flex flex-col">
        <div
          class="h-[68px] border-b-[1px] border-[#E1E3E6] p-4 flex items-center justify-between"
        >
          <p class="font-semibold text-[15.3px]">Cloud Service Details</p>
          <div class="flex gap-4 items-center">
            <div class="w-[16px] h-[18px]">
              <img src="../assets/images/edit.png" alt="image" />
            </div>
            <div class="w-[16px] h-[18px]">
              <img src="../assets/images/delete.png" alt="image" />
            </div>

            <div
              @click="emit('close')"
              class="h-[44px] w-[44px] cursor-pointer flex items-center justify-center  rounded-full bg-[#EBEFF4]"
            >
            <i class="ri-close-line text-[24px] font-normal text-[#58595D]"></i>
          
            </div>
          </div>
        </div>

        <div class="rounded-md bg-[#F9FAFB] mt-4">
          <div class="border-b-[1px] flex flex-col gap-4 border-[#eaecef] p-4">
            <p class="title">CoverImage</p>
            <div>
              <img
                src="../assets/images/hardImage.png"
                alt="image"
                class="cover"
              />
            </div>
          </div>
          <div class="border-b-[1px] flex flex-col border-[#eaecef] p-4">
            <p class="title">Service Name</p>
            <p class="text-[11.9px] font-normal">ayo</p>
          </div>
          <div class="border-b-[1px] flex gap-4 flex-col border-[#eaecef] p-4">
            <p class="title">Description</p>
            <p class="text-[11.9px] font-normal">ayo</p>
          </div>
          <div class="border-b-[1px] flex gap-4 flex-col border-[#eaecef] p-4">
            <p class="title">Region</p>
            <p class="text-[11.9px] font-normal">US West (N. California)</p>
          </div>
          <div class="border-b-[1px] flex gap-4 flex-col border-[#eaecef] p-4">
            <p class="title">Instance Type</p>
            <p class="text-[11.9px] font-normal">Standard (General Purpose)</p>
          </div>
          <div class="border-b-[1px] flex flex-col gap-4 border-[#eaecef] p-4">
            <p class="title">Resources</p>
            <p class="text-[11.9px] font-normal">
              2 vCPU, 4 Gb Memory,100 Gb Storage
            </p>
          </div>
          <div class="border-b-[1px] flex flex-col gap-4 border-[#eaecef] p-4">
            <p class="title">Network</p>
            <div class="text-[11.9px] font-normal">
              <p class="text-[11.9px]">VPC :Development VPC</p>
              <p class="text-[11.9px]">Subnet :Development Subnet (AZ-b)</p>
              <p class="text-[11.9px]">Public IP: Yes</p>
            </div>
          </div>
          <div
            class="border-b-[1px] flex flex-col gap-4 rounded-md border-[#eaecef] p-4"
          >
            <p class="title">Security Groups</p>
            <div
              class="w-full rounded-md px-4 py-4 border-[1px] border-[#E5E7EB]"
            >
              <p class="text-[11.9px] font-normal">Web Traffic (80, 443)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Button from "./button.vue";
const emit = defineEmits(["close"]);
</script>

<style lang="scss" scoped></style>
