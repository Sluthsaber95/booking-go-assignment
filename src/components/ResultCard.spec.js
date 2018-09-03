import React from 'react'
import ReactDOM from 'react-dom'
import { configure, shallow, mount } from 'enzyme'
import ResultCard from './ResultCard'
import Adapter from 'enzyme-adapter-react-16'

configure({
  adapter: new Adapter()
})

const context = describe
describe('<ResultCard />', () => {
  it('renders without crashing', () => {
    const props = {
      city: "London",
      country: "United Kingdom",
      iata: "LHR",
      name: "Heathrow Airport",
      type: "airport",
    }
    const div = document.createElement('div');
    ReactDOM.render(<ResultCard {...props} />, div);
    ReactDOM.unmountComponentAtNode(div);
  })
  context('Airport Card', () => {
    const props = {
      city: "London",
      country: "United Kingdom",
      iata: "LHR",
      name: "Heathrow Airport",
      type: "airport",
    }
    const wrapperShallow = shallow( <ResultCard {...props} /> )
    it('render correct type', () => {
      const wrapper = mount( <ResultCard {...props} />)
      const { type } = props
      expect(wrapper.find('LocationType').length).toBe(1)
      expect(wrapper.find('LocationType').html()).toBe("<div class=\"location-label-airport\">Airport</div>")
    })
    it('renders correct title', () => {
      const { name, iata } = props
      expect(wrapperShallow.find('.item-title'))
      expect(wrapperShallow.find('.item-title').text()).toBe(`${name} (${iata})`)
    })
    it('renders correct area', () => {
      const { city, country } = props
      expect(wrapperShallow.find('.item-area').text()).toBe(`${city}, ${country}`)
    })
  })
  context('City Card', () => {
    const props = {
      name: 'London',
      country: 'United Kingdom',
      type: 'city',
      region: 'Greater London',
    }
    const wrapperShallow = shallow( <ResultCard {...props} /> )
    it('render correct type', () => {
      const wrapper = mount( <ResultCard {...props} />)
      expect(wrapper.find('LocationType').length).toBe(1)
      expect(wrapper.find('LocationType').html()).toBe("<div class=\"location-label-city\">City</div>")
    })
    it('renders correct title', () => {
      const { name } = props
      expect(wrapperShallow.find('.item-title'))
      expect(wrapperShallow.find('.item-title').text()).toBe(`${name}`)
    })
    it('renders correct area', () => {
      const { country, region } = props
      expect(wrapperShallow.find('.item-area').text()).toBe(`${region}, ${country}`)
    })
  })
  context('Station Card', () => {
    const props = {
      city: 'Rome',
      country: 'Italy',
      name: 'Rome - Termini Train Station',
      type: 'train',
      region: 'Lazio',
    }
    const wrapperShallow = shallow( <ResultCard {...props} /> )
    it('render correct type', () => {
      const wrapper = mount( <ResultCard {...props} />)
      expect(wrapper.find('LocationType').length).toBe(1)
      expect(wrapper.find('LocationType').html()).toBe("<div class=\"location-label-station\">Station</div>")
    })
    it('renders correct title', () => {
      const { name } = props
      expect(wrapperShallow.find('.item-title'))
      expect(wrapperShallow.find('.item-title').text()).toBe(`${name}`)
    })
    it('renders correct area', () => {
      const { city, country } = props
      expect(wrapperShallow.find('.item-area').text()).toBe(`${city}, ${country}`)
    })
  })
  context('Place Card', () => {
    const props = {
      country: 'United State of America',
      name: 'Manhattan',
      type: 'place',
      region: 'New York State',
    }
    const wrapperShallow = shallow( <ResultCard {...props} /> )
    it('render correct type', () => {
      const wrapper = mount( <ResultCard {...props} />)
      expect(wrapper.find('LocationType').length).toBe(1)
      expect(wrapper.find('LocationType').html()).toBe("<div class=\"location-label-place\">Place</div>")
    })
    it('renders correct title', () => {
      const { name } = props
      expect(wrapperShallow.find('.item-title'))
      expect(wrapperShallow.find('.item-title').text()).toBe(`${name}`)
    })
    it('renders correct area', () => {
      const { country, region } = props
      expect(wrapperShallow.find('.item-area').text()).toBe(`${region}, ${country}`)
    })
  })
  context('District Card', () => {
    const props = {
      country: 'Spain',
      name: 'Mallorca',
      type: 'district',
    }
    const wrapperShallow = shallow(<ResultCard {...props} />)
    it('render correct type', () => {
      const wrapper = mount(<ResultCard {...props} />)
      expect(wrapper.find('LocationType').length).toBe(1)
      expect(wrapper.find('LocationType').html()).toBe("<div class=\"location-label-district\">District</div>")
    })
    it('renders correct title', () => {
      const { name } = props
      expect(wrapperShallow.find('.item-title'))
      expect(wrapperShallow.find('.item-title').text()).toBe(`${name}`)
    })
    it('renders correct area', () => {
      const { country } = props
      expect(wrapperShallow.find('.item-area').text()).toBe(`${country}`)
    })
  })
})