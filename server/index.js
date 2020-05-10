const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    res.end('Hello from the other side');
});

server.listen(8080, '127.0.0.1', () => {
    console.log('Listening to requests on port 8000');
})