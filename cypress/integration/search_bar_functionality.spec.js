/* 
TODO List
- Consider aliasing parts that reusable

Please Note:
- What constitute as a hidden element - https://docs.cypress.io/guides/core-concepts/interacting-with-elements.html#Visibility
*/
describe('Search Bar Functionality', function () {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })
  context('no results returned', () => {
    context('entering a single character', () => {
      const alphanumericValues = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ01234556789'
      alphanumericValues.split('').forEach(alphanumeric => {
        it(`returns no result when I enter a single ${alphanumeric} character into pick up location`, () => {
          cy.find('.search-bar')
            .type(alphanumeric)
          cy.find('.results-field')
            .children()
            .should('have.length', 0)
        })
      })
    })
    context('entering an unrecognised term', () => {
      const unrecognisedTerms = ['xx']
      unrecognisedTerms.forEach(term => {
        it(`returns "No results found" when entering "${term}" into pick up location`, () => {
          cy.find('.search-bar')
            .type(term)
          
          cy.find('.results-field')
            .children()
            .should('have.length', 0)
        })
      })
    })
    context('entering a term, then removing all characters, expect 1 character', () => {
      const startTerms = ['manchester', 'london', 'lancashire']
      const endTerms = ['a', 'b', 'c']

      startTerms.forEach(term => {
        it('returns no results if I remove the search term leaving 1 character', () => {
          cy.find('.search-bar')
            .type(term)
            .tick(1000)
            .type(term)
            .tick(1000)
          
          cy.find('.results-field')
            .children()
            .should('have.length', 0)
        })
      })
    })
  })
  context('results returned,', () => {
    const recognisedTerms = ['manchester', 'london', 'lancashire']
    recognisedTerms.forEach(term => {
      it(`return results when I enter ${term} into pick up location`, () => {
        cy.find('.search-bar')
          .type(term)
          
        cy.find('.results-field')
          .children()
          .should('not.have.length', 0)
      })
    })
    recognisedTerms.forEach(term => {
      it(`returns 6 results when I enter ${term} into pick up location`, () => {
        cy.find('.search-bar')
          .type(term)

        cy.find('.results-field')
          .children()
          .should('have.length', 6)
      })
    })
  })
})