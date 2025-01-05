<script setup>
definePageMeta({
  layout: false,
});
</script>

<template>
  <div class="grid grid-cols-12 w-full h-screen relative z-10">
    <div
      class="col-span-1 bg-black text-gray-400 relative z-10 flex flex-col justify-between h-full"
    >
      <a href="/" class="text-xl font-bold font-serif mt-8 ml-12">F</a>
      <div class="flex-grow"></div>
      <div class="mt-6 ml-5 py-10">
        <a href="#" class="block text-gray-400 mb-4">Facebook</a>
        <a href="#" class="block text-gray-400 mb-4">Twitter</a>
        <a href="#" class="block text-gray-400">Instagram</a>
      </div>
    </div>
    <div
      class="bg-[url('../img/florence.jpg')] bg-no-repeat bg-center bg-fixed bg-cover w-full h-screen before:absolute before:inset-0 before:bg-black/75 before:z-0 col-span-11"
    >
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

      <div
        class="text-white font-bold text-4xl mt-40 relative z-10 uppercase ml-16"
      >
        <span class="block"
          >Make <span class="text-orange-500">Html</span> &
          <span class="text-orange-500">Css</span>
        </span>
        <span class="block">Website</span>
      </div>

      <div class="text-white relative z-10 ml-16 mt-5">
        <p>
          Subsribe Easy Tutorials YouTube Channel to watch more videos on Web
          development, UI designing and
        </p>
        <p>WordPress development. Press the bell icon for video notification</p>
      </div>

      <div class="text-white flex justify-left mt-8 relative z-10 ml-16">
        <a
          href="#"
          class="bg-orange-500 border-none shadow-md px-12 py-3 rounded-full"
          >Learn More</a
        >

        <a
          href="#"
          class="ml-6 border-2 border-white shadow-md px-14 py-3 rounded-full bg-transparent"
          >Explore</a
        >
      </div>
    </div>
  </div>
</template>

<style></style>
