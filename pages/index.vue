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
  <div class="min-h-[calc(100vh-12rem)] flex items-center">
    <div class="w-full px-6 md:px-12 grid grid-cols-3 items-center">
      <div class="justify-self-start">
        <ColorSelector v-if="dataStore.colors" :colors="dataStore.colors" />
      </div>

      <div class="justify-self-center">
        <ShirtMotive />
      </div>

      <div class="justify-self-end">
        <MotivesSelector
          v-if="dataStore.motives"
          :motives="dataStore.motives"
        />
      </div>
    </div>
  </div>
</template>
