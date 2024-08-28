<template>
  <header class="bg-blue-500 text-white p-4">
    <div class="nav-container mx-auto flex justify-between items-center">
      <!-- SVG Logo that links to the homepage -->
      <nuxt-link to="/" class="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-8 h-8 mr-2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 9h16.5M3.75 15h16.5M4.5 6.75v10.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V6.75m-15 0a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 21.75h10.5a2.25 2.25 0 002.25-2.25V6.75m-15 0V6a2.25 2.25 0 012.25-2.25h10.5A2.25 2.25 0 0119.5 6v.75"
          />
        </svg>
      </nuxt-link>

      <!-- Navigation Links -->
      <nav class="flex space-x-4">
        <nuxt-link to="/about" class="hover:bg-blue-600 px-3 py-2 rounded">
          About
        </nuxt-link>
        <nuxt-link to="/contact" class="hover:bg-blue-600 px-3 py-2 rounded">
          Contact
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
  justify-content: space-between;
  align-items: center;
}
</style>
