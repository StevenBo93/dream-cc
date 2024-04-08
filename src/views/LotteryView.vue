<script setup lang="ts">
import LottoGrid from '@/components/ui/LottoGrid.vue'
import { useEurojackpotStore } from '@/stores/eurojackpotStore'

const store = useEurojackpotStore()
</script>

<template>
  <div class="mx-auto max-w-7xl px-6 py-12 lg:px-8">
    <h1 class="font-bold text-4xl mb-6">Lottery Page</h1>
    <h2 class="font-bold text-2xl mb-4">Ihr Spielfeld</h2>

    <LottoGrid
      :cols="10"
      :max-fields="50"
      :max-selections="5"
      :additional-fields="true"
      :additional-cols="6"
      :max-additional-fields="12"
      :max-additional-selections="2"
    />

    <div
      class="flex flex-row justify-start mt-10"
      v-if="store.numbers.length === 5 && store.additionalNumbers.length === 2"
    >
      <RouterLink
        to="/results"
        type="button"
        class="rounded-md bg-gray-950 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-950"
      >
        Zur Ziehung
      </RouterLink>
    </div>
  </div>
</template>
