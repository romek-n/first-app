<script setup>
definePageMeta({
   layout: false,
});
</script>

<template>
   <div class="bg-green-700">
      <header>
         <div class="flex justify-between items-center gap-4 bg-green-900 text-white px-20 py-3">
            <div class="flex gap-4">
               <span>contact@example.com</span>
               <span>+1 500 400 600</span>
            </div>
            <div class="flex gap-4 [&>*]:h-10">
               <span>Facebook</span>
               <IconsInstagram />
               <IconsTwitter />
            </div>
         </div>
         <nav class="px-20 pt-5">
            <div class="text-white flex justify-between items-center">
               <h1><a href="/" class="text-xl font-bold">Impact</a></h1>
               <ul class="flex space-x-6 text-base">
                  <li>
                     <a href="#">
                        <span>Home</span>
                     </a>
                  </li>
                  <li>
                     <a href="#">
                        <span>About</span>
                     </a>
                  </li>
                  <li>
                     <a href="#">
                        <span>Services</span>
                     </a>
                  </li>
                  <li>
                     <a href="#">
                        <span>Portfolio</span>
                     </a>
                  </li>
                  <li>
                     <a href="#">
                        <span>Team</span>
                     </a>
                  </li>
                  <li>
                     <a href="#">
                        <span>Contact</span>
                     </a>
                  </li>
               </ul>
            </div>
         </nav>
      </header>

      <main class="text-white px-20">
         <div class="grid grid-cols-[5fr,4fr]">
            <div class="grid gap-6 content-center">
               <h2 class="text-2xl font-bold">Welcome to Impact</h2>
               <p class="text-base leading-9">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit rem
                  reprehenderit impedit, magni aliquid repellendus!
               </p>
               <div class="text-white flex gap-4 mt-5">
                  <a href="#" class="bg-green-500 shadow-md px-12 py-3 rounded-full">Learn More</a>
                  <a href="#" class="border-2 border-white shadow-md px-14 py-3 rounded-full">
                     Watch video
                  </a>
               </div>
            </div>
            <div class="">
               <img src="/img/impact.png" alt="Impact" class="w-full" />
            </div>
         </div>
         <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 -mb-40">
            <div v-for="item in 4"
               class="bg-white text-center shadow-lg p-10 rounded-lg min-h-80 grid content-center gap-3">
               <div class="text-green-700 font-bold text-lg">Card {{ item }}</div>
               <p class="text-gray-600">Lorem, ipsum dolor.</p>
            </div>
         </div>
      </main>

      <div class="bg-white text-center py-16 pt-52">
         <div class="max-w-4xl mx-auto">
            <h2 class="text-3xl font-bold text-green-700">About Us</h2>
            <div class="w-16 h-1 bg-green-500 mx-auto my-4"></div>
            <p class="text-gray-600">
               We are committed to providing exceptional services to our clients. Our
               mission is to deliver innovative and creative solutions that help
               businesses grow and thrive in today's competitive landscape. Join us
               in building a brighter future together!
            </p>
         </div>
      </div>
   </div>
</template>

<style></style>
