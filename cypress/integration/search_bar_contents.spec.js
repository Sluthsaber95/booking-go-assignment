/*
TODO
May need to use enzyme perhaps or some way of getting access to the label,
probably remove test if unable to do bdd
*/

// Denoted as TEST 1 in the spec sheet
describe('Search Bar Contents', function () {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })
  context('landing on rentalcars.com', () => {
    it('shows a search widget')
    it('shows a search widget labeled "Pick up location"')
  })
  context('search-widget', () => {
    it('shows an input field consist of placeholder text "city, airport, station, region and district..."')
    it('highlights the input field when click on')
    it('does not highlight the input field when clicked off')

    it('contains an aria-label "Pick up location" as part of the input field')
  })
})