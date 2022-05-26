/*
Gerardo Pérez Pérez
<gerard2perez@outlook.com>
Learning Resource from platzi

File: not-found.jsx
Created:  2022-05-25T22:01:59.194Z
Modified: 2022-05-26T05:01:16.794Z
*/

import * as React from 'react'
import { Layout } from '../components/layout'
import { NotFoundGradient } from '../components/not-found-gradient'
import { PetRandomize } from '../components/pet-randomize'

export default function NotFound (props) {
  return (<Layout fill={true} title='No hidden easter eggs'>
    <PetRandomize/>
    <NotFoundGradient/>
  </Layout>)
}
