<template>
    <div class="delete-product-container">
      <div class="delete-product-card">
        <h2>Delete Product</h2>
        <p>
          Are you sure you want to delete this
          <strong>{{ deletedProduct.name }}</strong
          >?
        </p>
        <div class="buttons">
          <button class="cancel" @click="cancelDelete">Cancel</button>
          <button class="confirm" @click="confirmDelete">Delete</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { mapActions, mapState } from "vuex";
  
  export default {
    data() {
      return {
        deletedProduct: {},
      };
    },
    created() {
      // Retrieve the product to be deleted based on the route parameter
      const productId = parseInt(this.$route.params.id);
      this.deletedProduct = this.bookShelf.find(
        (product) => product.id === productId
      );
    },
    methods: {
      ...mapActions(["deleteProductAction"]),
      confirmDelete() {
        const productId = parseInt(this.$route.params.id);
        const productName = this.deletedProduct.name;
        if (confirm(`Are you sure you want to delete ${productName}?`)) {
          this.deleteProductAction(productId)
            .then(() => {
              // Product deleted successfully, navigate back to the product list
              this.$router.push({ name: "productList" });
            })
            .catch((error) => {
              console.error("Failed to delete product:", error);
              // Handle error appropriately
            });
        }
      },
      cancelDelete() {
        // Redirect back to the product list
        this.$router.push({ name: "productList" });
      },
    },
    computed: {
      ...mapState(["bookShelf"]),
    },
  };
  </script>
  
  <style>
  .delete-product-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50vh;
    margin-top: 13rem;
  }
  
  .delete-product-card {
    text-align: center;
    background-color: #282828;
    color: #fff;
    padding: 40px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin-top: -285px;
    width: 30rem;
  }
  
  .delete-product-card h2 {
    margin-top: -10px;
    margin-bottom: 10px;
  }
  
  .delete-product-card strong {
    font-weight: 600;
  }
  
  .delete-product-card button {
    color: #fff;
    border: none;
    margin: 5px;
    margin-top: 20px;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .delete-product-card .confirm {
    background-color: #ff3838;
  }
  
  .delete-product-card .cancel {
    background: hsla(160, 100%, 37%, 1);
  }
  
  .delete-product-card .confirm:hover {
    background-color: hsla(0, 100%, 30%, 1);
  }
  .delete-product-card .cancel:hover {
    background: hsla(160, 100%, 30%, 1);
  }
  </style>