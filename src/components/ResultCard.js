import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import CardResultNotFound from './CardResultNotFound'
import CardResultValid from './CardResultValid'
import './../styles/css/main.css'

const ResultCard = (
  { 
    city, 
    country,
    iata,
    name,
    region,
    type,
  }
) => {
  const title = `${name}${iata ? ` (${iata})` : ''}`
  const area = `${city ? city + ', ' : (region ? region + ', ' : '')}${country}`
  const typePassed = type === 'train' ? 'station' : type
  const description = { title, area, typePassed }
  return (
    <Fragment>
      {
        title === "No results found" 
        ? <CardResultNotFound />
        : <CardResultValid {...description} />
      }
    </Fragment>

  )
}


export default ResultCard

ResultCard.propTypes = {
  city: PropTypes.string,
  country: PropTypes.string,
  iata: PropTypes.string,
  name: PropTypes.string,
  region: PropTypes.string,
  type: PropTypes.oneOf(['airport', 'city', 'train', 'district', 'place']),
}