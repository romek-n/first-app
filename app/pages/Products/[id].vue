<script setup>
  definePageMeta({
    layout: 'products'
  })

  const { id } = useRoute().params
  const uri = 'https://fakestoreapi.com/products/' + id
  const { data: product} = await useFetch(uri, { key: id})
</script>

<template>
 <div>
  <ProductDetails :product="product" />
 </div>
</template>

<style></style>
