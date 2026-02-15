<script setup lang="ts">
import { useProductStore } from "~/stores/product";

useHeader({
  title: "Order Success",
  showBack: true,
});
const router = useRouter();
const productStore = useProductStore();

const handleDesignAnother = () => {
  productStore.reset();
  router.push("/");
};
</script>

<template>
  <div class="h-full flex items-center justify-center">
    <div class="flex flex-col justify-center items-center">
      <div class="pb-2 text-3xl sm:text-5xl text-gray-600 font-semibold">
        Thank you for your order.
      </div>
      <BaseButton class="mt-4 w-60" color="blue" @click="handleDesignAnother"
        >Design another product</BaseButton
      >
    </div>
  </div>
</template>
