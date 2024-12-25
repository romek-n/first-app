<script setup>
definePageMeta({
  layout: "products",
});

const { id } = useRoute().params;
const uri = "https://fakestoreapi.com/products/" + id;
const { data: product } = await useFetch(uri, {
  onResponseError({ response, error }) {
    showError({
      statusCode: response.status,
      statusMessage: error ? error.message : "",
    });
  },
  key: id,
});
</script>

<template>
  <div>
    <Head>
      <Title>Nuxt Dojo | {{ product.title }}</Title>
      <Meta name="description" :content="product.description" />
    </Head>
    <ProductCard :product="product" />
  </div>
</template>

<style></style>
