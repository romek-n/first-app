<script setup>
definePageMeta({
   layout: false,
});
</script>

<template>
   <div
      class="grid grid-cols-[auto,1fr] grid-rows-[auto,1fr] w-full h-screen bg-[url('../img/florence.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <aside class="col-span-1 row-span-2">
         <div class="bg-black text-gray-400 py-10 px-5 flex flex-col justify-between h-full">
            <a href="/" class="text-xl font-bold font-serif ml-auto">F</a>
            <div class="ml-auto">
               <a href="#" class="block text-gray-400 mb-4">Facebook</a>
               <a href="#" class="block text-gray-400 mb-4">Twitter</a>
               <a href="#" class="block text-gray-400">Instagram</a>
            </div>
         </div>
      </aside>
      <header class="col-start-2 relative before:absolute before:inset-0 before:bg-black/75 before:z-0">
         <nav class="relative z-10 mt-8">
            <div class="text-white flex justify-between items-center">
               <a href="/" class="text-base font-bold font-serif ml-16">
                  Florence
               </a>
               <ul class="flex space-x-6 text-xs mr-36">
                  <li>
                     <a href="#">
                        <span>Web Design</span>
                     </a>
                  </li>
                  <li>
                     <a href="#">
                        <span>Mobile App</span>
                     </a>
                  </li>
                  <li>
                     <a href="#">
                        <span>Marketing</span>
                     </a>
                  </li>
                  <li>
                     <a href="#">
                        <span>WordPress</span>
                     </a>
                  </li>
               </ul>
            </div>
         </nav>
      </header>
      <main class="col-start-2">
         <div class="grid relative w-full h-full
            before:absolute before:inset-0 before:bg-black/75 before:z-0">
            <div class="grid gap-5 my-auto ml-16">
               <div class="text-white font-bold text-4xl relative z-10 uppercase">
                  <span class="block">Make <span class="text-orange-500">Html</span> &
                     <span class="text-orange-500">Css</span>
                  </span>
                  <span class="block">Website</span>
               </div>
               <div class="text-white relative z-10">
                  <p>
                     Subsribe Easy Tutorials YouTube Channel to watch more videos on Web
                     development, UI designing and
                  </p>
                  <p>WordPress development. Press the bell icon for video notification</p>
               </div>
               <div class="text-white flex justify-left gap-4 relative z-10">
                  <a href="#" class="bg-orange-500 border-none shadow-md px-12 py-3 rounded-full">Learn More</a>
                  <a href="#" class="border-2 border-white shadow-md px-14 py-3 rounded-full bg-transparent">Explore</a>
               </div>
            </div>
         </div>
      </main>
   </div>
</template>

<style></style>
