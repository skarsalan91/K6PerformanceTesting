import http from 'k6/http';
import { sleep, check } from 'k6';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

const BaseUrl = 'https://test.k6.io';
export default function () {

const response = http.get(BaseUrl);
   
  //  check(response, {
    //    'is status 200': (r) => r.status === 200
    //});
     sleep(1);
}
export const options = {

   scenarios: {
        default: {
          //  executor: 'per-vu-iterations',
          executor: 'shared-iterations',
            vus: 10,
            iterations: 200,
            maxDuration: '30s',
            
        },
    },
};
export function handleSummary(data) {
    return {
        "summary.html": htmlReport(data),
    };
}