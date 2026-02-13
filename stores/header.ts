import { defineStore } from "pinia";

export type HeaderConfig = {
  title: string;
  showBack?: boolean;
  showCheckout?: boolean;
};

export const useHeaderStore = defineStore("header", {
  state: (): HeaderConfig => ({
    title: "no title",
    showBack: false,
    showCheckout: false,
  }),

  actions: {
    setHeader(config: HeaderConfig) {
      Object.assign(this, config);
    },

    resetHeader() {
      this.title = "";
      this.showBack = false;
      this.showCheckout = false;
    },
  },
});
