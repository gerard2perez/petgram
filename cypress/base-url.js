/* global Cypress */
/// <reference types="cypress"/>
/*
Gerardo Pérez Pérez
<gerard2perez@outlook.com>
Learning Resource from platzi

File: base-url.js
Created:  2022-05-27T18:06:59.241Z
Modified: 2022-05-27T18:20:27.069Z
*/

export const baseUrl = (...paths) => {
  const [protocol, rest] = Cypress.config().baseUrl.split('//')
  const url = [rest, ...paths].join('/').replace(/\/+/g, '/')
  return `${protocol}//${url}`
}
