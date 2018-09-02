import React from 'react'
import ReactDOM from 'react-dom'
import { configure, shallow } from 'enzyme'
import SearchBar from './SearchBar'
import Adapter from 'enzyme-adapter-react-16'

configure({
  adapter: new Adapter()
})

describe('<SearchBar />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SearchBar />, div);
    ReactDOM.unmountComponentAtNode(div);
  })
})