<template>
    <div>
      <h2>Delete Product</h2>
      <p>Are you sure you want to delete this product?</p>
      <button @click="deleteProduct">Delete</button>
    </div>
  </template>
  
  <script>
  import { mapActions } from "vuex";
  
  export default {
    methods: {
      ...mapActions(["deleteProduct"]),
      deleteProduct() {
        this.deleteProduct(this.productId)
          .then(() => {
            // Product deleted successfully, navigate back to the product list
            this.$router.push({ name: "productList" });
          })
          .catch((error) => {
            console.error("Failed to delete product:", error);
            // Handle error appropriately
          });
      },
    },
    computed: {
      productId() {
        return parseInt(this.$route.params.id);
      },
    },
  };
  </script>

<style>

</style>