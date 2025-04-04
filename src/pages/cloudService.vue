<template>
  <div class="bg-[#f9fafb] px-4 py-8">
    <div
      class="bg-white h-screen w-full py-8 rounded-xl shadow-md p-8 flex flex-col gap-8"
    >
      <h1 class="font-medium text-[17px]">Your Cloud Services</h1>

      <div v-if="!usersServices" class="flex flex-col gap-4 items-center">
        <div class="flex items-center flex-col gap-4 justify-center">
          <img src="../assets/images/lucide_cloud-cog.png" alt="image" />
          <p>No cloud services yet</p>
          <p class="title">
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
        class="xl:h-[292px] xl:w-[466px] flex-col flex justify-between gap-4 rounded-[12px] p-4 border-[1px] border-[#E1E3E6]"
      >
        <div>
          <img src="../assets/images/hardImage.png" alt="image" class="cover" />
        </div>
        <div class="flex flex-col gap-2">
          <h1 class="text-[20px] font-medium">
            {{ usersServices.serviceName }}
          </h1>
          <p class="font-normal text-[14px] text-[#6B7280]">
            {{ usersServices.description }}
          </p>
        </div>

        <div
          class="py-4 border-t-[1px] mt-4 flex px-4 items-center justify-between border-[#E1E3E6]"
        >
          <div class="flex gap-4">
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
    <cloudServiceDetails v-if="details" @close="details = false" @edit="navToEdit" @delete="modal = true" />
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
};
const togglecloudServicesDetails = () => {
  details.value = true;
};

const navToEdit = () => {
router.push({
    name: "editServiceConfigurations",
    params: { serviceId: usersServices.id },
  });
};
</script>

<style lang="scss" scoped></style>
