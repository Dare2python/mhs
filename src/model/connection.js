const url = 'ws://localhost:8080';

const Connection = {
    serverLog: "",
    wsConnection: null,
    connect: () => {
        Connection.wsConnection = new WebSocket(url);

        Connection.wsConnection.onopen = () => {
            Connection.wsConnection.send('hey');
        };

        Connection.wsConnection.onerror = (error) => {
            Connection.serverLog += error;
            console.log(`WebSocket error: ${error}`);
        };

        Connection.wsConnection.onmessage = (e) => {
            Connection.serverLog += e.data;
            console.log(e.data);
        };
    },
    send: () => {
        console.log("send");
    }
};

module.exports = Connection;
