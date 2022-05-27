/*
Gerardo Pérez Pérez
<gerard2perez@outlook.com>
Learning Resource from platzi

File: index.js
Created:  2022-05-25T03:36:49.521Z
Modified: 2022-05-27T20:04:18.353Z
*/
import { useEffect, useState } from 'react'
import { MdClose } from 'react-icons/md'
import { Content, Wrapper } from './styles'

export const Toaster = ({ message, onClick }) => {
  const [show, setShow] = useState(true)
  const removeMe = (ev) => setShow(false)
  useEffect(() => {
    const dismiss = document.querySelector('[toaster-dismiss]')
    dismiss.addEventListener('click', removeMe)
    if (!show) {
      document.querySelector('#toaster').addEventListener('animationend', _ => {
        onClick()
      })
    }
    return () => dismiss.removeEventListener('click', removeMe)
  }, [show])
  return (<Wrapper id="toaster" className={show ? 'show' : 'hide'}>
    <Content>{message}</Content>
    <MdClose toaster-dismiss="true"/>
  </Wrapper>)
}
