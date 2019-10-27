const net = require('net');

const PORT = 3443;

const server = net.createServer(function(socket) {
    console.log(`${socket.localAddress}:${socket.localPort}->${socket.remoteAddress}:${socket.remotePort}`);
    socket.write(`${socket.remoteAddress}:${socket.remotePort}\r\n`);

    socket.on('end', () => {
        console.log('client disconnected');
    });

    socket.on('data', function(data){
        console.log(data);
        const textChunk = data.toString('utf8');
        console.log(textChunk);
    });
});

server.on('error', (err) => {
    console.log(err);
});

server.listen(PORT, '0.0.0.0',() => {
    console.log(`server bound to ${PORT}`);
});
// netcat -c -v -x 127.0.0.1 3443
// lsof -i -n -P
// telnet 127.0.0.1 3443
