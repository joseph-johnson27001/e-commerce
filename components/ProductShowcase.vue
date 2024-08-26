<template>
  <section class="product-showcase container">
    <h2 class="text-xl font-semibold mb-4">Featured Products</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div
        class="product-card bg-gray-200 p-4 rounded cursor-pointer"
        v-for="(product, index) in products"
        :key="product.id"
        @click="openModal(index)"
      >
        <img :src="product.image" :alt="product.name" class="mb-2" />
        <h3 class="text-lg font-semibold">{{ product.name }}</h3>
        <p class="text-gray-700 mb-2">${{ product.price }}</p>
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
          name: "Product 1",
          price: 29.99,
          image: "/images/product1.jpg",
        },
        {
          id: 2,
          name: "Product 2",
          price: 39.99,
          image: "/images/product2.jpg",
        },
        {
          id: 3,
          name: "Product 3",
          price: 19.99,
          image: "/images/product3.jpg",
        },
        {
          id: 4,
          name: "Product 4",
          price: 49.99,
          image: "/images/product4.jpg",
        },
        {
          id: 5,
          name: "Product 5",
          price: 59.99,
          image: "/images/product5.jpg",
        },
        {
          id: 6,
          name: "Product 6",
          price: 24.99,
          image: "/images/product6.jpg",
        },
        {
          id: 7,
          name: "Product 7",
          price: 34.99,
          image: "/images/product7.jpg",
        },
        {
          id: 8,
          name: "Product 8",
          price: 44.99,
          image: "/images/product8.jpg",
        },
        {
          id: 9,
          name: "Product 9",
          price: 54.99,
          image: "/images/product9.jpg",
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

.product-card img {
  width: 100%;
  height: auto;
}
</style>
