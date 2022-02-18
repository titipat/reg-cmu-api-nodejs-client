import client, { getStudents } from '../index.mjs'

/** Class representing a faculty. */
/**
 * @example
 * const faculty = new Faculty()
 * await faculty.initialze() 
 * console.log(faculty.id) // Return 06
 */
class Faculty {
    #payload
    #students = []

    /**
     * Create a faculty.
     * @param {string} id - The faculty id.
     */
    constructor(id = '06') {
        this.id = id
    }

    async init() {
        return this.initialze()
    }

    async initialze() {
        this.#payload = await client.get(`faculty/${this.id}`).json()
    }

    /**
       * @property {Function} getStudents Get faculty's students
       * @returns Array of object of students
       * @example
       * import Faculty from 'reg-cmu-api-nodejs-client/class/faculty.mjs'
       * 
       * const faculty = new Faculty('06')
       * await faculty.init()
       * const students = await faculty.getStudents()
       * console.log(students[0].id) // Return student's id
       */
    async getStudents() {
        if (this.#payload.length === 0) {
            this.#students = await getStudents(this.id)
        }

        return this.#students
    }
}

export default Faculty