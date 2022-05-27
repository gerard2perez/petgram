/* global describe, it, cy, beforeEach */
/// <reference types="cypress"/>
/*
Gerardo Pérez Pérez
<gerard2perez@outlook.com>
Learning Resource from platzi

File: test_spec.js
Created:  2022-05-26T20:41:14.145Z
Modified: 2022-05-27T20:32:20.355Z
*/
import { baseUrl } from '../../base-url'
describe('Public Navigation', function () {
  beforeEach(() => cy.visit('/'))
  it('navigates categories', function () {
    cy.get('ul:first-of-type li:nth-child(1) a').click()
    cy.url().should('eq', baseUrl('/pets/1'))

    cy.get('ul:first-of-type li:nth-child(2) a').click()
    cy.url().should('eq', baseUrl('/pets/2'))
  })

  it('navigates back to home', function () {
    cy.get('ul:first-of-type li:nth-child(1) a').click()
    cy.get('nav a:nth-child(1)').click()
    cy.url().should('eq', baseUrl())
  })
  it('should navigate to home', () => {
    cy.get('nav a:nth-child(2)').click()
    cy.url().should('eq', baseUrl('/login'))
    cy.get('nav a:nth-child(1)').click()
    cy.get('nav a:nth-child(3)').click()
    cy.url().should('eq', baseUrl('/login'))
  })
  it('should navigate to login when like is clicked', () => {
    cy.get('ul li article button').first().click()
    cy.url().should('eq', baseUrl('/login'))
  })
})
