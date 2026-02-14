import { defineStore } from "pinia";
import type { Color, Motive } from "~/types/api";
import { useProductStore } from "./product";

export type DataConfig = {
  colors: Color[];
  motives: Motive[];
  loaded?: boolean;
};

export const useDataStore = defineStore("data", {
  state: (): DataConfig => ({
    colors: [],
    motives: [],
    loaded: false,
  }),

  actions: {
    async fetchData() {
      if (this.loaded) return;

      const [motives, colors] = await Promise.all([
        $fetch<Motive[]>("/api/motives"),
        $fetch<Color[]>("/api/colors"),
      ]);

      this.colors = colors;
      this.motives = motives;
      this.loaded = true;
      const productStore = useProductStore();

      if (!productStore.selectedColor && colors.length) {
        productStore.setColor(colors[0]);
      }

      if (!productStore.selectedMotive && motives.length) {
        productStore.setMotive(motives[0]);
      }
    },
  },
});
