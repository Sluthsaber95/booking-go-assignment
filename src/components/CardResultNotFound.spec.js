import React from 'react'
import ReactDOM from 'react-dom'
import { configure, shallow } from 'enzyme'
import CardResultNotFound from './CardResultNotFound'
import Adapter from 'enzyme-adapter-react-16'

configure({
  adapter: new Adapter()
})

const context = describe
describe('<CardResultNotFound />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CardResultNotFound />, div);
    ReactDOM.unmountComponentAtNode(div);
  })
  it('renders text "No results found"', () => {
    const wrapper = shallow(<CardResultNotFound />)
    expect(wrapper.find('.item-no-exist').text()).toBe("No results found")
  })
})