import 'dotenv/config'
import got from 'got'

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