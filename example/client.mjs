import client from "reg-cmu-api-nodejs-client";

// Get students with faculty_id 06 and limit by 5 using the loopback style filter
// For more info about the filter see https://loopback.io/doc/en/lb4/Where-filter
const searchParams = new URLSearchParams();
searchParams.append('filter[limit]', 5)
searchParams.append('filter[where][faculty_id]', '06')

const students = await client.get('students', {
    searchParams
}).json()

console.log(students)