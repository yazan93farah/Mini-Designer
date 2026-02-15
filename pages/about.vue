<script setup lang="ts">
useHeader({
  title: "About this project",
  showBack: true,
});
const router = useRouter();
</script>

<template>
  <div class="h-full flex items-center justify-center">
    <div class="flex flex-col justify-center items-center">
      <div class="pb-2 text-3xl sm:text-5xl text-gray-600 font-semibold">
        This is a Demo Page
      </div>
      <BaseButton
        class="mt-4 self-center w-48"
        color="blue"
        @click="router.back()"
        >Back</BaseButton
      >
    </div>
  </div>
</template>
