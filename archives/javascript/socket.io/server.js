var express = require('express');
var app = express();
var http = require('http');
var server = http.createServer(app);
var {Server} = require('socket.io');
var io = new Server(server);

app.get("/", (req, res) => {
    res.sendFile(__dirname+"/client.html");
});
io.on('connection', (socket) => {
    console.log("a user connected");
});
server.listen(3000, () => {
    console.log("listening on port 3000");
});