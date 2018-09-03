import React, { Component } from 'react';
import axios from 'axios'
import SearchBar from './components/SearchBar'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchResults: [],
      value: '',
    }
    this.handleChange = this.handleChange.bind(this)
    this.getSearchResults = this.getSearchResults.bind(this)
  }
  handleChange(event){
    this.setState({ value: event.target.value})
    this.getSearchResults()
  }
  getSearchResults(){
    axios.get(`https://cors.io/?https://www.rentalcars.com/FTSAutocomplete.do?`, {
      params: {
        'solrIndex': 'fts_en',
        'solrRows': '6',
        'solrTerm': this.state.value,
      }
    })
    .then(response => {
      if(response.status >= 200 && response.status < 400){
        console.log(response.data.results.docs)
        this.setState({ searchResults: response.data.results.docs })
      }
      return
    })
    .catch(error => { console.log(error) })
  }
  render() {
    const { searchResults, value } = this.state
    const handleChange = this.handleChange
    return (
      <div className="App">
        <SearchBar
          handleChange={handleChange}
          searchResults={searchResults}
          value={value}
        />
      </div>
    );
  }
}

export default App;
