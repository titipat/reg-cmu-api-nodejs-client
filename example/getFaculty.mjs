import Faculty from "../class/faculty.mjs";

const faculty = new Faculty('06')
await faculty.initialze()
console.log(faculty)

const students = await faculty.getStudents()
console.log(students)