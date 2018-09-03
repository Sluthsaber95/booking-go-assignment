import React from 'react'
import shortid from 'shortid'

import ResultCard from './ResultCard'

const ResultList = ({ searchResults }) => {
  const style = {
    listStyleType: 'none',
    padding: 0,
    margin: 0,
  }
  return (
    <ul style={style}>
      {
        searchResults.map(data => {
          const key = shortid.generate()
          const { city, bookingId, country, iata, name, region } = data
          const type = bookingId ? bookingId.replace(/\-\w*$/, '') : 'airport'
          const props = { city, type, country, iata, name, region }
          return <ResultCard key={key} {...props} />
        })
      }
    </ul>
  )
}

export default ResultList