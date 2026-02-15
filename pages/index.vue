<script setup lang="ts">
import { useDataStore } from "~/stores/data";

useHeader({
  title: "Design your Shirt",
  showCheckout: true,
});

const dataStore = useDataStore();
const loading = ref(true);
const error = ref<string | null>(null);

/* info: Loading/error state is for a real API which can be unavailable  */
async function loadData() {
  loading.value = true;
  error.value = null;
  try {
    await dataStore.fetchData();
  } catch (err) {
    error.value =
      err instanceof Error ? err.message : "Failed to load design options.";
  } finally {
    loading.value = false;
  }
}

onMounted(loadData);
</script>

<template>
  <div class="h-full overflow-y-auto flex items-center">
    <div
      v-if="loading"
      class="flex flex-col items-center justify-center w-full gap-4 py-12"
    >
      <div
        class="w-10 h-10 border-2 border-slate-300 border-t-slate-600 rounded-full animate-spin"
      />
      <p class="text-slate-600">Loading design options…</p>
    </div>

    <div
      v-else-if="error"
      class="flex flex-col items-center justify-center w-full gap-4 py-12 px-4"
    >
      <p class="text-red-600 text-center">{{ error }}</p>
      <BaseButton color="blue" @click="loadData"> Try again </BaseButton>
    </div>

    <div
      v-else
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
