<script setup>
definePageMeta({
  layout: false,
});
</script>

<template>
  <div class="text-gray-600 grid md:grid-cols-3">
    <div class="md:col-span-1">
      <nav>
        <div>
          <h1 class="font-bold uppercase p-4 border-b border-gray-100">
            <a href="/" class="text-green-500 sm:text-red-500 lg:text-blue-500"
              >Food ninja</a
            >
          </h1>
        </div>
        <ul class="p-4">
          <li class="text-gray-700 font-bold">
            <a href="#"></a>
            <span>Home</span>
          </li>
          <li>
            <a href="#"></a>
            <span>About</span>
          </li>
          <li>
            <a href="#"></a>
            <span>Contact</span>
          </li>
        </ul>
      </nav>
    </div>
    <main class="px-16 py-16 bg-gray-100 md:col-span-2">
      <div class="text-red-400 flex justify-center md:justify-end">
        <a href="#" class="btn border morder-2 shadow-md">Log in</a>

        <a href="#" class="ml-2 btn border morder-2 shadow-md">Sign up</a>
      </div>
      <header>
        <h2 class="text-gray-700 text-6xl font-semibold">Recipes</h2>
        <h3 class="text-2xl font-semibold">For Ninjas</h3>
      </header>

      <div>
        <h4 class="font-bold mt-12 pb-2 border-b border-gray-200">
          Latest Recipes
        </h4>
        </div>
        <div class="mt-8 grid lg:grid-cols-3 gap-10">
          <div class="card2">
            <img
              src="/img/curry.jpg"
              alt="curry"
              class="w-full h-32 sm:h-48 object-cover"
            />

            <div class="m-4">
              <span class="font-bold text-lg">Tofu Curry</span>
              <span class="block text-gray-500 text-sm">Recipe by Mario</span>
            </div>
            <div class="badge">
              <span>25 mins</span>
            </div>
          </div>
          <div class="card2">
            <img
              src="/img/noodles.jpg"
              alt="noodles"
              class="w-full h-32 sm:h-48 object-cover"
            />

            <div class="m-4">
              <span class="font-bold text-lg">Veg Noodles</span>
              <span class="block text-gray-500 text-sm">Recipe by Mario</span>
            </div>
            <div class="badge">
              <span>25 mins</span>
            </div>
        </div>
        <div class="card2">
            <img
              src="/img/stew.jpg"
              alt="stew"
              class="w-full h-32 sm:h-48 object-cover"
            />

            <div class="m-4">
              <span class="font-bold text-lg">5 Bean Chilli Stew</span>
              <span class="block text-gray-500 text-sm">Recipe by Mario</span>
            </div>
            <div class="badge">
              <span>25 mins</span>
            </div>
          </div>
        <h4 class="font-bold mt-8 pb-2 border-b border-gray-200">
          Most Popular
        </h4>
        <div class="mt-8">
          <div class=" border morder-2 bg-pink-100 text-red-400 btn text-center shadow-sm">Load more</div>
        </div>
      </div>
    </main>
  </div>
</template>

<style></style>
