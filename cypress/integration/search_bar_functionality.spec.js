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
        it(`returns no result when I enter the single character "${alphanumeric}" into pick up location`, () => {
          cy.get('.search-bar')
            .type(alphanumeric)
          cy.get('.results-field')
            .should('not.exist')
        })
      })
    })
    context('entering an unrecognised term', () => {
      const unrecognisedTerms = ['xxasdfgdga']
      unrecognisedTerms.forEach(term => {
        it(`returns "No results found" when entering "${term}" into pick up location`, () => {
          cy.get('.search-bar')
            .type(term)

          cy.get('.results-field')
            .should('have.length', 1)

          cy.get('.item-wrapper')
            .should('exist')
          
          cy.get('.item-no-exist')
            .should('have.text', 'No results found')
        })
      })
    })
    context('entering a term & removing characters', () => {
      const startTerms = ['manchester', 'london', 'lancashire']
      const endTerms = ['a', 'b', 'c']

      startTerms.forEach((term, index) => {
        it(`returns no results if I remove the search term leaving the ${endTerms[index]} character`, () => {
          const singleCharacter = endTerms[index]

          cy.get('.search-bar')
            .type(term, { delay: 100})
          
          cy.get('.search-bar')
            .clear()

          cy.get('.search-bar')
            .type(singleCharacter, { delay: 2000 })
        
          cy.get('.results-field')
            .should('not.exist')
        })
      })
      it('returns no results if I remove the search term', () => {
        cy.get('.search-bar')
          .type('manchester', { delay: 10})
          .clear()

        cy.get('.item-wrapper')
          .should('not.exist')
      })
    })
  })
  context('results returned,', () => {
    const recognisedTerms = ['manchester', 'london', 'lancashire']
    recognisedTerms.forEach(term => {
      it(`return results when I enter ${term} into pick up location`, () => {
        cy.get('.search-bar')
          .type(term)
          
        cy.get('.results-field')
          .should('exist')
      })
    })
    recognisedTerms.forEach(term => {
      it(`returns 6 results when I enter ${term} into pick up location`, () => {
        cy.get('.search-bar')
          .type(term)

        cy.get('.results-field')
          .children()
          .should('have.length', 6)
      })
    })
  })
})