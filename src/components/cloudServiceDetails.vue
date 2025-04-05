<template>
  <div
    class="fixed top-0 left-0 w-full h-full bg-[#00000066] z-[1000] flex xl:justify-end md:justify-end justify-center p-[20px] xl:p-0 items-center"
  >
    <div class="overflow-y-auto no-scrollbar h-full w-[429px]">
      <div class="bg-[#FFFFFF] w-full px-4 flex flex-col">
        <div
          class="h-[68px]  border-b-[1px] border-[#E1E3E6] p-4 flex relative items-center  justify-between"
        >
        <div class="xl:w-[85%] md:w-[85%] sm:w-[85%] cursor-pointer w-full relative  flex justify-between  items-center">
          <p class="font-semibold w-full whitespace-nowrap  text-[15.3px]">Cloud Service Details</p>
          <div class="flex gap-4  w-full justify-end md:static items-center xl:static sm:static  absolute right-0 top-16">
            <div @click="emit('edit')" class="w-[16px] h-[18px]">
              <img src="../assets/images/edit.png" alt="image" />
            </div>
            <div @click="emit('delete')" class="w-[16px] h-[18px]">
              <img src="../assets/images/delete.png" alt="image" />
            </div>

            
          </div>

          
        </div>
        <div
              @click="emit('close')"
              class="h-[44px] absolute right-2 top-2 w-[44px] cursor-pointer flex items-center justify-center  rounded-full bg-[#EBEFF4]"
            >
            <i class="ri-close-line text-[24px] font-normal text-[#58595D]"></i>
          
            </div>
        
        </div>

        <div class="rounded-md bg-[#F9FAFB] xl:mt-2 mt-12">
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
            <p class="text-[11.9px] font-normal">{{ usersServices.serviceName }}</p>
          </div>
          <div class="border-b-[1px] flex gap-4 flex-col border-[#eaecef] p-4">
            <p class="title">Description</p>
            <p class="text-[11.9px] font-normal">{{ usersServices.description}}</p>
          </div>
          <div class="border-b-[1px] flex gap-4 flex-col border-[#eaecef] p-4">
            <p class="title">Region</p>
            <p class="text-[11.9px] font-normal">{{ usersServices.region }}</p>
          </div>
          <div class="border-b-[1px] flex gap-4 flex-col border-[#eaecef] p-4">
            <p class="title">Instance Type</p>
            <p class="text-[11.9px] font-normal">{{ usersServices.instanceType }}</p>
          </div>
          <div class="border-b-[1px] flex flex-col gap-4 border-[#eaecef] p-4">
            <p class="title">Resources</p>
            <p class="text-[11.9px] font-normal flex gap-4">
              <span>{{ usersServices.resources.vCPU }} vCPU,</span>
          <span> {{ usersServices.resources.memory }} Memory,</span>
          <span>{{ usersServices.resources.storage }} Storage </span>
            </p>
          </div>
          <div class="border-b-[1px] flex flex-col gap-4 border-[#eaecef] p-4">
            <p class="title">Network</p>
            <div class="text-[11.9px] font-normal">
              <p class="text-[11.9px]">VPC:  {{ usersServices.network.vpc }}</p>
              <p class="text-[11.9px]">Subnet:  {{ usersServices.network.subnet }}</p>
              <p class="text-[11.9px]">Public IP:  {{ usersServices.network.publicIp ? "Yes": 'No' }}</p>
            </div>
          </div>
          <div
            class="border-b-[1px] flex flex-col gap-4 rounded-md border-[#eaecef] p-4"
          >
            <p class="title">Security Groups</p>
            <div
              class="w-full rounded-md px-4 py-4 border-[1px] border-[#E5E7EB]"
            >
              <p v-for="(group,index) in usersServices.securityGroups" :key="index" class="text-[11.9px] font-normal">{{ group }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useServicesStore } from "@/stores";


const {usersServices} = useServicesStore();
const emit = defineEmits(["close","delete","edit"]);
</script>

<style lang="scss" scoped></style>
