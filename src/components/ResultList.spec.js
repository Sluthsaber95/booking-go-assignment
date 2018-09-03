import React from 'react'
import ReactDOM from 'react-dom'
import ResultList from './ResultList'

describe('<ResultList />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    const searchResults = []
    ReactDOM.render(<ResultList searchResults={searchResults}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  })
})