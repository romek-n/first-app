<script setup lang="ts">

</script>

<template>
  <div>
    <header class="bg-black px-4 py-8">
      <ul class="flex gap-4 text-lg justify-center">
        <li class="nav-item">
          <NuxtLink to="/"
            class="hover:underline [&.router-link-active]:text-orange-400 [&.router-link-active]:font-bold text-white">
            Главная</NuxtLink>
        </li>
        <li class="nav-item">
          <NuxtLink to="/contact"
            class="hover:underline [&.router-link-active]:text-orange-400 [&.router-link-active]:font-bold text-white">
            Контакты</NuxtLink>
        </li>
        <li class="nav-item">
          <NuxtLink to="/users/"
            class="hover:underline [&.router-link-active]:text-orange-400 [&.router-link-active]:font-bold text-white">
            Пользователи</NuxtLink>
        </li>
      </ul>
    </header>
    <main class="my-5 px-5 text-base">
      <slot />
    </main>
    <footer class="h-28 bg-gray-400">

    </footer>
  </div>
</template>

<style></style>