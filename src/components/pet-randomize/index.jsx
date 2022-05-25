/*
Gerardo Pérez Pérez
<gerard2perez@outlook.com>
Learning Resource from platzi

File: index.jsx
Created:  2022-05-23T16:58:26.359Z
Modified: 2022-05-25T02:10:48.211Z
*/
/* eslint-disable react/jsx-key */
import { Cat } from '../pets/cat'
import { Dog } from '../pets/dog'
import { Hamster } from '../pets/hamster'
import { Pet } from './styles'
function rdn (start, end) {
  return start + Math.round(Math.random() * end)
}
const Pets = [
  Cat,
  Hamster,
  Dog
]
export const PetRandomize = () => {
  const GetRandomPet = ({ color }) => {
    const Wrapped = Pets[rdn(0, Pets.length - 1)]
    return <Wrapped color={color}/>
  }

  return <Pet>
    <GetRandomPet color='#f708ff'/>
  </Pet>
}
