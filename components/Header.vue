<template>
  <header class="text-black p-2">
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
          v-for="(link, index) in navLinks"
          :key="index"
          :to="link.url"
          class="nav-link flex items-center px-3 py-2 rounded text-sm"
        >
          {{ link.text }}
        </nuxt-link>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      navLinks: [
        { text: "Shop", url: "/" },
        { text: "New Arrivals", url: "/" },
        { text: "Best Sellers", url: "/" },
        { text: "Sales", url: "/" },
        { text: "Blog", url: "/" },
        { text: "FAQ", url: "/" },
      ],
    };
  },
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
