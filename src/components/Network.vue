<template>
  <div class="w-full h-full flex flex-col gap-8">
    <div class="flex flex-col gap-4">
      <h1 class="font-semibold text-[15.3px]">Network Settings</h1>
      <p class="font-normal text-[11.9px] title">
        Configure the network settings for your cloud service
      </p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2 xl:grid-cols-2 gap-8">
      <div class="flex flex-col flex-1 gap-4">
        <label class="font-medium text-[#374151] text-[11.9px] flex gap-4"
          >Virtual Private Cloud(VPC) <span style="color: red">*</span></label
        >
        <div class="flex flex-col gap-2">
          <div class="flex justify-between">
            <input v-model="network.vpc"  @blur="vpcTouched = true" class="outline-none   " />
          <i   class="ri-arrow-drop-down-line -ml-[20px] "></i>
          </div>
          
          <span
        v-if="vpcError"
        class="font-normal text-[12px] text-[#EF4444]"
      >
        Vpc is required
      </span>
        </div>
      </div>
      <div class="flex flex-col flex-1 gap-4">
        <label class="font-medium text-[#374151] text-[11.9px] flex gap-4"
          >Subnet <span style="color: red">*</span></label
        >
        <div class="flex justify-between ">
          <input v-model="network.subnet" @blur="subNetTouched = true" class="outline-none  " />
          <i   class="ri-arrow-drop-down-line -ml-[20px] "></i>
        </div>

         
          <span
        v-if="subNetError"
        class="font-normal text-[12px] text-[#EF4444]"
      >
        Subnet is required
      </span>
      </div>
    </div>
    <div class="flex gap-2 flex-col ">
      <div class="flex gap-2 cursor-pointer focus:outline-none items-center">
        <input
          type="checkbox"
          v-model="network.publicIp"
          class="w-[16px] h-[16px]"
        />
        <p @click="network.publicIp = !network.publicIp" class="text-[#374151] font-normal text-[11.9px]">
          Assign public IP address
        </p>
      </div>
      <p class="title font-normal text-[11.9px]">
        Enable this to make your service accessible from the internet
      </p>
    </div>

    <div class="flex flex-col gap-4">
      <h1 class="font-semibold text-[15.3px]">Security Groups</h1>
      <p class="font-normal text-[11.9px] title">
        Select the security groups to apply to your service
      </p>
    </div>
    <div class="flex flex-col gap-4">
      <div
        class="flex gap-2 items-center cusor-pointer"
        v-for="(check, index) in checkList"
        :key="index"
      >
        <input
          type="checkbox"
          v-model="securityGroups"
          :value="check.value"
          class="w-[16px] h-[16px] outline-none cursor-pointer"
        />
        <p @click="saveSecurityGroups(check.value)" class="text-[#374151] cursor-pointer font-normal text-[11.9px]">
          {{ check.title }}
        </p>
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
      :disabled="!network.publicIp || !network.vpc ||!network.subnet"
        @click="saveStepThree"
        class="border-[1px] text-center h-[38px] rounded-md focus:border-[2px] focus:border-[#DAE5FF] hover:bg-[#0854FD] w-[67px] font-normal disabled:bg-[#0050FF1A] disabled:border-[1px] disabled:border-[#00000000] text-[11.9px] text-white bg-[#2563EB]"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script setup>
import { useServicesStore } from "@/stores/index";
import { ref,computed } from "vue";

const servicesStore = useServicesStore();
const network = ref({
  publicIp: false,
  vpc: "",
  subnet: "",
});

const subNetTouched = ref(false);
const vpcTouched = ref(false);

const subNetError = computed(() => {
  return subNetTouched.value && network.value.subnet.trim() === "";
});


const vpcError = computed(() => {
  return vpcTouched.value && network.value.vpc.trim() === "";
});
const securityGroups = ref([]);
const emit = defineEmits(["next", "back"]);

const checkList = [
  {
    title: "Web Traffic (80,443)",
    value: "Web Traffic (80,443)",
  },
  {
    title: "SSH Access (22)",
    value: "SSH Access (22)",
  },
  {
    title: "Database (3306, 5432)",
    value: "Database (3306, 5432)",
  },
  {
    title: "Internal Only",
    value: "Internal Only",
  },
];

const saveStepThree = () => {
  emit("next", 4);
  servicesStore.updateNetwork(network.value);
  servicesStore.setSecurityGroups(securityGroups.value);
};

const saveSecurityGroups = (value) => {
  securityGroups.value.push (value)
};

const navigateBack = () => {
  emit("back");
};
</script>

<style lang="scss" scoped></style>
