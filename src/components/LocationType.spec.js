import React from 'react'
import ReactDOM from 'react-dom'
import { configure, shallow } from 'enzyme'
import LocationType from './LocationType'
import Adapter from 'enzyme-adapter-react-16'

configure({
  adapter: new Adapter()
})

const context = describe
describe('<LocationType />', () => {
  context('renders without crashing', () => {
    ['airport', 'city', 'station', 'district', 'place'].forEach(type => {
      it(`renders with type ${type} without crashing`, () => {
        const div = document.createElement('div');
        ReactDOM.render(<LocationType type={type} />, div);
        ReactDOM.unmountComponentAtNode(div);
      })
    })
  })
})