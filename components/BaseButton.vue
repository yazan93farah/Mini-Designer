<script setup lang="ts">
type Color = "blue" | "green";

interface Props {
  color?: Color;
  disabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  color: "blue",
  disabled: false,
});

const variantClasses = computed(() => {
  switch (props.color) {
    case "green":
      return "bg-buttonGreen text-black hover:bg-buttonGreen-dark";
    case "blue":
    default:
      return "bg-buttonBlue text-white hover:bg-buttonBlue-dark";
  }
});
</script>
<template>
  <button
    :disabled="disabled"
    :class="[
      'inline-flex items-center justify-center text-center px-8 sm:px-12 py-2.5 rounded-xl transition-colors duration-200 text-md sm:text-lg',
      'focus:outline-none focus:ring-2 ',
      variantClasses,
      disabled && 'opacity-50 cursor-not-allowed',
    ]"
  >
    <slot />
  </button>
</template>
