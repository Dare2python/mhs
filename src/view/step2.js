const m = require("mithril");
const connection = require("../model/connection");



module.exports = {
    view: (vnode) =>
        m(".step2",[
            m("button.button", {
                autofocus: true,
                type: "button",
                onclick: () => connection.connect()
            }, "connect"),
            m("button.button", {
                type: "button",
                onclick: () => connection.send()
            }, "send"),
            m("textarea[placeholder=client]", {rows:23, cols:30, value:connection.clientLog}),
            m("textarea[placeholder=server]", {rows:23, cols:30, value:connection.serverLog})
        ])
};
