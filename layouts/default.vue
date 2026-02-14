<template>
  <div class="flex flex-col min-h-screen">
    <LayoutAppHeader />
    <main class="h-[calc(100vh-12rem)]">
      <slot />
    </main>
    <LayoutAppFooter />
  </div>
</template>
