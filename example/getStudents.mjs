import { getStudents } from 'reg-cmu-api-nodejs-client'

const students = await getStudents()

console.log(students)