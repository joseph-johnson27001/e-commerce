<template>
  <section
    class="hero-section bg-cover bg-center h-96 flex items-center justify-center text-center text-white"
  >
    <div class="hero-content max-w-xl">
      <h1 class="text-4xl md:text-6xl font-bold mb-4">Welcome to Our Store</h1>
      <p class="text-lg md:text-xl mb-6">
        Discover the latest trends in fashion, tech, and more.
      </p>
      <button
        class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded"
      >
        Shop Now
      </button>
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
  background-image: url("/images/abstract.jpg");
  background-color: #4a90e2;
  background-size: cover;
  background-position: center;
  color: #fff;
}
</style>
