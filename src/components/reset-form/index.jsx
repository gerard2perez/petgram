/*
Gerardo Pérez Pérez
<gerard2perez@outlook.com>
Learning Resource from platzi

File: index.jsx
Created:  2022-05-25T03:35:31.235Z
Modified: 2022-05-25T03:36:03.749Z
*/
import { useFormikContext } from 'formik'
import React from 'react'
import { useEffectIgnoreFirst } from '../../hooks/useEffectIgnoreFirst'
import { useGetLabels } from '../../hooks/useGetLabels'
export const ResetForm = () => {
  const { hash } = useGetLabels()
  const { resetForm } = useFormikContext()
  useEffectIgnoreFirst(() => {
    resetForm({})
  }, [hash])
  return <></>
}
