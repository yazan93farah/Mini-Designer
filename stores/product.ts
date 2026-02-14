import { defineStore } from "pinia";
import type { Color, Motive } from "~/types/api";
interface ProductState {
  selectedColor: Color | null;
  selectedMotive: Motive | null;
}

export const useProductStore = defineStore("product", {
  state: (): ProductState => ({
    selectedColor: null,
    selectedMotive: null,
  }),

  getters: {
    productPrice: (state): number => {
      const colorPrice = state.selectedColor?.price ?? 0;
      const motivePrice = state.selectedMotive?.price ?? 0;
      const total = colorPrice + motivePrice;
      return Math.trunc(total * 100) / 100;
    },
  },

  actions: {
    setColor(color: Color | null) {
      this.selectedColor = color;
    },
    setMotive(motive: Motive | null) {
      this.selectedMotive = motive;
    },
  },
});
