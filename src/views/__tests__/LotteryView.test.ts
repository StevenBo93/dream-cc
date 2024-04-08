import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'
import { createPinia, setActivePinia } from 'pinia'
import LotteryView from '@/views/LotteryView.vue'
import LottoGrid from '@/components/ui/LottoGrid.vue'
import { useEurojackpotStore } from '@/stores/eurojackpotStore'
import { useRandomNumbers } from '../../composables/randomNumbers'
import ResultsView from '../ResultsView.vue'

const routes = [{ path: '/results', name: 'Results', component: ResultsView }]
const router = createRouter({
  history: createWebHistory(),
  routes
})

const { generate } = useRandomNumbers()

describe('LotteryPage', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('renders correctly and shows link under specific conditions', async () => {
    const wrapper = mount(LotteryView, {
      global: {
        plugins: [router, createPinia()]
      }
    })

    expect(wrapper.findComponent(LottoGrid).exists()).equals(true)

    const store = useEurojackpotStore()
    store.setNumbers(generate(1, 50, 5))
    store.setAdditionalNumbers(generate(1, 10, 2))

    await wrapper.vm.$nextTick()

    const linkToResults = wrapper.findComponent({ name: 'RouterLink' })

    expect(store.numbers.length).equals(5)
    expect(store.additionalNumbers.length).equals(2)
    expect(linkToResults.exists()).equals(true)
    expect(linkToResults.props('to')).equals('/results')
  })
})
