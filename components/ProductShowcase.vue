<template>
  <section class="product-showcase container">
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
    >
      <div
        class="product-card"
        v-for="(product, index) in products"
        :key="product.id"
        @click="openModal(index)"
      >
        <div class="product-card-img-wrapper">
          <img :src="product.image" :alt="product.name" />
        </div>
        <div class="product-card-content">
          <h3 class="product-card-eyebrow">{{ product.name }}</h3>
          <div class="product-card-header">
            <a href="#" class="product-card-link">£{{ product.price }}</a>
          </div>
          <p class="product-card-desc">{{ product.description }}</p>
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
          description:
            "Step out in style with these vibrant trainers, perfect for adding a pop of color to any outfit.",
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
          description:
            "Energize your stride with the striking Electric Blue trainers, designed for those who love to stand out.",
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
          description:
            "Light up your look with Neon Glare trainers, a bright and bold choice for everyday wear.",
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
          description:
            "Experience the perfect blend of comfort and color with the Radiant Fusion trainers.",
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
          description:
            "Shine with every step in Luminous Spectrum trainers, where sleek design meets radiant hues.",
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
          description:
            "Ignite your style with Bright Blaze trainers, featuring a fiery mix of colors for a bold look.",
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
          description:
            "Add a touch of modern flair to your wardrobe with the Dynamic Prism trainers, ideal for any occasion.",
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
          description:
            "Make a statement with Chromatic Flash trainers, where vibrant tones meet athletic comfort.",
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
          description:
            "Spark your style with Prismatic Spark trainers, crafted for those who love to shine.",
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
          description:
            "Ride the wave of vibrant fashion with Colorwave trainers, your go-to for colorful comfort.",
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
          description:
            "Fuse your fashion with a burst of color in Neon Fusion trainers, perfect for the bold and the brave.",
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
          description:
            "Glow up your sneaker game with Glow Spectrum trainers, designed to dazzle with every step.",
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
  padding-top: 0;
}

.product-card {
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.product-card-img-wrapper {
  position: relative;
  padding-top: 125%;
  background-color: #f5f5f7;
}

.product-card-img-wrapper img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.product-card-content {
  padding: 1rem;
  text-align: left;
}

.product-card-eyebrow {
  font-size: 0.875rem;
  font-weight: 500;
  color: #666;
  text-transform: uppercase;
  margin-bottom: 0.25rem;
}

.product-card-header {
  margin-bottom: 0.5rem;
}

.product-card-link {
  font-size: 1.25rem;
  font-weight: 600;
  color: #333;
  text-decoration: none;
}

.product-card-desc {
  font-size: 0.875rem;
  color: #888;
  line-height: 1.5;
}

@media (min-width: 640px) {
  .product-card-content {
    padding: 1.5rem;
  }

  .product-card-eyebrow {
    font-size: 0.75rem;
  }

  .product-card-link {
    font-size: 1.125rem;
  }

  .product-card-desc {
    font-size: 0.875rem;
  }
}

@media (max-width: 640px) {
  .product-card-img-wrapper {
    padding-top: 100%;
  }
}
</style>
