const net = require('net');

const server = net.createServer(function(socket) {
    socket.write('Echo server\r\n');
    socket.pipe(socket);
});

server.listen(3443, '127.0.0.1');
// netcat 127.0.0.1 3443
