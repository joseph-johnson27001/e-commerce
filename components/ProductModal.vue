<template>
  <div
    v-if="isOpen"
    class="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
  >
    <div
      class="modal-content bg-white p-6 rounded-lg relative w-11/12 max-w-3xl"
    >
      <button
        @click="closeModal"
        class="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
      >
        &times;
      </button>
      <img
        :src="product.image"
        :alt="product.name"
        class="mb-4 w-full h-64 object-cover"
      />
      <h3 class="text-2xl font-semibold mb-2">{{ product.name }}</h3>
      <p class="text-xl text-gray-700 mb-4">${{ product.price }}</p>
      <p class="text-gray-600">{{ product.description }}</p>
      <div class="mt-6 flex justify-between">
        <button
          @click="prevProduct"
          class="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Previous
        </button>
        <button
          @click="nextProduct"
          class="bg-blue-500 text-white px-4 py-2 rounded"
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
    },
    nextProduct() {
      let newIndex =
        this.currentProductIndex < this.products.length - 1
          ? this.currentProductIndex + 1
          : 0;
      this.$emit("update-product", newIndex);
    },
  },
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.75);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: #fff;
  padding: 2rem;
  border-radius: 0.5rem;
  position: relative;
  max-width: 90%;
  max-height: 90%;
  overflow-y: auto;
}
</style>
