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
    const searchResults = []
    ReactDOM.render(<SearchBar searchResults={searchResults} />, div);
    ReactDOM.unmountComponentAtNode(div);
  })
  it('renders title h2 element that contains "Where are you going?"', () => {
    const wrapper = shallow(<SearchBar />)
    expect(wrapper.find('h2').text()).toBe("Where are you going?")
  })
  it('renders label that contains "Pick-Up Location"', () => {
    const wrapper = shallow(<SearchBar />)
    expect(wrapper.find('label').text()).toBe("Pick-Up Location")
  })
  it('renders input field with placeholder being "city, airport, station, region and district..."', () => {
    
  })
})