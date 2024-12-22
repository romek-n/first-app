<script setup>
 const { user_id} = useRoute().params
</script>

<template>
  <div>
    <h1> ID of user {{ user_id }} </h1>
  </div>
</template>

<style>
h1 {color: red}
</style>
