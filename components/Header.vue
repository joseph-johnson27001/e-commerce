<template>
  <header class="text-black p-2 relative">
    <!-- HIDE THIS SECTION ON SMALLER VIEWPORTS -->
    <div class="nav-container mx-auto flex justify-between lg:justify-center">
      <!-- Navigation Links - Visible on larger viewports -->
      <nav class="hidden md:flex space-x-4 items-container">
        <!-- Left Icon -->
        <nuxt-link to="/" class="flex items-center px-3 py-2">
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
          class="nav-link flex items-center px-3 py-2 text-sm"
        >
          {{ link.text }}
        </nuxt-link>
      </nav>

      <!-- Burger Menu Button - Visible on smaller viewports -->
      <nuxt-link
        to="/"
        class="md:hidden flex items-center px-3 py-2 justify-end"
      >
        <img
          src="/images/shoe-icon.png"
          alt="Home"
          class="w-6 h-6 object-contain"
        />
      </nuxt-link>
      <button @click="toggleMenu" class="md:hidden px-3 py-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6h16.5M3.75 12h16.5M3.75 18h16.5"
          />
        </svg>
      </button>
    </div>

    <!-- Dropdown for smaller viewports -->
    <div
      v-if="menuOpen"
      class="md:hidden absolute top-15 left-0 right-0 z-50 burger-dropdown"
    >
      <nav class="flex flex-col space-y-2 py-4">
        <nuxt-link
          v-for="(link, index) in navLinks"
          :key="index"
          :to="link.url"
          class="nav-link flex items-center px-4 py-2 text-sm justify-center"
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
      menuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
  },
};
</script>

<style scoped>
.nav-container {
  max-width: 1400px;
  display: flex;
  align-items: center;
  justify-content: space-between;
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

/* Dropdown Overlay */
.absolute {
  position: absolute;
}

.z-50 {
  z-index: 50;
}

.bg-white {
  background-color: #fff;
}

.py-4 {
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.burger-dropdown {
  background-color: #f5f5f7;
}
</style>
