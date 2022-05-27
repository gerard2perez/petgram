/* global describe, it, cy, before */
/// <reference types="cypress"/>
/*
Gerardo Pérez Pérez
<gerard2perez@outlook.com>
Learning Resource from platzi

File: favorite_page.js
Created:  2022-05-27T20:21:52.864Z
Modified: 2022-05-27T20:59:21.334Z
*/

import { baseUrl } from '../../base-url'
import { submitForm } from '../../submit-form'

describe('Favorite Page', () => {
  before(() => {
    cy.visit('login')
    cy.get('a[href="#signup"]').click()
    submitForm()
  })
  it('adds a photo to favorites', () => {
    cy.get('ul li article a + button').first().invoke('text').as('oldLikes')
    cy.intercept('POST', 'graphql').as('likeMutation')
    cy.get('ul li article a + button').first().click()
    cy.wait('@likeMutation').wait(100)
    cy.get('@oldLikes').then(oldLikes => {
      const [n] = oldLikes.trim().split(' ')
      const newLikes = `${parseInt(n) + 1} likes!`
      cy.get('ul li article a + button').first().should('contain.text', newLikes)
    })
  })
  it('shows all the favorite items', () => {
    cy.visit('/favs')
    cy.get('#app div a img').should('have.length', 1)
  })
  it('clicks favorite and moves to detail', () => {
    cy.visit('/favs')
    cy.get('#app div a').click()
    cy.url().should('eq', baseUrl('/pet/0'))
  })
})
