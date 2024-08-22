<!-- pages/index.vue -->
<template>
  <div class="container">
    <h1 class="text-2xl font-bold mb-4">Welcome to My E-Commerce Site</h1>
    <p class="mb-4">
      This is a sample layout for the main page. Here, you can display featured
      products, promotions, or any other content relevant to your e-commerce
      site.
    </p>

    <!-- Import and use the ProductShowcase component here -->
    <ProductShowcase />
  </div>
</template>

<script>
import ProductShowcase from "~/components/ProductShowcase.vue";

export default {
  name: "IndexPage",
  components: {
    ProductShowcase,
  },
};
</script>

<style scoped>
/* Add specific styles for the index page here */
</style>
