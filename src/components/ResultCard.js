import React from 'react'
import PropTypes from 'prop-types'

import './../styles/css/main.css'
import LocationType from './LocationType'

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
  return (
    <li className="item-wrapper">
      <div className="item">
        <LocationType type={typePassed} />
        <div className="item-descriptor">
          <div className="item-title">{title}</div>
          <div className="item-area">{area}</div>
        </div>
      </div>
    </li>
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