<script setup lang="ts">
import ShirtMotive from "~/components/ShirtMotive.vue";
import { useProductStore } from "~/stores/product";
import type { OrderValidationErrors } from "~/types/api";

useHeader({
  title: "Checkout",
  showBack: true,
  backTo: "/",
});
const productStore = useProductStore();
const router = useRouter();

onBeforeMount(() => {
  if (!productStore.selectedColor) {
    router.replace("/");
  }
});

const name = ref("");
const address = ref("");
const errors = ref<OrderValidationErrors>({});
const generalMessage = ref("");

const order = async () => {
  errors.value = {};
  generalMessage.value = "";

  try {
    await $fetch("/api/order", {
      method: "POST",
      body: {
        name: name.value,
        address: address.value,
      },
    });

    router.push("/success");
  } catch (err: unknown) {
    const e = err as {
      status?: number;
      data?: { message?: string; errors?: OrderValidationErrors };
    };
    if (e.status === 422 && e.data) {
      generalMessage.value = e.data.message ?? "Validation failed.";
      if (e.data.errors) {
        errors.value = e.data.errors;
      }
    }
  }
};
</script>

<template>
  <div
    class="h-full w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center items-start content-start gap-4 overflow-y-auto p-4 pb-8"
  >
    <div class="flex flex-col justify-center items-center w-80">
      <ShirtMotive size="w-56 sm:w-80" />
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
        <div
          v-if="generalMessage"
          class="mb-4 p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm"
        >
          {{ generalMessage }}
        </div>
        <!-- Name Field -->
        <div>
          <label class="text-sm tracking-widest text-gray-700 mb-3">
            Name
          </label>
          <input
            v-model="name"
            type="text"
            placeholder="Enter your Name"
            :class="[
              'w-full rounded-xl border px-5 py-2 text-lg placeholder-gray-400 focus:outline-none focus:ring-2',
              errors.name
                ? 'border-red-500 bg-red-50 focus:ring-red-300'
                : 'border-gray-300 bg-gray-100 focus:ring-gray-300',
            ]"
          >
          <div v-if="errors.name" class="text-red-500 text-sm mt-1">
            {{ errors.name[0] }}
          </div>
        </div>

        <!-- Address Field -->
        <div class="py-4">
          <label class="text-sm tracking-widest text-gray-700 mb-3">
            Address
          </label>
          <input
            v-model="address"
            type="text"
            placeholder="Enter your Address"
            :class="[
              'w-full rounded-xl border px-5 py-2 text-lg placeholder-gray-400 focus:outline-none focus:ring-2',
              errors.address
                ? 'border-red-500 bg-red-50 focus:ring-red-300'
                : 'border-gray-300 bg-gray-100 focus:ring-gray-300',
            ]"
          >
          <div v-if="errors.address" class="text-red-500 text-sm mt-1">
            {{ errors.address[0] }}
          </div>
        </div>
      </div>
    </div>
    <div
      class="w-auto h-auto sm:w-80 sm:h-96 lg:w-auto lg:h-auto flex sm:col-start-2 lg:col-start-3 justify-center items-center"
    >
      <BaseButton class="mt-2 w-48" color="green" @click="order"
        >Order</BaseButton
      >
    </div>
  </div>
</template>
