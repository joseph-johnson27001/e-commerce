<template>
  <div>
    <Header />
    <main>
      <HeroSection />
      <Nuxt />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";
import HeroSection from "~/components/Hero/HeroSection.vue";

export default {
  components: {
    Header,
    Footer,
    HeroSection,
  },
};
</script>
