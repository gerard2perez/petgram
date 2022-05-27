/*
Gerardo Pérez Pérez
<gerard2perez@outlook.com>
Learning Resource from platzi

File: index.js
Created:  2022-05-23T15:59:08.309Z
Modified: 2022-05-27T20:20:14.015Z
*/

import { ErrorMessage, Formik } from 'formik'
import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router'
import { PetRandomize } from '../pet-randomize'
import { ResetForm } from '../reset-form'
import { SubmitButton } from '../submit-button'
import { Toaster } from '../toaster'
import { ErrorText, Field, Form, H2, Legend } from './styles'
import { validationSchema } from './validation-schema'

const initialValues = {
  email: '',
  password: ''
}

const useFormAnimation = () => {
  const ref = useRef(null)
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
  return { ref, handleReset }
}
export const UserForm = ({ signin, title, invTitle, invHash, mutation }) => {
  const navigate = useNavigate()
  const [onSubmit, { loading, error, reset }] = mutation
  const { ref, handleReset } = useFormAnimation()
  const handleSubmit = (values, { setSubmitting }) => {
    onSubmit(values).then(_ => {
      setSubmitting(false)
      navigate('/')
    }).catch(_ => _)
  }

  return <Formik onReset={handleReset} initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
    <Form disabled={loading} ref={ref} className='enters'>
      <ResetForm/>
      <PetRandomize />
      <H2>{title}</H2>
      <Field disabled={loading} placeholder="Email" name="email" type="text" autoComplete="email" />
      <ErrorMessage name="email" component={ErrorText} />

      <Field disabled={loading} placeholder="Password" name="password" type="password" autoComplete="current-password" />
      <ErrorMessage name="password" component={ErrorText}/>

      <SubmitButton disabled={loading} type="submit">{title}</SubmitButton>

      <Legend>
        {signin ? 'are you not' : 'are you already'} registered?
        <a href={`#${invHash}`}>{invTitle}</a>
      </Legend>
      {error && <Toaster message={error.message} onClick={reset}/>}
    </Form>
  </Formik>
}
