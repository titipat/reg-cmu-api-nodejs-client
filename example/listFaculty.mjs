import client from '../index.mjs'

for (let i = 1; i <= 6; i++) {
    const result = await client.get(`faculty/0${i}`).json()
    console.log(result)
}