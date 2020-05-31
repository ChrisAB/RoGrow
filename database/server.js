const http = require("http");
const dotenv = require("dotenv").config({ path: "./config.env" });
const app = require("./app");

const port = process.env.PORT;

const server = http.createServer(app);

server.listen(port);
