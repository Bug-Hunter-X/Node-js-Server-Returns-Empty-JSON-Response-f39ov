# Node.js Server Empty JSON Response Bug

This repository demonstrates a subtle bug in a Node.js HTTP server where an empty JSON response is returned instead of the expected data.  The server appears to function correctly, but the response body lacks the intended content.

## Bug Description
The server is designed to send a JSON response, however, it currently returns an empty JSON object `{}`.  The root cause is a missing data object to stringify.  Debugging this issue can be tricky as there are no immediate syntax errors or exceptions.

## How to Reproduce
1. Clone this repository.
2. Navigate to the directory containing `server.js`.
3. Run `node server.js`.
4. Send a request to `http://localhost:8080`.  You will receive an empty JSON response.

## Solution
The solution involves adding the intended data to be sent in the response body before stringifying it to JSON.