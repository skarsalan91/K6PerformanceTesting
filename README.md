# K6PerformanceTesting
Performance testing for HTTPS Request
**SharedUser.js**
This k6 load test script sends GET requests to [https://test.k6.io](https://test.k6.io) with a 1-second pause between iterations. It executes a shared iterations scenario distributing 200 total requests across 10 virtual users (VUs) within a maximum runtime of 30 seconds, then automatically exports the test results into an HTML report named summary.html.



**TrafficDistribution**
This k6 load test script simulates realistic user traffic across three different endpoints with a 15-second staged load pattern (ramping to 5 virtual users, holding, then ramping down). It uses probabilistic distribution to direct traffic to the Home page (50%), News page (30%), and Blog page (20%), verifies HTTP 200 status codes using checks and groups, and exports execution metrics to summary.html.



**UserGroup**
This k6 performance test script executes a sequential user journey navigating through three distinct grouped pages: the Home page, News page, and Blog page on [https://test.k6.io](https://test.k6.io). It verifies that each request returns an HTTP 200 status code, includes think-time pauses (sleep), and outputs an HTML performance report to summary.html.
