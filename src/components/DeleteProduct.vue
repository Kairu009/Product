<template>
  <div class="delete-product-container">
    <div class="delete-product-card">
      <h2>Delete Product</h2>
      <p>Are you sure you want to delete this product?</p>
      <button @click="deleteProduct">Delete</button>
    </div>
  </div>
</template>
  
  <script>
  import { mapActions } from "vuex";
  
  export default {
    methods: {
      ...mapActions(["deleteProductAction"]),
      deleteProduct() {
        this.deleteProductAction(this.productId)
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
.delete-product-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: white;
}

.delete-product-card {
  background-color: #282828;
  color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: -285px;
}

.delete-product-card h2 {
  margin-bottom: 10px;
}

.delete-product-card button {
  background-color: #ff3838;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.delete-product-card button:hover {
  background-color: #ff0000;
}
</style>