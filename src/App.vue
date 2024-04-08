<script setup lang="ts">
import NavigationComponent from '@/components/layout/NavigationComponent.vue'
import FooterComponent from '@/components/layout/FooterComponent.vue'
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <header>
      <NavigationComponent />
    </header>

    <main class="flex-1">
      <div class="container mx-auto">
        <RouterView />
      </div>
    </main>

    <FooterComponent />
  </div>
</template>
