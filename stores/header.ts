import { defineStore } from "pinia";

export type HeaderConfig = {
  title: string;
  showBack?: boolean;
  showCheckout?: boolean;
  price?: number;
};

export const useHeaderStore = defineStore("header", {
  state: (): HeaderConfig => ({
    title: "no title",
    showBack: false,
    showCheckout: false,
    price: 0,
  }),

  actions: {
    setHeader(config: HeaderConfig) {
      Object.assign(this, config);
    },

    resetHeader() {
      this.title = "";
      this.showBack = false;
      this.showCheckout = false;
      this.price = 0;
    },
  },
});
