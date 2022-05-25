/*
Gerardo Pérez Pérez
<gerard2perez@outlook.com>
Learning Resource from platzi

File: index.js
Created:  2022-05-25T03:36:49.521Z
Modified: 2022-05-25T04:21:31.211Z
*/
import { useEffect, useState } from 'react'
import { MdClose } from 'react-icons/md'
import { Content, Wrapper } from './styles'

export const Toaster = ({ message }) => {
  const [show, setShow] = useState(true)
  useEffect(() => {
    const dismiss = document.querySelector('[toaster-dismiss]')
    const removeMe = (ev) => {
      setShow(false)
    }
    dismiss?.addEventListener('click', removeMe)
    return () => dismiss.removeEventListener('click', removeMe)
  }, [])
  return (<Wrapper className={show ? 'show' : 'hide'}>
      <Content>{message}</Content>
      <MdClose toaster-dismiss="true"/>
    </Wrapper>)
}
