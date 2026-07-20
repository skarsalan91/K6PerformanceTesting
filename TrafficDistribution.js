        import http from 'k6/http';
        import { sleep, check, group } from 'k6';
        import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

        const BaseUrl = 'https://test.k6.io';
        const Traffic_Split =
                        {
                            home: 0.5,
                            news: 0.3,
                            blog: 0.2,
                        };
                        export const options = {

    stages : [
        { duration: '5s', target: 5 },
        { duration: '5s', target: 5 },
        { duration: '5s', target: 0 }
    ]
};
        export default function () {
            const randomValue =Math.random();
            if (randomValue < Traffic_Split.home) {
            group('Open Home Page', () => {
                const response = http.get(BaseUrl);
        
                check(response, {
                    'Home page status is 200': (r) => r.status === 200,
                });            
            });
         sleep(1);
        }
        else if (randomValue < Traffic_Split.home + Traffic_Split.news) {
        
            group('Open News Page', () => {
                const response = http.get(`${BaseUrl}/news.php`);
        
                check(response, {
                    'News page status is 200': (r) => r.status === 200,
                });
            });
            sleep(1);
        }
        else {
        
            group('Open Blog Page', () => {
                const response = http.get(`${BaseUrl}/blog`);
        
                check(response, {
                    'Blog page status is 200': (r) => r.status === 200,
                });
            });

        
        
            sleep(1);
        }
        }
        export function handleSummary(data) {
            return {
                "summary.html": htmlReport(data),
            };
        }