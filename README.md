# Express.js POST Request Body Empty

This repository demonstrates a common issue in Express.js applications where the request body is empty when using `express.json()` middleware to parse JSON data in POST requests.

The issue is often caused by incorrect middleware order, missing middleware, or incorrect use of body-parsing middleware.

## Bug

The `bug.js` file demonstrates an Express.js application that fails to receive POST request bodies.  Even though `express.json()` is included, `req.body` is always empty.

## Solution

The `bugSolution.js` file provides a corrected version of the application.  The solution demonstrates the correct way to utilize the middleware to parse the body correctly.

## How to Reproduce

1. Clone this repository.
2. Navigate to the repository directory.
3. Run `npm install` to install dependencies.
4. Run `node bug.js` to start the server.
5. Send a POST request to `http://localhost:3000/data` with a JSON payload using a tool like Postman or curl.
6. Observe that the request body is empty.
7. Then run `node bugSolution.js`, send the same request and observe the response.