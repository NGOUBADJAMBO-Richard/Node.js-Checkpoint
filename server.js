// create a server  
// Write a program that runs on port 3000 and responds with  '<h1>Hello Node!!!!</h1>\n' when someone reaches http://localhost:3000

// Import the http module to create an HTTP server
const http = require('http');

// Define the hostname and port the server will listen on
const hostname = '127.0.0.1'; // Localhost
const port = 3000;            // Port number

// Create the server
const server = http.createServer((req, res) => {
    // Set the status code to 200 (OK)
    res.statusCode = 200;

    // Set the Content-Type header to text/html
    res.setHeader('Content-Type', 'text/html');

    // Send the response body and end the response
    res.end('<h1>Hello Node!!!!</h1>\n');
});

// Start the server and have it listen on the specified hostname and port
server.listen(port, hostname, () => {
    // Log a message to the console indicating that the server is running
    console.log(`Server running at http://${hostname}:${port}/`);
});
