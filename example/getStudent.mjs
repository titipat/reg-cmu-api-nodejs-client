import { getStudent } from 'reg-cmu-api-nodejs-client'

const student = await getStudent('XXXXXX627')

console.log(student)