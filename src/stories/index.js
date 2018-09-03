import React, { Fragment } from 'react'
import expect from 'expect'

import { storiesOf } from '@storybook/react'
import { specs, describe, it } from 'storybook-addon-specifications'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { Button, Welcome } from '@storybook/react/demo'
import LocationType from './../components/LocationType'
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