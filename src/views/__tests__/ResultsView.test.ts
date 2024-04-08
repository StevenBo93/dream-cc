import { describe, it, expect, beforeEach, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import ResultsView from '@/views/ResultsView.vue'
import { useEurojackpotStore } from '@/stores/eurojackpotStore'

vi.mock('@vue/apollo-composable', () => ({
  useQuery: vi.fn(() => ({
    result: {
      value: {
        draw: {
          draws: [
            {
              numbers: [1, 2, 3, 4, 5],
              additionalNumbers: [6, 7],
              date: '2023-01-01'
            }
          ]
        }
      }
    },
    loading: false,
    error: null
  }))
}))

describe('ResultsView', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('checks if selected numbers are drawn', async () => {
    const wrapper = mount(ResultsView, {
      global: {
        plugins: [createPinia()]
      }
    })

    await wrapper.vm.$nextTick()

    const drawnNumbers = [1, 2, 3, 4, 5]
    const drawnAdditionalNumbers = [6, 7]

    const store = useEurojackpotStore()
    store.setNumbers([1, 2, 3, 38, 49])
    store.setAdditionalNumbers([6, 12])

    const matchedMainNumbers = store.numbers.filter((number) => drawnNumbers.includes(number))
    const matchedAdditionalNumbers = store.additionalNumbers.filter((number) =>
      drawnAdditionalNumbers.includes(number)
    )

    expect(matchedMainNumbers.length).equals(3)
    expect(matchedAdditionalNumbers.length).equals(1)
  })
})
