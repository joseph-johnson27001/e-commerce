<template>
  <section
    class="hero-section bg-cover bg-center h-96 flex items-center justify-center text-center text-black"
  >
    <div class="hero-content max-w-xl">
      <h1 class="text-4xl md:text-6xl font-bold mb-4">
        <span class="text-black"> Welcome </span> to Our Store
      </h1>
      <p class="text-lg md:text-xl mb-6">
        Discover the latest trends in fashion, tech, and more.
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: "HeroSection",
};
</script>

<style scoped>
.hero-section {
  background-size: cover;
  background-position: center;
  color: #6e6e73;
}
</style>
