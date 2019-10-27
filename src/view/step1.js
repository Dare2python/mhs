const m = require("mithril");
const genKey = require("../model/genkey");

module.exports = {
    view: (vnode) => [
        m("button.genkey", {
            autofocus: true,
            type: "button",
            onclick: () => genKey.generateKey()
        }, "gen key"),
        m("textarea[placeholder=Public Key]", {rows:6, cols:65, value:genKey.publicKey}),
        m("textarea[placeholder=Private Key]", {rows:15, cols:65, value:genKey.privateKey})
        ]
};
