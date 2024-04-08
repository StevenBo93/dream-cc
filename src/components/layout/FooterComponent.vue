<script setup lang="ts">
import linkedin from '@/assets/icons/linkedin.svg'
import github from '@/assets/icons/github.svg'

const navigation = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/steven-bockelmann-5643902b9/',
    icon: linkedin
  },
  {
    name: 'GitHub',
    href: 'https://github.com/StevenBo93',
    icon: github
  }
]
</script>

<template>
  <footer class="bg-gray-800">
    <div class="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
      <div class="flex justify-center space-x-6 md:order-2">
        <a
          v-for="item in navigation"
          :key="item.name"
          :href="item.href"
          target="_blank"
          class="text-white hover:text-gray-500"
        >
          <span class="sr-only">{{ item.name }}</span>
          <img
            :src="item.icon"
            :alt="item.name"
            :title="item.name"
            class="h-6 w-6"
            aria-hidden="true"
          />
        </a>
      </div>
      <div class="mt-8 md:order-1 md:mt-0">
        <p class="text-center text-xs leading-5 text-white">
          &copy; 2024 Steven Bockelmann. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>
