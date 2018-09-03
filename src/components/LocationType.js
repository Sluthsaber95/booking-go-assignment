import React from 'react'
import './../styles/css/main.css'
import PropTypes from 'prop-types'

const LocationType = ({ type }) => {
  const name = type.charAt(0).toUpperCase() + type.slice(1);
  return <div className={`location-label-${type}`}>{name}</div>
}

export default LocationType

LocationType.propType = {
  type: PropTypes.oneOf(['airport', 'city', 'station', 'district', 'place']),
  children: PropTypes.string,
}