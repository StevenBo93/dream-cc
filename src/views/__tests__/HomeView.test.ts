import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import HomeView from '@/views/HomeView.vue'
import CategoryComponent from '@/components/ui/CategoryComponent.vue'
import router from '@/router'

describe('HomeView', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('correctly loads and renders CategoryComponent', async () => {
    const wrapper = mount(HomeView, {
      global: {
        plugins: [router, createPinia()]
      }
    })

    await router.isReady()

    expect(wrapper.exists()).equals(true)
    expect(wrapper.findComponent(CategoryComponent).exists()).equals(true)
  })
})
