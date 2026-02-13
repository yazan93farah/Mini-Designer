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
    class="w-24 h-84 bg-slate-50 rounded-1xl shadow-2xl p-2 flex flex-col items-center justify-items-center"
  >
    <ArrowSvg
      class="w-16 h-16 rotate-180 cursor-pointer text-green-500"
      @click="prev"
    />

    <div class="flex flex-1 flex-col gap-3 items-center justify-items-center">
      <div
        v-for="color in visibleColors"
        :key="color.name"
        class="p-1 w-16 rounded transition cursor-pointer hover:ring-2 hover:ring-gray-400 items-center justify-items-center"
        :class="{
          'ring-2 ring-[#00dd4b]':
            productStore.selectedColor?.name === color.name,
        }"
        @click="select(color)"
      >
        <div
          class="w-10 h-10 rounded-full border-2 border-gray-200 cursor-pointer"
          :style="{ background: color.color }"
        />
      </div>
    </div>
    <ArrowSvg class="w-16 h-16 cursor-pointer text-green-500" @click="next" />
  </div>
</template>
