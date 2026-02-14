<script setup lang="ts">
import { useDataStore } from "~/stores/data";

useHeader({
  title: "Design your Shirt",
  showCheckout: true,
});

const dataStore = useDataStore();
await dataStore.fetchData();
</script>

<template>
  <div class="h-full overflow-y-auto flex items-center">
    <div
      class="flex flex-col justify-between items-center w-full h-full px-6 md:px-12 sm:grid sm:grid-cols-3 sm:gap-4 md:gap-6"
    >
      <div class="pt-4 sm:justify-self-start">
        <ColorSelector v-if="dataStore.colors" :colors="dataStore.colors" />
      </div>

      <div class="sm:justify-self-center">
        <ShirtMotive />
      </div>

      <div class="pb-4 sm:pb-1 sm:justify-self-end">
        <MotivesSelector
          v-if="dataStore.motives"
          :motives="dataStore.motives"
        />
      </div>
    </div>
  </div>
</template>
