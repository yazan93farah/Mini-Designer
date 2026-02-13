<script setup lang="ts">
import ShirtSvg from "~/components/icons/ShirtSvg.vue";
import { useProductStore } from "~/stores/product";
import type { Color, Motive } from "~/types/api";

useHeader({
  title: "Design your Shirt",
  showCheckout: true,
});
const productStore = useProductStore();
const { data: motives } = await useFetch<Motive[]>("/api/motives");
const { data: colors } = await useFetch<Color[]>("/api/colors");
</script>

<template>
  <div class="min-h-[calc(100vh-12rem)] flex items-center">
    <div class="w-full px-6 md:px-12 grid grid-cols-3 items-center">
      <div class="justify-self-start">
        <ColorSelector v-if="colors" :colors="colors" />
      </div>

      <div class="justify-self-center">
        <ShirtSvg
          class="w-80"
          :style="{ '--shirt-color': productStore.selectedColor?.color }"
          :class="[
            `[&_.shirt-color]:fill-${productStore.selectedColor?.color}`,
          ]"
        />
      </div>

      <div class="justify-self-end">
        <MotivesSelector v-if="motives" :motives="motives" />
      </div>
    </div>
  </div>
</template>
