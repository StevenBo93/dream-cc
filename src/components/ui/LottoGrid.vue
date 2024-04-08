<script setup lang="ts">
import type { LottoGrid } from '@/types'
import { useEurojackpotStore } from '@/stores/eurojackpotStore'
import { useRandomNumbers } from '@/composables/randomNumbers'

const props = defineProps<LottoGrid>()
const store = useEurojackpotStore()
const { generate } = useRandomNumbers()

const generateNumbers = () => {
  const randomNumbers = generate(1, props.maxFields, props.maxSelections)
  const randomAdditionalNumbers = generate(
    1,
    props.maxAdditionalFields ?? 1,
    props.maxAdditionalSelections ?? 1
  )
  store.setNumbers(randomNumbers)
  store.setAdditionalNumbers(randomAdditionalNumbers)
}
</script>

<template>
  <div>
    <div class="flex flex-col space-y-4 w-full md:w-1/2 mb-4">
      <div class="flex flex-row justify-between">
        <button
          type="button"
          aria-label="generate-numbers"
          class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          @click="generateNumbers"
        >
          Zufallzahlen generieren
        </button>
        <button
          type="button"
          aria-label="reset-numbers"
          class="rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
          @click="store.reset"
        >
          Zahlen reseten
        </button>
      </div>
      <div>
        <h3 class="font-bold mb-4">{{ props.maxSelections }} aus {{ props.maxFields }}</h3>
        <!-- grid-cols-7 grid-cols-10 -->
        <div class="grid gap-2" :class="`grid-cols-${props.cols}`">
          <div v-for="i in props.maxFields" :key="i">
            <button
              class="w-full h-full border border-gray-300 text-black"
              :class="{
                'bg-green-500': store.numbers.includes(i)
              }"
              @click="store.toggleNumber(i, props.maxSelections)"
            >
              {{ i }}
            </button>
          </div>
        </div>
      </div>
      <div v-if="props.additionalFields">
        <h3 class="font-bold mb-4">
          {{ props.maxAdditionalSelections }} aus {{ props.maxAdditionalFields }}
        </h3>
        <!-- grid-cols-6 grid-cols-5 -->
        <div class="grid gap-2" :class="`grid-cols-${props.additionalCols}`">
          <div v-for="i in props.maxAdditionalFields" :key="i">
            <button
              class="w-full h-full border border-gray-300 text-black"
              :class="{
                'bg-green-500': store.additionalNumbers.includes(i)
              }"
              @click="store.toggleAdditionalNumber(i, props.maxAdditionalSelections ?? 1)"
            >
              {{ i }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
