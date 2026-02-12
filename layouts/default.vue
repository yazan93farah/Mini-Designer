<template>
  <div class="flex flex-col min-h-screen">
    <LayoutAppHeader />
    <!-- Reserve space for two 6rem (h-24) bars so main fills the remainder -->
    <main class="min-h-[calc(100vh-12rem)]">
      <slot />
    </main>
    <LayoutAppFooter />
  </div>
</template>
