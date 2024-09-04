<template>
  <section
    class="hero-section bg-cover bg-center h-64 flex items-center justify-center text-center"
  >
    <div class="hero-content max-w-xl">
      <h1 class="text-4xl md:text-6xl font-bold mb-4 hero-heading">
        <span class="text-gradient">Step Up</span> Your Game
      </h1>
      <p class="mb-6 sub-heading">
        Find the perfect trainers to elevate your style and performance.
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
}

.hero-heading {
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  background: linear-gradient(45deg, #1e3a8a, #f87171);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
}

.sub-heading {
  color: #888;
  line-height: 1.5;
  font-size: 0.9rem;
  text-transform: uppercase;
}
</style>
