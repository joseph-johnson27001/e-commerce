// tests/unit/ProductShowcase.spec.js
import { mount } from "@vue/test-utils";
import ProductShowcase from "~/components/ProductShowcase.vue";

describe("ProductShowcase.vue", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(ProductShowcase, {
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
    });
  });

  it("renders the correct number of products", () => {
    const productCards = wrapper.findAll(".product-card");
    expect(productCards.length).toBe(3);
  });

  it("opens modal when a product is clicked", async () => {
    const productCard = wrapper.find(".product-card");
    await productCard.trigger("click");
    expect(wrapper.vm.isModalOpen).toBe(true);
    expect(wrapper.vm.currentProductIndex).toBe(0);
  });

  it("closes the modal when closeModal is called", async () => {
    await wrapper.vm.openModal(0);
    wrapper.vm.closeModal();
    expect(wrapper.vm.isModalOpen).toBe(false);
  });

  it("updates the current product index when updateProductIndex is called", () => {
    wrapper.vm.updateProductIndex(2);
    expect(wrapper.vm.currentProductIndex).toBe(2);
    expect(wrapper.vm.currentProduct.name).toBe("Product 3");
  });
});
