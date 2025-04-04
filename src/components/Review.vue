<template>
  <div class="w-full h-full flex flex-col gap-8">
    <div class="flex gap-4 items-center font-medium text-[15.3px]">
      <img src="../assets/icons/Frame.png" alt="review" />
      <p>Review Configuration</p>
    </div>
    <p class="title text-[11.9px]">
      Please review your service configuartion before deployment.
    </p>

    <div class="rounded-md bg-[#F9FAFB]">
      <div class="border-b-[1px] border-[#eaecef] p-4">
        <p class="font-medium text-[15.3px]">Service Summary</p>
      </div>
      <div
        class="border-b-[1px] gap-4 xl:gap-0 md:gap-0 flex xl:flex-row flex-col md:flex-row sm:flex-row border-[#eaecef] p-4"
      >
        <p class="title w-[20%] sm:w-[20%]">CoverImage</p>
        <div>
          <img src="../assets/images/hardImage.png" alt="image" class="cover" />
        </div>
      </div>
      <div
        class="border-b-[1px] flex gap-4 xl:gap-0 md:gap-0 xl:flex-row flex-col md:flex-row sm:flex-row border-[#eaecef] p-4"
      >
        <p class="title xl:w-[20%] md:w-[20%] sm:w-[20%]">Service Name</p>
        <p class="text-[11.9px] font-normal">{{ servicesStore.serviceName }}</p>
      </div>
      <div
        class="border-b-[1px] gap-4 xl:gap-0 md:gap-0 flex xl:flex-row flex-col md:flex-row sm:flex-row border-[#eaecef] p-4"
      >
        <p class="title w-[20%] md:w-[20%] sm:w-[20%]">Description</p>
        <p class="text-[11.9px] font-normal">{{ servicesStore.description }}</p>
      </div>
      <div
        class="border-b-[1px] gap-4 xl:gap-0 md:gap-0 flex xl:flex-row flex-col md:flex-row sm:flex-row border-[#eaecef] p-4"
      >
        <p class="title md:w-[20%] sm:w-[20%]">Region</p>
        <p class="text-[11.9px] font-normal">{{ servicesStore.region }}</p>
      </div>
      <div
        class="border-b-[1px] gap-4 xl:gap-0 md:gap-0 flex xl:flex-row flex-col md:flex-row sm:flex-row border-[#eaecef] p-4"
      >
        <p class="title xl:w-[20%] sm:w-[20%] md:w-[20%]">Instance Type</p>
        <p class="text-[11.9px] font-normal">
          {{ servicesStore.instanceType }}
        </p>
      </div>
      <div
        class="border-b-[1px] gap-4 xl:gap-0 md:gap-0 flex xl:flex-row flex-col md:flex-row sm:flex-row border-[#eaecef] p-4"
      >
        <p class="title xl:w-[20%] md:w-[20%] sm:w-[20%]">Resources</p>
        <p class="text-[11.9px] font-normal flex gap-2">
          <span>{{ servicesStore.resources.vCPU }} vCPU,</span>
          <span> {{ servicesStore.resources.memory }} Memory,</span>
          <span>{{ servicesStore.resources.storage }} Storage </span>
        </p>
      </div>
      <div
        class="border-b-[1px] gap-4 xl:gap-0 md:gap-0 flex xl:flex-row flex-col md:flex-row sm:flex-row border-[#eaecef] p-4"
      >
        <p class="title xl:w-[20%] md:w-[20%] sm:w-[20%]">Network</p>
        <div class="text-[11.9px] font-normal">
          <p class="text-[11.9px]">VPC :{{ servicesStore.network.vpc }}</p>
          <p class="text-[11.9px]">
            Subnet : {{ servicesStore.network.subnet }}
          </p>
          <p class="text-[11.9px]">
            Public IP: {{ servicesStore.network.publicIp ? "Yes" : "No" }}
          </p>
        </div>
      </div>
      <div
        class="border-b-[1px] gap-4 xl:gap-0 md:gap-0 flex xl:flex-row flex-col md:flex-row sm:flex-row rounded-md border-[#eaecef] p-4"
      >
        <p class="title xl:w-[20%] md:w-[20%] sm:w-[20%]">Security Groups</p>
        <div
          class="w-full rounded-md flex px-4 py-4 border-[1px] border-[#E5E7EB]"
        >
          <p
            v-for="(group, index) in servicesStore.securityGroups"
            :key="index"
            class="text-[11.9px] font-normal"
          >
            {{ group }},
          </p>
        </div>
      </div>
    </div>
    <div class="p-4 rounded-md bg-[#EFF6FF] flex flex-col gap-2 mb-8">
      <p class="text-[#1E40AF] font-medium text-[11.9px]">Ready to deploy</p>
      <p class="font-normal text-[11.9px] text-[#1D4ED8]">
        Your service is ready for deployment. Click the Deploy button below to
        start the deployment process.
      </p>
    </div>
    <div class="py-4 flex justify-between border-t-[2px] border-[#f2f2f2] mt-8">
      <button
        @click="navigateBack"
        class="border-[1px] bg-[#F3F4F6] hover:bg-[#F3F4F6] disabled:text-[#D1D5DA] focus:outline-none focus:shadow-[0px_4px_10px_#00000000] text-center h-[38px] rounded-md w-[67px] font-normal text-[11.9px] border-[#D1D5DB]"
      >
        Back
      </button>

      <button
        @click="deploy"
        class="border-[1px] text-center h-[38px] rounded-md bg-[#16A34A] w-[67px] font-normal disabled:text-[] text-[11.9px] text-white"
      >
        Deploy
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useServicesStore } from "@/stores/index";
import axios from "axios";
import { useRouter } from "vue-router";
const router = useRouter();

const servicesStore = useServicesStore();

const emit = defineEmits(["back"]);

const navigateBack = () => {
  emit("back");
};

const deploy = async () => {
  try {
    const response = await axios.post("https://reqres.in/api/users", {
      serviceName: servicesStore.serviceName,
      description: servicesStore.description,
      region: servicesStore.region,
      instanceType: servicesStore.instanceType,
      resources: servicesStore.resources,
      network: servicesStore.network,
      securityGroups: servicesStore.securityGroups,
    });
    if (response) {
      servicesStore.usersServices = response.data
    
      router.push("/deployed");
    }
  } catch (err) {
    console.error(err);
    
  }
};
</script>

<style lang="scss" scoped></style>
