<template>
  <div class="w-full h-full flex flex-col gap-8">
    <div class="flex flex-col gap-4">
      <h1 class="font-semibold text-[15.3px]">Service Basics</h1>
      <p class="font-normal text-[11.9px] title">
        Provide basic information about your cloud service.
      </p>
    </div>
    <!-- previewImagw -->
    <div class="flex items-center gap-8">
      <div
        v-if="previewImage"
        class="h-[100px] w-[100px] flex flex-col gap-2 items-center justify-center bg-[#F3F4F6] rounded-lg"
      >
        <img :src="previewImage" alt="upload" class="object-cover" />
      </div>

      <!-- uploadImage -->
      <div
        v-else
        class="h-[100px] w-[100px] relative flex flex-col gap-2 items-center justify-center bg-[#F3F4F6] rounded-lg"
      >
        <input
          type="file"
          single
          @change="uploadImage"
          class="opacity-0 absolute w-full h-full"
        />
        <img src="../assets/icons/Vector (6).png" alt="upload" />
        <p class="font-medium title text-[11.9px]">Cover Image</p>
      </div>

      <!-- upload Image -->
      <div
        v-if="previewImage"
        class="border-[1px] relative border-[#F3F4F6] rounded-lg flex items-center h-[40px] w-[40px] justify-center"
      >
        <input
          type="file"
          single
          @change="uploadImage"
          class="opacity-0 absolute w-full h-full"
        />
        <img src="../assets/icons/Vector (6).png" alt="image" />
      </div>

      <!-- delete Image -->
      <div
        @click="deleteImage"
        v-if="previewImage"
        class="border-[1px] border-[#F3F4F6] rounded-lg flex items-center h-[40px] w-[40px] justify-center"
      >
        <img src="../assets/icons/Vector (7).png" alt="image" />
      </div>
    </div>
    <div class="flex flex-col gap-2">
      <label class="font-medium text-[11.9px] flex gap-4"
        >Service Name <span style="color: red">*</span></label
      >
      <input
        type="text"
        v-model="serviceName"
        class="border-b-[1px] focus:outline-none border-[#f2f2f2] xl:w-[70%]"
      />
    </div>
    <div class="flex flex-col gap-8">
      <label class="font-medium text-[11.9px]">Description</label>
      <input
        type="text"
        v-model="description"
        class="border-b-[1px] focus:outline-none border-[#f5f5f5] w-[70%]"
      />
    </div>
    <div class="flex flex-col gap-2 w-full md:w-[70%] sm:w-[70%] xl:w-[70%]">
      <label class="font-medium text-[11.9px] flex gap-4"
        >Region <span style="color: red">*</span></label
      >

      <!-- dropdown -->
      <div
   
        class="border-b-[1px] relative  border-[#F5F5F5]"
      >
      <div  @click="showDropDown = !showDropDown" class="flex justify-between">
        <p>{{ selectedRegion }}</p>
        <i   class="ri-arrow-drop-down-line"></i>
      </div>
        

        <div
        v-if="showDropDown"
          style="box-shadow: 0px 4px 10px rgba(16, 25, 40, 0.05)"
          class="absolute border-[1px] rounded-[8px] border-[#F0F2F5] bg-[#FFFFFF] top-6 left-0 h-[242px] px-[12px] py-4 overflow-y-auto w-[381px]"
        >
          <p class="font-medium text-[14px]">Select a region</p>
          <ul class="mt-4">
            <li
              v-for="(region, index) in regionOptions"
              :key="index"
              class="flex justify-between items-center py-[12px] px-[8px] border-b-[1px] border-[#F5F5F5]"
            >
              <span class="text-[14px] font-medium text-[#344054]">
                {{ region }}</span
              >
              <MazCheckbox
                v-model="selectedRegion"
                :value="region"
                @change="selectRegion(region)"
                :checked="selectedRegion === region"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="py-4 flex justify-between border-t-[2px] border-[#f2f2f2] mt-8">
      <button
        :disabled="step === 1"
        class="border-[1px] bg-[#F3F4F6] hover:bg-[#F3F4F6] disabled:text-[#D1D5DA] focus:outline-none focus:shadow-[0px_4px_10px_#00000000] text-center h-[38px] rounded-md w-[67px] font-normal text-[11.9px] border-[#D1D5DB]"
      >
        Back
      </button>

      <button
      :disabled="!serviceName || !description || !selectedRegion"
        @click="saveStepOne"
        class="border-[1px] text-center h-[38px] rounded-md focus:border-[2px] focus:border-[#DAE5FF] hover:bg-[#0854FD] w-[67px] font-normal disabled:bg-[#0050FF1A] disabled:border-[1px] disabled:border-[#00000000] text-[11.9px] text-white bg-[#2563EB]"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

import MazCheckbox from "maz-ui/components/MazCheckbox";
import { useServicesStore } from "@/stores/index";
const showDropDown = ref(false);
const label = ref("Usa oregon");
const previewImage = ref(null);
const checked = ref(false);
const selectedRegion = ref("");

const regionOptions = [
  "Asia Pacific (Tokyo)",
  "North America (New York)",
  "Europe (London)",
  "South America (São Paulo)",
  "Australia (Sydney)",
  "Africa (Cape Town)",
];

const servicesStore = useServicesStore();
const serviceName = ref("");
const description = ref("");
const emit = defineEmits(["next"]);
const props = defineProps(["step"]);

const selectRegion = (region) => {
  selectedRegion.value = region;
};
const uploadImage = (e) => {
  const file = e.target.files[0];
  if (!file) return;

  previewImage.value = URL.createObjectURL(file);
};

const deleteImage = () => {
  previewImage.value = "";
};

const saveStepOne = () => {
  emit("next", 2);
  servicesStore.setServiceName(serviceName.value);
  servicesStore.setDescription(description.value);
  servicesStore.setRegion(selectedRegion.value);
};
</script>

<style scoped></style>
