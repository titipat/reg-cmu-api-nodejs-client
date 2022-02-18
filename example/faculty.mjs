import Faculty from 'reg-cmu-api-nodejs-client/class/faculty.mjs'

const faculty = new Faculty('06')
await faculty.init()
console.log(faculty.id)

// const students = await faculty.getStudents()
// console.log(students)