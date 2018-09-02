import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import expect from 'expect'

import { storiesOf } from '@storybook/react'
import { specs, describe, it } from 'storybook-addon-specifications'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { Button, Welcome } from '@storybook/react/demo'

configure({ adapter: new Adapter() })

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />)

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ))
  .add('Hello World', function () {
  const story =
    <button onClick={action('Hello World')}>
      Hello World
    </button>

  specs(() => describe('Hello World', function () {
    it('Should have the Hello World label', function () {
      let output = mount(story)
      expect(output.text()).toContain('Hello World')
    })
  }))

  return story
})

storiesOf('SearchBar', module).add('blank component', () => <Welcome showApp={linkTo('Button')} />)