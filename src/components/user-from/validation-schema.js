/*
Gerardo Pérez Pérez
<gerard2perez@outlook.com>
Learning Resource from platzi

File: validation-schema.js
Created:  2022-05-25T04:32:20.378Z
Modified: 2022-05-25T04:32:33.239Z
*/
import * as Yup from 'yup'
export const validationSchema = Yup.object({
  email: Yup.string().email().required(),
  password: Yup.string().required().min(6)
})
