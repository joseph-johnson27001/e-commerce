<!-- components/ProductShowcase.vue -->
<template>
  <section class="product-showcase container">
    <h2>Featured Products</h2>
    <div class="grid grid-cols-3 gap-4">
      <div class="product-card" v-for="product in products" :key="product.id">
        <img :src="product.image" :alt="product.name" />
        <h3>{{ product.name }}</h3>
        <p>£{{ product.price }}</p>
        <button class="add-to-cart">Add to Cart</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
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
      ],
    };
  },
};
</script>

<style scoped>
.product-showcase {
  padding: 2rem 0;
}

.product-card {
  border: 1px solid #ddd;
  padding: 1rem;
  text-align: center;
}

.add-to-cart {
  background-color: #333;
  color: #fff;
  padding: 0.5rem 1rem;
  border: none;
  cursor: pointer;
}

.add-to-cart:hover {
  background-color: #555;
}
</style>
