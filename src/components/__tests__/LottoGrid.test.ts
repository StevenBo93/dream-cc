import { describe, it, expect, beforeEach, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import LottoGrid from '@/components/ui/LottoGrid.vue'
import { createPinia, setActivePinia } from 'pinia'
import { useEurojackpotStore } from '@/stores/eurojackpotStore'

vi.mock('@/composables/randomNumbers', () => ({
  useRandomNumbers: () => ({
    generate: vi
      .fn()
      .mockImplementation((start, end, count) =>
        Array.from({ length: count }, () => Math.floor(Math.random() * (end - start + 1)) + start)
      )
  })
}))

describe('LottoGrid', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('renders correctly based on props', () => {
    const wrapper = mount(LottoGrid, {
      props: {
        cols: 7,
        maxFields: 49,
        maxSelections: 6,
        additionalFields: false
      },
      global: {
        plugins: [createPinia()]
      }
    })
    expect(wrapper.findAll('.grid button').length).toBe(49)
  })

  it('generates random numbers correctly', async () => {
    const wrapper = mount(LottoGrid, {
      props: {
        cols: 10,
        maxFields: 50,
        maxSelections: 5,
        additionalFields: true,
        additionalCols: 6,
        maxAdditionalFields: 12,
        maxAdditionalSelections: 2
      },
      global: {
        plugins: [createPinia()]
      }
    })

    const store = useEurojackpotStore()

    expect(store.numbers.length).equals(0)
    expect(store.additionalNumbers.length).equals(0)

    await wrapper.find('button[aria-label="generate-numbers"]').trigger('click')

    expect(store.numbers.length).equals(5)
    expect(store.additionalNumbers.length).equals(2)
  })

  it('resets numbers correctly', async () => {
    const wrapper = mount(LottoGrid, {
      props: {
        cols: 10,
        maxFields: 50,
        maxSelections: 5,
        additionalFields: true,
        additionalCols: 6,
        maxAdditionalFields: 12,
        maxAdditionalSelections: 2
      },
      global: {
        plugins: [createPinia()]
      }
    })

    const store = useEurojackpotStore()

    await wrapper.find('button[aria-label="generate-numbers"]').trigger('click')

    expect(store.numbers.length).equals(5)
    expect(store.additionalNumbers.length).equals(2)

    await wrapper.find('button[aria-label="reset-numbers"]').trigger('click')

    expect(store.numbers.length).equals(0)
    expect(store.additionalNumbers.length).equals(0)
  })
})
