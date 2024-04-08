import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'
import NavigationComponent from '@/components/layout/NavigationComponent.vue'
import HomeView from '@/views/HomeView.vue'
import LotteryView from '@/views/LotteryView.vue'

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/lottery', name: 'Lottery', component: LotteryView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const wrapper = mount(NavigationComponent, {
  global: {
    plugins: [router]
  }
})

describe('NavigationComponent', () => {
  it('should mount the component', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  it('renders navigation links', () => {
    const links = wrapper.findAllComponents({ name: 'RouterLink' })
    expect(links.length).toBe(2)
  })

  it('sets active class on current navigation item', async () => {
    await router.push('/')
    await wrapper.vm.$nextTick()

    const homeLink = wrapper.findComponent({ name: 'RouterLink', props: { to: '/' } })
    expect(homeLink.classes()).toContain('bg-gray-900')
  })
})
