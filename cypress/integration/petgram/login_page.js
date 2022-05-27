/* global describe, it, cy, beforeEach */
/// <reference types="cypress"/>

import { baseUrl } from '../../base-url'
import { submitForm } from '../../submit-form'
/*
Gerardo Pérez Pérez
<gerard2perez@outlook.com>
Learning Resource from platzi

File: login_page.js
Created:  2022-05-27T18:29:29.492Z
Modified: 2022-05-27T20:32:27.380Z
*/

describe('Login Page', () => {
  beforeEach(() => cy.visit('/login'))
  it('renders main structure', () => {
    cy.get('div > form').should('exist')
    cy.get('input[name=email]').should('exist')
    cy.get('input[name=password]').should('exist')
    cy.get('button[type=submit]').should('exist')
  })
  it('toggles to Sign up', () => {
    cy.get('a[href="#signup"]').click()
    cy.url().should('eq', baseUrl('/login#signup'))
    cy.get('form h2').should('have.text', 'Sign up')
    cy.get('form button').should('have.text', 'Sign up')
  })
  it('toggles to Sign in', () => {
    cy.get('a[href="#signup"]').click()
    cy.get('a[href="#signin"]').click()
    cy.url().should('eq', baseUrl('/login#signin'))
    cy.get('form h2').should('have.text', 'Sign in')
    cy.get('form button').should('have.text', 'Sign in')
  })
})
describe('Login Page - Form', () => {
  beforeEach(() => cy.visit('/login'))
  it('requires all fields', () => {
    cy.get('button[type=submit]').click().wait(10)
    cy.get('input + div').first().should('have.text', 'email is a required field')
    cy.get('input + div').last().should('have.text', 'password is a required field')
  })
  it('registers a new user', () => {
    cy.get('a[href="#signup"]').click()
    const email = `${new Date().getTime()}@email.com`
    const password = '123456'
    submitForm(email, password)
    cy.url().should('eq', baseUrl())
  })
  it('notifies user is already registered', async () => {
    const email = `${new Date().getTime()}@email.com`
    const password = '123456'

    cy.get('a[href="#signup"]').click()
    submitForm(email, password)

    cy.visit('/login', {
      onBeforeLoad: (win) => win.sessionStorage.clear()
    })
    submitForm(email, password)
    cy.get('#toaster').should('have.class', 'show')
  })
  it('signin an existing user', () => {
    const email = `${new Date().getTime()}@email.com`
    const password = '123456'

    cy.get('a[href="#signup"]').click()
    submitForm(email, password)
    cy.visit('/login', {
      onBeforeLoad: (win) => win.sessionStorage.clear()
    })

    submitForm(email, password)
    cy.url().should('eq', baseUrl())
  })
  it('notifies wrong password', () => {
    const email = `${new Date().getTime()}@email.com`
    const password = '123456'

    cy.get('a[href="#signup"]').click()
    submitForm(email, password)
    cy.visit('/login', {
      onBeforeLoad: (win) => win.sessionStorage.clear()
    })

    submitForm(email, 'password')
    cy.url().should('eq', baseUrl('login'))
    cy.get('#toaster').should('have.class', 'show')
  })
})
