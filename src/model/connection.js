const url = 'ws://localhost:8080';

// Generate a JSON version of the event.
// compacted just to "interesting" properties
const serializeEvent = function(e) {
    if (e) {
        const o = {
            // bubbles: e.bubbles,
            // cancelBubble: e.cancelBubble,
            // cancelable: e.cancelable,
            // composed: e.composed,
            // currentTarget: e.currentTarget,
            // defaultPrevented: e.defaultPrevented,
            eventPhase: e.eventPhase,
            // explicitOriginalTarget: e.explicitOriginalTarget,
            // isTrusted: e.isTrusted,
            // originalTarget: e.originalTarget,
            // returnValue: e.returnValue,
            // srcElement: e.srcElement,
            target: e.target.url, //
            timeStamp: e.timeStamp,
            type: e.type,
        };
        return o;
    };
};

const Connection = {
    clientLog: "",
    serverLog: "",
    wsConnection: null,
    connect: () => {
        Connection.wsConnection = new WebSocket(url);

        Connection.wsConnection.onopen = () => {
            Connection.wsConnection.send('hey');
        };

        Connection.wsConnection.onerror = (error) => {
            Connection.serverLog += JSON.stringify(
                serializeEvent(error),null,2);
            Connection.serverLog += '\n';
            console.dir(error);
        };

        Connection.wsConnection.onmessage = (e) => {
            Connection.serverLog += e.data + '\n';
            console.dir(e.data);
        };
    },
    send: () => {
        console.log("send");
    }
};

module.exports = Connection;
