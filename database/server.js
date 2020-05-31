const http = require('http');
const app = require('./app');

const port = 27017;

const server = http.createServer(app);

server.listen(port);






