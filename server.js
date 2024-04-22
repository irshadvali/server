const http = require('http');

// Static JSON data
const jsonData = {
    42: {
        message: 'Hello, world!',
        data: {
            key: 'value',
            id: 42,
            name: "ABC"
        }
    },
    43: {
        message: 'Hello, world!',
        data: {
            key: 'value',
            id: 43,
            name: "XYZ"
        }
    }
};

// Create an HTTP server
const server = http.createServer((req, res) => {
    // Set response headers
    res.writeHead(200, {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    });

    // Parse the request URL
    const urlParts = req.url.split('/');
    const id = urlParts[urlParts.length - 1];

    // Check if id exists in jsonData
    if (jsonData[id]) {
        // Send JSON data for the id
        res.end(JSON.stringify(jsonData[id]));
    } else {
        // Send error if id is not found
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Data not found');
    }
});

// Start the server
const port = 3000;
server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
