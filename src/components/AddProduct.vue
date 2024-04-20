<template>
  <div>
    <h2 class="add-product-title">Add Product</h2>
    <form @submit.prevent="addProduct">
      <label for="name">Name:</label>
      <input type="text" v-model="productName" id="name" required />
      <label for="description">Description:</label>
      <input
        type="text"
        v-model="productDescription"
        id="description"
        required
      />
      <label for="price">Price:</label>
      <input type="text" v-model.number="productPrice" id="price" required />
      <button type="submit">Add</button>
    </form>
  </div>
</template>

<script scoped>
export default {
  data() {
    return {
      productName: "",
      productDescription: "",
      productPrice: 0,
    };
  },
  methods: {
    addProduct() {
      const newProduct = {
        id: this.$store.state.bookShelf.length + 1,
        name: this.productName,
        description: this.productDescription,
        price: parseFloat(this.productPrice),
      };
      this.$store.dispatch("addProduct", newProduct);
      this.productName = "";
      this.productDescription = "";
      this.productPrice = 0;
      this.$router.push({ name: "productList" });
    },
  },
};
</script>

<style>
h2 {
  font-weight: 500;
  font-size: 30px;
  color: white;
  text-align: center;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
}
form {
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin: auto;
}

form input {
  padding: 10px;
}

label {
  margin-bottom: 5px;
  color: white;
}

form input {
  margin-bottom: 20px;
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
