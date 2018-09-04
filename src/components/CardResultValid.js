import React from 'react'
import PropTypes from 'prop-types'

import LocationType from './LocationType'

const CardResultValid = ({ area, title, typePassed }) =>
  <li className="item-wrapper">
    <div className="item">
      <LocationType type={typePassed} />
      <div className="item-descriptor">
        <div className="item-title">{title}</div>
        <div className="item-area">{area}</div>
      </div>
    </div>
  </li>

export default CardResultValid

CardResultValid.propTypes = {
  area: PropTypes.string,
  title: PropTypes.string,
  typePassed: PropTypes.oneOf(['airport', 'city', 'station', 'district', 'place']),
}