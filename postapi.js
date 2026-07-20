import http from 'k6/http';
import { sleep, check } from 'k6';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

const BaseUrl = 'https://test.k6.io';
export default function () {
   
    const url = 'https://dummyjson.com/auth/login';
    const payload = JSON.stringify(
        {
  "username": "emilys",
  "password": "emilyspass"
});
const params = {
    headers : 
    {
        'Content-Type' : 'application/json',

    },
};
const res = http.post(url, payload, params);
check(res, {
    'is status 200': (r) => r.status === 200,
  //  'Do request body contain content-type': (r) => r.headers['Content-Type'].includes('application/json'),
'Response is JSON': (r) => {
    const contentType = r.headers['Content-Type'] || r.headers['content-type'];
    return contentType && contentType.includes('application/json');
},
});

}

    