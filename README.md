# reg-cmu-api-nodejs-client

## Setup

Specify your given credential in `.env`.

## Example

### Got wrapper version.

```mjs
import client from 'reg-cmu-api-nodejs-client'

for (let i = 1; i <= 6; i++) {
    const result = await client.get(`faculty/0${i}`).json()
    console.log(result)
}
```

### SDK version.

```mjs
import Faculty from 'reg-cmu-api-nodejs-client/class/faculty.mjs'

const faculty = new Faculty('06')
await faculty.init()
const students = await faculty.getStudents()
console.log(students[0].id) // Return student's id
```

See more examples in `exmaple/`.
