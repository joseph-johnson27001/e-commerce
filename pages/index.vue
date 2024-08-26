<template>
  <div class="container">
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
