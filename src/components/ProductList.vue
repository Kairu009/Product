<template>
  <div class="list">
    <h2>Products Lists</h2>
    <div class="scroll">
      <div class="container">
        <div class="card" v-for="book in bookShelf" :key="book.id">
          <div class="details">
            <h3>{{ book.name }}</h3>
            <p>{{ book.description }}</p>
            <p>₱ {{ book.price }}</p>
          </div>
          <div class="controls">
            <button @click="goToEditProduct(book.id)">Edit</button>
            <button>Delete</button>
          </div>
        </div>
      </div>
    </div>
    <div class="wrapper-add">
      <button @click="goToAddProduct">+</button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  methods: {
    goToAddProduct() {
      this.$router.push({ name: "addProduct" });
    },
    goToEditProduct(bookId) {
      // pass the book id as a parameter when navigating
      this.$router.push({ name: "editProduct", params: { id: bookId } });
    },
  },
  computed: {
    ...mapState(["bookShelf"]),
  },
};
</script>

<style scoped>
h2 {
  font-weight: 500;
  font-size: 30px;
  color: #fff;
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.scroll {
  height: 63vh;
  overflow: auto;
}

.scroll::-webkit-scrollbar {
  overflow: hidden;
}

.card {
  border-radius: 10px;
  margin-left: 100px;
  margin-right: 100px;
  margin-bottom: 15px;
  padding: 30px;
  background: #282828;
}

.details {
  margin: 2px;
  width: 100vh;
  font-size: 16px;
  color: #fff;
}

.details h3 {
  word-wrap: break-word;
  font-weight: 600;
  margin-bottom: 1rem;
}

.controls {
  display: flex;
  align-items: end;
  justify-content: end;
}

.controls button {
  padding: 10px;
  margin-left: 5px;
  background-color: hsla(160, 100%, 37%, 1);
  font-weight: bolder;
  font-size: 15px;
  color: #fff;
  border: none;
  border-radius: 5px;
  width: 70px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.controls button:disabled {
  background-color: hsla(160, 50%, 50%, 0.5);
  cursor: not-allowed;
}

.controls button:hover {
  background-color: hsla(160, 100%, 47%, 1);
}

/* btn add */

.wrapper-add {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
}

.wrapper-add button {
  border: none;
  background: hsla(160, 100%, 37%, 1);
  width: 59px;
  height: 59px;
  border-radius: 50%;
  font-size: 30px;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.wrapper-add button:hover {
  background-color: hsla(160, 100%, 47%, 1);
}
</style>
