<template>
  <section class="product-showcase container">
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
          images: [
            "/images/product1.jpg",
            "/images/product1_2.jpg",
            "/images/product1_3.jpg",
          ],
        },
        {
          id: 2,
          name: "Product 2",
          price: 39.99,
          images: [
            "/images/product2.jpg",
            "/images/product2_2.jpg",
            "/images/product2_3.jpg",
          ],
        },
        {
          id: 3,
          name: "Product 3",
          price: 19.99,
          images: [
            "/images/product3.jpg",
            "/images/product3_2.jpg",
            "/images/product3_3.jpg",
          ],
        },
        {
          id: 4,
          name: "Product 4",
          price: 49.99,
          images: [
            "/images/product4.jpg",
            "/images/product4_2.jpg",
            "/images/product4_3.jpg",
          ],
        },
        {
          id: 5,
          name: "Product 5",
          price: 59.99,
          images: [
            "/images/product5.jpg",
            "/images/product5_2.jpg",
            "/images/product5_3.jpg",
          ],
        },
        {
          id: 6,
          name: "Product 6",
          price: 24.99,
          images: [
            "/images/product6.jpg",
            "/images/product6_2.jpg",
            "/images/product6_3.jpg",
          ],
        },
        {
          id: 7,
          name: "Product 7",
          price: 34.99,
          images: [
            "/images/product7.jpg",
            "/images/product7_2.jpg",
            "/images/product7_3.jpg",
          ],
        },
        {
          id: 8,
          name: "Product 8",
          price: 44.99,
          images: [
            "/images/product8.jpg",
            "/images/product8_2.jpg",
            "/images/product8_3.jpg",
          ],
        },
        {
          id: 9,
          name: "Product 9",
          price: 54.99,
          images: [
            "/images/product9.jpg",
            "/images/product9_2.jpg",
            "/images/product9_3.jpg",
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

.product-card img {
  width: 100%;
  height: auto;
}
</style>
