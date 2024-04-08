import { defineStore } from 'pinia'
import type { EurojackpotState } from '@/types'
export const useEurojackpotStore = defineStore('eurojackpot', {
  state: (): EurojackpotState => ({
    numbers: [],
    additionalNumbers: []
  }),
  actions: {
    toggleNumber(number: number, max: number): void {
      if (this.numbers.includes(number)) {
        this.numbers = this.numbers.filter((n) => n !== number)
      } else if (this.numbers.length < max) {
        this.numbers.push(number)
      }
    },
    toggleAdditionalNumber(number: number, max: number): void {
      if (this.additionalNumbers.includes(number)) {
        this.additionalNumbers = this.additionalNumbers.filter((n) => n !== number)
      } else if (this.additionalNumbers.length < max) {
        this.additionalNumbers.push(number)
      }
    },
    setNumbers(numbers: number[]): void {
      this.numbers = numbers
    },
    setAdditionalNumbers(numbers: number[]): void {
      this.additionalNumbers = numbers
    },
    reset(): void {
      this.numbers = []
      this.additionalNumbers = []
    }
  },
  persist: true
})
