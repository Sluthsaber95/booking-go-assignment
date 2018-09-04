import React from 'react'
import './../styles/css/main.css'
import ResultList from './ResultList'

const SearchBar = ({ handleChange, searchResults, value }) => {
  const multipleCharactersEntered = value ? value.length > 1 : false
  return (
    <section className="search-bar-container">
      <article className="search-bar-wrapper">
        <h2 className="search-bar-title">Where are you going?</h2>
        <label className="search-bar-label">Pick-Up Location</label>
        <input
          className="search-bar"
          placeholder="city, airport, station, region and district..."
          onChange={handleChange}
          value={value}
          type="text"
        />
        {
          multipleCharactersEntered
            ? <ResultList searchResults={searchResults} />
            : <div></div>
        }
      </article>
    </section>
  )
}

export default SearchBar