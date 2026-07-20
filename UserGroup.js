import http from 'k6/http';
import { sleep, check, group } from 'k6';
import { htmlReport } from 'https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js';

const BaseUrl = 'https://test.k6.io';

export default function () {

    group('Open Home Page', () => {
        const response = http.get(BaseUrl);

        check(response, {
            'Home page status is 200': (r) => r.status === 200,
        });

        sleep(1);
    });

    group('Open News Page', () => {
        const response = http.get(`${BaseUrl}/news.php`);

        check(response, {
            'News page status is 200': (r) => r.status === 200,
        });
    });

    group('Open Blog Page', () => {
        const response = http.get(`${BaseUrl}/blog`);

        check(response, {
            'Blog page status is 200': (r) => r.status === 200,
        });
    });

    sleep(1);
}

export function handleSummary(data) {
    return {
        "summary.html": htmlReport(data),
    };
}