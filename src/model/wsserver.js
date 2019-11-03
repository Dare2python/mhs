const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws, request) => {
    const ip = request.connection.remoteAddress;
    ws.on('message', (message) => {
        console.log(`${ip}:${message}`)
    });
    ws.send((new Date()).toLocaleTimeString('ru-UA', { hour12: false }));
});
