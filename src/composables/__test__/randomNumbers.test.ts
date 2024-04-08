import { describe, it, expect } from 'vitest'
import { useRandomNumbers } from '@/composables/randomNumbers'

describe('useRandomNumbers', () => {
  const { generate } = useRandomNumbers()

  it('generates the correct amount of unique numbers within the specified range', () => {
    const from = 1
    const to = 10
    const count = 5
    const numbers = generate(from, to, count)

    expect(numbers.length).equals(count)

    const uniqueNumbers = new Set(numbers)
    expect(uniqueNumbers.size).equals(numbers.length)

    numbers.forEach((number) => {
      expect(number).toBeGreaterThanOrEqual(from)
      expect(number).toBeLessThanOrEqual(to)
    })
  })

  it('does not generate more numbers than possible values in the range', () => {
    const from = 1
    const to = 5
    const count = 10
    const numbers = generate(from, to, count)

    expect(numbers.length).equals(to - from + 1)
    const uniqueNumbers = new Set(numbers)
    expect(uniqueNumbers.size).equals(numbers.length)
  })
})
