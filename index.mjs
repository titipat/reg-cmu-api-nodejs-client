import 'dotenv/config'
import got from 'got'
import apCase from "@lifeparticle/ap-style-title-case";

if (!process.env.API_USERNAME || !process.env.API_PASSWORD) {
    throw new Error('Either process.env.API_USERNAME or process.env.API_PASSWORD are required.')
}

const trimObj = (obj) => {
    if (obj === null || !Array.isArray(obj) && typeof obj != 'object') return obj;
    return Object.keys(obj).reduce(function (acc, key) {
        acc[key.trim()] = typeof obj[key] == 'string' ? obj[key].trim() : trimObj(obj[key]);
        return acc;
    }, Array.isArray(obj) ? [] : {});
}

const client = got.extend({
    prefixUrl: 'https://apiv2.reg.cmu.ac.th/v2',
    username: process.env.API_USERNAME,
    password: process.env.API_PASSWORD,
    parseJson: text => trimObj(JSON.parse(text))
})

export default client

export async function getStudents() {
    const students = await client.get('students?', {
        searchParams: {
            'where[faculty_id]': '06'
        }
    }).json()
    return students.map(studentTransform)
}

const studentTransform = (student) => {
    const { name_en, surname_en } = student
    if (name_en && typeof name_en === 'string' && name_en.length > 0) {
        student.name_en = apCase(student.name_en)
    }

    if (surname_en && typeof surname_en && surname_en.length > 0) {
        student.surname_en = apCase(student.surname_en)
    }

    return student
}

export async function getStudent(id) {
    const student = await client.get(`students/${id}`).json()
    return studentTransform(student)
}