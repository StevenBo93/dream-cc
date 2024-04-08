<script setup lang="ts">
import { computed } from 'vue'
import { useQuery } from '@vue/apollo-composable'
import { GET_EUROJACKPOT_DRAWS } from '@/graphql/resultsQuery'
import { useEurojackpotStore } from '@/stores/eurojackpotStore'

const store = useEurojackpotStore()
const { result, loading, error } = useQuery(GET_EUROJACKPOT_DRAWS)

const isNumberSelected = computed(() =>
  store.numbers.map(
    (number) =>
      result.value?.draw?.draws[0]?.numbers.map((num: number) => +num).includes(number) ?? false
  )
)

const isAdditionalNumberSelected = computed(() =>
  store.additionalNumbers.map(
    (number) =>
      result.value?.draw?.draws[0]?.additionalNumbers.map((num: number) => +num).includes(number) ??
      false
  )
)
</script>

<template>
  <div class="flex flex-col space-y-6 mx-auto max-w-7xl px-6 py-12 lg:px-8">
    <h1 class="font-bold text-4xl mb-6" v-if="result">
      Ziehung vom {{ result?.draw?.draws[0].date }}
    </h1>
    <div>
      <h2 class="font-bold text-2xl mb-4">Gezogene Zahlen</h2>
      <div v-if="loading">Loading...</div>
      <div v-if="error">Error: {{ error.message }}</div>
      <div class="flex flex-col space-y-6 w-1/452" v-if="result">
        <div>Eurojackpot Zahlen:</div>
        <div class="grid grid-cols-5">
          <div
            class="flex items-center justify-center rounded-full border border-black p-8 w-10 h-10"
            v-for="number in result?.draw?.draws[0]?.numbers"
            :key="`draw-number-${number}`"
          >
            {{ number }}
          </div>
        </div>
        <div>Super 6 Zahlen:</div>
        <div class="grid grid-cols-5">
          <div
            class="flex items-center justify-center rounded-full border border-black p-8 w-10 h-10"
            v-for="additionalNumber in result?.draw?.draws[0]?.additionalNumbers"
            :key="`draw-additional-${additionalNumber}`"
          >
            {{ additionalNumber }}
          </div>
        </div>
      </div>
    </div>

    <div>
      <h2 class="font-bold text-2xl my-4">Deine Gewählten Zahlen</h2>
      <div class="flex flex-col space-y-6 w-1/2" v-if="result">
        <div>Eurojackpot Zahlen:</div>
        <div class="grid grid-cols-5">
          <div
            v-for="(number, index) in store.numbers"
            :key="`number-${index}`"
            class="flex items-center justify-center rounded-full border border-black p-8 w-10 h-10 number"
            :class="{ 'bg-green-500': isNumberSelected[index] }"
          >
            {{ number }}
          </div>
        </div>
        <div class="grid grid-cols-5">
          <div
            v-for="(number, index) in store.additionalNumbers"
            :key="`additional-${index}`"
            class="flex items-center justify-center rounded-full border border-black p-8 w-10 h-10 additional-number"
            :class="{ 'bg-green-500': isAdditionalNumberSelected[index] }"
          >
            {{ number }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
