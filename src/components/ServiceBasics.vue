<template>
  <div class="w-full h-full flex flex-col gap-8">
    <div class="flex flex-col gap-4">
      <h1 class="font-semibold text-[15.3px]">Service Basics</h1>
      <p class="font-normal text-[11.9px] title">
        Provide basic information about your cloud service.
      </p>
    </div>
    <!-- previewImage -->
    <div class="flex items-center gap-8">
      <div
        v-if="previewImage"
        class="h-[100px] w-[100px] flex flex-col gap-2 items-center justify-center bg-[#F3F4F6] rounded-lg"
      >
        <img :src="previewImage" alt="upload" class=" object-cover w-full h-full" />
      </div>

      <!-- uploadImage -->
      <div
        v-else
        class="h-[100px] cursor-pointer w-[100px] relative flex flex-col gap-2 items-center justify-center bg-[#F3F4F6] rounded-lg"
      >
        <input
          type="file"
          single
          @change="uploadImage"
          class="opacity-0 absolute cursor-pointer w-full h-full"
        />
        <img src="../assets/icons/Vector (6).png" alt="upload" />
        <p class="font-medium title text-[11.9px]">Cover Image</p>
      </div>

      <!-- upload Image -->
      <div
        v-if="previewImage"
        class="border-[1px] relative border-[#F3F4F6] cursor-pointer rounded-lg flex items-center h-[40px] w-[40px] justify-center"
      >
        <input
          type="file"
          single
          @change="uploadImage"
          class="opacity-0 cursor-pointer absolute w-full h-full"
        />
        <img
          src="../assets/icons/Vector (6).png"
          alt="image"
          class="cursor-pointer"

        />
      </div>

      <!-- delete Image -->
      <div
        @click="deleteImage"
        v-if="previewImage"
        class="border-[1px] cursor-pointer border-[#F3F4F6] rounded-lg flex items-center h-[40px] w-[40px] justify-center"
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
        @blur="serviceNameTouched = true"
        class="border-b-[1px] focus:outline-none xl:w-[70%]"
        :class="[serviceNameError ? ' border-[#ef4444]' : 'border-[#f5f5f5]']"
      />
      <span
        v-if="serviceNameError"
        class="font-normal text-[12px] text-[#EF4444]"
      >
        Service name is required
      </span>
    </div>
    <div class="flex flex-col gap-8">
      <label class="font-medium text-[11.9px]">Description</label>
      <div class="flex flex-col gap-4">
        <input
          type="text"
          @blur="descriptionTouched = true"
          v-model="description"
          class="border-b-[1px] focus:outline-none md:w-[70%] sm:w-[70%] xl:w-[70%]"
          :class="[descriptionError ? ' border-[#ef4444]' : 'border-[#f5f5f5]']"
        />
        <span
          v-if="descriptionError"
          class="font-normal text-[12px] text-[#EF4444]"
        >
          Description is required
        </span>
      </div>
    </div>
    <div class="flex flex-col gap-2 w-full md:w-[70%] sm:w-[70%] xl:w-[70%]">
      <label class="font-medium text-[11.9px] flex gap-4"
        >Region <span style="color: red">*</span></label
      >

      <!-- dropdown -->
      <div
        class="border-b-[1px] dropdown cursor-pointer relative border-[#F5F5F5]"
      >
        <div
          @click.stop="showDropDown = !showDropDown"
          class="flex py-2 justify-between"
        >
          <p>{{ selectedRegion }}</p>
          <i class="ri-arrow-drop-down-line"></i>
        </div>

        <div
          v-if="showDropDown"
          style="box-shadow: 0px 4px 10px rgba(16, 25, 40, 0.05)"
          class="absolute border-[1px] rounded-[8px] border-[#F0F2F5] bg-[#FFFFFF] top-6 left-0 h-[242px] px-[12px] py-4 w-full overflow-y-auto md:w-[381px] xl:w-[381px]"
        >
          <p class="font-medium text-[14px]">Select a region</p>
          <ul class="mt-4">
            <li
              v-for="(region, index) in regionOptions"
              @click="selectRegion(region)"
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
        class="border-[1px] cursor-pointer bg-[#F3F4F6] hover:bg-[#F3F4F6] disabled:text-[#D1D5DA] focus:outline-none focus:shadow-[0px_4px_10px_#00000000] text-center h-[38px] rounded-md w-[67px] font-normal text-[11.9px] border-[#D1D5DB]"
      >
        Back
      </button>

      <button
        :disabled="!serviceName || !description || !selectedRegion"
        @click="saveStepOne"
        class="border-[1px] cursor-pointer text-center h-[38px] rounded-md focus:border-[2px] focus:border-[#DAE5FF] hover:bg-[#0854FD] w-[67px] font-normal disabled:bg-[#0050FF1A] disabled:border-[1px] disabled:border-[#00000000] text-[11.9px] text-white bg-[#2563EB]"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed,onMounted } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

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
const serviceNameTouched = ref(false);
const descriptionTouched = ref(false);

const descriptionError = computed(() => {
  return descriptionTouched.value && description.value.trim() === "";
});

const selectRegion = (region) => {
  selectedRegion.value = region;
  showDropDown.value = false;
};

const serviceNameError = computed(() => {
  return serviceNameTouched.value && serviceName.value.trim() === "";
});

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

onMounted(() => {
  document.addEventListener("click", (e) => {
    if (!e.target.closest("dropdown") && showDropDown.value) {
      showDropDown.value = false;
    }
  });
});
</script>

<style scoped></style>
