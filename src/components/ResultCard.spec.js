import React from 'react'
import ReactDOM from 'react-dom'
import ResultCard from './ResultCard'

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
  it('renders result not found without crashing', () => {
    const props = {
      name: "No results found",
    }
    const div = document.createElement('div');
    ReactDOM.render(<ResultCard {...props} />, div);
    ReactDOM.unmountComponentAtNode(div);
  })
})