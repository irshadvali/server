const http = require('http');

// Static JSON data
const jsonData = {
    message: 'Hello, world!',
    data: {
        key: 'value',
        number: 42
    }
};

// Create an HTTP server
const server = http.createServer((req, res) => {
    // Set response headers
    res.writeHead(200, {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    });

    // Send JSON data
    res.end(JSON.stringify(jsonData));
});

// Start the server
const port = 3000;
server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
