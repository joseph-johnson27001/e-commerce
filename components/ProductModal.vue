<template>
  <div
    v-if="isOpen"
    class="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
  >
    <div
      class="modal-content bg-white p-6 rounded-lg relative flex flex-col w-11/12 max-w-md"
    >
      <!-- Close Button -->
      <button
        @click="closeModal"
        class="absolute top-2 right-2 text-gray-700 hover:text-white bg-gray-300 hover:bg-gray-600 rounded-full w-8 h-8 flex items-center justify-center transition-colors duration-300"
      >
        &times;
      </button>

      <!-- Images Section -->
      <div class="flex">
        <!-- Main Product Image -->
        <div class="flex-shrink-0">
          <img
            :src="currentImage"
            :alt="product.name"
            class="w-64 h-64 object-cover border border-gray-300 rounded-lg shadow-md"
          />
        </div>

        <!-- Thumbnails -->
        <div class="thumbnails flex flex-col justify-center ml-4 space-y-2">
          <img
            v-for="(image, index) in product.images"
            :key="index"
            :src="image"
            :alt="'Thumbnail ' + index"
            class="w-16 h-16 object-cover cursor-pointer border-2 border-gray-300 hover:border-blue-500 rounded-lg transition-colors duration-300"
            @click="setImage(index)"
          />
        </div>
      </div>

      <!-- Content Section -->
      <div class="mt-4 w-full">
        <h3 class="text-2xl font-bold mb-2">{{ product.name }}</h3>
        <p class="text-lg text-gray-800 mb-4">${{ product.price }}</p>
        <p class="text-gray-600">{{ product.description }}</p>
      </div>

      <!-- Navigation Buttons -->
      <div class="mt-4 w-full flex justify-between">
        <button
          @click="prevProduct"
          class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
        >
          Previous
        </button>
        <button
          @click="nextProduct"
          class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
        >
          Next
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: Object,
    isOpen: Boolean,
    currentProductIndex: Number,
    products: Array,
  },
  data() {
    return {
      currentImageIndex: 0,
    };
  },
  computed: {
    currentImage() {
      return this.product.images[this.currentImageIndex];
    },
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
    prevProduct() {
      let newIndex =
        this.currentProductIndex > 0
          ? this.currentProductIndex - 1
          : this.products.length - 1;
      this.$emit("update-product", newIndex);
      this.resetImageIndex();
    },
    nextProduct() {
      let newIndex =
        this.currentProductIndex < this.products.length - 1
          ? this.currentProductIndex + 1
          : 0;
      this.$emit("update-product", newIndex);
      this.resetImageIndex();
    },
    setImage(index) {
      this.currentImageIndex = index;
    },
    resetImageIndex() {
      this.currentImageIndex = 0;
    },
  },
};
</script>

<style scoped>
.modal-overlay {
  background: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: #fff;
  padding: 1.5rem;
  border-radius: 0.5rem;
  position: relative;
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 600px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

h3 {
  background: linear-gradient(45deg, #1e3a8a, #f87171);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
}

button {
  transition: background-color 0.3s ease, color 0.3s ease;
}

.thumbnails {
  display: flex;
  flex-direction: column;
  align-self: start;
}

@media (min-width: 640px) {
  .modal-content {
    flex-direction: column;
  }
}
</style>
