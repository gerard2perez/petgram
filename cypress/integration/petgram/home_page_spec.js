/* global describe, it, cy, beforeEach */
/// <reference types="cypress"/>
/*
Gerardo Pérez Pérez
<gerard2perez@outlook.com>
Learning Resource from platzi

File: home_page_spec.js
Created:  2022-05-27T17:32:48.948Z
Modified: 2022-05-27T18:45:25.905Z
*/

describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.intercept('POST', 'graphql').as('photosFetch')
    cy.intercept('GET', 'categories').as('categoriesFetch')
  })
  it('renders main structure', () => {
    cy.get('#app > *').should('have.length', 3)
    cy.get('#app > nav > a').should('have.length', 3)
    cy.get('#app > div > ul + ul').should('exist')
  })
  it('should render the skeleton loaders for categories', () => {
    cy.get('#app > div > ul:first-of-type > li').should('have.length', 6)
    cy.get('#app > div > ul:first-of-type > li > a').should('not.exist')
  })
  it('should render the skeleton loaders for photo cards', () => {
    cy.get('#app > div > ul:last-of-type > li').should('have.length', 3)
    cy.get('#app > div > ul:last-of-type > li > article a').should('not.exist')
  })
  it('should render the real categories', () => {
    cy.wait('@categoriesFetch')
    cy.wait(50)
    cy.get('#app > div > ul:first-of-type > li > a')
      .invoke('attr', 'href')
      .should('eq', '/pets/1')
  })
  it('should render the real photos', () => {
    cy.wait('@photosFetch')
    cy.wait(50)
    cy.get('#app > div > ul:last-of-type li:nth-child(1) a')
      .invoke('attr', 'href')
      .should('eq', '/pet/0')
    cy.get('#app > div > ul:last-of-type li:nth-child(2) a')
      .invoke('attr', 'href')
      .should('eq', '/pet/1')
  })
  it('lazy loads the Photo cards elements', () => {
    cy.wait('@photosFetch')
    cy.wait(50)
    cy.get('#app > div > ul:last-of-type li:last-of-type a').should('not.exist')
  })
})
