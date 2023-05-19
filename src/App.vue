<script setup lang="ts">

import Navbarmenu from './components/Navbarmenu.vue';
import SidebarMenu from './components/SidebarMenu.vue';

import { onMounted } from 'vue'
import { 
    initAccordions, 
    initCarousels, 
    initCollapses, 
    initDials, 
    initDismisses, 
    initDrawers, 
    initDropdowns, 
    initModals, 
    initPopovers, 
    initTabs, 
    initTooltips } from 'flowbite'
import { ref } from 'vue';

    onMounted(() => {
    initAccordions();
    initCarousels();
    initCollapses();
    initDials();
    initDismisses();
    initDrawers();
    initDropdowns();
    initModals();
    initPopovers();
    initTabs();
    initTooltips();
})

const toggle = ref(false)



</script>

<template>

<!-- drawer init and show -->
<div :class="[toggle?'dark':'']">
  
  <div>
    <Navbarmenu />
    
  </div>
  <div>
    <SidebarMenu/>
    <div>

    </div>
  </div>
  <div class="  flex    h-screen dark:bg-[#5b5d61]   ">
    
    <div class=" md:basis-64">

    </div>
    
    <div class=" w-full md:basis-10/12 mt-20  relative  ">
      <router-view></router-view>

      <div class=" absolute         right-0">
                <label class="  inline-flex items-center mr-5 cursor-pointer">
                            <input type="checkbox" value="" class="sr-only peer"  @click="toggle = !toggle" >
                            <div class="w-11 h-6 bg-gray-200 rounded-full  dark:peer-focus:ring-red-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-red-600"></div>
                            <span class="  text-gray-900 dark:text-gray-300 font-semibold">Dark</span>
                </label>
      </div>

      
    </div>
    
  </div>



 





  



</div>




</template>

<style >

</style>
