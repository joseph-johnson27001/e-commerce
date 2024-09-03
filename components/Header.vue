<template>
  <header class="text-black p-1">
    <div class="nav-container mx-auto flex justify-center">
      <!-- Navigation Links -->
      <nav class="flex space-x-4 items-container">
        <nuxt-link to="/" class="flex items-center px-3 py-2 rounded">
          <img
            src="/images/shoe-icon.png"
            alt="Home"
            class="w-6 h-6 object-contain"
          />
        </nuxt-link>
        <nuxt-link
          to="/"
          class="nav-link flex items-center px-3 py-2 rounded text-sm"
        >
          Shop
        </nuxt-link>
        <nuxt-link
          to="/"
          class="nav-link flex items-center px-3 py-2 rounded text-sm"
        >
          New Arrivals
        </nuxt-link>
        <nuxt-link
          to="/"
          class="nav-link flex items-center px-3 py-2 rounded text-sm"
        >
          Best Sellers
        </nuxt-link>
        <nuxt-link
          to="/"
          class="nav-link flex items-center px-3 py-2 rounded text-sm"
        >
          Sales
        </nuxt-link>
        <nuxt-link
          to="/"
          class="nav-link flex items-center px-3 py-2 rounded text-sm"
        >
          About
        </nuxt-link>
        <nuxt-link
          to="/"
          class="nav-link flex items-center px-3 py-2 rounded text-sm"
        >
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
  width: 100%;
}

nav img {
  display: block;
  margin-bottom: 5px;
}

.nav-link {
  color: #000;
  transition: color 0.1s cubic-bezier(0.4, 0, 0.6, 1);
}

.nav-link:hover {
  color: #f87171;
}

.items-container {
  width: 100%;
  justify-content: space-between;
}
</style>
