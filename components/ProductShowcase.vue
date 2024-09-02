<template>
  <section class="product-showcase container">
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
    >
      <div
        class="product-card bg-gray-200 rounded cursor-pointer"
        v-for="(product, index) in products"
        :key="product.id"
        @click="openModal(index)"
      >
        <img :src="product.image" :alt="product.name" />
        <div class="product-card-content">
          <h3 class="text-lg font-semibold">{{ product.name }}</h3>
          <p class="text-gray-700 mb-2">${{ product.price }}</p>
        </div>
      </div>
    </div>

    <!-- Product Modal -->
    <ProductModal
      v-if="isModalOpen"
      :product="currentProduct"
      :isOpen="isModalOpen"
      :currentProductIndex="currentProductIndex"
      :products="products"
      @close="closeModal"
      @update-product="updateProductIndex"
    />
  </section>
</template>

<script>
import ProductModal from "~/components/ProductModal.vue";

export default {
  name: "ProductShowcase",
  components: {
    ProductModal,
  },
  data() {
    return {
      products: [
        {
          id: 1,
          name: "Vivid Burst",
          price: 29.99,
          image: "/images/Trainer-Images/Trainer-colourful12.jpg",
          images: [
            "/images/Trainer-Images/Trainer-colourful12.jpg",
            "/images/Trainer-Images/Trainer-colourful13.jpg",
            "/images/Trainer-Images/Trainer-colourful1.jpg",
          ],
        },
        {
          id: 2,
          name: "Electric Blue",
          price: 39.99,
          image: "/images/Trainer-Images/Trainer-colourful1.jpg",
          images: [
            "/images/Trainer-Images/Trainer-colourful1.jpg",
            "/images/Trainer-Images/Trainer-colourful2.jpg",
            "/images/Trainer-Images/Trainer-colourful3.jpg",
          ],
        },
        {
          id: 3,
          name: "Neon Glare",
          price: 19.99,
          image: "/images/Trainer-Images/Trainer-colourful2.jpg",
          images: [
            "/images/Trainer-Images/Trainer-colourful2.jpg",
            "/images/Trainer-Images/Trainer-colourful4.jpg",
            "/images/Trainer-Images/Trainer-colourful5.jpg",
          ],
        },
        {
          id: 4,
          name: "Radiant Fusion",
          price: 49.99,
          image: "/images/Trainer-Images/Trainer-colourful3.jpg",
          images: [
            "/images/Trainer-Images/Trainer-colourful3.jpg",
            "/images/Trainer-Images/Trainer-colourful6.jpg",
            "/images/Trainer-Images/Trainer-colourful7.jpg",
          ],
        },
        {
          id: 5,
          name: "Luminous Spectrum",
          price: 59.99,
          image: "/images/Trainer-Images/Trainer-colourful4.jpg",
          images: [
            "/images/Trainer-Images/Trainer-colourful4.jpg",
            "/images/Trainer-Images/Trainer-colourful8.jpg",
            "/images/Trainer-Images/Trainer-colourful9.jpg",
          ],
        },
        {
          id: 6,
          name: "Bright Blaze",
          price: 24.99,
          image: "/images/Trainer-Images/Trainer-colourful13.jpg",
          images: [
            "/images/Trainer-Images/Trainer-colourful13.jpg",
            "/images/Trainer-Images/Trainer-colourful10.jpg",
            "/images/Trainer-Images/Trainer-colourful11.jpg",
          ],
        },
        {
          id: 7,
          name: "Dynamic Prism",
          price: 34.99,
          image: "/images/Trainer-Images/Trainer-colourful6.jpg",
          images: [
            "/images/Trainer-Images/Trainer-colourful6.jpg",
            "/images/Trainer-Images/Trainer-colourful12.jpg",
            "/images/Trainer-Images/Trainer-colourful1.jpg",
          ],
        },
        {
          id: 8,
          name: "Chromatic Flash",
          price: 44.99,
          image: "/images/Trainer-Images/Trainer-colourful7.jpg",
          images: [
            "/images/Trainer-Images/Trainer-colourful7.jpg",
            "/images/Trainer-Images/Trainer-colourful8.jpg",
            "/images/Trainer-Images/Trainer-colourful2.jpg",
          ],
        },
        {
          id: 9,
          name: "Prismatic Spark",
          price: 54.99,
          image: "/images/Trainer-Images/Trainer-colourful8.jpg",
          images: [
            "/images/Trainer-Images/Trainer-colourful8.jpg",
            "/images/Trainer-Images/Trainer-colourful9.jpg",
            "/images/Trainer-Images/Trainer-colourful3.jpg",
          ],
        },
        {
          id: 10,
          name: "Colorwave",
          price: 64.99,
          image: "/images/Trainer-Images/Trainer-colourful9.jpg",
          images: [
            "/images/Trainer-Images/Trainer-colourful9.jpg",
            "/images/Trainer-Images/Trainer-colourful10.jpg",
            "/images/Trainer-Images/Trainer-colourful11.jpg",
          ],
        },
        {
          id: 11,
          name: "Neon Fusion",
          price: 74.99,
          image: "/images/Trainer-Images/Trainer-colourful10.jpg",
          images: [
            "/images/Trainer-Images/Trainer-colourful10.jpg",
            "/images/Trainer-Images/Trainer-colourful11.jpg",
            "/images/Trainer-Images/Trainer-colourful12.jpg",
          ],
        },
        {
          id: 12,
          name: "Glow Spectrum",
          price: 84.99,
          image: "/images/Trainer-Images/Trainer-colourful11.jpg",
          images: [
            "/images/Trainer-Images/Trainer-colourful11.jpg",
            "/images/Trainer-Images/Trainer-colourful13.jpg",
            "/images/Trainer-Images/Trainer-colourful4.jpg",
          ],
        },
      ],
      isModalOpen: false,
      currentProductIndex: 0,
    };
  },
  computed: {
    currentProduct() {
      return this.products[this.currentProductIndex];
    },
  },
  methods: {
    openModal(index) {
      this.currentProductIndex = index;
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
    updateProductIndex(newIndex) {
      this.currentProductIndex = newIndex;
    },
  },
};
</script>

<style scoped>
.product-showcase {
  padding: 2rem 0;
}

.product-card {
  position: relative;
  overflow: hidden;
}

.product-card img {
  width: 100%;
  height: auto;
  display: block;
}

.product-card-content {
  padding: 0.5rem;
}
</style>
