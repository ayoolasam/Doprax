<template>
  <div class="bg-[#f9fafb] px-4 py-8">
    <div
      class="bg-white w-full py-8 rounded-xl shadow-md p-8 flex flex-col gap-8"
    >
      <h1 class="font-medium text-[17px]">Edit Service Configuration</h1>
      <!-- Service Configuration -->
      <div class="flex flex-col gap-8">
        <div class="flex flex-col gap-4">
          <h1 class="font-semibold text-[15.3px]">Service Basics</h1>
          <p class="font-normal text-[11.9px] title">
            Provide basic information about your cloud service.
          </p>
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
            :class="[
              serviceNameError ? ' border-[#ef4444]' : 'border-[#f5f5f5]',
            ]"
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
              :class="[
                descriptionError ? ' border-[#ef4444]' : 'border-[#f5f5f5]',
              ]"
            />
            <span
              v-if="descriptionError"
              class="font-normal text-[12px] text-[#EF4444]"
            >
              Description is required
            </span>
          </div>
        </div>
        <div
          class="flex flex-col gap-2 w-full md:w-[70%] sm:w-[70%] xl:w-[70%]"
        >
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
      </div>

      <!-- Resource Configuration -->
      <div class="mt-4 flex flex-col gap-4">
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
          <div
            class="flex flex-col cursor-pointer gap-2"
            @click="instanceType = check.title"
          >
            <p class="text-[11.9px] font-medium">{{ check.title }}</p>
            <p class="title font-normal text-[11.9px]">
              {{ check.description }}
            </p>
          </div>
        </div>

        <div
          class="justify-between grid xl:grid-cols-3 my-8 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-8 xl:px-8"
        >
          <div
            v-for="(memory, index) in memories"
            :key="index"
            class="flex flex-col gap-2"
          >
            <label class="font-medium text-[11.9px] flex gap-4"
              >{{ memory.title }} <span style="color: red">*</span></label
            >
            <input
              type="text"
              v-model="resources[memory.value]"
              class="h-[20px] xl:w-[299px] md:w-[299px] bg-white shadow-xs focus:outline-none px-4 rounded-md"
            />
          </div>
        </div>
      </div>

      <!-- Network Settings -->
      <div class="flex flex-col gap-4 mt-8">
        <div class="flex flex-col gap-4">
          <h1 class="font-semibold text-[15.3px]">Network Settings</h1>
          <p class="font-normal text-[11.9px] title">
            Configure the network settings for your cloud service
          </p>
        </div>
        <div
          class="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2 xl:grid-cols-2 gap-8"
        >
          <div class="flex flex-col flex-1 gap-4">
            <label class="font-medium text-[#374151] text-[11.9px] flex gap-4"
              >Virtual Private Cloud(VPC)
              <span style="color: red">*</span></label
            >
            <div class="flex flex-col gap-2">
              <div class="flex justify-between">
                <input
                  v-model="network.vpc"
                  @blur="vpcTouched = true"
                  class="outline-none"
                />
                <i class="ri-arrow-drop-down-line -ml-[20px]"></i>
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
            <div class="flex justify-between">
              <input
                v-model="network.subnet"
                @blur="subNetTouched = true"
                class="outline-none"
              />
              <i class="ri-arrow-drop-down-line -ml-[20px]"></i>
            </div>

            <span
              v-if="subNetError"
              class="font-normal text-[12px] text-[#EF4444]"
            >
              Subnet is required
            </span>
          </div>
        </div>
        <div class="flex gap-2 flex-col mt-4">
          <div
            class="flex gap-2 cursor-pointer focus:outline-none items-center"
          >
            <input
              type="checkbox"
              v-model="network.publicIp"
              class="w-[16px] h-[16px]"
            />
            <p
              @click="network.publicIp = !network.publicIp"
              class="text-[#374151] font-normal text-[11.9px]"
            >
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
            v-for="(check, index) in checkLists"
            :key="index"
          >
            <input
              type="checkbox"
              v-model="securityGroups"
              :value="check.value"
              class="w-[16px] h-[16px] outline-none cursor-pointer"
            />
            <p
              @click="saveSecurityGroups(check.value)"
              class="text-[#374151] cursor-pointer font-normal text-[11.9px]"
            >
              {{ check.title }}
            </p>
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
          @click="edit"
          class="border-[1px] text-center h-[38px] rounded-md focus:border-[2px] focus:border-[#DAE5FF] hover:bg-[#0854FD] px-4 font-normal text-[11.9px] text-white bg-[#2563EB]"
        >
          Save Changes
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import MazCheckbox from "maz-ui/components/MazCheckbox";
import { ref, computed, onMounted } from "vue";
import axios from "axios";
import { useServicesStore } from "@/stores";

const description = ref("");
const serviceNameTouched = ref(false);
const serviceName = ref("");
const descriptionTouched = ref(false);
const showDropDown = ref(false);
const selectedRegion = ref("");
const securityGroups = ref([]);
const { usersServices } = useServicesStore();

const instanceType = ref(null);
const resources = ref({
  vCPU: "",
  memory: "",
  storage: "",
});
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

const saveSecurityGroups = (value) => {
  securityGroups.value.push(value);
};

const checkLists = [
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

const selectRegion = (region) => {
  selectedRegion.value = region;
  showDropDown.value = false;
};

const regionOptions = [
  "Asia Pacific (Tokyo)",
  "North America (New York)",
  "Europe (London)",
  "South America (São Paulo)",
  "Australia (Sydney)",
  "Africa (Cape Town)",
];

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

const edit = async () => {
  try {
    const response = await axios.put(
      `https://reqres.in/api/users/${usersServices.id}`,
      {
        serviceName: serviceName.value,
        description: description.value,
        region: selectedRegion.value,
        instanceType: instanceType.value,
        resources: resources.value,
        network: network.value,
        securityGroups: securityGroups.value,
      }
    );

    if (response) {
      console.log("Service configuration updated successfully");
    }
  } catch (err) {
    console.error(err);
  }
};

const serviceNameError = computed(() => {
  return serviceNameTouched.value && serviceName.value.trim() === "";
});

const descriptionError = computed(() => {
  return descriptionTouched.value && description.value.trim() === "";
});

onMounted(() => {
  document.addEventListener("click", (e) => {
    if (!e.target.closest("dropdown") && showDropDown.value) {
      showDropDown.value = false;
    }
  });
});
</script>

<style lang="scss" scoped></style>
