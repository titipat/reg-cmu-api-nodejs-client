# reg-cmu-api-nodejs-client

## Example

```mjs
import client from 'reg-cmu-api-nodejs-client'

for (let i = 1; i <= 6; i++) {
    const result = await client.get(`faculty/0${i}`).json()
    console.log(result)
}
```

See more examples in `exmaple/`.
