<!-- layouts/default.vue -->
<template>
  <div>
    <Header />
    <main class="container p-4 min-h-screen">
      <Nuxt />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
/* Global layout styles */
</style>
