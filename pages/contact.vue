<template>
  <main class="container mx-auto px-4 py-8">
    <section class="text-center mb-8">
      <h2 class="text-3xl font-bold mb-4">Contact Us</h2>
      <p class="text-lg text-gray-700">
        We’d love to hear from you! Whether you have a question, concern, or
        just want to say hello, feel free to reach out to us.
      </p>
    </section>

    <section class="mb-8 max-w-lg mx-auto">
      <h3 class="text-2xl font-semibold mb-4">Get in Touch</h3>
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
            Name
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Your name"
          />
        </div>

        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
            Email
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Your email"
          />
        </div>

        <div class="mb-6">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="message"
          >
            Message
          </label>
          <textarea
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            rows="4"
            placeholder="Your message"
          ></textarea>
        </div>

        <div class="flex items-center justify-between">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Send Message
          </button>
        </div>
      </form>
    </section>

    <section class="text-center">
      <h3 class="text-2xl font-semibold mb-4">Contact Information</h3>
      <p class="text-gray-700">Email: support@ecommerce.com</p>
      <p class="text-gray-700">Phone: (123) 456-7890</p>
      <p class="text-gray-700">
        Address: 123 E-Commerce St, Shopping City, SC 12345
      </p>
    </section>
  </main>
</template>

<script>
export default {
  name: "ContactPage",
};
</script>

<style scoped>
/* Additional styling can go here if needed */
</style>
