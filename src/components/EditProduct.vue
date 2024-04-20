<template>
  <div class="edit-product">
    <h2>Edit Product</h2>
    <form @submit.prevent="saveProduct">
      <label>Name:</label>
      <input type="text" v-model="editedProduct.name" required />
      <label>Description:</label>
      <textarea
        id="description"
        v-model="editedProduct.description"
        required
      ></textarea>
      <label>Price:</label>
      <input type="text" v-model="editedProduct.price" required />
      <button type="submit">Save</button>
    </form>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      editedProduct: {
        id: null,
        name: "",
        description: "",
        price: "",
      },
    };
  },
  computed: {
    ...mapState(["bookShelf"]),
  },
  created() {
    // Retrieve the product to be edited based on the route parameter
    const productId = parseInt(this.$route.params.id);
    this.editedProduct = this.bookShelf.find(
      (product) => product.id === productId
    );
  },
  methods: {
    ...mapActions(["updateProduct"]),
    saveProduct() {
      // dispatching the updateProduct action with editedProduct as payload
      this.updateProduct(this.editedProduct)
        .then(() => {
          // product updated successfully, navigate back to the list
          this.$router.push({ path: "/" });
        })
        .catch((error) => {
          console.error("Failed to update product:", error);
          // handle error appropriately, e.g., display an error message
        });
    },
  },
};
</script>

<style scoped>
h2 {
  text-align: center;
  font-weight: 500;
  font-size: 30px;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  color: #fff;
}
form {
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin: auto;
}

form input {
  margin-bottom: 20px;
  padding: 10px;
}

label {
  margin-bottom: 5px;
  color: #fff;
}

#description {
  width: 100%;
  box-sizing: border-box;
  height: 15vh;
  resize: none;
}

/* change font */
form input,
#description {
  font-family: "Poppins";
}

form button {
  padding: 10px;
  border: none;
  background: hsla(160, 100%, 37%, 1);
  font-size: 15px;
  font-weight: 600;
  color: #fff;
}
</style>
