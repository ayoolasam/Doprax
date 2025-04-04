<template>
  <div
    class="fixed top-0 left-0 w-full h-full bg-[#00000066] z-[1000] flex p-[20px] justify-center items-center"
  >
    <div
      class="bg-[#FFFFFF] h-[280px] rounded-[8px] flex flex-col items-center gap-4 justify-center w-[464px]"
    >
      <div>
        <img src="../assets/images/delete.png" alt="" />
      </div>
      <div class="text-center">
        <p class="font-medium text-[15.3px]">Delete this cloud service</p>
        <p class="title">Are you sure you want to delete this cloud service?</p>
      </div>
      <div class="flex justify-between gap-4">
        <Button
          @click="emit('close')"
          title="No, cancel"
          color="bg-[#F3F4F6] border-[1px] text-[#9CA3AF] flex  whitespace-nowrap  border-[#D1D5DB]"
        />
        <Button
          @click="deleteService"
          title="Yes delete"
          color="bg-[#EF4444] text-white"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import Button from "./button.vue";
import axios from "axios";
const emit = defineEmits(["close"]);
const props = defineProps({
  service: {
    type: Object,
    required: true,
  },
});

const deleteService = async () => {
  try {
    const response = await axios.delete(
      `https://reqres.in/api/users/${props.service.id}`
    );

    if (response) {
      emit("close");
    }
  } catch (err) {
    console.error(err);
  }
};
</script>

<style lang="scss" scoped></style>
