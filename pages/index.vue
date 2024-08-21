<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">Welcome to My E-Commerce Site</h1>
    <p class="mb-4">
      This is a sample layout for the main page. Here, you can display featured
      products, promotions, or any other content relevant to your e-commerce
      site.
    </p>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div class="bg-gray-200 p-4 rounded">
        <h2 class="text-xl font-semibold">Product 1</h2>
        <p>Details about product 1.</p>
      </div>
      <div class="bg-gray-200 p-4 rounded">
        <h2 class="text-xl font-semibold">Product 2</h2>
        <p>Details about product 2.</p>
      </div>
      <div class="bg-gray-200 p-4 rounded">
        <h2 class="text-xl font-semibold">Product 3</h2>
        <p>Details about product 3.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
};
</script>

<style scoped>
/* Add specific styles for the index page here */
</style>
