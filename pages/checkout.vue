<script setup lang="ts">
import ShirtMotive from "~/components/ShirtMotive.vue";
import { useProductStore } from "~/stores/product";

useHeader({
  title: "Checkout",
  showBack: true,
});
const productStore = useProductStore();
const router = useRouter();

onBeforeMount(() => {
  if (!productStore.selectedColor) {
    router.replace("/");
  }
});
</script>

<template>
  <div
    class="h-full w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center items-start content-start gap-4 overflow-y-auto p-4 pb-8"
  >
    <div class="pt-8 sm:pl-8 flex flex-col justify-center items-center w-80">
      <ShirtMotive size="w-56 sm:w-72" />
      <div class="flex text-sm justify-center items-center">
        Motiv: {{ productStore.selectedMotive?.name }}
      </div>
      <div class="flex text-sm justify-center items-center">
        Shirt: {{ productStore.selectedColor?.name }}
      </div>
    </div>
    <div
      class="flex flex-col w-80 h-96 rounded-lg bg-slate-50 shadow-2xl border border-gray-200 py-4 px-6 justify-between"
    >
      <div>
        <div class="text-3xl py-4">Order Data</div>
        <div class="pb-2 text-2xl font-semibold flex justify-between">
          <div>Motiv:</div>
          <div>{{ productStore.selectedMotive?.price }}€</div>
        </div>
        <div class="pb-2 text-2xl font-semibold flex justify-between">
          <div>Shirt:</div>
          <div class="justify-end">
            {{ productStore.selectedColor?.price }}€
          </div>
        </div>
      </div>
      <div>
        <div
          class="pb-2 pt-2 text-2xl font-semibold flex justify-between border-t-2 border-black"
        >
          <div>Total:</div>
          <div class="justify-end">{{ productStore.productPrice }}€</div>
        </div>
      </div>
    </div>
    <div>
      <div
        class="flex flex-col w-80 h-96 rounded-lg bg-slate-50 shadow-2xl border border-gray-200 py-4 px-6"
      >
        <div class="text-3xl py-4">Personal Data</div>
        <div class="pb-2 text-2xl font-semibold flex justify-between">
          <div>Motiv:</div>
          <div>{{ productStore.selectedMotive?.price }}€</div>
        </div>
        <div class="pb-2 text-2xl font-semibold flex justify-between">
          <div>Shirt:</div>
          <div class="justify-end">
            {{ productStore.selectedColor?.price }}€
          </div>
        </div>
      </div>
    </div>
    <div
      class="w-auto h-auto sm:w-80 sm:h-96 lg:w-auto lg:h-auto flex sm:col-start-2 lg:col-start-3 justify-center items-center"
    >
      <BaseButton
        class="mt-2 w-44"
        color="green"
        @click="router.push('/success')"
        >Order</BaseButton
      >
    </div>
  </div>
</template>
