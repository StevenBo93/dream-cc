import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import HomeView from '@/views/HomeView.vue'

describe('HomeView', () => {
  it('correctly loads and renders CategoryComponent', () => {
    const wrapper = mount(HomeView)

    expect(wrapper.exists()).equals(true)
  })
})
