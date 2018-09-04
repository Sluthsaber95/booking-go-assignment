import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import App from './../App'
import LocationType from './../components/LocationType'
import SearchBar from './../components/SearchBar'
import ResultCard from './../components/ResultCard'


const centerStyles = {
  height: '50vw',
  width: '100%',
  paddingTop: 50,
  background: '#aaaaaa',
  display: 'flex',
  justifyContent: 'space-around',
}

const listStyles = {
  container: {
    height: '50vw',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    listStyleType: 'none',
    padding: 0,
    borderRadius: "10px",
    background: '#aaaaaa',
  },
  wrapper: {
    listStyleType: 'none',
    padding: 0,
  },
  wrapperFullWidth: {
    listStyleType: 'none',
    padding: 0,
    width: 620,
  }
}

const CenterDecorator = (storyFn) => (
  <div style={centerStyles}>
    {storyFn()}
  </div>
);

const ListDecorator = (storyFn) => (
  <div style={listStyles.container}>
    <ul style={listStyles.wrapperFullWidth}>
      {storyFn()}
    </ul>
  </div>
)

storiesOf('LocationType', module)
  .addDecorator(CenterDecorator)
  .add('with all types of labels', () => {
    return (
      <Fragment>
        <LocationType type="airport">Airport</LocationType>
        <LocationType type="city">City</LocationType>
        <LocationType type="district">District</LocationType>
        <LocationType type="station">Station</LocationType>
        <LocationType type="place">Place</LocationType>
      </Fragment>
    )
  })

storiesOf('ResultCard', module)
  .addDecorator(ListDecorator)
  .add('with only airport label', () => {
    const props = {
      city: "London",
      country: "United Kingdom",
      iata: "LHR",
      name: "Heathrow Airport",
      type: "airport",
    }
    return (
      <Fragment>
        <ResultCard {...props} />
      </Fragment>
    )
  })
  .add('with all the label types', () => {
    const airportProps = {
      city: 'London',
      country: 'United Kingdom',
      iata: 'LHR',
      name: 'Heathrow Airport',
      type: 'airport',
      region: 'Greater London',
    }
    const cityProps = {
      name: 'London',
      country: 'United Kingdom',
      type: 'city',
      region: 'Greater London',
    }
    const trainProps = {
      city: 'Rome',
      country: 'Italy',
      name: 'Rome - Termini Train Station',
      type: 'train',
      region: 'Lazio',
    }
    const placeProps = {
      country: 'United State of America',
      name: 'Manhattan',
      type: 'place',
      region: 'New York State',
    }
    const districtProps = {
      country: 'Spain',
      name: 'Mallorca',
      type: 'district',
    }
    const ItemTypes = [
      airportProps,
      cityProps,
      trainProps,
      placeProps,
      districtProps,
    ].map(type => <ResultCard {...type} />)
    return (
      <div>
        { ItemTypes }
      </div>
    )
  })
  .add('with no results found', () => {
    const props = {
      name: "No results found"
    }
    return <ResultCard {...props} />
  })

storiesOf('SearchBar', module).add('display design - no interaction', () => <SearchBar />)
storiesOf('App', module).add('demo', () => <App />)
