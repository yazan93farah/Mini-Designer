<script setup lang="ts">
import { useHeaderStore } from "~/stores/header";
import { useProductStore } from "~/stores/product";

const headerStore = useHeaderStore();
const productStore = useProductStore();
const router = useRouter();
</script>
<template>
  <header
    class="w-full bg-slate-200 px-8 py-4 h-24 flex justify-between items-center"
  >
    <div>
      <div class="text-lg sm:text-3xl text-labelColor">
        {{ headerStore.title }}
      </div>
    </div>
    <div class="flex items-center">
      <span
        v-if="headerStore.showCheckout"
        class="text-lg sm:text-3xl font-medium mx-2"
      >
        {{ productStore.productPrice + "€" }}
      </span>
      <BaseButton v-if="headerStore.showCheckout" class="mx-2" color="blue"
        >Go to Checkout
      </BaseButton>
      <BaseButton
        v-if="headerStore.showBack"
        class="mx-2"
        color="blue"
        @click="router.back()"
        >Back
      </BaseButton>
    </div>
  </header>
</template>
