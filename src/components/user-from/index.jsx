/*
Gerardo Pérez Pérez
<gerard2perez@outlook.com>
Learning Resource from platzi

File: index.js
Created:  2022-05-23T15:59:08.309Z
Modified: 2022-05-25T02:13:08.411Z
*/

import { ErrorMessage, Formik, useFormikContext } from 'formik'
import React, { useEffect, useRef } from 'react'
import * as Yup from 'yup'
import { useEffectIgnoreFirst } from '../../hooks/useEffectIgnoreFirst'
import { useGetLabels } from '../../hooks/useGetLabels'
import { PetRandomize } from '../pet-randomize'
import { Button, ErrorText, Field, Form, H2, Legend } from './styles'

const initialValues = {
  email: '',
  password: ''
}
const validationSchema = Yup.object({
  email: Yup.string().email().required(),
  password: Yup.string().required().min(6)
})
const ResetForm = () => {
  const { hash } = useGetLabels()
  const { resetForm } = useFormikContext()
  useEffectIgnoreFirst(() => {
    resetForm({})
  }, [hash])
  return <></>
}
export const UserForm = ({ onSubmit }) => {
  const ref = useRef(null)
  const { signin, title, invTitle, invHash } = useGetLabels()
  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values, setSubmitting)
    onSubmit()
    setSubmitting(false)
  }
  const handleReset = () => {
    ref.current.classList.add('enters')
  }
  useEffect(() => {
    const animationend = (ev) => {
      ev.target.classList.remove('enters')
    }
    ref.current.addEventListener('animationend', animationend)
    return () => ref?.current?.removeEventListener('animationend', animationend)
  }, [])
  return <Formik onReset={handleReset} initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
    <Form ref={ref} className='enters'>
      <ResetForm/>
      <PetRandomize />
      <H2>{title}</H2>
      <Field placeholder="Email" name="email" type="text" autoComplete="email" />
      <ErrorMessage name="email" component={ErrorText} />

      <Field placeholder="Password" name="password" type="password" autoComplete="current-password" />
      <ErrorMessage name="password" component={ErrorText}/>

      <Button type="submit">{title}</Button>
      <Legend>
        {signin ? 'are you not' : 'are you already'} registered?
        <a href={`#${invHash}`}>{invTitle}</a>
      </Legend>
    </Form>
  </Formik>
}
