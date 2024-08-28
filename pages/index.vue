<template>
  <div class="container">
    <HeroSection />
    <ProductShowcase />
  </div>
</template>

<script>
import ProductShowcase from "~/components/ProductShowcase.vue";
import HeroSection from "~/components/Hero/HeroSection.vue";

export default {
  name: "IndexPage",
  components: {
    ProductShowcase,
    HeroSection,
  },
};
</script>

<style scoped>
/* Add specific styles for the index page here */
</style>
