import { defineStore } from "pinia";

export const useGlobalStore = defineStore("global", {
  state: () => ({
    count: 0,
    cart: [],
  }),
  actions: {
    increment() {
      this.count++;
    },
    addToCart() {
      this.count++;
    },
  },
});
