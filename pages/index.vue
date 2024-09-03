<template>
  <div>
    <HeroSection />
    <div class="showcase-container">
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
  padding: 0px 1rem;
}
</style>
