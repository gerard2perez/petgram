/*
Gerardo Pérez Pérez
<gerard2perez@outlook.com>
Learning Resource from platzi

File: auto-gen-id-array.js
Created:  2022-05-26T01:44:47.883Z
Modified: 2022-05-26T01:46:26.268Z
*/

const autoInc = ((i = 0) => () => ({ id: ++i }))()
export const autoGentIdArray = (elements) => Array(elements || 9).fill().map(autoInc)
