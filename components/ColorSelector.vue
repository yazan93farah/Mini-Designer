<script setup lang="ts">
import { ref } from "vue";
import type { Color } from "~/types/api";
import ArrowSvg from "./icons/arrowSvg.vue";
import { useProductStore } from "~/stores/product";
const props = defineProps<{
  colors: Color[];
}>();

const startIndex = ref(0);

const visibleCount = 4;

const visibleColors = computed(() =>
  props.colors.slice(startIndex.value, startIndex.value + visibleCount),
);

const next = () => {
  if (startIndex.value + visibleCount < props.colors.length) {
    startIndex.value++;
  }
};

const prev = () => {
  if (startIndex.value > 0) {
    startIndex.value--;
  }
};

const productStore = useProductStore();
const select = (color: Color) => {
  productStore.setColor(color);
};
</script>

<template>
  <div
    class="w-72 h-16 my-4 mx-8 flex-row sm:w-24 sm:h-80 sm:flex-col bg-slate-50 rounded-1xl shadow-2xl p-2 flex items-center justify-items-center justify-self-center"
  >
    <ArrowSvg
      class="w-10 h-10 sm:w-16 sm:h-16 rotate-90 sm:rotate-180 cursor-pointer text-green-500"
      @click="prev"
    />

    <div
      class="flex flex-1 flex-row sm:flex-col gap-3 items-center justify-items-center"
    >
      <div
        v-for="color in visibleColors"
        :key="color.name"
        class="p-1 w-10 sm:w-16 rounded transition cursor-pointer hover:ring-2 hover:ring-gray-400 items-center justify-items-center"
        :class="[
          productStore.selectedColor?.name === color.name
            ? 'ring-2 ring-[#00dd4b] hover:ring-[#00dd4b]'
            : 'hover:ring-2 hover:ring-gray-400',
        ]"
        @click="select(color)"
      >
        <div
          class="w-6 h-6 sm:w-10 sm:h-10 rounded-full border-2 border-gray-200 cursor-pointer"
          :style="{ background: color.color }"
        />
      </div>
    </div>
    <ArrowSvg
      class="w-10 h-10 sm:w-16 sm:h-16 cursor-pointer text-green-500 -rotate-90 sm:rotate-0"
      @click="next"
    />
  </div>
</template>
