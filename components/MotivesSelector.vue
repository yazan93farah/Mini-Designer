<script setup lang="ts">
import { ref } from "vue";
import type { Motive } from "~/types/api";
import ArrowSvg from "./icons/arrowSvg.vue";
import { useProductStore } from "~/stores/product";
const props = defineProps<{
  motives: Motive[];
}>();

const startIndex = ref(0);

const visibleCount = 4;

const visibleMotivs = computed(() =>
  props.motives.slice(startIndex.value, startIndex.value + visibleCount),
);

const next = () => {
  if (startIndex.value + visibleCount < props.motives.length) {
    startIndex.value++;
  }
};

const prev = () => {
  if (startIndex.value > 0) {
    startIndex.value--;
  }
};

const productStore = useProductStore();
const select = (motive: Motive) => {
  productStore.setMotive(motive);
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
        v-for="motive in visibleMotivs"
        :key="motive.name"
        class="p-1 w-16 rounded transition cursor-pointer hover:ring-2 hover:ring-gray-400 items-center justify-items-center"
        :class="{
          'ring-2 ring-[#00dd4b]':
            productStore.selectedMotive?.name === motive.name,
        }"
        @click="select(motive)"
      >
        <img
          class="w-15 h-10 l border-2 border-gray-200 cursor-pointer"
          :src="motive.img"
        />
      </div>
    </div>
    <ArrowSvg class="w-16 h-16 cursor-pointer text-green-500" @click="next" />
  </div>
</template>
