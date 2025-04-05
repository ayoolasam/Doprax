<template>
   <div
  class=" bg-[#f9fafb] p-8">
    <div class="bg-white  xl:h-screen md:h-screen h-[331px] w-full py-8  rounded-xl shadow-md p-8 flex  flex-col items-center gap-8">
    
      <div class="flex items-center flex-col gap-4 justify-center">
         <img src="../assets/icons/Frame.png" alt="image"/>
         <p class="font-medium text-[15.3px] text-center px-2 sm:px-4 max-w-[90%] mx-auto  text-[#111827]">Cloud Service Successfully Deployed</p>
         <p class="title font-normal text-center px-2 sm:px-4 max-w-[90%] mx-auto">Click on the button below to view and manage your cloud service</p>
        </div>
     
    
        <router-link to="/cloudService">
          <button class="bg-[#2563EB] text-white px-4 h-[38px] text-center rounded-md font-medium text-[11.9px]">View Cloud Service</button>
        </router-link>
    
    </div>
  
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>