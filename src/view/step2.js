const m = require("mithril");
const connection = require("../model/connection");

const url = 'ws://localhost:8080';
const wsConnection = new WebSocket(url);

wsConnection.onopen = () => {
    wsConnection.send('hey')
};

wsConnection.onerror = (error) => {
    console.log(`WebSocket error: ${error}`)
};

wsConnection.onmessage = (e) => {
    console.log(e.data)
};

module.exports = {
    view: (vnode) =>
        m(".step2",[
            m("button.button", {
                autofocus: true,
                type: "button",
                onclick: () => connection.connect()
            }, "connect"),
            m("button.button", {
                autofocus: true,
                type: "button",
                onclick: () => connection.connect()
            }, "send"),
            m("textarea[placeholder=client]", {rows:23, cols:30, value:connection.connection}),
            m("textarea[placeholder=server]", {rows:23, cols:30, value:connection.connection})
        ])
};
