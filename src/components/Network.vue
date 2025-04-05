<template>
  <div class="w-full h-full flex flex-col gap-8">
    <div class="flex flex-col gap-4">
      <h1 class="font-semibold text-[15.3px]">Network Settings</h1>
      <p class="font-normal text-[11.9px] title">
        Configure the network settings for your cloud service
      </p>
    </div>
  

<div class="grid gap-4 grid-cols-1 xl:grid-cols-2 md:grid-cols-2 ">
  <div class="flex flex-col gap-2 w-full md:w-[70%] sm:w-[70%] xl:w-[70%]">
      <label class="font-medium text-[11.9px] flex gap-4"
        >Virtual Private Cloud (VPC) <span style="color: red">*</span></label
      >

      <!--vpc dropdown -->
      <div
        class="border-b-[1px] z-50 vpc dropdown cursor-pointer relative border-[#F5F5F5]"
      >
        <div
          @click.stop="toggleVpcDropDown "
          class="flex py-2 justify-between"
        >
          <p class="font-normal text-[16px]">{{ network.vpc }}</p>
          <i class="ri-arrow-drop-down-line"></i>
        </div>

        <div
          v-if="showVpcDropDown"
          style="box-shadow: 0px 4px 10px rgba(16, 25, 40, 0.05)"
          class="absolute border-[1px] rounded-[8px] border-[#F0F2F5] bg-[#FFFFFF] top-6 left-0 h-[242px] px-[12px] py-4 w-full overflow-y-auto md:w-[381px] xl:w-[381px]"
        >
          <p class="font-medium text-[14px]">Select a Vpc</p>
          <ul class="mt-4">
            <li
              v-for="(vpc, index) in vpcs"
              @click="selectVpc(vpc)"
              :key="index"
              class="flex justify-between items-center py-[12px] px-[8px] border-b-[1px] border-[#F5F5F5]"
            >
              <span class="text-[14px] font-medium text-[#344054]">
                {{ vpc}}</span
              >
              <MazCheckbox
                v-model="network.vpc"
                :value="vpc"
                @change="selectVpc(vpc)"
                :checked="network.vpc === vpc"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="flex flex-col gap-2 w-full md:w-[70%] sm:w-[70%] xl:w-[70%]">
      <label class="font-medium text-[11.9px] flex gap-4"
        >Subnet <span style="color: red">*</span></label
      >

      <!--subnet dropdown -->
      <div
        class="border-b-[1px] subnet dropdown cursor-pointer relative border-[#F5F5F5]"
      >
        <div
          @click.stop="togglesubnetDropDown"
          class="flex py-2 justify-between"
        >
          <p class="font-normal text-[16px]">{{ network.subnet }}</p>
          <i class="ri-arrow-drop-down-line"></i>
        </div>

        <div
          v-if="showsubnetDropDown"
          style="box-shadow: 0px 4px 10px rgba(16, 25, 40, 0.05)"
          class="absolute border-[1px] rounded-[8px] border-[#F0F2F5] bg-[#FFFFFF] top-6 left-0 h-[242px] px-[12px] py-4 w-full overflow-y-auto md:w-[381px] xl:w-[381px]"
        >
          <p class="font-medium text-[14px]">Select a Subnet</p>
          <ul class="mt-4">
            <li
              v-for="(subnet, index) in subNets"
              @click="selectSubnet(subnet)"
              :key="index"
              class="flex justify-between items-center py-[12px] px-[8px] border-b-[1px] border-[#F5F5F5]"
            >
              <span class="text-[14px] font-medium text-[#344054]">
                {{ subnet}}</span
              >
              <MazCheckbox
                v-model="network.subnet"
                :value="subnet"
                @change="selectSubnet(subnet)"
                :checked="network.subnet === subnet"
              />
            </li>
          </ul>
        </div>
      </div>
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
        class="border-[1px] cursor-pointer bg-[#F3F4F6] hover:bg-[#F3F4F6] disabled:text-[#D1D5DA] focus:outline-none focus:shadow-[0px_4px_10px_#00000000] text-center h-[38px] rounded-md w-[67px] font-normal text-[11.9px] border-[#D1D5DB]"
      >
        Back
      </button>

      <button
      :disabled="!network.publicIp || !network.vpc ||!network.subnet"
        @click="saveStepThree"
        class="border-[1px] cursor-pointer text-center h-[38px] rounded-md focus:border-[2px] focus:border-[#DAE5FF] hover:bg-[#0854FD] w-[67px] font-normal disabled:bg-[#0050FF1A] disabled:border-[1px] disabled:border-[#00000000] text-[11.9px] text-white bg-[#2563EB]"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script setup>
import { useServicesStore } from "@/stores/index";
import { ref,computed ,onMounted} from "vue";
import MazCheckbox from "maz-ui/components/MazCheckbox";

const servicesStore = useServicesStore();
const network = ref({
  publicIp: false,
  vpc: "Development VPC",
  subnet: "Development Subnet (AZ-b)",
});

const vpcs = [
  "Development VPC",
  "Development VPC",
  "Development VPC",
  "Development VPC",
  "Development VPC",
  "Development VPC",
];
const subNets = [
  "Development Subnet (AZ-b)",
  "Development Subnet (AZ-b)",
  "Development Subnet (AZ-b)",
  "Development Subnet (AZ-b)",
  "Development Subnet (AZ-b)",
  "Development Subnet (AZ-b)",
];

const subNetTouched = ref(false);
const vpcTouched = ref(false);
const showVpcDropDown = ref(false);
const showsubnetDropDown = ref(false)
const selectedVpc = ref("");
const selectedSubnet = ref("")

const subNetError = computed(() => {
  return subNetTouched.value && network.value.subnet.trim() === "";
});


const selectVpc = (vpc) => {
  network.value.vpc = vpc;
  showVpcDropDown.value = false;
};
const selectSubnet = (sub) => {
  network.value.subnet = sub;
  showsubnetDropDown.value = false;
};

const toggleVpcDropDown = ()=>{
  showVpcDropDown.value = !showVpcDropDown.value;
  showsubnetDropDown.value = false;
} 

const togglesubnetDropDown = ()=>{
  showsubnetDropDown.value = !showsubnetDropDown.value;
  showVpcDropDown.value = false;
} 

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


onMounted(() => {
  document.addEventListener("click", (e) => {
    if (!e.target.closest("vpc") && showVpcDropDown.value) {
      showVpcDropDown.value = false;
    }
  });
});
document.addEventListener("click", (e) => {
    if (!e.target.closest("subnet") && showsubnetDropDown.value) {
      showsubnetDropDown.value = false;
    }
  });
</script>

<style lang="scss" scoped></style>
