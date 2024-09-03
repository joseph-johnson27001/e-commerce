<template>
  <header class="text-black p-4">
    <div class="nav-container mx-auto flex justify-center">
      <!-- Navigation Links -->
      <nav class="flex space-x-4">
        <nuxt-link to="/" class="px-3 py-2 rounded text-sm"> Home </nuxt-link>
        <nuxt-link to="/shop" class="px-3 py-2 rounded text-sm">
          Shop
        </nuxt-link>
        <nuxt-link to="/new-arrivals" class="px-3 py-2 rounded text-sm">
          New Arrivals
        </nuxt-link>
        <nuxt-link to="/best-sellers" class="px-3 py-2 rounded text-sm">
          Best Sellers
        </nuxt-link>
        <nuxt-link to="/sales" class="px-3 py-2 rounded text-sm">
          Sales
        </nuxt-link>
        <nuxt-link to="/about" class="px-3 py-2 rounded text-sm">
          About
        </nuxt-link>
        <nuxt-link to="/contact-us" class="px-3 py-2 rounded text-sm">
          Contact Us
        </nuxt-link>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
.nav-container {
  max-width: 1200px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
