/*
TODO
- Change Global Stats
*/

// Denoted as TEST 1 in the spec sheet
describe('Search Bar Contents', function () {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })
  context('landing on rentalcars.com', () => {
    it('shows a search widget', () => {
      cy.get('.search-bar-container')
    })
    it('shows a search widget labeled "Pick up location"', () => {
      cy.get('.search-bar-label')
        .should('have.text', 'Pick-Up Location')
    })
  })
  context('search-widget', () => {
    it('shows an input field consist of placeholder text "city, airport, station, region and district..."', () => {
      cy.get('.search-bar')
        .should('have.text', '')
      
      cy.get('.search-bar')
        .should('have.attr', 'placeholder', 'city, airport, station, region and district...')
    })
  })
})