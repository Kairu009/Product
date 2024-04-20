import Vuex from "vuex";

export default new Vuex.Store({
  name: "store",
  state: {
    bookShelf: [
      {
        id: 1,
        name: "Apple iPhone 13 Pro Max",
        description:
          "The latest flagship smartphone from Apple, featuring a stunning Super Retina XDR display, A15 Bionic chip, advanced camera system, and 5G capability.",
        price: "56,950",
      },
      {
        id: 2,
        name: "Sony WH-1000XM4 Wireless Noise-Canceling Headphones",
        description:
          "Premium wireless headphones with industry-leading noise-canceling technology, high-resolution audio, long battery life, and touch sensor controls",
        price: "17,450",
      },
      {
        id: 3,
        name: "Samsung QLED 4K UHD Smart TV (55-inch)",
        description:
          "Immerse yourself in vibrant colors and stunning clarity with this QLED TV from Samsung. It features Quantum Dot technology, a sleek design, and smart capabilities.",
        price: "59,950",
      },
      {
        id: 4,
        name: "Dyson V11 Torque Drive Cordless Vacuum Cleaner",
        description:
          "Experience powerful cleaning performance with the Dyson V11. It offers intelligent suction, long battery life, and versatility to clean any surface.",
        price: "34,950",
      },
      {
        id: 5,
        name: "Nintendo Switch OLED Model",
        description:
          "Enjoy gaming on the go with the Nintendo Switch OLED Model. It features a vibrant OLED screen, enhanced audio, and the versatility to play in handheld, tabletop, or TV mode.",
        price: "17,450",
      },
      {
        id: 6,
        name: "Instant Pot Duo Nova Pressure Cooker (6-Quart)",
        description:
          "Make cooking easier and faster with the Instant Pot Duo Nova. It combines seven appliances in one, including a pressure cooker, slow cooker, and steamer.",
        price: "4,950",
      },
      {
        id: 7,
        name: "Fitbit Charge 5 Fitness Tracker",
        description:
          "Track your fitness goals and monitor your health with the Fitbit Charge 5. It features advanced health metrics, built-in GPS, heart rate monitoring, and up to 7 days of battery life.",
        price: "8,950",
      },
      {
        id: 8,
        name: "Amazon Echo Show 15",
        description:
          "Stay connected and organized with the Amazon Echo Show 15. It features a 15.6-inch display, Alexa integration, video calling, and smart home control.",
        price: "12,450",
      },
      {
        id: 9,
        name: "Bose SoundLink Revolve+ Portable Bluetooth Speaker",
        description:
          "Enjoy 360-degree sound quality wherever you go with the Bose SoundLink Revolve+. It features deep, immersive sound, a durable design, and long-lasting battery life.",
        price: "14,950",
      },
      {
        id: 10,
        name: "Roomba i7+ Robot Vacuum with Automatic Dirt Disposal",
        description:
          "Keep your home clean effortlessly with the Roomba i7+. It features advanced navigation technology, automatic dirt disposal, and compatibility with smart home systems.",
        price: "39,950",
      },
    ],
  },
  mutations: {
    addProduct(state, product) {
      state.bookShelf.push(product);
    },
    updateProduct(state, updatedProduct) {
      const index = state.bookShelf.findIndex(
        (p) => p.id === updatedProduct.id
      );
      if (index !== -1) {
        // directly update the product at the found index
        state.bookShelf[index] = updatedProduct;
      }
    },
    deleteProduct(state, productId) {
      state.bookShelf = state.bookShelf.filter(product => product.id !== productId);
    },
  },
  actions: {
    addProduct({ commit }, product) {
      commit("addProduct", product);
    },
    updateProduct({ commit }, updatedProduct) {
      return new Promise((resolve, reject) => {
        try {
          commit("updateProduct", updatedProduct);
          resolve();
        } catch (error) {
          reject(error);
        }
      });
    },
    deleteProductAction({ commit }, productId) {
      return new Promise((resolve, reject) => {
        try {
          commit("deleteProduct", productId);
          resolve();
        } catch (error) {
          reject(error);
        }
      });
    },
  },
  getters: {
    bookShelf: (state) => state.bookShelf,
  },
});
