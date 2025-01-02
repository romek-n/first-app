<script setup>
definePageMeta({
  layout: false,
});

/* const burger = document.querySelector('#burger');
const menu = document.querySelector ('menu');

burger.addEventListener('click',()=>{
  if (menu.classList.contains('hidden')) {
    menu.classList.remove('hidden');
  } else{
    menu.classList.add('hidden');
  }
}) */
</script>

<template>
  <div class="text-gray-600 grid md:grid-cols-3">
    <div class="md:col-span-1 md:flex md:justify-end">
      <nav class="text-right">
        <div class="flex justify-between items-center">
          <h1 class="font-bold uppercase p-4 border-b border-gray-100">
            <a href="/" class="text-green-500 hover:text-green-700"
              >Food ninja</a
            >
          </h1>
          <div class="px-4 cursor-pointer md:hidden" id="burger">
            <svg class="w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
        </div>
        <ul class="text-sm mt-6 hidden md:block" id="menu">
          <li class="text-gray-700 font-bold py-1">
            <a href="#" class="px-4 flex justify-end border-r-4 border-red-300">
              <span>Home</span>
              <svg
                class="w-5 ml-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
            </a>
          </li>
          <li class="py-1">
            <a href="#" class="px-4 flex justify-end border-r-4 border-white">
              <span>About</span>
              <svg
                class="w-5 ml-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
                />
              </svg>
            </a>
          </li>
          <li class="py-1">
            <a href="#" class="px-4 flex justify-end border-r-4 border-white">
              <span>Contact</span>
              <svg
                class="w-5 ml-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </div>
    <main class="px-16 py-16 bg-gray-100 md:col-span-2">
      <div class="text-red-400 flex justify-center md:justify-end">
        <a
          href="#"
          class="btn border morder-2 shadow-md hover:bg-pink-500 hover:text-white"
          >Log in</a
        >

        <a
          href="#"
          class="ml-2 btn border morder-2 shadow-md hover:bg-pink-500 hover:text-white"
          >Sign up</a
        >
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
        <div class="card2 hover:shadow-lg">
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
            <svg
              class="w-5 inline-block"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>

            <span>25 mins</span>
          </div>
        </div>
        <div class="card2 hover:shadow-lg">
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
            <svg
              class="w-5 inline-block"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <span>25 mins</span>
          </div>
        </div>
        <div class="card2 hover:shadow-lg">
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
            <svg
              class="w-5 inline-block"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <span>25 mins</span>
          </div>
        </div>
        <h4 class="font-bold mt-8 pb-2 border-b border-gray-200">
          Most Popular
        </h4>
        <div class="mt-8">
          <div
            class="border morder-2 bg-pink-100 text-red-400 btn text-center shadow-sm hover:shadow-inner"
          >
            Load more
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style></style>
