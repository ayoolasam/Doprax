<template>
   <div
  class=" bg-[#f9fafb] p-8">
    <div class="bg-white  h-screen w-full py-8  rounded-xl shadow-md p-8 flex  flex-col items-center gap-8">
    
      <div class="flex items-center flex-col gap-4 justify-center">
         <img src="../assets/icons/Frame.png" alt="image"/>
         <p>Cloud Service Successfully Deployed</p>
         <p class="title">Click on the button below to view and manage your cloud service</p>
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