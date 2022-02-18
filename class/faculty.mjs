import client, { getStudents } from '../index.mjs'

class Faculty {
    #payload
    #students = []

    constructor(id = '06') {
        this.id = id
    }

    async initialze() {
        this.#payload = await client.get(`faculty/${this.id}`).json()
    }

    async getStudents() {
        if (this.#payload.length === 0) {
            this.#students = await getStudents(this.id)
        }

        return this.#students
    }
}

export default Faculty