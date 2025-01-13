<script setup>
definePageMeta({
  layout: false,
});
</script>

<template>
  <div class="bg-green-700">
    <aside class="bg-green-900 text-white">
      <div class="flex gap-4">
        <span>contact@example.com</span>
        <span>+1 500 400 600</span>
        <div class="flex gap-4">
          <span>Facebook</span>
          <span>Instagram</span>
          <span>Twitter</span>
        </div>
      </div>
    </aside>
    <header class="bg-green-700 mt-5">
      <nav class="">
        <div class="text-white flex justify-between items-center">
          <a href="/" class="text-base font-bold ml-16"> Impact </a>
          <ul class="flex space-x-6 text-xs mr-36">
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
    <main class="bg-green-700 text-white mt-20 ml-16 grid grid-cols-12">
      <div class="col-span-5">
        <div class="text-2xl font-bold">
          <span>Welcome to Impact</span>
        </div>
        <div class="mt-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit rem
            reprehenderit impedit, magni aliquid repellendus!
          </p>
        </div>
        <div class="text-white flex justify-left gap-4 mt-5">
          <a
            href="#"
            class="bg-green-500 border-none shadow-md px-12 py-3 rounded-full"
            >Learn More</a
          >
          <a
            href="#"
            class="border-2 border-white shadow-md px-14 py-3 rounded-full bg-transparent"
            >Watch video</a
          >
        </div>
      </div>
      <div class="col-span-7 -mt-32">
        <img src="/img/impact.png" alt="Impact" class="h-auto w-auto" />
      </div>
      <div
        class="absolute left-0 right-0 mx-auto -bottom-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-16 z-10"
      >
        <div class="bg-white text-center shadow-lg p-10 rounded-lg min-h-40">
          <div class="text-green-700 font-bold text-lg">Card 1</div>
          <p class="text-gray-600 mt-2">Lorem, ipsum dolor.</p>
        </div>
        <div class="bg-white text-center shadow-lg p-10 rounded-lg min-h-40">
          <div class="text-green-700 font-bold text-lg">Card 2</div>
          <p class="text-gray-600 mt-2">Lorem, ipsum dolor.</p>
        </div>
        <div class="bg-white text-center shadow-lg p-10 rounded-lg min-h-40">
          <div class="text-green-700 font-bold text-lg">Card 3</div>
          <p class="text-gray-600 mt-2">Lorem, ipsum dolor.</p>
        </div>
        <div class="bg-white text-center shadow-lg p-10 rounded-lg min-h-40">
          <div class="text-green-700 font-bold text-lg">Card 4</div>
          <p class="text-gray-600 mt-2">Lorem, ipsum dolor.</p>
        </div>
      </div>
    </main>
    <div class="bg-white text-center py-16 mt-24">
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
