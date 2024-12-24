<script setup lang="ts">

</script>

<template>
  <div>
    <header class="shadow-sm bg-white">
      <nav class="container mx-auto p-4 flex justify-between">
         <NuxtLink to="/" class="font-bold  text-green-600">Nuxt Dojo</NuxtLink>
       
      <ul class="flex gap-4 text-lg justify-center">
        <li class="nav-item">
          <NuxtLink to="/"
            class="hover:underline [&.router-link-active]:text-green-500 [&.router-link-active]:font-bold text-black">
            Home</NuxtLink>
        </li>
        <li class="nav-item">
          <NuxtLink to="/about"
            class="hover:underline [&.router-link-active]:text-green-500 [&.router-link-active]:font-bold text-black">
              About</NuxtLink>
        </li>
        <li class="nav-item">
          <NuxtLink to="/products"
            class="hover:underline [&.router-link-active]:text-green-500 [&.router-link-active]:font-bold text-black">
            Products</NuxtLink>
        </li>
      </ul>
    </nav>
    </header>
    <main class="my-5 px-5 text-base">
      <div class="container mx-auto p-4">
        <slot />
      </div>
    </main>
    <footer class="h-28 bg-gray-400">

    </footer>
  </div>
</template>

<style>
  .router-link-exact-active {
    color: #12b488
  }
</style>