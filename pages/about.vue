<script setup lang="ts">
useHeader({
  title: "About this project",
  showBack: true,
});
const router = useRouter();
</script>

<template>
  <div class="h-full flex items-center justify-center">
    <div class="flex flex-col">
      <div class="text-5xl text-gray-600 font-semibold">
        This is a Demo Page
      </div>
      <BaseButton class="mt-4" color="blue" @click="router.back()"
        >Back</BaseButton
      >
    </div>
  </div>
</template>
