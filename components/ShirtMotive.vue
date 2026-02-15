<script setup lang="ts">
import { useProductStore } from "~/stores/product";
import ShirtSvg from "./icons/ShirtSvg.vue";
const productStore = useProductStore();
defineProps<{
  size: string;
}>();
</script>

<template>
  <div class="relative">
    <ShirtSvg
      :class="size"
      :style="{ '--shirt-color': productStore.selectedColor?.color }"
    />
    <img
      v-if="productStore.selectedMotive"
      :src="productStore.selectedMotive.img"
      class="absolute top-[45%] left-1/2 w-24 sm:w-32 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
    />
  </div>
</template>
