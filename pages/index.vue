<script setup lang="ts">
import { useDataStore } from "~/stores/data";

useHeader({
  title: "Design your Shirt",
  showCheckout: true,
});

const dataStore = useDataStore();
try {
  await dataStore.fetchData();
} catch (err) {
  console.error(err);
}
</script>

<template>
  <div class="h-full overflow-y-auto flex items-center">
    <div
      class="flex flex-col justify-between items-center w-full h-full px-6 md:px-12 sm:grid sm:grid-cols-3 sm:gap-4 md:gap-6"
    >
      <div class="sm:justify-self-start">
        <ColorSelector v-if="dataStore.colors" :colors="dataStore.colors" />
      </div>

      <div class="sm:justify-self-center">
        <ShirtMotive size="w-60 sm:w-80" />
      </div>

      <div class="sm:justify-self-end">
        <MotivesSelector
          v-if="dataStore.motives"
          :motives="dataStore.motives"
        />
      </div>
    </div>
  </div>
</template>
