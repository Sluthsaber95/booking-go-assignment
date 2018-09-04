import React from 'react'
import ReactDOM from 'react-dom'
import { configure, shallow, mount } from 'enzyme'
import CardResultValid from './CardResultValid'
import Adapter from 'enzyme-adapter-react-16'

configure({
  adapter: new Adapter()
})

const context = describe
describe('<CardResultValid />', () => {
  it('renders without crashing', () => {
    const props = {
      area: 'London, United Kingdom',
      title: 'Hearthow Airport (LHR)',
      typePassed: "airport",
    }
    const div = document.createElement('div');
    ReactDOM.render(<CardResultValid {...props} />, div);
    ReactDOM.unmountComponentAtNode(div);
  })
  context('Airport Card', () => {
    const props = {
      area: 'London, United Kingdom',
      title: 'Hearthow Airport (LHR)',
      typePassed: "airport",
    }
    const {area, title} = props
    const wrapperShallow = shallow( <CardResultValid {...props} /> )
    it('render correct type', () => {
      const wrapper = mount( <CardResultValid {...props} />)
      expect(wrapper.find('LocationType').length).toBe(1)
      expect(wrapper.find('LocationType').html()).toBe("<div class=\"location-label-airport\">Airport</div>")
    })
    it('renders correct title', () => {
      expect(wrapperShallow.find('.item-title'))
      expect(wrapperShallow.find('.item-title').text()).toBe(`${title}`)
    })
    it('renders correct area', () => {
      expect(wrapperShallow.find('.item-area').text()).toBe(`${area}`)
    })
  })
  context('City Card', () => {
    const props = {
      area: 'Greater London, United Kingdom',
      title: 'London',
      typePassed: 'city',
    }
    const { title, area } = props
    const wrapperShallow = shallow( <CardResultValid {...props} /> )
    it('render correct type', () => {
      const wrapper = mount( <CardResultValid {...props} />)
      expect(wrapper.find('LocationType').length).toBe(1)
      expect(wrapper.find('LocationType').html()).toBe("<div class=\"location-label-city\">City</div>")
    })
    it('renders correct title', () => {
      expect(wrapperShallow.find('.item-title'))
      expect(wrapperShallow.find('.item-title').text()).toBe(`${title}`)
    })
    it('renders correct area', () => {
      expect(wrapperShallow.find('.item-area').text()).toBe(`${area}`)
    })
  })
  context('Station Card', () => {
    const props = {
      area: 'Rome, Italy',
      title: 'Rome - Termini Train Station',
      typePassed: 'station',
    }
    const wrapperShallow = shallow( <CardResultValid {...props} /> )
    const { area, title } = props
    it('render correct type', () => {
      const wrapper = mount( <CardResultValid {...props} />)
      expect(wrapper.find('LocationType').length).toBe(1)
      expect(wrapper.find('LocationType').html()).toBe("<div class=\"location-label-station\">Station</div>")
    })
    it('renders correct title', () => {
      expect(wrapperShallow.find('.item-title'))
      expect(wrapperShallow.find('.item-title').text()).toBe(`${title}`)
    })
    it('renders correct area', () => {
      expect(wrapperShallow.find('.item-area').text()).toBe(`${area}`)
    })
  })
  context('Place Card', () => {
    const props = {
      area: 'New York State, United State of America',
      title: 'Manhattan',
      typePassed: 'place',
    }
    const { area, title } = props
    const wrapperShallow = shallow( <CardResultValid {...props} /> )
    it('render correct type', () => {
      const wrapper = mount( <CardResultValid {...props} />)
      expect(wrapper.find('LocationType').length).toBe(1)
      expect(wrapper.find('LocationType').html()).toBe("<div class=\"location-label-place\">Place</div>")
    })
    it('renders correct title', () => {
      const { name } = props
      expect(wrapperShallow.find('.item-title'))
      expect(wrapperShallow.find('.item-title').text()).toBe(`${title}`)
    })
    it('renders correct area', () => {
      const { country, region } = props
      expect(wrapperShallow.find('.item-area').text()).toBe(`${area}`)
    })
  })
  context('District Card', () => {
    const props = {
      area: 'Spain',
      title: 'Mallorca',
      typePassed: 'district',
    }
    const wrapperShallow = shallow(<CardResultValid {...props} />)
    const { area, title } = props
    it('render correct type', () => {
      const wrapper = mount(<CardResultValid {...props} />)
      expect(wrapper.find('LocationType').length).toBe(1)
      expect(wrapper.find('LocationType').html()).toBe("<div class=\"location-label-district\">District</div>")
    })
    it('renders correct title', () => {
      const { name } = props
      expect(wrapperShallow.find('.item-title'))
      expect(wrapperShallow.find('.item-title').text()).toBe(`${title}`)
    })
    it('renders correct area', () => {
      const { country } = props
      expect(wrapperShallow.find('.item-area').text()).toBe(`${area}`)
    })
  })
})