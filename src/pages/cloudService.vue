<template>
  <div class="bg-[#f9fafb] px-4 py-8">
    <div
      class="bg-white h-screen w-full py-8 rounded-xl shadow-md p-8 flex flex-col gap-8"
    >
      <h1 class="font-medium text-[17px]">Your Cloud Services</h1>

      <div v-if="!usersServices" class="flex flex-col gap-4 items-center">
        <div class="flex items-center flex-col gap-4 justify-center">
          <img src="../assets/images/lucide_cloud-cog.png" alt="image" />
          <p class="text-center px-2 sm:px-4 max-w-[90%] mx-auto font-medium text-[15.3px] text-[#111827]">No cloud services yet</p>
          <p class="title text-center px-2 sm:px-4 max-w-[90%] mx-auto">
            Click on the button below to create and manage a cloud service
          </p>
        </div>

        <router-link to="/">
          <button
            class="bg-[#2563EB] text-white px-4 h-[38px] text-center rounded-md font-medium text-[11.9px]"
          >
            Create a cloud service
          </button>
        </router-link>
      </div>

      <div
        v-else
        class=" xl:w-[466px] md:w-[466px]  sm:w-[466px] flex-col flex justify-between gap-4 rounded-[12px]  border-[1px] border-[#E1E3E6]"
      >
      <div class="p-4">
        <div class="h-[100px] w-[100px] flex flex-col gap-2 items-center justify-center bg-[#F3F4F6] rounded-lg">
          <img src="../assets/images/hardImage.png" alt="image" class=" object-cover w-full h-full rounded-lg" />
        </div>
        <div class="flex flex-col mt-2 gap-2">
          <h1 class="text-[20px] font-medium">
            {{ usersServices.serviceName }}
          </h1>
          <p class="font-normal  w-full  break-words whitespace-normal text-[14px] text-[#6B7280] ">
            {{ usersServices.description }}
          </p>
        </div>
      </div>
       
      

        <div
          class="p-4 border-t-[1px]   flex items-center justify-between border-[#E1E3E6]"
        >
          <div class="flex gap-8">
            <router-link to="/editServiceConfigurations">
              <div>
                <img src="../assets/images/edit.png" alt="" />
              </div>
            </router-link>

            <img
              @click="toggleDeleteModal"
              src="../assets/images/delete.png"
              alt=""
            />
          </div>

          <button
            @click="togglecloudServicesDetails"
            class="bg-[#2563EB] text-white px-4 h-[38px] text-center rounded-md font-medium text-[11.9px]"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
    <deleteModal v-if="modal" @close="modal = false" :service="usersServices" />
    <cloudServiceDetails v-if="details" @close="details = false" @edit="navToEdit" @delete="toggleDeleteModal" />
  </div>
</template>

<script setup>
import deleteModal from "@/components/deleteModal.vue";
import cloudServiceDetails from "@/components/cloudServiceDetails.vue";
import { useServicesStore } from "@/stores";
import { ref } from "vue";
import { useRouter } from "vue-router";

const { usersServices } = useServicesStore();
const modal = ref(false);
const details = ref(false);
const router = useRouter();

const toggleDeleteModal = () => {
  modal.value = true;
  details.value = false;
};

const togglecloudServicesDetails = () => {
  details.value = true;
};

const navToEdit = () => {
router.push("/editServiceConfigurations");
  details.value = false;
  modal.value = false;
};
</script>

<style lang="scss" scoped></style>
