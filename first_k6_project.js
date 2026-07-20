import http from 'k6/http';
import { sleep, check } from 'k6';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

const BaseUrl = 'https://test.k6.io';
export default function () {
  // const response = http.get('https://test.k6.io');
//    console.log("Status:", response.status);
// console.log("Body Length:", response.body.length);
const response = http.get(BaseUrl);
   
    check(response, {
        'is status 200': (r) => r.status === 200
    });
    check(response, {
        "body size was 2847 bytes": (res) => res.body.length == 2847,
    });
     sleep(1);
}
export const options = {

    stages : [
        { duration: '5s', target: 15 },
        { duration: '5s', target: 10 },
        { duration: '5s', target: 0 }
    ]
};

export function handleSummary(data) {
    return {
        "summary.html": htmlReport(data),
    };
}