<script setup lang="ts">
  definePageMeta({
    layout: 'products'
  })

  const { id } = useRoute().params
  const uri = 'https://fakestoreapi.com/products/' + id
  const { data: product} = await useFetch(uri)
</script>

<template>
  <div>
  <p>{{ product.title }}</p>
  <p>{{ product.price }}</p>
  <p>{{ product.id }}</p>
  </div>
</template>

<style></style>
