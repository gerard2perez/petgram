/*
Gerardo Pérez Pérez
<gerard2perez@outlook.com>
Learning Resource from platzi

File: submit-form.js
Created:  2022-05-27T20:23:56.077Z
Modified: 2022-05-27T20:56:00.928Z
*/
/* global cy */
/// <reference types="cypress"/>

export const submitForm = (email, password) => {
  if (!email) email = `${new Date().getTime()}@email.com`
  if (!password) password = '123456'
  const name = `${new Date().getTime()}SubmitForm`
  cy.intercept('POST', 'graphql').as(name)
  cy.get('form').within(() => {
    cy.get('input[name=email]').type(email)
    cy.get('input[name=password]').type(password)
    cy.get('button[type=submit]').click()
  })
  cy.wait(`@${name}`).wait(100)
}
