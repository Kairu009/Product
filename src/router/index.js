import { createRouter, createWebHistory } from "vue-router";
import Shelf from "../views/ShelfView.vue";
import AddProduct from "../components/AddProduct.vue";
import DeleteProduct from "../components/DeleteProduct.vue";
import EditProduct from "../components/EditProduct.vue";
import ProductList from "../components/ProductList.vue";
import About from "../views/AboutView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "list",
      component: Shelf,
    },
    {
      path: "/addProduct",
      name: "addProduct",
      component: AddProduct,
    },
    {
      path: "/DeleteProduct",
      name: "deleteProduct",
      component: DeleteProduct,
    },
    {
      path: "/editProduct/:id",
      name: "editProduct",
      component: EditProduct,
    },
    {
      path: "/productList",
      name: "productList",
      component: ProductList,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
  ],
});

export default router;
