<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="bg-white">
    <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div class="sm:flex sm:items-baseline sm:justify-between">
        <h1 class="text-2xl font-bold tracking-tight text-gray-900">Lotto Katergorien</h1>
      </div>

      <div class="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8">
        <div
          class="group aspect-h-1 aspect-w-2 overflow-hidden rounded-lg sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2 relative"
        >
          <img
            src="../../assets/eurojackpot.jpg"
            alt="eurojackpot"
            class="object-cover object-center group-hover:opacity-75"
          />
          <div
            aria-hidden="true"
            class="bg-gradient-to-b from-transparent to-black opacity-50 absolute inset-0"
          />
          <div class="flex items-end p-6 absolute inset-0">
            <div>
              <h2 class="font-semibold text-white">
                <RouterLink to="lottery">
                  <span class="absolute inset-0" />
                  Eurojackpot
                </RouterLink>
              </h2>
              <p aria-hidden="true" class="mt-1 text-sm text-white">Jetzt mitspielen</p>
            </div>
          </div>
        </div>
        <div
          class="group aspect-h-1 aspect-w-2 overflow-hidden rounded-lg sm:aspect-none sm:relative sm:h-full bg-blue-500"
        >
          <div
            aria-hidden="true"
            class="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
          />
          <div class="flex items-end p-6 sm:absolute sm:inset-0">
            <div>
              <h2 class="font-semibold text-white">
                <RouterLink to="lottery">
                  <span class="absolute inset-0" />
                  Spiel 77
                </RouterLink>
              </h2>
              <p aria-hidden="true" class="mt-1 text-sm text-white">Jetzt mitspielen</p>
            </div>
          </div>
        </div>
        <div
          class="group aspect-h-1 aspect-w-2 overflow-hidden rounded-lg sm:aspect-none sm:relative sm:h-full bg-red-600"
        >
          <div
            aria-hidden="true"
            class="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
          />
          <div class="flex items-end p-6 sm:absolute sm:inset-0">
            <div>
              <h2 class="font-semibold text-white">
                <RouterLink to="lottery">
                  <span class="absolute inset-0" />
                  Super 6
                </RouterLink>
              </h2>
              <p aria-hidden="true" class="mt-1 text-sm text-white">Jetzt mitspielen</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
