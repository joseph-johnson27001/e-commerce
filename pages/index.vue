<template>
  <div>
    <div class="showcase-container container">
      <ProductShowcase />
    </div>
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
.showcase-container {
  display: flex;
  justify-content: center;
}
</style>
