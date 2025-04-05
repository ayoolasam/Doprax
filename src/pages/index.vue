<template>
  <div class="bg-[#f9fafb] py-8 px-4 xl:px-8 md:px-8">
    <div
      class="bg-white h-full w-full rounded-xl shadow-md p-8 flex flex-col gap-8"
    >
      <h1 class="font-medium text-[17px]">Configure New Cloud Service</h1>
     
        <Steps :steps="steps" :activeStep="step" />
      
      <div class="mt-12">
        <ServiceBasics v-if="step === 1" @next="nextStep" :step="step"  />
        <Resources v-if="step === 2"  @next="nextStep" @back="backStep"/>
        <Network v-if="step === 3"  @next="nextStep" @back="backStep"/>
        <Review v-if="step === 4" @back="backStep" />
      </div>

      <div></div>
     
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import Steps from "@/components/Steps.vue";
import Footer from "@/components/Footer.vue";
import { ref } from "vue";
import ServiceBasics from "@/components/ServiceBasics.vue";
import Resources from "../components/Resources.vue";
import Network from "@/components/Network.vue";
import Review from "@/components/Review.vue";

const step = ref(1);
const router = useRouter();
const serviceBasicsRef = ref(null);
const resourcesRef = ref(null)
const networkRef = ref(null)

const nextStep = (num)=>{
  step.value = num
}



const backStep = () => {
  if (step.value > 1) {
    step.value--;
  }
};

const steps = [
  {
    stepNo: "1",
    title: "Service Basics",
    description: "Define your service details",
  },
  {
    stepNo: "2",
    title: "Resources",
    description: "Configure complete resources",
  },
  {
    stepNo: "3",
    title: "Network",
    description: "Set up network configuration",
  },
  {
    stepNo: "4",
    title: "Review",
    description: "Review and deploy",
  },
];
</script>

<style lang="scss" scoped></style>
