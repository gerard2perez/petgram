/*
Gerardo Pérez Pérez
<gerard2perez@outlook.com>
Learning Resource from platzi

File: validation-schema.js
Created:  2022-05-25T04:32:20.378Z
Modified: 2022-05-26T17:25:52.425Z
*/
import { object, string } from 'yup'
export const validationSchema = object({
  email: string().email().required(),
  password: string().required().min(6)
})
