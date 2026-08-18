# K6PerformanceTesting
Performance testing for HTTPS Request
SharedUser.js
This k6 load test script sends GET requests to [https://test.k6.io](https://test.k6.io) with a 1-second pause between iterations. It executes a shared iterations scenario distributing 200 total requests across 10 virtual users (VUs) within a maximum runtime of 30 seconds, then automatically exports the test results into an HTML report named summary.html.
