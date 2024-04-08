import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'
import CategoryComponent from '@/components/ui/CategoryComponent.vue'
import LotteryView from '@/views/LotteryView.vue'

const routes = [{ path: '/lottery', name: 'Lottery', component: LotteryView }]

const router = createRouter({
  history: createWebHistory(),
  routes
})

describe('CategoryComponent', () => {
  it('should mount the component', () => {
    const wrapper = mount(CategoryComponent, {
      global: {
        plugins: [router]
      }
    })
    expect(wrapper.exists()).equals(true)
  })

  it('renders all category sections', () => {
    const wrapper = mount(CategoryComponent, {
      global: {
        plugins: [router]
      }
    })

    const categories = wrapper.findAll('.group')
    expect(categories.length).equals(3)
  })

  it('each category should have a link to the lottery route', () => {
    const wrapper = mount(CategoryComponent, {
      global: {
        plugins: [router]
      }
    })

    const links = wrapper.findAllComponents({ name: 'RouterLink' })
    expect(links.length).toBe(3)
    links.forEach((link) => {
      expect(link.props('to')).equals('lottery')
    })
  })

  it('should display the correct text for each category', () => {
    const wrapper = mount(CategoryComponent, {
      global: {
        plugins: [router]
      }
    })

    const mainTitle = wrapper.find('h1')
    expect(mainTitle.text()).equals('Lotto Katergorien')

    const categoryTitles = ['Eurojackpot', 'Spiel 77', 'Super 6']
    const titles = wrapper.findAll('h2')

    for (let i = 0; i < titles.length; i++) {
      expect(titles[i].text()).equals(categoryTitles[i])
    }
  })
})
