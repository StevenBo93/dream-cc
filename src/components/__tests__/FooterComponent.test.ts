import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import FooterComponent from '@/components/layout/FooterComponent.vue'
import linkedin from '@/assets/icons/linkedin.svg'
import github from '@/assets/icons/github.svg'

describe('FooterComponent', () => {
  it('should mount the component', () => {
    const wrapper = mount(FooterComponent)
    expect(wrapper.exists()).equals(true)
  })

  it('should have correct navigation links', () => {
    const wrapper = mount(FooterComponent)

    const links = wrapper.findAll('a')
    expect(links.length).equals(2)

    const linkedInLink = links[0]
    expect(linkedInLink.attributes('href')).equals(
      'https://www.linkedin.com/in/steven-bockelmann-5643902b9/'
    )
    expect(linkedInLink.find('img').attributes('src')).equals(linkedin)

    const githubLink = links[1]
    expect(githubLink.attributes('href')).equals('https://github.com/StevenBo93')
    expect(githubLink.find('img').attributes('src')).equals(github)
  })

  it('should display the copyright notice', () => {
    const wrapper = mount(FooterComponent)
    const copyright = wrapper.find('p').text()
    expect(copyright).contains('© 2024 Steven Bockelmann. All rights reserved.')
  })
})
