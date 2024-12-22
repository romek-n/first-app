<script setup lang="ts">
const { user_id } = useRoute().params
</script>

<template>
  <div>
    <h1 class="text-center text-2xl"> ID of user {{ user_id }} </h1>
  </div>
</template>

<style></style>
